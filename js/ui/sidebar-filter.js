// ── SidebarFilter ──────────────────────────────────────────
// Adds a search input + difficulty filter chips to the sidebar.
// Filters move cards in real time without touching the DOM of
// cards that don't match.

const LEVEL_ORDER = ['beginner', 'intermediate', 'advanced', 'pro'];

export class SidebarFilter {
  constructor(moveListEl) {
    this._list    = moveListEl;
    this._query   = '';
    this._level   = null; // null = show all

    this._buildUI();
  }

  // ── Build filter UI ───────────────────────────────────────

  _buildUI() {
    const sidebar = document.getElementById('sidebar');
    const header  = sidebar.querySelector('.sidebar-header');

    // Search row
    const searchRow = document.createElement('div');
    searchRow.className = 'sidebar-search-row';
    searchRow.innerHTML = `
      <div class="sidebar-search-wrap">
        <svg class="sidebar-search-icon" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
        <input type="search" id="sidebar-search"
               placeholder="Hanapin ang move…"
               autocomplete="off"
               aria-label="Hanapin ang move" />
        <button class="sidebar-search-clear" id="sidebar-search-clear"
                aria-label="I-clear ang search" hidden>✕</button>
      </div>`;

    // Difficulty filter chips
    const chips = document.createElement('div');
    chips.className = 'sidebar-chips';
    chips.setAttribute('role', 'group');
    chips.setAttribute('aria-label', 'I-filter ayon sa difficulty');
    chips.innerHTML = `
      <button class="sidebar-chip active" data-level="" aria-pressed="true">Lahat</button>
      <button class="sidebar-chip" data-level="beginner"     aria-pressed="false">Simula</button>
      <button class="sidebar-chip" data-level="intermediate" aria-pressed="false">Katamtaman</button>
      <button class="sidebar-chip" data-level="advanced"     aria-pressed="false">Mahirap</button>
      <button class="sidebar-chip" data-level="pro"          aria-pressed="false">Pro</button>`;

    // Insert after header
    header.insertAdjacentElement('afterend', chips);
    header.insertAdjacentElement('afterend', searchRow);

    // Wire events
    const input = document.getElementById('sidebar-search');
    const clear = document.getElementById('sidebar-search-clear');

    input.addEventListener('input', () => {
      this._query = input.value.trim().toLowerCase();
      clear.hidden = !this._query;
      this._applyFilter();
    });

    clear.addEventListener('click', () => {
      input.value  = '';
      this._query  = '';
      clear.hidden = true;
      this._applyFilter();
      input.focus();
    });

    chips.querySelectorAll('.sidebar-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        this._level = chip.dataset.level || null;
        chips.querySelectorAll('.sidebar-chip').forEach(c => {
          c.classList.toggle('active', c === chip);
          c.setAttribute('aria-pressed', String(c === chip));
        });
        this._applyFilter();
      });
    });

    // Hook the existing filter button to focus search
    document.getElementById('btn-filter')?.addEventListener('click', () => {
      input.focus();
    });
  }

  // ── Filter Logic ──────────────────────────────────────────

  _applyFilter() {
    const groups = this._list.querySelectorAll('.category-group');

    groups.forEach(group => {
      const groupLevel = group.dataset.level;
      const levelMatch = !this._level || groupLevel === this._level;

      let visibleCards = 0;

      group.querySelectorAll('.move-card').forEach(card => {
        const name = card.querySelector('.move-card-name')?.textContent.toLowerCase() ?? '';
        const desc = card.querySelector('.move-card-desc')?.textContent.toLowerCase() ?? '';
        const textMatch = !this._query || name.includes(this._query) || desc.includes(this._query);
        const show = levelMatch && textMatch;

        card.style.display = show ? '' : 'none';
        if (show) visibleCards++;
      });

      // Hide entire category group if no cards visible
      group.style.display = visibleCards > 0 ? '' : 'none';
    });

    // Show empty state if nothing matches
    let emptyState = this._list.querySelector('.sidebar-empty');
    const totalVisible = [...this._list.querySelectorAll('.move-card')]
      .filter(c => c.style.display !== 'none').length;

    if (totalVisible === 0) {
      if (!emptyState) {
        emptyState = document.createElement('div');
        emptyState.className = 'sidebar-empty';
        emptyState.innerHTML = `
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style="opacity:0.2">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <span>Walang nahanap</span>`;
        this._list.appendChild(emptyState);
      }
      emptyState.style.display = 'flex';
    } else if (emptyState) {
      emptyState.style.display = 'none';
    }
  }
}
