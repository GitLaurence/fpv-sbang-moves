// ── MobileSheet ────────────────────────────────────────────
// Bottom sheet for move selection on mobile (< 768px).
// Clones the sidebar move list into a slide-up panel.

export class MobileSheet {
  constructor(onMoveSelect) {
    this._onSelect = onMoveSelect;
    this._sheet    = null;
    this._backdrop = null;
    this._trigger  = null;
    this._opener   = null;
    this._build();
  }

  open() {
    this._sync();
    this._opener = document.activeElement;
    this._backdrop.classList.add('visible');
    this._sheet.classList.add('open');
    this._trigger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    this._sheet.querySelector('.mobile-sheet-list')?.focus();
    document.addEventListener('keydown', this._onTrapKey);
  }

  close() {
    this._backdrop.classList.remove('visible');
    this._sheet.classList.remove('open');
    this._trigger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', this._onTrapKey);
    this._opener?.focus();
  }

  toggle() {
    this._sheet.classList.contains('open') ? this.close() : this.open();
  }

  // Trap Tab/Shift-Tab focus inside the open sheet (WCAG 2.1.2)
  _onTrapKey = (e) => {
    if (e.key !== 'Tab') return;
    const focusable = this._sheet.querySelectorAll(
      'button, [href], input, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  };

  markActive(moveId) {
    this._sheet.querySelectorAll('.mobile-move-row').forEach(row => {
      row.classList.toggle('active', row.dataset.id === moveId);
    });
  }

  // ── Build ─────────────────────────────────────────────────

  _build() {
    // Backdrop
    const bd = document.createElement('div');
    bd.className = 'mobile-sheet-backdrop';
    bd.addEventListener('click', () => this.close());
    document.body.appendChild(bd);
    this._backdrop = bd;

    // Sheet
    const sheet = document.createElement('div');
    sheet.id        = 'mobile-sheet';
    sheet.className = 'mobile-sheet';
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-label', 'Listahan ng moves');
    sheet.setAttribute('aria-modal', 'true');

    sheet.innerHTML = `
      <div class="mobile-sheet-handle"></div>
      <div class="mobile-sheet-header">
        <span class="mobile-sheet-title">FREESTYLE MOVES</span>
        <button class="mobile-sheet-close" aria-label="Isara">✕</button>
      </div>
      <div class="mobile-sheet-list" tabindex="-1"></div>`;

    sheet.querySelector('.mobile-sheet-close')
         .addEventListener('click', () => this.close());

    // Swipe down to close
    let startY = 0;
    sheet.addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
    sheet.addEventListener('touchmove',  e => {
      const dy = e.touches[0].clientY - startY;
      if (dy > 60) this.close();
    }, { passive: true });

    document.body.appendChild(sheet);
    this._sheet = sheet;

    // Wire mobile button
    this._trigger = document.getElementById('mobile-moves-btn');
    this._trigger?.addEventListener('click', () => this.toggle());

    // Escape to close
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this._sheet.classList.contains('open')) this.close();
    });
  }

  // ── Sync move list ────────────────────────────────────────

  _sync() {
    const list = this._sheet.querySelector('.mobile-sheet-list');
    list.innerHTML = '';

    // Copy structure from main sidebar
    const groups = document.querySelectorAll('#move-list .category-group');
    groups.forEach(group => {
      const level = group.dataset.level;

      const header = document.createElement('div');
      header.className = 'mobile-cat-header';
      header.innerHTML = group.querySelector('.category-label span')?.textContent ?? level;
      list.appendChild(header);

      group.querySelectorAll('.move-card').forEach(card => {
        const id   = card.dataset.id;
        const name = card.querySelector('.move-card-name')?.textContent ?? '';
        const dur  = card.querySelector('.move-card-duration')?.textContent ?? '';
        const dots = card.querySelector('.diff-dots')?.innerHTML ?? '';

        const row = document.createElement('div');
        row.className     = `mobile-move-row ${card.classList.contains('active') ? 'active' : ''}`;
        row.dataset.id    = id;
        row.dataset.level = level;
        row.setAttribute('role', 'button');
        row.setAttribute('tabindex', '0');
        row.innerHTML = `
          <div class="mobile-move-bar"></div>
          <div class="mobile-move-body">
            <span class="mobile-move-name">${name}</span>
            <div class="mobile-move-meta">
              <div class="diff-dots">${dots}</div>
              <span class="move-card-duration">${dur}</span>
            </div>
          </div>
          <span class="mobile-move-arrow">›</span>`;

        row.addEventListener('click', () => {
          this._onSelect(id);
          this.close();
        });
        row.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); row.click(); }
        });

        list.appendChild(row);
      });
    });
  }
}
