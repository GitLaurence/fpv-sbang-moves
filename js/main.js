import { MOVES, LEVELS }       from './moves/move-data.js';
import { StickCamRenderer }    from './renderers/stick-cam.js';
import { FpvCamRenderer }      from './renderers/fpv-cam.js';
import { PlaybackEngine }      from './playback.js';

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
const speedPills    = document.querySelectorAll('.speed-pill');
const themeBtns     = document.querySelectorAll('.theme-btn');
const fpvHeader     = document.getElementById('fpv-header');
const stickHeader   = document.getElementById('stick-header');
const fpvPlaceholder    = document.getElementById('fpv-placeholder');
const stickPlaceholder  = document.getElementById('stick-placeholder');
const infoPanel     = document.getElementById('move-info');
const infoName      = document.getElementById('info-name');
const infoDesc      = document.getElementById('info-desc');
const infoDots      = document.getElementById('info-dots');
const infoDuration  = document.getElementById('info-duration');
const infoTips      = document.getElementById('info-tips');
const resizeHandle  = document.getElementById('resize-handle');
const mainEl        = document.getElementById('main');
const mobileMoveBtn = document.getElementById('mobile-moves-btn');

// ── Renderers ──────────────────────────────────────────────
const stickCanvas   = document.getElementById('stick-canvas');
const stickRenderer = new StickCamRenderer(stickCanvas);

const fpvCanvas     = document.getElementById('fpv-canvas');
const osdCanvas     = document.getElementById('osd-canvas');
const fpvRenderer   = new FpvCamRenderer(fpvCanvas, osdCanvas);

// ── Playback Engine ────────────────────────────────────────
const engine = new PlaybackEngine(
  // onFrame — called every rAF tick
  (frame) => {
    stickRenderer.render(frame);
    fpvRenderer.render(frame);
    syncScrubber();
  },
  // onEnd — reached the end of a move
  () => {
    updatePlayBtn();
    pulseScrubberEnd();
  }
);

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
}

function syncScrubber() {
  const pct = engine.fraction * 100;
  scrubber.value = Math.round(engine.fraction * 1000);
  scrubber.style.setProperty('--scrubber-pct', `${pct}%`);
  scrubber.setAttribute('aria-valuenow',   Math.round(pct));
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
      <span>${LEVELS[level].label}</span>`;
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

  // Reset renderers for fresh start
  stickRenderer._leftTrail  = [];
  stickRenderer._rightTrail = [];
  stickRenderer._smooth     = { throttle: 0, yaw: 0, pitch: 0, roll: 0 };
  fpvRenderer.resetSim();

  // Load into engine (seeks to 0 and emits first frame)
  engine.load(move);

  updatePlayBtn();

  // Info panel
  infoName.textContent     = move.name;
  infoDesc.textContent     = move.description;
  infoDuration.textContent = `${move.durationSec}s`;
  timeTotal.textContent    = fmtTime(move.durationSec);

  const levelLabel = LEVELS[move.level]?.label ?? move.level;
  infoDots.innerHTML = Array.from({ length: 5 }, (_, i) =>
    `<div class="diff-dot ${i < move.difficulty ? 'filled' : ''}"></div>`
  ).join('') +
  `<span style="margin-left:8px;font-family:var(--font-osd);font-size:10px;color:var(--text-secondary)">${levelLabel}</span>`;

  infoTips.innerHTML = move.tips.map(tip => `<span>${tip}</span>`).join('');
  infoPanel.classList.add('visible');

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

// ── Scrubber Ticks ─────────────────────────────────────────
function buildTicks(move) {
  scrubberTicks.innerHTML = '';
  for (const kf of move.keyframes) {
    const pct  = (kf.t / move.durationSec) * 100;
    const tick = document.createElement('div');
    tick.className  = 'scrubber-tick';
    tick.style.left = `${pct}%`;
    tick.title      = `${kf.t.toFixed(1)}s`;
    scrubberTicks.appendChild(tick);
  }
}

// ── Control Events ─────────────────────────────────────────
btnPlay.addEventListener('click', () => {
  if (!engine.move) return;
  engine.toggle();
  updatePlayBtn();

  btnPlay.classList.remove('ripple');
  void btnPlay.offsetWidth;
  btnPlay.classList.add('ripple');
});

btnSkipStart.addEventListener('click', () => engine.skipToStart());
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
});

// Speed pills
speedPills.forEach(pill => {
  pill.addEventListener('click', () => {
    engine.setSpeed(parseFloat(pill.dataset.speed));
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
});

scrubber.addEventListener('input', () => {
  if (!engine.move) return;
  engine.seekFraction(scrubber.value / 1000);
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

// Theme switcher
themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.documentElement.dataset.theme = btn.dataset.theme;
    themeBtns.forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-pressed', String(b === btn));
    });
  });
});

// ── Keyboard Shortcuts ─────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
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
  }
});

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
    const style  = getComputedStyle(mainEl);
    const curPct = parseFloat(style.gridTemplateColumns);
    const step   = 5;
    if (e.key === 'ArrowLeft')
      mainEl.style.gridTemplateColumns = `${Math.max(20, curPct - step)}% 4px 1fr`;
    if (e.key === 'ArrowRight')
      mainEl.style.gridTemplateColumns = `${Math.min(80, curPct + step)}% 4px 1fr`;
  });
})();

// ── Canvas Resize Observer ─────────────────────────────────
const ro = new ResizeObserver(() => {
  ['fpv-canvas', 'osd-canvas', 'stick-canvas'].forEach(id => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    canvas.width  = canvas.offsetWidth  * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;
  });
  stickRenderer.resize();
  fpvRenderer.resize();
  if (engine.move) engine.seek(engine.time);
});

ro.observe(document.getElementById('fpv-wrap'));
ro.observe(document.getElementById('stick-wrap'));

// ── Mobile Move Button ─────────────────────────────────────
mobileMoveBtn.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = sidebar.style.display === 'flex' ? 'none' : 'flex';
});

// ── Intro ──────────────────────────────────────────────────
function dismissIntro() {
  introScreen.classList.add('hiding');
  app.hidden = false;
  app.style.animation = 'fade-in 0.4s cubic-bezier(0.16,1,0.3,1) both';
  setTimeout(() => introScreen.remove(), 450);
  loadMove(MOVES[0]);
}

requestAnimationFrame(() => { introBar.style.width = '100%'; });
setTimeout(dismissIntro, 1400);

buildSidebar();
