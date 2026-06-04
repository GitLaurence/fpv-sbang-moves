// ── Constants ──────────────────────────────────────────────
const TRAIL_LENGTH = 28;
const TRAIL_DECAY  = 0.88;

// BUG-06/PERF-04: module-scope map avoids per-frame object allocation
const CH_NAME = { t: 'throttle', y: 'yaw', p: 'pitch', r: 'roll' };

const CHANNEL_COLORS = {
  throttle: { hex: '#f7b731', rgb: '247,183,49'  },
  yaw:      { hex: '#a855f7', rgb: '168,85,247'  },
  pitch:    { hex: '#3b82f6', rgb: '59,130,246'  },
  roll:     { hex: '#00f5d4', rgb: '0,245,212'   },
};

// ── StickCamRenderer ───────────────────────────────────────
export class StickCamRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d');

    // PERF-01: cached background color, refreshed by cacheTheme()
    this._bgColor = '#0b0d12';

    // Trail history: [{x,y}, ...]
    this._leftTrail  = [];
    this._rightTrail = [];

    // Smoothed values for spring-like feel
    this._smooth = { throttle: 0, yaw: 0, pitch: 0, roll: 0 };

    // Last full-deflection flash state
    this._flash = { throttle: 0, yaw: 0, pitch: 0, roll: 0 };

    // Ghost trail — recorded path from previous playthrough
    this._ghostLeft    = [];
    this._ghostRight   = [];
    this._ghostEnabled = false;
    this._recording    = false;
    this._recLeft      = [];
    this._recRight     = [];

    // Build meter DOM once
    this._buildMeters();
  }

  // PERF-01: call on theme change to avoid getComputedStyle every frame
  cacheTheme() {
    this._bgColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--bg-panel').trim() || '#0b0d12';
  }

  // ── Ghost Trail API ───────────────────────────────────────

  setGhostEnabled(on) {
    this._ghostEnabled = on;
    if (!on) { this._ghostLeft = []; this._ghostRight = []; }
  }

  startRecording() {
    this._recLeft  = [];
    this._recRight = [];
    this._recording = true;
  }

  commitRecording() {
    if (!this._recording) return;
    this._recording  = false;
    this._ghostLeft  = this._recLeft.slice();
    this._ghostRight = this._recRight.slice();
  }

  clearGhost() {
    this._ghostLeft  = [];
    this._ghostRight = [];
    this._recording  = false;
    this._recLeft    = [];
    this._recRight   = [];
  }

  // BUG-06: public reset so loadMove doesn't need to touch private fields
  reset() {
    this._leftTrail  = [];
    this._rightTrail = [];
    this._smooth     = { throttle: 0, yaw: 0, pitch: 0, roll: 0 };
    this.clearGhost();
  }

  // ── Public ────────────────────────────────────────────────

  render(frame) {
    const { throttle = 0, yaw = 0, pitch = 0, roll = 0 } = frame;

    // Smooth inputs slightly so motion feels natural
    const k = 0.72;
    const s = this._smooth;
    s.throttle = lerp(s.throttle, throttle, k);
    s.yaw      = lerp(s.yaw,      yaw,      k);
    s.pitch    = lerp(s.pitch,    pitch,    k);
    s.roll     = lerp(s.roll,     roll,     k);

    // Detect full deflection for flash
    for (const ch of ['throttle','yaw','pitch','roll']) {
      const raw = frame[ch] ?? 0;
      if (Math.abs(raw) >= 0.98 && this._flash[ch] <= 0) {
        this._flash[ch] = 6; // frames to flash
      }
      if (this._flash[ch] > 0) this._flash[ch]--;
    }

    // Live trail positions
    this._leftTrail.push({ x: s.yaw, y: -s.throttle });
    this._rightTrail.push({ x: s.roll, y: -s.pitch });
    if (this._leftTrail.length  > TRAIL_LENGTH) this._leftTrail.shift();
    if (this._rightTrail.length > TRAIL_LENGTH) this._rightTrail.shift();

    // Ghost recording — sample every other frame for efficiency
    if (this._recording && this._recLeft.length % 2 === 0) {
      this._recLeft.push({ x: s.yaw, y: -s.throttle });
      this._recRight.push({ x: s.roll, y: -s.pitch });
    } else if (this._recording) {
      this._recLeft.push(null); // keep indices aligned
      this._recRight.push(null);
    }

    this._draw();
    this._updateMeters(frame);
  }

  resize() {
    this._draw();
  }

  // ── Private ───────────────────────────────────────────────

  _draw() {
    const { canvas, ctx } = this;
    const dpr = devicePixelRatio || 1;

    // Meter strip height in CSS px — we'll leave bottom 56px for it
    const meterH = 56 * dpr;

    const W = canvas.width;
    const H = canvas.height - meterH;
    if (W <= 0 || H <= 0) return;

    ctx.clearRect(0, 0, W, canvas.height);

    ctx.fillStyle = this._bgColor;
    ctx.fillRect(0, 0, W, canvas.height);

    const halfW   = W / 2;
    const padding = Math.min(W, H) * 0.08;
    const radius  = Math.min(halfW, H) / 2 - padding;

    const leftCX  = halfW / 2;
    const rightCX = halfW + halfW / 2;
    const CY      = H / 2;

    // Ghost trail — drawn first so it sits behind live trail
    if (this._ghostEnabled && this._ghostLeft.length > 1) {
      this._drawGhostPath(leftCX,  CY, radius, this._ghostLeft);
      this._drawGhostPath(rightCX, CY, radius, this._ghostRight);
    }

    this._drawGimbal(leftCX,  CY, radius, this._smooth.yaw,  -this._smooth.throttle, this._leftTrail,  'yaw', 'throttle');
    this._drawGimbal(rightCX, CY, radius, this._smooth.roll, -this._smooth.pitch,    this._rightTrail, 'roll', 'pitch');

    // Labels
    this._drawLabels(leftCX, rightCX, CY, radius, dpr);
  }

  _drawGhostPath(cx, cy, r, positions) {
    const ctx   = this.ctx;
    const pts   = positions.filter(Boolean);
    if (pts.length < 2) return;

    // Draw as a connected path with gradient opacity
    ctx.save();
    ctx.globalAlpha = 0.18;

    // Draw dots along the path
    for (let i = 0; i < pts.length; i++) {
      const p   = pts[i];
      const age = i / pts.length;
      const px  = cx + p.x * r;
      const py  = cy + p.y * r;
      const sz  = (1.5 + age * 2) * (devicePixelRatio || 1);

      ctx.beginPath();
      ctx.arc(px, py, sz, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,245,212,${age * 0.8})`;
      ctx.fill();
    }

    // Also connect with a faint line for continuity
    ctx.beginPath();
    ctx.moveTo(cx + pts[0].x * r, cy + pts[0].y * r);
    for (let i = 1; i < pts.length; i++) {
      ctx.lineTo(cx + pts[i].x * r, cy + pts[i].y * r);
    }
    ctx.strokeStyle = 'rgba(0,245,212,0.12)';
    ctx.lineWidth   = 1 * (devicePixelRatio || 1);
    ctx.stroke();

    ctx.restore();
  }

  _drawGimbal(cx, cy, r, stickX, stickY, trail, chX, chY) {
    const ctx = this.ctx;
    const dpr = devicePixelRatio || 1;

    const dotX = cx + stickX * r;
    const dotY = cy + stickY * r;

    // ── Outer ring ──
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth   = 2 * dpr;
    ctx.stroke();

    // ── Gate ring (inner boundary) ──
    const flashX = this._flash[chX] > 0;
    const flashY = this._flash[chY] > 0;
    const flashing = flashX || flashY;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.96, 0, Math.PI * 2);
    ctx.strokeStyle = flashing
      ? `rgba(255,255,255,${0.4 + 0.3 * Math.sin(Date.now() / 60)})`
      : 'rgba(0,245,212,0.15)';
    ctx.lineWidth = 1 * dpr;
    ctx.stroke();

    // ── Center crosshair ──
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth   = 1 * dpr;
    ctx.beginPath(); ctx.moveTo(cx - r, cy); ctx.lineTo(cx + r, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy + r); ctx.stroke();

    // ── Quarter guide dots ──
    for (const [dx, dy] of [[0,-1],[0,1],[-1,0],[1,0]]) {
      ctx.beginPath();
      ctx.arc(cx + dx * r * 0.96, cy + dy * r * 0.96, 2 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.fill();
    }

    // ── Trail ──
    const tLen = trail.length;
    for (let i = 0; i < tLen; i++) {
      const pos = trail[i];
      const tx  = cx + pos.x * r;
      const ty  = cy + pos.y * r;
      const age = i / tLen;
      const a   = age * age * 0.35; // dim older positions more aggressively
      const sz  = (2 + age * 5) * dpr;

      ctx.beginPath();
      ctx.arc(tx, ty, sz, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,245,212,${a})`;
      ctx.fill();
    }

    // ── Stick dot ──
    const moving = Math.abs(stickX) > 0.04 || Math.abs(stickY) > 0.04;
    const dotR   = (moving ? 8 : 6) * dpr;

    // Pick the dominant channel's color for the glow
    const dominantCh = Math.abs(stickX) >= Math.abs(stickY) ? chX : chY;
    const col        = CHANNEL_COLORS[dominantCh];

    if (moving) {
      // Outer glow
      const grd = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, dotR * 3);
      grd.addColorStop(0,   `rgba(${col.rgb},0.35)`);
      grd.addColorStop(1,   `rgba(${col.rgb},0)`);
      ctx.beginPath();
      ctx.arc(dotX, dotY, dotR * 3, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    }

    // White core
    ctx.beginPath();
    ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Colored ring on top
    ctx.beginPath();
    ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2);
    ctx.strokeStyle = col.hex;
    ctx.lineWidth   = 2 * dpr;
    ctx.stroke();

    // Inner highlight
    ctx.beginPath();
    ctx.arc(dotX - dotR * 0.25, dotY - dotR * 0.3, dotR * 0.35, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fill();
  }

  _drawLabels(leftCX, rightCX, cy, r, dpr) {
    const ctx  = this.ctx;
    const font = `${10 * dpr}px 'JetBrains Mono', monospace`;
    ctx.font      = font;
    ctx.textAlign = 'center';

    const pairs = [
      { cx: leftCX,  top: 'T', bot: 'Y', topCh: 'throttle', botCh: 'yaw'   },
      { cx: rightCX, top: 'P', bot: 'R', topCh: 'pitch',     botCh: 'roll'  },
    ];

    const meterH = 56 * dpr;
    const H      = this.canvas.height - meterH;

    for (const { cx, top, bot, topCh, botCh } of pairs) {
      const topY = cy - r - 10 * dpr;
      const botY = H - 10 * dpr;

      ctx.fillStyle = CHANNEL_COLORS[topCh].hex;
      ctx.fillText(top, cx, topY);

      ctx.fillStyle = CHANNEL_COLORS[botCh].hex;
      ctx.fillText(bot, cx, botY);
    }
  }

  // ── Meters (DOM) ───────────────────────────────────────────

  _buildMeters() {
    const wrap = this.canvas.parentElement;
    if (wrap.querySelector('#stick-meters')) return;

    wrap.insertAdjacentHTML('beforeend', `
      <div id="stick-meters">
        <div class="axis-group">
          <div class="axis-row">
            <span class="axis-label t">T</span>
            <div class="axis-track"><div class="axis-fill t" id="meter-t"></div></div>
            <span class="axis-value" id="val-t">+0.00</span>
          </div>
          <div class="axis-row">
            <span class="axis-label y">Y</span>
            <div class="axis-track"><div class="axis-fill y" id="meter-y"></div></div>
            <span class="axis-value" id="val-y">+0.00</span>
          </div>
        </div>
        <div class="axis-group">
          <div class="axis-row">
            <span class="axis-label p">P</span>
            <div class="axis-track"><div class="axis-fill p" id="meter-p"></div></div>
            <span class="axis-value" id="val-p">+0.00</span>
          </div>
          <div class="axis-row">
            <span class="axis-label r">R</span>
            <div class="axis-track"><div class="axis-fill r" id="meter-r"></div></div>
            <span class="axis-value" id="val-r">+0.00</span>
          </div>
        </div>
      </div>`);

    this._meters = {
      t: document.getElementById('meter-t'),
      y: document.getElementById('meter-y'),
      p: document.getElementById('meter-p'),
      r: document.getElementById('meter-r'),
    };
    this._vals = {
      t: document.getElementById('val-t'),
      y: document.getElementById('val-y'),
      p: document.getElementById('val-p'),
      r: document.getElementById('val-r'),
    };
  }

  _updateMeters({ throttle = 0, yaw = 0, pitch = 0, roll = 0 }) {
    if (!this._meters) return;

    const channels = { t: throttle, y: yaw, p: pitch, r: roll };

    for (const [key, raw] of Object.entries(channels)) {
      const v    = clamp(raw, -1, 1);
      const fill = this._meters[key];
      const val  = this._vals[key];

      // Positive: fill right from center; Negative: fill left from center
      const pct = Math.abs(v) * 50;
      if (v >= 0) {
        fill.style.left  = '50%';
        fill.style.width = `${pct}%`;
      } else {
        fill.style.left  = `${50 - pct}%`;
        fill.style.width = `${pct}%`;
      }

      val.textContent = (v >= 0 ? '+' : '') + v.toFixed(2);
      val.style.color = Math.abs(v) > 0.9
        ? CHANNEL_COLORS[CH_NAME[key]].hex
        : '';
    }
  }
}

// ── Utilities ──────────────────────────────────────────────
function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
