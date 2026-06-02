// ── HudRenderer ────────────────────────────────────────────
// Draws the Betaflight-style OSD overlay on the transparent
// osdCanvas that sits on top of the FPV scene canvas.

const RSSI_BARS = 5;

export class HudRenderer {
  constructor(canvas) {
    this.canvas  = canvas;
    this.ctx     = canvas.getContext('2d');
    this._recOn  = true;
    this._recTimer = setInterval(() => { this._recOn = !this._recOn; }, 1000);
    this._wallStart = performance.now();
  }

  resize() {
    // nothing — redrawn every frame
  }

  draw(sim) {
    const { canvas, ctx } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (W <= 0 || H <= 0) return;

    ctx.clearRect(0, 0, W, H);

    const dpr = devicePixelRatio || 1;
    const theme = document.documentElement.dataset.theme;
    const textColor = theme === 'betaflight' ? '#00ff41' : '#ffffff';
    const accentColor = theme === 'betaflight' ? '#00ff41' : '#00f5d4';
    const dimColor  = theme === 'betaflight' ? 'rgba(0,255,65,0.5)' : 'rgba(255,255,255,0.45)';

    const pad   = 14 * dpr;
    const lineH = 18 * dpr;
    const baseFont = `${11 * dpr}px 'JetBrains Mono', monospace`;
    const smallFont = `${9 * dpr}px 'JetBrains Mono', monospace`;

    ctx.font      = baseFont;
    ctx.textBaseline = 'top';

    // ── TOP BAR ──────────────────────────────────────────────

    // Battery %
    this._drawBattery(ctx, pad, pad, sim.batteryPct, dpr, theme);

    // Cell count badge
    ctx.font      = smallFont;
    ctx.fillStyle = '#f7b731';
    const cellX   = pad + 92 * dpr;
    this._drawPill(ctx, cellX, pad + 1 * dpr, '4S', dpr, '#f7b731');

    // Wall-clock timer (top centre)
    const elapsed = (performance.now() - this._wallStart) / 1000;
    const timerStr = fmtTimer(elapsed);
    ctx.font      = baseFont;
    ctx.fillStyle = dimColor;
    ctx.textAlign = 'center';
    ctx.fillText(timerStr, W / 2, pad);

    // REC indicator (top right)
    this._drawRec(ctx, W - pad, pad, dpr, theme);

    // ── CROSSHAIR (centre) ────────────────────────────────────
    this._drawCrosshair(ctx, W / 2, H / 2, dpr, accentColor);

    // ── BOTTOM BAR ───────────────────────────────────────────
    const botY = H - pad - lineH;

    // Speed (bottom left)
    ctx.font      = `${14 * dpr}px 'JetBrains Mono', monospace`;
    ctx.fillStyle = textColor;
    ctx.textAlign = 'left';
    const speedStr = `${Math.round(sim.speed)} km/h`;
    ctx.fillText(speedStr, pad, botY);

    // Altitude (below speed)
    ctx.font      = smallFont;
    ctx.fillStyle = dimColor;
    const altStr  = `${sim.altitude >= 0 ? '↑' : '↓'} ${Math.abs(Math.round(sim.altitude))}m`;
    ctx.fillText(altStr, pad, botY + lineH + 2 * dpr);

    // RSSI (bottom right)
    this._drawRssi(ctx, W - pad, botY, dpr, theme);

    // GPS sats
    ctx.font      = smallFont;
    ctx.fillStyle = dimColor;
    ctx.textAlign = 'right';
    ctx.fillText('GPS  12sat', W - pad, botY + lineH + 2 * dpr);
  }

  // ── Sub-elements ──────────────────────────────────────────

  _drawBattery(ctx, x, y, pct, dpr, theme) {
    const barW   = 60 * dpr;
    const barH   = 8 * dpr;
    const segN   = 10;
    const segGap = 1 * dpr;
    const segW   = (barW - segGap * (segN - 1)) / segN;

    // Percentage text
    const color = pct > 50 ? '#22c55e' : pct > 25 ? '#eab308' : '#f72585';
    ctx.font      = `${11 * dpr}px 'JetBrains Mono', monospace`;
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.fillText(`${Math.round(pct)}%`, x, y);

    const barX = x + 38 * dpr;
    const barY = y + 3 * dpr;

    // Segments
    const filledSegs = Math.round((pct / 100) * segN);
    for (let i = 0; i < segN; i++) {
      const sx = barX + i * (segW + segGap);
      ctx.fillStyle = i < filledSegs ? color : 'rgba(255,255,255,0.1)';
      roundRect(ctx, sx, barY, segW, barH, 1 * dpr);
      ctx.fill();
    }
  }

  _drawRec(ctx, rightX, y, dpr, theme) {
    const dotR = 5 * dpr;
    const dotX = rightX - dotR;

    if (this._recOn) {
      ctx.beginPath();
      ctx.arc(dotX, y + dotR, dotR, 0, Math.PI * 2);
      ctx.fillStyle = '#f72585';
      ctx.fill();

      // Glow
      ctx.save();
      ctx.globalAlpha = 0.4;
      ctx.beginPath();
      ctx.arc(dotX, y + dotR, dotR * 2, 0, Math.PI * 2);
      ctx.fillStyle = '#f72585';
      ctx.fill();
      ctx.restore();
    }

    ctx.font      = `${9 * dpr}px 'JetBrains Mono', monospace`;
    ctx.fillStyle = this._recOn ? '#f72585' : 'rgba(247,37,133,0.35)';
    ctx.textAlign = 'right';
    ctx.fillText('REC', dotX - dotR * 2 - 2 * dpr, y + 1 * dpr);
  }

  _drawCrosshair(ctx, cx, cy, dpr, color) {
    const arms = [
      [16, 0], [-16, 0], [0, 16], [0, -16],
    ];
    const gap  = 6 * dpr;
    const len  = 12 * dpr;

    ctx.save();
    ctx.globalAlpha  = 0.35;
    ctx.strokeStyle  = color;
    ctx.lineWidth    = 1.5 * dpr;

    for (const [dx, dy] of arms) {
      const sx = cx + (dx > 0 ? gap : dx < 0 ? -gap : 0);
      const sy = cy + (dy > 0 ? gap : dy < 0 ? -gap : 0);
      const ex = sx + (dx !== 0 ? Math.sign(dx) * len : 0);
      const ey = sy + (dy !== 0 ? Math.sign(dy) * len : 0);
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
    }

    // Centre dot
    ctx.globalAlpha = 0.5;
    ctx.fillStyle   = color;
    ctx.beginPath();
    ctx.arc(cx, cy, 2 * dpr, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  _drawRssi(ctx, rightX, y, dpr, theme) {
    const bars   = RSSI_BARS;
    const barW   = 6 * dpr;
    const barGap = 3 * dpr;
    const maxH   = 16 * dpr;
    const filled = 4; // simulated: 4 out of 5

    for (let i = 0; i < bars; i++) {
      const bh   = maxH * ((i + 1) / bars);
      const bx   = rightX - (bars - i) * (barW + barGap);
      const by   = y + (maxH - bh);
      const isOn = i < filled;

      ctx.fillStyle = isOn
        ? (i < 2 ? '#f72585' : i < 4 ? '#eab308' : '#22c55e')
        : 'rgba(255,255,255,0.12)';
      roundRect(ctx, bx, by, barW, bh, 1 * dpr);
      ctx.fill();
    }

    ctx.font      = `${9 * dpr}px 'JetBrains Mono', monospace`;
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.textAlign = 'right';
    ctx.fillText('-72 dBm', rightX, y + maxH + 3 * dpr);
  }

  _drawPill(ctx, x, y, text, dpr, color) {
    const pad    = 4 * dpr;
    const h      = 13 * dpr;
    ctx.font     = `${9 * dpr}px 'JetBrains Mono', monospace`;
    const tw     = ctx.measureText(text).width;
    const w      = tw + pad * 2;

    ctx.strokeStyle = color;
    ctx.lineWidth   = 1 * dpr;
    ctx.fillStyle   = 'rgba(247,183,49,0.12)';
    ctx.globalAlpha = 0.8;
    roundRect(ctx, x, y, w, h, 3 * dpr);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle  = color;
    ctx.textAlign  = 'left';
    ctx.globalAlpha = 1;
    ctx.fillText(text, x + pad, y + 2 * dpr);
  }
}

// ── Helpers ────────────────────────────────────────────────

function fmtTimer(sec) {
  const m  = Math.floor(sec / 60);
  const s  = Math.floor(sec % 60);
  const cs = Math.floor((sec % 1) * 100);
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(cs).padStart(2,'0')}`;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
