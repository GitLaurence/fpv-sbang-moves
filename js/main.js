import { MOVES, LEVELS } from './moves/move-data.js';
import { StickCamRenderer } from './renderers/stick-cam.js';
import { FpvCamRenderer }  from './renderers/fpv-cam.js';

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
const main          = document.getElementById('main');
const mobileMoveBtn = document.getElementById('mobile-moves-btn');

// ── Renderers ──────────────────────────────────────────────
const stickCanvas   = document.getElementById('stick-canvas');
const stickRenderer = new StickCamRenderer(stickCanvas);

const fpvCanvas   = document.getElementById('fpv-canvas');
const osdCanvas   = document.getElementById('osd-canvas');
const fpvRenderer = new FpvCamRenderer(fpvCanvas, osdCanvas);

// ── State ──────────────────────────────────────────────────
let currentMove   = null;
let playing       = false;
let looping       = false;
let stepMode      = false;
let playbackSpeed = 1;
let currentTime   = 0; // seconds
let lastRaf       = null;
let rafId         = null;

// ── Helpers ────────────────────────────────────────────────
function fmtTime(sec) {
  const m  = Math.floor(sec / 60);
  const s  = Math.floor(sec % 60);
  const ds = Math.floor((sec % 1) * 10);
  return `${m}:${String(s).padStart(2, '0')}.${ds}`;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
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
    group.className = 'category-group';
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

  card.addEventListener('click', () => loadMove(move));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadMove(move); }
  });

  return card;
}

// ── Move Load ──────────────────────────────────────────────
function loadMove(move) {
  // Update sidebar active state
  document.querySelectorAll('.move-card').forEach(c => c.classList.remove('active'));
  const activeCard = document.querySelector(`.move-card[data-id="${move.id}"]`);
  if (activeCard) activeCard.classList.add('active');

  currentMove = move;
  currentTime = 0;
  playing     = false;
  updatePlayIcon();

  // Clear stick cam trail so previous move doesn't bleed in
  stickRenderer._leftTrail  = [];
  stickRenderer._rightTrail = [];
  stickRenderer._smooth     = { throttle: 0, yaw: 0, pitch: 0, roll: 0 };

  // Reset FPV sim state for fresh start
  fpvRenderer.resetSim();

  // Update info panel
  infoName.textContent     = move.name;
  infoDesc.textContent     = move.description;
  infoDuration.textContent = `${move.durationSec}s`;

  const levelLabel = LEVELS[move.level]?.label ?? move.level;
  infoDots.innerHTML = Array.from({ length: 5 }, (_, i) =>
    `<div class="diff-dot ${i < move.difficulty ? 'filled' : ''}"></div>`
  ).join('') + `<span style="margin-left:8px;font-family:var(--font-osd);font-size:10px;color:var(--text-secondary)">${levelLabel}</span>`;

  infoTips.innerHTML = move.tips
    .map(tip => `<span>${tip}</span>`)
    .join('');

  infoPanel.classList.add('visible');

  // Scrubber ticks
  buildTicks(move);

  // Time display
  timeTotal.textContent = fmtTime(move.durationSec);
  updateScrubber();

  // Show canvases, hide placeholders
  fpvPlaceholder.style.display   = 'none';
  stickPlaceholder.style.display = 'none';
  fpvHeader.classList.add('active');
  stickHeader.classList.add('active');

  // Animate canvases in
  const fpvWrap   = document.getElementById('fpv-wrap');
  const stickWrap = document.getElementById('stick-wrap');
  fpvWrap.classList.remove('canvas-enter');
  stickWrap.classList.remove('canvas-enter');
  void fpvWrap.offsetWidth;
  fpvWrap.classList.add('canvas-enter');
  stickWrap.classList.add('canvas-enter');

  // Dispatch event for renderers (Phases 2–3 will listen)
  window.dispatchEvent(new CustomEvent('move-loaded', { detail: move }));
  renderFrame(currentTime);
}

// ── Scrubber Ticks ─────────────────────────────────────────
function buildTicks(move) {
  scrubberTicks.innerHTML = '';
  for (const kf of move.keyframes) {
    const pct = (kf.t / move.durationSec) * 100;
    const tick = document.createElement('div');
    tick.className = 'scrubber-tick';
    tick.style.left = `${pct}%`;
    scrubberTicks.appendChild(tick);
  }
}

// ── Scrubber Update ────────────────────────────────────────
function updateScrubber() {
  if (!currentMove) return;
  const pct = (currentTime / currentMove.durationSec) * 100;
  scrubber.value = Math.round((currentTime / currentMove.durationSec) * 1000);
  scrubber.style.setProperty('--scrubber-pct', `${pct}%`);
  scrubber.setAttribute('aria-valuenow', Math.round(pct));
  scrubber.setAttribute('aria-valuetext', `${currentTime.toFixed(1)} seconds`);
  timeCurrent.textContent = fmtTime(currentTime);
}

// ── Interpolated Frame ─────────────────────────────────────
function interpolateFrame(move, t) {
  const kfs = move.keyframes;
  if (t <= kfs[0].t) return { ...kfs[0] };
  if (t >= kfs[kfs.length - 1].t) return { ...kfs[kfs.length - 1] };

  for (let i = 0; i < kfs.length - 1; i++) {
    const a = kfs[i], b = kfs[i + 1];
    if (t >= a.t && t <= b.t) {
      const u = (t - a.t) / (b.t - a.t);
      return {
        t,
        throttle: lerp(a.throttle, b.throttle, u),
        yaw:      lerp(a.yaw,      b.yaw,      u),
        pitch:    lerp(a.pitch,    b.pitch,    u),
        roll:     lerp(a.roll,     b.roll,     u),
      };
    }
  }
  return { ...kfs[kfs.length - 1] };
}

// ── Render Frame ───────────────────────────────────────────
function renderFrame(t) {
  if (!currentMove) return;
  const frame = interpolateFrame(currentMove, t);
  stickRenderer.render(frame);
  fpvRenderer.render(frame);
  window.dispatchEvent(new CustomEvent('render-frame', { detail: frame }));
  updateScrubber();
}

// ── Playback Loop ──────────────────────────────────────────
function startLoop() {
  lastRaf = performance.now();
  function tick(now) {
    const dt = (now - lastRaf) / 1000 * playbackSpeed;
    lastRaf = now;

    currentTime = clamp(currentTime + dt, 0, currentMove.durationSec);
    renderFrame(currentTime);

    if (currentTime >= currentMove.durationSec) {
      if (looping) {
        currentTime = 0;
      } else {
        playing = false;
        updatePlayIcon();
        scrubber.classList.add('scrubber-end-pulse');
        setTimeout(() => scrubber.classList.remove('scrubber-end-pulse'), 700);
        return;
      }
    }
    rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);
}

function stopLoop() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
}

function updatePlayIcon() {
  playIcon.innerHTML = playing
    ? '<use href="#icon-pause"/>'
    : '<use href="#icon-play"/>';
  btnPlay.setAttribute('aria-label', playing ? 'I-pause' : 'I-play');
}

// ── Control Events ─────────────────────────────────────────
btnPlay.addEventListener('click', () => {
  if (!currentMove) return;
  playing = !playing;
  updatePlayIcon();

  // Ripple
  btnPlay.classList.remove('ripple');
  void btnPlay.offsetWidth;
  btnPlay.classList.add('ripple');

  if (playing) {
    if (currentTime >= currentMove.durationSec) currentTime = 0;
    startLoop();
  } else {
    stopLoop();
  }
});

btnSkipStart.addEventListener('click', () => {
  currentTime = 0;
  renderFrame(currentTime);
});

btnSkipEnd.addEventListener('click', () => {
  if (!currentMove) return;
  currentTime = currentMove.durationSec;
  renderFrame(currentTime);
});

btnStepBack.addEventListener('click', () => {
  if (!currentMove) return;
  currentTime = clamp(currentTime - (1 / 30), 0, currentMove.durationSec);
  renderFrame(currentTime);
});

btnStepFwd.addEventListener('click', () => {
  if (!currentMove) return;
  currentTime = clamp(currentTime + (1 / 30), 0, currentMove.durationSec);
  renderFrame(currentTime);
});

btnLoop.addEventListener('click', () => {
  looping = !looping;
  btnLoop.classList.toggle('active', looping);
  btnLoop.setAttribute('aria-pressed', String(looping));
});

btnStep.addEventListener('click', () => {
  stepMode = !stepMode;
  btnStep.classList.toggle('active', stepMode);
  btnStep.setAttribute('aria-pressed', String(stepMode));
});

// Speed pills
speedPills.forEach(pill => {
  pill.addEventListener('click', () => {
    playbackSpeed = parseFloat(pill.dataset.speed);
    speedPills.forEach(p => {
      p.classList.toggle('active', p === pill);
      p.setAttribute('aria-pressed', String(p === pill));
    });
    pill.classList.add('pop');
    pill.addEventListener('animationend', () => pill.classList.remove('pop'), { once: true });
  });
});

// Scrubber interaction
scrubber.addEventListener('input', () => {
  if (!currentMove) return;
  stopLoop();
  playing = false;
  updatePlayIcon();
  currentTime = (scrubber.value / 1000) * currentMove.durationSec;
  renderFrame(currentTime);
});

scrubber.addEventListener('change', () => {
  // nothing extra needed
});

// Scrubber tooltip on hover
scrubber.addEventListener('mousemove', e => {
  if (!currentMove) return;
  const rect = scrubber.getBoundingClientRect();
  const pct  = clamp((e.clientX - rect.left) / rect.width, 0, 1);
  const sec  = pct * currentMove.durationSec;
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

// ── Resize Handle ──────────────────────────────────────────
(function initResize() {
  let dragging = false;
  let startX   = 0;
  let startCols = null;

  resizeHandle.addEventListener('mousedown', e => {
    dragging   = true;
    startX     = e.clientX;
    resizeHandle.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const style = getComputedStyle(main);
    startCols = style.gridTemplateColumns;
    e.preventDefault();
  });

  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    const mainRect = main.getBoundingClientRect();
    const pct = clamp((e.clientX - mainRect.left) / mainRect.width * 100, 20, 80);
    const handlePct = (4 / mainRect.width) * 100;
    main.style.gridTemplateColumns = `${pct}% ${handlePct}% 1fr`;
  });

  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    resizeHandle.classList.remove('dragging');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  });

  // Keyboard resize
  resizeHandle.addEventListener('keydown', e => {
    const mainRect = main.getBoundingClientRect();
    const style    = getComputedStyle(main);
    const cols     = style.gridTemplateColumns.split(' ');
    const curPct   = parseFloat(cols[0]);
    const step     = 5;
    if (e.key === 'ArrowLeft')  main.style.gridTemplateColumns = `${clamp(curPct - step, 20, 80)}% 4px 1fr`;
    if (e.key === 'ArrowRight') main.style.gridTemplateColumns = `${clamp(curPct + step, 20, 80)}% 4px 1fr`;
  });
})();

// ── Keyboard Shortcuts ─────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  switch (e.key) {
    case ' ':
      e.preventDefault();
      btnPlay.click();
      break;
    case 'ArrowLeft':
      if (!e.target.closest('#resize-handle')) btnStepBack.click();
      break;
    case 'ArrowRight':
      if (!e.target.closest('#resize-handle')) btnStepFwd.click();
      break;
    case '[':
    case '{': {
      const speeds  = ['0.25', '0.5', '1', '2'];
      const cur     = String(playbackSpeed);
      const idx     = speeds.indexOf(cur);
      if (idx > 0) document.querySelector(`[data-speed="${speeds[idx - 1]}"]`).click();
      break;
    }
    case ']':
    case '}': {
      const speeds  = ['0.25', '0.5', '1', '2'];
      const cur     = String(playbackSpeed);
      const idx     = speeds.indexOf(cur);
      if (idx < speeds.length - 1) document.querySelector(`[data-speed="${speeds[idx + 1]}"]`).click();
      break;
    }
    case 'l':
    case 'L':
      btnLoop.click();
      break;
    case 'Home':
      btnSkipStart.click();
      break;
    case 'End':
      btnSkipEnd.click();
      break;
  }
});

// ── Mobile moves button (placeholder until mobile sheet is built) ──
mobileMoveBtn.addEventListener('click', () => {
  // Phase 8 will expand this into a full bottom sheet
  document.getElementById('sidebar').style.display =
    document.getElementById('sidebar').style.display === 'flex' ? 'none' : 'flex';
});

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
  if (currentMove) renderFrame(currentTime);
});

ro.observe(document.getElementById('fpv-wrap'));
ro.observe(document.getElementById('stick-wrap'));

// ── Intro ──────────────────────────────────────────────────
function dismissIntro() {
  introScreen.classList.add('hiding');
  app.hidden = false;
  app.style.animation = 'fade-in 0.4s var(--ease-out) both';
  introScreen.addEventListener('transitionend', () => introScreen.remove(), { once: true });

  // Load first move by default
  loadMove(MOVES[0]);
}

// Animate loader bar then show app
introBar.style.width = '100%';
setTimeout(dismissIntro, 1200);

// ── Build sidebar on load ──────────────────────────────────
buildSidebar();
