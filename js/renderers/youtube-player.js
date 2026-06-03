// ── YouTubePlayer ──────────────────────────────────────────
// Wraps the YouTube IFrame API for move-synced video playback.
// Lazy-loads the YT script on first use. The player sits inside
// #yt-container which overlays the FPV panel.

export class YouTubePlayer {
  constructor(elementId) {
    this._elemId   = elementId;
    this._player   = null;
    this._ready    = false;
    this._offset   = 0; // seconds into YT video where move starts
    this._pending  = null;
    this._loadApi();
  }

  // ── Public API ────────────────────────────────────────────

  /** Load a move's video — cues without auto-playing */
  load(videoId, offsetSeconds = 0) {
    this._offset = offsetSeconds;
    if (!this._ready) {
      this._pending = { videoId, offsetSeconds };
      return;
    }
    this._player.cueVideoById({ videoId, startSeconds: offsetSeconds });
  }

  play(engineTime = 0) {
    if (!this._ready) return;
    this._player.seekTo(this._offset + engineTime, true);
    this._player.playVideo();
  }

  pause() {
    if (!this._ready) return;
    this._player.pauseVideo();
  }

  seek(engineTime) {
    if (!this._ready) return;
    this._player.seekTo(this._offset + engineTime, true);
  }

  setRate(rate) {
    if (!this._ready) return;
    // YT only supports specific rates: 0.25, 0.5, 1, 1.5, 2
    const allowed = [0.25, 0.5, 1, 1.5, 2];
    const clamped = allowed.reduce((prev, cur) =>
      Math.abs(cur - rate) < Math.abs(prev - rate) ? cur : prev
    );
    this._player.setPlaybackRate(clamped);
  }

  // ── Private ───────────────────────────────────────────────

  _loadApi() {
    if (window.YT?.Player) {
      this._initPlayer();
      return;
    }
    // Chain onto any existing callback
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof prev === 'function') prev();
      this._initPlayer();
    };
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const s  = document.createElement('script');
      s.src    = 'https://www.youtube.com/iframe_api';
      s.async  = true;
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
      },
    });
  }
}
