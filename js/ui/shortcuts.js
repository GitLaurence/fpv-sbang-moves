// ── ShortcutsOverlay ───────────────────────────────────────
// Shows a keyboard shortcut reference on '?' keypress.
// Dismiss with Escape or clicking outside.

import { trapFocus } from './focus-trap.js';

const SHORTCUTS = [
  { keys: ['Space'],          desc: 'Play / Pause' },
  { keys: ['←', '→'],        desc: 'Mag-step ng isang frame' },
  { keys: ['Home'],           desc: 'Bumalik sa simula' },
  { keys: ['End'],            desc: 'Pumunta sa dulo' },
  { keys: ['[', ']'],         desc: 'Baguhin ang playback speed' },
  { keys: ['L'],              desc: 'I-toggle ang loop mode' },
  { keys: ['J', 'K'],         desc: 'Sunod / nakaraang move' },
  { keys: ['R'],              desc: 'Random na move' },
  { keys: ['M'],              desc: 'I-mute / i-unmute ang audio' },
  { keys: ['G'],              desc: 'I-toggle ang ghost trail' },
  { keys: ['/'],              desc: 'I-focus ang search box' },
  { keys: ['?'],              desc: 'Ipakita / itago ang shortcut list' },
];

export class ShortcutsOverlay {
  constructor() {
    this._overlay      = null;
    this._releaseTrap  = null;
    this._opener       = null;
    this._build();
    this._bindKeys();
  }

  toggle() {
    this._overlay.classList.contains('visible') ? this.hide() : this.show();
  }

  show() {
    this._opener = document.activeElement;
    this._overlay.classList.add('visible');
    this._releaseTrap = trapFocus(this._overlay);
    this._overlay.querySelector('.shortcuts-close')?.focus();
  }

  hide() {
    if (!this._overlay.classList.contains('visible')) return;
    this._overlay.classList.remove('visible');
    this._releaseTrap?.();
    this._releaseTrap = null;
    this._opener?.focus();
    this._opener = null;
  }

  // ── Build ─────────────────────────────────────────────────

  _build() {
    const el = document.createElement('div');
    el.id        = 'shortcuts-overlay';
    el.className = 'shortcuts-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Mga keyboard shortcut');
    el.setAttribute('aria-modal', 'true');

    el.innerHTML = `
      <div class="shortcuts-card">
        <div class="shortcuts-header">
          <span class="shortcuts-title">KEYBOARD SHORTCUTS</span>
          <button class="shortcuts-close" aria-label="Isara">✕</button>
        </div>
        <div class="shortcuts-list">
          ${SHORTCUTS.map(s => `
            <div class="shortcut-row">
              <div class="shortcut-keys">
                ${s.keys.map(k => `<kbd>${k}</kbd>`).join('<span class="shortcut-plus">+</span>')}
              </div>
              <span class="shortcut-desc">${s.desc}</span>
            </div>`).join('')}
        </div>
        <div class="shortcuts-footer">
          Pindutin ang <kbd>?</kbd> para itago
        </div>
      </div>`;

    document.body.appendChild(el);
    this._overlay = el;

    // Close on backdrop click
    el.addEventListener('click', e => {
      if (e.target === el) this.hide();
    });

    // Close button
    el.querySelector('.shortcuts-close').addEventListener('click', () => this.hide());

    // Add ? button to controls bar
    const controls = document.getElementById('controls');
    if (controls) {
      const btn = document.createElement('button');
      btn.className   = 'ctrl-toggle';
      btn.id          = 'btn-shortcuts';
      btn.title       = 'Mga shortcut (?)';
      btn.setAttribute('aria-label', 'Ipakita ang mga keyboard shortcut');
      btn.innerHTML   = '<span style="font-size:13px;font-weight:600;font-family:var(--font-osd)">?</span>';
      btn.addEventListener('click', () => this.toggle());
      controls.appendChild(btn);
    }
  }

  _bindKeys() {
    document.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT') return;
      if (e.key === '?') { e.preventDefault(); this.toggle(); }
      if (e.key === 'Escape') this.hide();
    });
  }
}
