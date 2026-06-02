// ── EffectsRenderer ────────────────────────────────────────
// Draws post-process effects on top of the FPV scene canvas:
// vignette, chromatic aberration, prop wash shimmer, noise.
// All drawn directly on the same canvas as the scene.

export class EffectsRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d');

    this._noiseTimer   = 0;
    this._noiseCanvas  = document.createElement('canvas');
    this._noiseCtx     = this._noiseCanvas.getContext('2d');
    this._prevPitch    = 0;
    this._shimmerAlpha = 0;
  }

  apply(sim) {
    const { canvas, ctx } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (W <= 0 || H <= 0) return;

    // Prop wash shimmer — triggered by rapid pitch changes
    const pitchDelta = Math.abs(sim.pitch - this._prevPitch);
    if (pitchDelta > 0.25) {
      this._shimmerAlpha = Math.min(this._shimmerAlpha + pitchDelta * 0.5, 0.18);
    }
    this._shimmerAlpha *= 0.88; // decay
    this._prevPitch = sim.pitch;

    if (this._shimmerAlpha > 0.01) {
      this._drawPropWash(ctx, W, H, this._shimmerAlpha);
    }

    // Chromatic aberration — on high combined deflection
    const deflection = Math.max(
      Math.abs(sim.roll), Math.abs(sim.pitch),
      Math.abs(sim.yaw)
    );
    if (deflection > 0.85) {
      this._drawChromaticAberration(ctx, W, H, (deflection - 0.85) / 0.15);
    }

    // Vignette — always on, tightens with throttle
    this._drawVignette(ctx, W, H, sim.throttle);

    // Noise — re-randomise every 8 frames
    this._noiseTimer++;
    if (this._noiseTimer % 8 === 0) {
      this._buildNoise(W, H);
    }
    this._drawNoise(ctx, W, H);
  }

  // ── Vignette ───────────────────────────────────────────────
  _drawVignette(ctx, W, H, throttle) {
    const outerR  = Math.sqrt(W * W + H * H) / 2;
    const innerR  = outerR * clamp(0.55 - throttle * 0.12, 0.35, 0.65);
    const alpha   = clamp(0.55 + throttle * 0.18, 0.5, 0.82);

    const grd = ctx.createRadialGradient(W / 2, H / 2, innerR, W / 2, H / 2, outerR);
    grd.addColorStop(0,   'rgba(0,0,0,0)');
    grd.addColorStop(0.6, `rgba(0,0,0,${alpha * 0.3})`);
    grd.addColorStop(1,   `rgba(0,0,0,${alpha})`);

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);
  }

  // ── Chromatic Aberration ───────────────────────────────────
  _drawChromaticAberration(ctx, W, H, strength) {
    const offset = Math.round(strength * 4);
    if (offset < 1) return;

    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.globalAlpha = strength * 0.08;

    // Red channel — shift right
    ctx.drawImage(ctx.canvas, offset, 0, W, H, 0, 0, W, H);

    ctx.restore();

    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.globalAlpha = strength * 0.06;

    // Cyan channel — shift left
    ctx.drawImage(ctx.canvas, -offset, 0, W, H, 0, 0, W, H);

    ctx.restore();
  }

  // ── Prop Wash Shimmer ──────────────────────────────────────
  _drawPropWash(ctx, W, H, alpha) {
    const corners = [
      [0, 0], [W, 0], [0, H], [W, H],
    ];
    for (const [cx, cy] of corners) {
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.4);
      grd.addColorStop(0,   `rgba(255,255,255,${alpha * 0.6})`);
      grd.addColorStop(0.4, `rgba(255,255,255,${alpha * 0.1})`);
      grd.addColorStop(1,   'rgba(255,255,255,0)');

      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);
    }
  }

  // ── Noise ──────────────────────────────────────────────────
  _buildNoise(W, H) {
    const nc = this._noiseCanvas;
    const nx = this._noiseCtx;
    nc.width  = Math.ceil(W / 4);  // quarter-res for performance
    nc.height = Math.ceil(H / 4);

    const id   = nx.createImageData(nc.width, nc.height);
    const data = id.data;
    for (let i = 0; i < data.length; i += 4) {
      const v     = Math.random() < 0.015 ? 255 : 0; // sparse bright dots
      data[i]     = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = v > 0 ? 80 : 0;
    }
    nx.putImageData(id, 0, 0);
  }

  _drawNoise(ctx, W, H) {
    if (this._noiseCanvas.width === 0) return;
    ctx.save();
    ctx.globalAlpha = 0.35;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this._noiseCanvas, 0, 0, W, H);
    ctx.restore();
  }
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
