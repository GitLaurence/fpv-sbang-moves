// ── PlaybackEngine ─────────────────────────────────────────
//
// Drives a move timeline using requestAnimationFrame.
// Interpolates keyframes with Catmull-Rom splines so stick
// motion feels organic rather than robotic.
//
// Usage:
//   const engine = new PlaybackEngine(onFrame, onEnd);
//   engine.load(moveData);
//   engine.play();
//
// onFrame(frame)  — called every rAF tick with interpolated frame
// onEnd()         — called when playback reaches the end (loop=false)

const CHANNELS = ['throttle', 'yaw', 'pitch', 'roll'];

export class PlaybackEngine {
  constructor(onFrame, onEnd) {
    this._onFrame = onFrame;
    this._onEnd   = onEnd;

    this._move    = null;
    this._time    = 0;       // current position in seconds
    this._speed   = 1;       // playback rate multiplier
    this._playing = false;
    this._looping = false;
    this._stepMode = false;

    this._rafId   = null;
    this._lastNow = null;

    // Reused per-frame output object — avoids a GC allocation on every tick.
    // Safe because callers (onFrame) consume the values synchronously.
    this._frame = { t: 0, throttle: 0, yaw: 0, pitch: 0, roll: 0 };
  }

  // ── Public API ─────────────────────────────────────────────

  load(move) {
    this.pause();
    this._move = move;
    this._time = 0;
    this._emit(0);
  }

  play() {
    if (!this._move || this._playing) return;
    if (this._time >= this._move.durationSec) this._time = 0;
    this._playing = true;
    this._lastNow = performance.now();
    this._tick();
  }

  pause() {
    this._playing = false;
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  }

  toggle() {
    this._playing ? this.pause() : this.play();
    return this._playing;
  }

  seek(seconds) {
    this._time = clamp(seconds, 0, this._move?.durationSec ?? 0);
    this._emit(this._time);
  }

  seekFraction(f) {
    this.seek(f * (this._move?.durationSec ?? 0));
  }

  stepBack() {
    this.seek(this._time - 1 / 30);
  }

  stepForward() {
    this.seek(this._time + 1 / 30);
  }

  skipToStart() { this.seek(0); }
  skipToEnd()   { this.seek(this._move?.durationSec ?? 0); }

  setSpeed(s)      { this._speed    = s; }
  setLooping(v)    { this._looping  = v; }
  setStepMode(v)   { this._stepMode = v; }

  get isPlaying()  { return this._playing; }
  get time()       { return this._time; }
  get duration()   { return this._move?.durationSec ?? 0; }
  get fraction()   { return this.duration > 0 ? this._time / this.duration : 0; }
  get move()       { return this._move; }

  // ── rAF Loop ───────────────────────────────────────────────

  _tick() {
    if (!this._playing) return;

    const now  = performance.now();
    const dt   = (now - this._lastNow) / 1000 * this._speed;
    this._lastNow = now;

    this._time = this._time + dt;

    if (this._time >= this._move.durationSec) {
      if (this._looping) {
        this._time = this._time % this._move.durationSec;
      } else {
        this._time    = this._move.durationSec;
        this._playing = false;
        this._emit(this._time);
        this._onEnd?.();
        return;
      }
    }

    this._emit(this._time);
    this._rafId = requestAnimationFrame(() => this._tick());
  }

  // ── Interpolation ──────────────────────────────────────────

  _emit(t) {
    if (!this._move) return;
    const frame = this._interpolate(t);
    this._onFrame(frame);
  }

  _interpolate(t) {
    const kfs = this._move.keyframes;
    const out = this._frame;
    out.t = t;

    if (!kfs || kfs.length === 0) {
      out.throttle = out.yaw = out.pitch = out.roll = 0;
      return out;
    }
    if (t <= kfs[0].t)              return this._fillFrom(out, kfs[0]);
    if (t >= kfs[kfs.length - 1].t) return this._fillFrom(out, kfs[kfs.length - 1]);

    // Find surrounding pair
    let i = 0;
    while (i < kfs.length - 1 && kfs[i + 1].t <= t) i++;

    const a = kfs[i];
    const b = kfs[i + 1];

    // Neighbours for Catmull-Rom tangent calculation
    const p0 = kfs[Math.max(0, i - 1)];
    const p3 = kfs[Math.min(kfs.length - 1, i + 2)];

    const segDur = b.t - a.t;
    const u      = segDur > 0 ? (t - a.t) / segDur : 0;

    for (const ch of CHANNELS) {
      out[ch] = catmullRom(
        p0[ch] ?? a[ch],
        a[ch],
        b[ch],
        p3[ch] ?? b[ch],
        u
      );
    }

    return out;
  }

  _fillFrom(out, kf) {
    for (const ch of CHANNELS) out[ch] = kf[ch] ?? 0;
    return out;
  }
}

// ── Math helpers ───────────────────────────────────────────

// Catmull-Rom spline — smooth interpolation through control points.
// p0/p3 are the neighbours; p1/p2 are the segment endpoints; t in [0,1].
function catmullRom(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;
  return 0.5 * (
    (2 * p1) +
    (-p0 + p2) * t +
    (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
    (-p0 + 3 * p1 - 3 * p2 + p3) * t3
  );
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
