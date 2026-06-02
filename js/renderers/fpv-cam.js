// ── FpvCamRenderer ─────────────────────────────────────────
// Draws the sky/ground scene on the FPV canvas.
// Delegates atmospheric effects to effects.js and OSD to hud.js.

import { EffectsRenderer } from './effects.js';
import { HudRenderer }     from '../hud.js';

// Simulate drone physics state from raw stick inputs
function deriveState(frame, simState) {
  const { throttle = 0, pitch = 0, roll = 0, yaw = 0, t = 0 } = frame;
  const dt = t - (simState.prevT ?? t);

  // Roll angle — integrate roll input (degrees)
  simState.rollDeg += roll * 320 * Math.min(dt, 0.05);

  // Pitch angle — integrate pitch input (degrees), clamp to ±85
  simState.pitchDeg = clamp(simState.pitchDeg + pitch * 180 * Math.min(dt, 0.05), -85, 85);

  // Yaw — just track for heading indicator
  simState.yawDeg += yaw * 200 * Math.min(dt, 0.05);

  // Speed — throttle drives speed, decay when low
  const targetSpeed = throttle * 140; // km/h
  simState.speed += (targetSpeed - simState.speed) * 0.08;

  // Altitude — pitch up = gain, pitch down = lose
  simState.altitude += pitch * simState.speed * 0.003;
  simState.altitude = clamp(simState.altitude, -500, 2000);

  // Battery drain — real-time based on wall clock
  simState.batteryPct = clamp(simState.batteryPct - throttle * 0.002, 0, 100);

  simState.prevT     = t;
  simState.throttle  = throttle;
  simState.pitch     = pitch;
  simState.roll      = roll;
  simState.yaw       = yaw;

  return simState;
}

export class FpvCamRenderer {
  constructor(fpvCanvas, osdCanvas) {
    this.canvas    = fpvCanvas;
    this.osdCanvas = osdCanvas;
    this.ctx       = fpvCanvas.getContext('2d');
    this.osdCtx    = osdCanvas.getContext('2d');

    this.effects   = new EffectsRenderer(fpvCanvas);
    this.hud       = new HudRenderer(osdCanvas);

    // Persistent simulation state
    this.sim = {
      rollDeg:    0,
      pitchDeg:   0,
      yawDeg:     0,
      speed:      0,
      altitude:   50,
      batteryPct: 87,
      prevT:      null,
      throttle:   0,
      pitch:      0,
      roll:       0,
      yaw:        0,
    };

    // Previous frame canvas for motion blur persistence
    this._prevImageData = null;
  }

  resetSim() {
    this.sim = {
      rollDeg:    0,
      pitchDeg:   0,
      yawDeg:     0,
      speed:      0,
      altitude:   50,
      batteryPct: 87,
      prevT:      null,
      throttle:   0,
      pitch:      0,
      roll:       0,
      yaw:        0,
    };
    this._prevImageData = null;
  }

  render(frame) {
    const sim = deriveState(frame, this.sim);
    this._drawScene(sim);
    this.effects.apply(sim);
    this.hud.draw(sim);
  }

  resize() {
    this._prevImageData = null;
    if (this.sim.prevT !== null) this._drawScene(this.sim);
    this.hud.resize();
  }

  // ── Scene ──────────────────────────────────────────────────

  _drawScene(sim) {
    const { canvas, ctx } = this;
    const W = canvas.width;
    const H = canvas.height;
    if (W <= 0 || H <= 0) return;

    // Motion blur: paint previous frame at low alpha before redrawing
    const speed       = sim.speed;
    const blurAmount  = clamp((speed - 40) / 100, 0, 0.22);
    if (blurAmount > 0 && this._prevImageData) {
      ctx.putImageData(this._prevImageData, 0, 0);
      ctx.fillStyle = `rgba(5,6,8,${blurAmount})`;
      ctx.fillRect(0, 0, W, H);
    } else {
      ctx.clearRect(0, 0, W, H);
    }

    // The scene rotates with roll and shifts with pitch
    const rollRad  = (sim.rollDeg * Math.PI) / 180;
    const pitchPct = clamp(sim.pitchDeg / 90, -1, 1); // -1..1

    ctx.save();

    // Rotate canvas around centre for roll
    ctx.translate(W / 2, H / 2);
    ctx.rotate(rollRad);

    // Diagonal size that always covers after rotation
    const diag = Math.ceil(Math.sqrt(W * W + H * H));
    const half = diag / 2;

    // Horizon offset — pitch moves it up/down
    const horizonY = pitchPct * H * 0.6; // positive pitch = horizon moves up

    this._drawSky(ctx, half, horizonY, diag);
    this._drawGround(ctx, half, horizonY, diag);
    this._drawHorizonLine(ctx, half, horizonY, diag, sim.rollDeg);
    this._drawPitchLadder(ctx, half, horizonY, diag, sim.pitchDeg);

    ctx.restore();

    // Store this frame for next blur pass
    this._prevImageData = ctx.getImageData(0, 0, W, H);
  }

  _drawSky(ctx, half, horizonY, diag) {
    const theme = document.documentElement.dataset.theme;

    let skyTop, skyBot;
    if (theme === 'betaflight') {
      skyTop = '#000000';
      skyBot = '#001a00';
    } else if (theme === 'daylight') {
      skyTop = '#4a90d9';
      skyBot = '#87ceeb';
    } else {
      skyTop = '#050a18';
      skyBot = '#1a3a5c';
    }

    const skyGrad = ctx.createLinearGradient(0, -half, 0, horizonY);
    skyGrad.addColorStop(0, skyTop);
    skyGrad.addColorStop(1, skyBot);

    ctx.fillStyle = skyGrad;
    ctx.fillRect(-half, -half, diag, half + horizonY);
  }

  _drawGround(ctx, half, horizonY, diag) {
    const theme = document.documentElement.dataset.theme;

    let gndTop, gndBot;
    if (theme === 'betaflight') {
      gndTop = '#001a00';
      gndBot = '#000000';
    } else if (theme === 'daylight') {
      gndTop = '#5a8a3c';
      gndBot = '#3d6b28';
    } else {
      gndTop = '#1a2e0a';
      gndBot = '#080f04';
    }

    const gndGrad = ctx.createLinearGradient(0, horizonY, 0, half);
    gndGrad.addColorStop(0, gndTop);
    gndGrad.addColorStop(1, gndBot);

    ctx.fillStyle = gndGrad;
    ctx.fillRect(-half, horizonY, diag, half - horizonY + 1);
  }

  _drawHorizonLine(ctx, half, horizonY, _diag, _rollDeg) {
    const theme = document.documentElement.dataset.theme;
    const color = theme === 'betaflight' ? '#00ff41' : '#ffffff';

    ctx.strokeStyle = color;
    ctx.lineWidth   = 2.5;
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.moveTo(-half, horizonY);
    ctx.lineTo(half,  horizonY);
    ctx.stroke();

    // Center gap in horizon (aircraft symbol)
    const gapW = 60;
    ctx.fillStyle  = theme === 'betaflight' ? '#000000' : '#0b0d12';
    ctx.fillRect(-gapW / 2, horizonY - 4, gapW, 8);

    // Center marker
    ctx.strokeStyle = theme === 'betaflight' ? '#00ff41' : '#00f5d4';
    ctx.lineWidth   = 2;
    ctx.beginPath();
    ctx.moveTo(-gapW / 2, horizonY);
    ctx.lineTo( gapW / 2, horizonY);
    ctx.stroke();

    ctx.globalAlpha = 1;
  }

  _drawPitchLadder(ctx, half, horizonY, _diag, pitchDeg) {
    const theme  = document.documentElement.dataset.theme;
    const color  = theme === 'betaflight' ? '#00ff41' : 'rgba(255,255,255,0.55)';
    const marks  = [-60, -45, -30, -20, -10, 10, 20, 30, 45, 60];
    const dpr    = devicePixelRatio || 1;
    const pxPerDeg = (half * 0.6) / 45; // scale ladder spacing

    ctx.strokeStyle = color;
    ctx.fillStyle   = color;
    ctx.lineWidth   = 1.2;
    ctx.font        = `${10 * dpr}px 'JetBrains Mono', monospace`;
    ctx.textAlign   = 'right';

    for (const deg of marks) {
      const y   = horizonY - deg * pxPerDeg;
      const w   = Math.abs(deg) >= 30 ? 60 : 40;
      const dashed = deg < 0; // below horizon = dashed

      ctx.globalAlpha = 0.6;

      if (dashed) {
        ctx.setLineDash([4, 4]);
      } else {
        ctx.setLineDash([]);
      }

      ctx.beginPath();
      ctx.moveTo(-w, y);
      ctx.lineTo(-10, y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10, y);
      ctx.lineTo(w, y);
      ctx.stroke();

      // Degree label
      ctx.globalAlpha = 0.5;
      ctx.fillText(`${deg}`, -w - 4, y + 4);
    }

    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
  }
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
