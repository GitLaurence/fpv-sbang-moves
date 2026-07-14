// ── YouTubePlayer ──────────────────────────────────────────
// Wraps the YouTube IFrame API for move-synced video playback.
// Lazy-loads the YT script on first use.

export class YouTubePlayer {
  constructor(elementId) {
    this._elemId      = elementId;
    this._player      = null;
    this._ready       = false;
    this._offset      = 0;     // seconds into YT video where the move starts
    this._videoId     = null;  // currently loaded video ID
    this._pending     = null;  // load request queued before API was ready
    this._onState     = null;  // external state-change callback
    this._onError     = null;  // external error callback
    this._loadApi();
  }

  // ── Public API ────────────────────────────────────────────

  /** Cue a move's video without auto-playing */
  load(videoId, offsetSeconds = 0) {
    this._offset  = offsetSeconds;
    this._videoId = videoId;
    if (!this._ready) {
      this._pending = { videoId, offsetSeconds };
      return;
    }
    this._player.cueVideoById({ videoId, startSeconds: offsetSeconds });
  }

  play(engineTime = 0) {
    if (!this._ready || !this._videoId) return;
    this._player.seekTo(this._offset + engineTime, true);
    this._player.playVideo();
  }

  pause() {
    if (!this._ready) return;
    // pauseVideo is safe to call in any player state
    try { this._player.pauseVideo(); } catch (_) {}
  }

  seek(engineTime) {
    if (!this._ready) return;
    this._player.seekTo(this._offset + engineTime, true);
  }

  setRate(rate) {
    if (!this._ready) return;
    const allowed = [0.25, 0.5, 1, 1.5, 2];
    const clamped = allowed.reduce((prev, cur) =>
      Math.abs(cur - rate) < Math.abs(prev - rate) ? cur : prev
    );
    this._player.setPlaybackRate(clamped);
  }

  /** Engine-relative time (YT currentTime − offset), or null if not ready */
  currentTime() {
    if (!this._ready) return null;
    return this._player.getCurrentTime() - this._offset;
  }

  /** YT.PlayerState: -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued */
  getState() {
    if (!this._ready) return -1;
    try { return this._player.getPlayerState(); } catch (_) { return -1; }
  }

  /** Register a callback fired on every YT state change — cb(ytPlayerState) */
  onStateChange(cb) { this._onState = cb; }

  /** Register a callback fired when YT reports a playback error — cb(errorCode) */
  onError(cb) { this._onError = cb; }

  // ── Private ───────────────────────────────────────────────

  _loadApi() {
    if (window.YT?.Player) { this._initPlayer(); return; }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof prev === 'function') prev();
      this._initPlayer();
    };
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const s = document.createElement('script');
      s.src   = 'https://www.youtube.com/iframe_api';
      s.async = true;
      document.head.appendChild(s);
    }
  }

  _initPlayer() {
    this._player = new YT.Player(this._elemId, {
      width:  '100%',
      height: '100%',
      playerVars: {
        controls:       0,
        disablekb:      1,
        modestbranding: 1,
        rel:            0,
        iv_load_policy: 3,
        playsinline:    1,
        origin:         location.origin,
      },
      events: {
        onReady: () => {
          this._ready = true;
          if (this._pending) {
            this.load(this._pending.videoId, this._pending.offsetSeconds);
            this._pending = null;
          }
        },
        onStateChange: (ev) => {
          if (this._onState) this._onState(ev.data);
        },
        onError: (ev) => {
          // On error (150=embed-blocked, 101=not found, 5=HTML5 error) notify
          // the state handler with a synthetic ENDED(0) so the UI doesn't hang,
          // plus a dedicated error callback so the UI can show a visible message.
          console.warn('[YT] player error', ev.data);
          if (this._onError) this._onError(ev.data);
          if (this._onState) this._onState(0);
        },
      },
    });
  }
}
