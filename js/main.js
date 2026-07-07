import { MOVES, LEVELS }       from './moves/move-data.js';
import { StickCamRenderer }    from './renderers/stick-cam.js';
import { FpvCamRenderer }      from './renderers/fpv-cam.js';
import { PlaybackEngine }      from './playback.js';
import { InfoPanel }           from './ui/info-panel.js';
import { SidebarFilter }       from './ui/sidebar-filter.js';
import { ShortcutsOverlay }    from './ui/shortcuts.js';
import { PhaseTracker }        from './ui/phase-tracker.js';
import { MobileSheet }         from './ui/mobile-sheet.js';
import { AudioEngine }         from './audio.js';
import { YouTubePlayer }       from './renderers/youtube-player.js';

// ── DOM refs ───────────────────────────────────────────────
const app           = document.getElementById('app');
const introScreen   = document.getElementById('intro-screen');
const introBar      = document.getElementById('intro-bar');
const moveList      = document.getElementById('move-list');
const scrubber      = document.getElementById('scrubber');
const scrubberTicks = document.getElementById('scrubber-ticks');
const scrubberTip   = document.getElementById('scrubber-tooltip');
const timeCurrent   = document.getElementById('time-current');
const timeTotal     = document.getElementById('time-total');
const btnPlay       = document.getElementById('btn-play');
const playIcon      = document.getElementById('play-icon');
const btnSkipStart  = document.getElementById('btn-skip-start');
const btnSkipEnd    = document.getElementById('btn-skip-end');
const btnStepBack   = document.getElementById('btn-step-back');
const btnStepFwd    = document.getElementById('btn-step-fwd');
const btnLoop       = document.getElementById('btn-loop');
const btnStep       = document.getElementById('btn-step');
const btnMute       = document.getElementById('btn-mute');
const btnGhost      = document.getElementById('btn-ghost');
const speedPills    = document.querySelectorAll('.speed-pill');
const themeBtns     = document.querySelectorAll('.theme-btn');
const fpvHeader     = document.getElementById('fpv-header');
const stickHeader   = document.getElementById('stick-header');
const fpvPlaceholder    = document.getElementById('fpv-placeholder');
const stickPlaceholder  = document.getElementById('stick-placeholder');
const moveInfoEl    = document.getElementById('move-info');
const resizeHandle  = document.getElementById('resize-handle');
const mainEl        = document.getElementById('main');
const mobileMoveBtn = document.getElementById('mobile-moves-btn');
const srStatus      = document.getElementById('sr-status');

// ── Renderers ──────────────────────────────────────────────
const stickCanvas   = document.getElementById('stick-canvas');
const stickRenderer = new StickCamRenderer(stickCanvas);

const fpvCanvas     = document.getElementById('fpv-canvas');
const osdCanvas     = document.getElementById('osd-canvas');
const fpvRenderer   = new FpvCamRenderer(fpvCanvas, osdCanvas);
const ytContainer   = document.getElementById('yt-container');
const ytBadge       = document.getElementById('yt-badge');
const fpvBadge      = document.getElementById('fpv-badge');
const ytPlayer      = new YouTubePlayer('yt-player');

let _ytActive      = false;
let _ytBufferPause = false; // engine paused because YT was buffering mid-play
let _ytWaitPlay    = false; // play requested; engine held until YT fires PLAYING
let _ytLastEngineT = -1;    // previous frame's engine time — used to detect loops

// ── UI Modules ─────────────────────────────────────────────
const infoPanel    = new InfoPanel();
const phaseTracker = new PhaseTracker();
// SidebarFilter, ShortcutsOverlay, MobileSheet init after sidebar is built (see bottom)

// ── Audio Engine ───────────────────────────────────────────
const audio     = new AudioEngine();
let   audioInit = false;

function ensureAudio() {
  if (audioInit) return;
  audioInit = true;
  audio.init();
}

// ── Ghost Trail State ──────────────────────────────────────
let ghostEnabled = false;

// ── Playback Engine ────────────────────────────────────────
const engine = new PlaybackEngine(
  // onFrame — called every rAF tick
  (frame) => {
    if (!scrubbing && _ytActive && engine.isPlaying && !_ytBufferPause && !_ytWaitPlay) {
      const ytState = ytPlayer.getState();
      if (ytState === 1 /* PLAYING */) {
        const ytTime = ytPlayer.currentTime();
        if (ytTime !== null) {
          const prevT = _ytLastEngineT;
          _ytLastEngineT = frame.t;

          // Detect engine loop: engine wrapped t→0 but YT kept advancing.
          // Seek YT back instead of letting drift-correction undo the loop.
          if (prevT >= 0 && prevT - frame.t > engine.duration * 0.4) {
            ytPlayer.seek(frame.t);
          } else if (Math.abs(ytTime - frame.t) > 0.06) {
            // Drift: pull engine to match YT's authoritative clock
            engine.seek(Math.max(0, ytTime));
            return;
          }
        }
      }
    }
    stickRenderer.render(frame);
    fpvRenderer.render(frame, !_ytActive);
    phaseTracker.update(frame.t);
    syncScrubber();
    if (!_ytActive) audio.update(frame.throttle ?? 0, fpvRenderer.sim?.speed ?? 0);
    audio.resume();
  },
  // onEnd — called when engine reaches durationSec (loop=false path)
  () => {
    updatePlayBtn();
    pulseScrubberEnd();
    audio.silence();
    if (_ytActive) ytPlayer.pause();
    _ytLastEngineT = -1;
    if (ghostEnabled) {
      stickRenderer.commitRecording();
    }
  }
);

// A11Y-01 / UX-01: show badge when YT can't embed the video
ytPlayer.onError(() => {
  if (!_ytActive) return;
  ytBadge.textContent = '⚠ VIDEO N/A';
});

// ── YouTube state handler ──────────────────────────────────
// YT.PlayerState: -1=unstarted, 0=ended, 1=playing, 2=paused, 3=buffering, 5=cued
ytPlayer.onStateChange((state) => {
  if (!_ytActive) return;

  if (state === 1 /* PLAYING */) {
    ytBadge.textContent = '▶ HEADMAZTA';

    if (_ytWaitPlay || _ytBufferPause) {
      // YT confirmed playing — sync engine to YT's exact time and start it.
      _ytWaitPlay    = false;
      _ytBufferPause = false;
      _ytLastEngineT = -1;
      const ytTime = ytPlayer.currentTime();
      engine.seek(Math.max(0, ytTime ?? 0));
      engine.play();
      updatePlayBtn();
      if (ghostEnabled) stickRenderer.startRecording();
    } else if (!engine.isPlaying) {
      // YT started playing unexpectedly (e.g. race with pause) — stop it.
      ytPlayer.pause();
    }

  } else if (state === 3 /* BUFFERING */) {
    ytBadge.textContent = '⏳ LOADING…';
    if (engine.isPlaying) {
      engine.pause();
      audio.silence();
      updatePlayBtn();
      _ytBufferPause = true;
    }

  } else if (state === 0 /* ENDED */) {
    ytBadge.textContent = '▶ HEADMAZTA';
    if (engine.isPlaying && engine.isLooping) {
      // Loop mode: seek YT back to the start of the move clip and replay.
      // The engine already looped (handled in _tick); now sync YT to it.
      _ytLastEngineT = -1;
      ytPlayer.seek(0);
      ytPlayer.play(); // PLAYING event will resync engine if needed
    } else {
      _ytWaitPlay    = false;
      _ytBufferPause = false;
      _ytLastEngineT = -1;
      if (engine.isPlaying) {
        engine.pause();
        audio.silence();
        updatePlayBtn();
      }
    }
  }
});

// ── Helpers ────────────────────────────────────────────────
function fmtTime(sec) {
  const m  = Math.floor(sec / 60);
  const s  = Math.floor(sec % 60);
  const ds = Math.floor((sec % 1) * 10);
  return `${m}:${String(s).padStart(2, '0')}.${ds}`;
}

function updatePlayBtn() {
  playIcon.innerHTML = engine.isPlaying
    ? '<use href="#icon-pause"/>'
    : '<use href="#icon-play"/>';
  btnPlay.setAttribute('aria-label', engine.isPlaying ? 'I-pause' : 'I-play');
  // A11Y-06: announce state to screen readers
  if (srStatus) srStatus.textContent = engine.isPlaying ? 'Nagpe-play' : 'Naka-pause';
}

function syncScrubber() {
  const pct   = engine.fraction * 100;
  const raw   = Math.round(engine.fraction * 1000);
  scrubber.value = raw;
  scrubber.style.setProperty('--scrubber-pct', `${pct}%`);
  // aria-valuenow must match the same scale as the native min/max (0–1000)
  scrubber.setAttribute('aria-valuenow',   raw);
  scrubber.setAttribute('aria-valuetext',  `${engine.time.toFixed(1)} seconds`);
  timeCurrent.textContent = fmtTime(engine.time);
}

function pulseScrubberEnd() {
  scrubber.classList.add('scrubber-end-pulse');
  setTimeout(() => scrubber.classList.remove('scrubber-end-pulse'), 700);
}

// ── Sidebar Build ──────────────────────────────────────────
function buildSidebar() {
  const byLevel = {};
  for (const move of MOVES) {
    if (!byLevel[move.level]) byLevel[move.level] = [];
    byLevel[move.level].push(move);
  }

  const levelOrder = ['beginner', 'intermediate', 'advanced', 'pro'];
  for (const level of levelOrder) {
    if (!byLevel[level]) continue;
    const group = document.createElement('div');
    group.className  = 'category-group';
    group.dataset.level = level;

    const header = document.createElement('div');
    header.className = 'category-label';
    header.innerHTML = `
      <div class="category-dot"></div>
      <span>${LEVELS[level].label}</span>
      <span class="category-count">${byLevel[level].length}</span>`;
    group.appendChild(header);

    for (const move of byLevel[level]) {
      group.appendChild(buildMoveCard(move));
    }
    moveList.appendChild(group);
  }
}

function buildMoveCard(move) {
  const card = document.createElement('div');
  card.className = 'move-card';
  card.dataset.id = move.id;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${move.name} — ${LEVELS[move.level].label}`);

  const dots = Array.from({ length: 5 }, (_, i) =>
    `<div class="diff-dot ${i < move.difficulty ? 'filled' : ''}"></div>`
  ).join('');

  card.innerHTML = `
    <div class="move-card-bar"></div>
    <div class="move-card-body">
      <div class="move-card-top">
        <div class="move-card-name">${move.name}</div>
        <div class="move-card-meta">
          <div class="diff-dots" aria-label="Difficulty ${move.difficulty} sa 5">${dots}</div>
          <div class="move-card-duration">${move.durationSec}s</div>
        </div>
      </div>
      <div class="move-card-desc">${move.description}</div>
    </div>
    <div class="move-card-arrow" aria-hidden="true">›</div>`;

  card.addEventListener('click',   () => loadMove(move));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadMove(move); }
  });
  return card;
}

// ── Move Load ──────────────────────────────────────────────
function loadMove(move) {
  engine.pause();

  // Sidebar active state
  document.querySelectorAll('.move-card').forEach(c => c.classList.remove('active'));
  const activeCard = document.querySelector(`.move-card[data-id="${move.id}"]`);
  if (activeCard) activeCard.classList.add('active');

  // Reset renderers for fresh start (BUG-06: use public API)
  stickRenderer.reset();
  fpvRenderer.resetSim();

  // UX-05: loop is per-move by convention — don't carry it over between moves
  engine.setLooping(false);
  btnLoop.classList.remove('active');
  btnLoop.setAttribute('aria-pressed', 'false');

  // Switch between YouTube video and canvas FPV renderer
  _ytActive      = !!move.youtubeId;
  _ytBufferPause = false;
  _ytWaitPlay    = false;
  _ytLastEngineT = -1;
  fpvCanvas.style.display    = _ytActive ? 'none' : '';
  ytContainer.style.display  = _ytActive ? '' : 'none';
  ytBadge.style.display      = _ytActive ? '' : 'none';
  ytBadge.textContent        = '▶ HEADMAZTA';
  fpvBadge.style.display     = _ytActive ? 'none' : '';
  if (_ytActive) {
    ytBadge.textContent = '⏳ LOADING…';
    ytPlayer.load(move.youtubeId, move.youtubeStart ?? 0);
    ytPlayer.seek(0);
  }

  // Load into engine (seeks to 0 and emits first frame)
  engine.load(move);
  phaseTracker.load(move);
  audio.silence();

  updatePlayBtn();

  // Info panel — delegated to InfoPanel module
  const levelLabel = LEVELS[move.level]?.label ?? move.level;
  infoPanel.load(move, levelLabel);
  timeTotal.textContent = fmtTime(move.durationSec);

  // Auto-scroll active card into view
  activeCard?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Sync mobile sheet active state
  window._mobileSheet?.markActive(move.id);

  // Scrubber ticks
  buildTicks(move);
  syncScrubber();

  // Show canvases
  fpvPlaceholder.style.display   = 'none';
  stickPlaceholder.style.display = 'none';
  fpvHeader.classList.add('active');
  stickHeader.classList.add('active');

  // Animate canvases in
  const fpvWrap   = document.getElementById('fpv-wrap');
  const stickWrap = document.getElementById('stick-wrap');
  fpvWrap.classList.remove('canvas-enter');
  stickWrap.classList.remove('canvas-enter');
  void fpvWrap.offsetWidth; // force reflow
  fpvWrap.classList.add('canvas-enter');
  stickWrap.classList.add('canvas-enter');
}

// ── Scrubber Ticks & Phase Labels ─────────────────────────
function buildTicks(move) {
  scrubberTicks.innerHTML = '';

  // Keyframe ticks
  for (const kf of move.keyframes) {
    const pct  = (kf.t / move.durationSec) * 100;
    const tick = document.createElement('div');
    tick.className  = 'scrubber-tick';
    tick.style.left = `${pct}%`;
    tick.title      = `${kf.t.toFixed(1)}s`;
    scrubberTicks.appendChild(tick);
  }

  // Phase labels
  if (move.phases) {
    for (const phase of move.phases) {
      const pct   = (phase.t / move.durationSec) * 100;
      const label = document.createElement('div');
      label.className  = 'scrubber-phase';
      label.style.left = `${pct}%`;
      label.textContent = phase.label;
      label.title       = `${phase.label} — ${phase.t.toFixed(1)}s`;
      scrubberTicks.appendChild(label);
    }
  }
}

// ── Control Events ─────────────────────────────────────────
btnPlay.addEventListener('click', () => {
  if (!engine.move) return;
  ensureAudio();

  if (_ytActive) {
    if (engine.isPlaying) {
      // Pause both
      engine.pause();
      ytPlayer.pause();
      audio.silence();
      _ytWaitPlay    = false;
      _ytBufferPause = false;
      _ytLastEngineT = -1;
      updatePlayBtn();
    } else {
      // Request play — engine starts once YT fires PLAYING
      _ytWaitPlay = true;
      ytPlayer.play(engine.time);
      // If YT is already in PLAYING state it won't fire a new event.
      // Detect that immediately and start the engine ourselves.
      if (ytPlayer.getState() === 1) {
        _ytWaitPlay    = false;
        _ytLastEngineT = -1;
        const ytTime = ytPlayer.currentTime();
        engine.seek(Math.max(0, ytTime ?? engine.time));
        engine.play();
        updatePlayBtn();
        if (ghostEnabled) stickRenderer.startRecording();
      }
      // Otherwise updatePlayBtn is called from the state handler
    }
  } else {
    engine.toggle();
    updatePlayBtn();
    if (!engine.isPlaying) {
      audio.silence();
    } else if (ghostEnabled) {
      stickRenderer.startRecording();
    }
  }

  btnPlay.classList.remove('ripple');
  void btnPlay.offsetWidth;
  btnPlay.classList.add('ripple');
});

btnMute.addEventListener('click', () => {
  ensureAudio();
  const muted = audio.toggleMute();
  btnMute.classList.toggle('active', muted);
  btnMute.setAttribute('aria-pressed', String(muted));
  btnMute.querySelector('use').setAttribute('href', muted ? '#icon-mute' : '#icon-volume');
});

btnGhost.addEventListener('click', () => {
  ghostEnabled = !ghostEnabled;
  stickRenderer.setGhostEnabled(ghostEnabled);
  btnGhost.classList.toggle('active', ghostEnabled);
  btnGhost.setAttribute('aria-pressed', String(ghostEnabled));
  if (ghostEnabled && engine.isPlaying) {
    stickRenderer.startRecording();
  }
});

btnSkipStart.addEventListener('click', () => {
  engine.skipToStart();
  stickRenderer.clearGhost(); // UX-02: stale ghost trail after reset
});
btnSkipEnd.addEventListener('click',   () => engine.skipToEnd());
btnStepBack.addEventListener('click',  () => engine.stepBack());
btnStepFwd.addEventListener('click',   () => engine.stepForward());

btnLoop.addEventListener('click', () => {
  const on = !btnLoop.classList.contains('active');
  engine.setLooping(on);
  btnLoop.classList.toggle('active', on);
  btnLoop.setAttribute('aria-pressed', String(on));
});

btnStep.addEventListener('click', () => {
  const on = !btnStep.classList.contains('active');
  engine.setStepMode(on);
  btnStep.classList.toggle('active', on);
  btnStep.setAttribute('aria-pressed', String(on));
  document.body.classList.toggle('step-mode', on);
});

// Speed pills
speedPills.forEach(pill => {
  pill.addEventListener('click', () => {
    const spd = parseFloat(pill.dataset.speed);
    engine.setSpeed(spd);
    if (_ytActive) ytPlayer.setRate(spd);
    speedPills.forEach(p => {
      p.classList.toggle('active', p === pill);
      p.setAttribute('aria-pressed', String(p === pill));
    });
    pill.classList.add('pop');
    pill.addEventListener('animationend', () => pill.classList.remove('pop'), { once: true });
  });
});

// Scrubber drag
let scrubbing = false;

scrubber.addEventListener('mousedown', () => {
  scrubbing = true;
  engine.pause();
  updatePlayBtn();
  if (_ytActive) ytPlayer.pause();
});

scrubber.addEventListener('input', () => {
  if (!engine.move) return;
  engine.seekFraction(scrubber.value / 1000);
  if (_ytActive) ytPlayer.seek(engine.time);
});

document.addEventListener('mouseup', () => { scrubbing = false; });

// Scrubber hover tooltip
scrubber.addEventListener('mousemove', e => {
  if (!engine.move) return;
  const rect = scrubber.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  const sec  = pct * engine.duration;
  scrubberTip.textContent = fmtTime(sec);
  scrubberTip.style.left  = `${pct * 100}%`;
});

// Theme switcher — refresh cached theme colors after switch
themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.documentElement.dataset.theme = btn.dataset.theme;
    themeBtns.forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-pressed', String(b === btn));
    });
    stickRenderer.cacheTheme(); // PERF-01: update cached bg color
  });
});

// ── Keyboard Shortcuts ─────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  ensureAudio();
  switch (e.key) {
    case ' ':
      e.preventDefault();
      btnPlay.click();
      break;
    case 'ArrowLeft':
      if (document.activeElement !== resizeHandle) {
        e.preventDefault();
        engine.stepBack();
      }
      break;
    case 'ArrowRight':
      if (document.activeElement !== resizeHandle) {
        e.preventDefault();
        engine.stepForward();
      }
      break;
    case '[':
    case '{': {
      const speeds = ['0.25', '0.5', '1', '2'];
      const cur    = speeds.indexOf(String(engine._speed));
      if (cur > 0) document.querySelector(`[data-speed="${speeds[cur - 1]}"]`).click();
      break;
    }
    case ']':
    case '}': {
      const speeds = ['0.25', '0.5', '1', '2'];
      const cur    = speeds.indexOf(String(engine._speed));
      if (cur < speeds.length - 1) document.querySelector(`[data-speed="${speeds[cur + 1]}"]`).click();
      break;
    }
    case 'l':
    case 'L':
      btnLoop.click();
      break;
    case 'Home':
      engine.skipToStart();
      break;
    case 'End':
      engine.skipToEnd();
      break;
    case 'm':
    case 'M':
      btnMute.click();
      break;
    case 'g':
    case 'G':
      btnGhost.click();
      break;
    case '/': {
      e.preventDefault();
      const searchInput = document.getElementById('sidebar-search');
      if (searchInput) searchInput.focus();
      break;
    }
    case 'j':
    case 'J':
      e.preventDefault();
      navigateMove(1);
      break;
    case 'k':
    case 'K':
      e.preventDefault();
      navigateMove(-1);
      break;
  }
});

// Move to the next/previous move card among those currently visible
// (respects the active search/difficulty filter), wrapping at the ends.
function navigateMove(direction) {
  const cards = Array.from(document.querySelectorAll('.move-card'))
    .filter(c => c.style.display !== 'none');
  if (!cards.length) return;
  const activeIdx = cards.findIndex(c => c.classList.contains('active'));
  const nextIdx   = activeIdx === -1 ? 0 : (activeIdx + direction + cards.length) % cards.length;
  const move = MOVES.find(m => m.id === cards[nextIdx].dataset.id);
  if (move) loadMove(move);
}

// ── Resize Handle ──────────────────────────────────────────
(function initResize() {
  let dragging = false;

  resizeHandle.addEventListener('mousedown', e => {
    dragging = true;
    resizeHandle.classList.add('dragging');
    document.body.style.cursor     = 'col-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
  });

  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    const rect = mainEl.getBoundingClientRect();
    const pct  = Math.max(20, Math.min(80, (e.clientX - rect.left) / rect.width * 100));
    const hPct = (4 / rect.width) * 100;
    mainEl.style.gridTemplateColumns = `${pct}% ${hPct}% 1fr`;
    // Notify renderers
    stickRenderer.resize();
    fpvRenderer.resize();
  });

  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    resizeHandle.classList.remove('dragging');
    document.body.style.cursor     = '';
    document.body.style.userSelect = '';
  });

  resizeHandle.addEventListener('keydown', e => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    const rect   = mainEl.getBoundingClientRect();
    const cols   = getComputedStyle(mainEl).gridTemplateColumns.split(' ');
    const curPct = (parseFloat(cols[0]) / rect.width) * 100;
    const newPct = Math.max(20, Math.min(80, curPct + (e.key === 'ArrowLeft' ? -5 : 5)));
    mainEl.style.gridTemplateColumns = `${newPct}% 4px 1fr`;
    stickRenderer.resize();
    fpvRenderer.resize();
  });
})();

// ── Canvas Resize Observer ─────────────────────────────────
// PERF-03: use refs cached at the top of the file instead of re-querying DOM
const ro = new ResizeObserver(() => {
  const canvases = _ytActive
    ? [osdCanvas, stickCanvas]
    : [fpvCanvas, osdCanvas, stickCanvas];
  for (const canvas of canvases) {
    canvas.width  = canvas.offsetWidth  * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;
  }
  stickRenderer.resize();
  if (!_ytActive) fpvRenderer.resize();
  if (engine.move) engine.seek(engine.time);
});

ro.observe(document.getElementById('fpv-wrap'));
ro.observe(document.getElementById('stick-wrap'));

// ── Mobile Move Button (wired by MobileSheet) ─────────────

// ── Intro ──────────────────────────────────────────────────
function dismissIntro() {
  introScreen.style.animation = 'none'; // cancel forwards fill so opacity transition can work
  introScreen.classList.add('hiding');
  app.hidden = false;
  app.style.animation = 'fade-in 0.4s cubic-bezier(0.16,1,0.3,1) both';
  setTimeout(() => introScreen.remove(), 450);
  try { loadMove(MOVES[0]); } catch (e) { console.error('loadMove error:', e); }
}

requestAnimationFrame(() => { introBar.style.width = '100%'; });
setTimeout(dismissIntro, 1400);

// Cache theme-dependent colors in renderers
stickRenderer.cacheTheme();

// Build sidebar first so filter + sheet can reference its cards
buildSidebar();

// Show total move count in sidebar title
const sidebarTitle = document.querySelector('.sidebar-title');
if (sidebarTitle) sidebarTitle.textContent = `FREESTYLE · ${MOVES.length}`;

// Init UI modules that depend on sidebar DOM being ready
new SidebarFilter(document.getElementById('move-list'));
new ShortcutsOverlay();
window._mobileSheet = new MobileSheet(id => {
  const move = MOVES.find(m => m.id === id);
  if (move) loadMove(move);
});
