// ── InfoPanel ──────────────────────────────────────────────
// Manages the move info panel: name, description, difficulty,
// tips carousel, and channel usage bars.

const CHANNELS = [
  { key: 'throttle', label: 'T', cssVar: 'accent-throttle', name: 'Throttle' },
  { key: 'yaw',      label: 'Y', cssVar: 'accent-yaw',      name: 'Yaw'      },
  { key: 'pitch',    label: 'P', cssVar: 'accent-pitch',     name: 'Pitch'    },
  { key: 'roll',     label: 'R', cssVar: 'accent-roll',      name: 'Roll'     },
];

export class InfoPanel {
  constructor() {
    this._panel    = document.getElementById('move-info');
    this._name     = document.getElementById('info-name');
    this._desc     = document.getElementById('info-desc');
    this._dots     = document.getElementById('info-dots');
    this._duration = document.getElementById('info-duration');
    this._tips     = document.getElementById('info-tips');

    // Channel usage bars — injected once
    this._channelWrap = null;
    this._buildChannelBars();

    this._currentTipIdx = 0;
    this._tipTimer      = null;
  }

  // ── Public ────────────────────────────────────────────────

  load(move, levelLabel) {
    this._clearTipTimer();

    // Slide out briefly then back in
    this._panel.classList.remove('visible');
    requestAnimationFrame(() => {
      this._fill(move, levelLabel);
      requestAnimationFrame(() => this._panel.classList.add('visible'));
    });
  }

  // ── Fill ──────────────────────────────────────────────────

  _fill(move, levelLabel) {
    this._name.textContent     = move.name;
    this._desc.textContent     = move.description;
    this._duration.textContent = `${move.durationSec}s`;

    // Difficulty dots + level badge
    this._dots.innerHTML =
      Array.from({ length: 5 }, (_, i) =>
        `<div class="diff-dot ${i < move.difficulty ? 'filled' : ''}"></div>`
      ).join('') +
      `<span class="info-level-badge">${levelLabel}</span>`;

    // Tips — show first, rotate every 5s
    this._currentTipIdx = 0;
    this._showTip(move.tips, 0);
    if (move.tips.length > 1) {
      this._tipTimer = setInterval(() => {
        this._currentTipIdx = (this._currentTipIdx + 1) % move.tips.length;
        this._showTip(move.tips, this._currentTipIdx);
      }, 5000);
    }

    // Channel usage
    this._updateChannelBars(move);
  }

  _showTip(tips, idx) {
    this._tips.innerHTML = tips.map((tip, i) =>
      `<span class="info-tip ${i === idx ? 'active' : ''}">${tip}</span>`
    ).join('');
  }

  // ── Channel Usage Bars ────────────────────────────────────

  _buildChannelBars() {
    const panel = this._panel;

    const wrap = document.createElement('div');
    wrap.className = 'info-channels';
    wrap.setAttribute('aria-label', 'Channel usage');

    wrap.innerHTML = CHANNELS.map(ch => `
      <div class="info-ch" data-ch="${ch.key}">
        <span class="info-ch-label" style="color:var(--${ch.cssVar})">${ch.label}</span>
        <div class="info-ch-track">
          <div class="info-ch-fill" id="ch-fill-${ch.key}"
               style="background:var(--${ch.cssVar})"></div>
        </div>
        <span class="info-ch-pct" id="ch-pct-${ch.key}">0%</span>
      </div>`
    ).join('');

    panel.appendChild(wrap);
    this._channelWrap = wrap;
  }

  _updateChannelBars(move) {
    const kfs = move.keyframes;
    if (!kfs?.length) return;

    // Average absolute deflection per channel, 0–1
    const sums = { throttle: 0, yaw: 0, pitch: 0, roll: 0 };
    for (const kf of kfs) {
      for (const ch of CHANNELS) sums[ch.key] += Math.abs(kf[ch.key] ?? 0);
    }

    for (const ch of CHANNELS) {
      const avg  = sums[ch.key] / kfs.length;
      const pct  = Math.round(avg * 100);
      const fill = document.getElementById(`ch-fill-${ch.key}`);
      const label = document.getElementById(`ch-pct-${ch.key}`);
      if (!fill || !label) continue;

      // Animate width
      fill.style.width = '0%';
      requestAnimationFrame(() => {
        fill.style.transition = 'width 0.6s cubic-bezier(0.16,1,0.3,1)';
        fill.style.width      = `${pct}%`;
      });
      label.textContent = `${pct}%`;
    }
  }

  _clearTipTimer() {
    if (this._tipTimer) { clearInterval(this._tipTimer); this._tipTimer = null; }
  }
}
