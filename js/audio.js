// ── AudioEngine ────────────────────────────────────────────
// Throttle-proportional motor whine + speed-proportional wind
// noise via Web Audio API. Lazy-initialised on first user
// interaction (browser autoplay policy).

export class AudioEngine {
  constructor() {
    this._ctx        = null;
    this._motorOsc   = null;
    this._motorGain  = null;
    this._windGain   = null;
    this._masterGain = null;
    this.muted       = false;
    this._ready      = false;
  }

  // Call once after a user gesture (click / keydown)
  init() {
    if (this._ready) return;
    try {
      this._ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch {
      return; // no Web Audio support
    }

    const ctx = this._ctx;

    // ── Master gain ──────────────────────────────────────────
    this._masterGain = ctx.createGain();
    this._masterGain.gain.value = 1;
    this._masterGain.connect(ctx.destination);

    // ── Motor whine ──────────────────────────────────────────
    // Sawtooth oscillator → bandpass filter → gain
    this._motorOsc = ctx.createOscillator();
    this._motorOsc.type = 'sawtooth';
    this._motorOsc.frequency.value = 2200;

    // Add slight detuned oscillator for harmonic richness
    const osc2 = ctx.createOscillator();
    osc2.type = 'square';
    osc2.frequency.value = 2200 * 2.03; // slight detuning for chorus

    const motorFilter = ctx.createBiquadFilter();
    motorFilter.type = 'bandpass';
    motorFilter.frequency.value = 3500;
    motorFilter.Q.value = 1.8;

    this._motorGain = ctx.createGain();
    this._motorGain.gain.value = 0;

    this._motorOsc.connect(motorFilter);
    osc2.connect(motorFilter);
    motorFilter.connect(this._motorGain);
    this._motorGain.connect(this._masterGain);

    this._motorOsc.start();
    osc2.start();
    this._osc2 = osc2;

    // ── Wind / air noise ─────────────────────────────────────
    // White noise buffer → highpass filter → gain
    const bufSec    = 3;
    const noiseLen  = ctx.sampleRate * bufSec;
    const noiseBuf  = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
    const noiseData = noiseBuf.getChannelData(0);
    for (let i = 0; i < noiseLen; i++) noiseData[i] = Math.random() * 2 - 1;

    const windSrc = ctx.createBufferSource();
    windSrc.buffer = noiseBuf;
    windSrc.loop   = true;

    const windFilter = ctx.createBiquadFilter();
    windFilter.type      = 'highpass';
    windFilter.frequency.value = 800;

    this._windGain = ctx.createGain();
    this._windGain.gain.value = 0;

    windSrc.connect(windFilter);
    windFilter.connect(this._windGain);
    this._windGain.connect(this._masterGain);
    windSrc.start();

    this._ready = true;
  }

  // ── Update per frame ──────────────────────────────────────
  update(throttle, speed) {
    if (!this._ready || this.muted) return;
    const ctx = this._ctx;
    const t   = ctx.currentTime;

    // Motor frequency: rises with throttle, non-linear feel
    const freq = 1400 + Math.pow(Math.max(0, throttle), 0.65) * 7000;
    this._motorOsc.frequency.setTargetAtTime(freq,        t, 0.04);
    this._osc2.frequency.setTargetAtTime(freq * 2.03,     t, 0.04);

    // Motor volume: punchy at full throttle, near-silent at idle
    const motorVol = Math.pow(Math.max(0, throttle), 1.4) * 0.12;
    this._motorGain.gain.setTargetAtTime(motorVol, t, 0.06);

    // Wind volume: proportional to simulated speed
    const windVol = Math.pow(clamp(speed / 140, 0, 1), 1.2) * 0.07;
    this._windGain.gain.setTargetAtTime(windVol, t, 0.12);
  }

  // ── Silence (on pause / move end) ────────────────────────
  silence() {
    if (!this._ready) return;
    const t = this._ctx.currentTime;
    this._motorGain.gain.setTargetAtTime(0, t, 0.15);
    this._windGain.gain.setTargetAtTime(0,  t, 0.2);
  }

  // ── Mute toggle ───────────────────────────────────────────
  toggleMute() {
    this.muted = !this.muted;
    if (!this._ready) return this.muted;
    const t = this._ctx.currentTime;
    this._masterGain.gain.setTargetAtTime(this.muted ? 0 : 1, t, 0.1);
    return this.muted;
  }

  // Resume context if suspended (browser policy)
  resume() {
    if (this._ctx?.state === 'suspended') this._ctx.resume();
  }
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
