// ── PhaseTracker ───────────────────────────────────────────
// Highlights the current phase label on the scrubber as
// playback progresses, and shows a phase badge in the
// FPV panel header.

export class PhaseTracker {
  constructor() {
    this._move        = null;
    this._lastPhaseIdx = -1;
    this._badge       = this._buildBadge();
  }

  load(move) {
    this._move         = move;
    this._lastPhaseIdx = -1;
    this._updateBadge(null);
    this._highlightPhase(-1);
  }

  update(t) {
    if (!this._move?.phases?.length) return;

    const phases = this._move.phases;
    let idx = 0;
    for (let i = 0; i < phases.length; i++) {
      if (t >= phases[i].t) idx = i;
    }

    if (idx === this._lastPhaseIdx) return;
    this._lastPhaseIdx = idx;

    this._highlightPhase(idx);
    this._updateBadge(phases[idx]);
  }

  // ── DOM Updates ───────────────────────────────────────────

  _highlightPhase(activeIdx) {
    document.querySelectorAll('.scrubber-phase').forEach((el, i) => {
      el.classList.toggle('active', i === activeIdx);
    });
  }

  _buildBadge() {
    const header = document.getElementById('fpv-header');
    if (!header) return null;

    const badge = document.createElement('div');
    badge.id        = 'phase-badge';
    badge.className = 'phase-badge';
    badge.setAttribute('aria-live', 'polite');
    badge.setAttribute('aria-label', 'Current phase');
    header.appendChild(badge);
    return badge;
  }

  _updateBadge(phase) {
    if (!this._badge) return;

    if (!phase) {
      this._badge.textContent = '';
      this._badge.classList.remove('visible');
      return;
    }

    if (this._badge.textContent !== phase.label) {
      this._badge.classList.remove('pop');
      void this._badge.offsetWidth;
      this._badge.classList.add('pop');
    }

    this._badge.textContent = phase.label.toUpperCase();
    this._badge.classList.add('visible');
  }
}
