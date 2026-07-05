// ── ProgressTracker ────────────────────────────────────────
// Tracks which moves the pilot has marked as "learned", persisted
// in localStorage so progress survives across sessions.

const STORAGE_KEY = 'fpv-learned-moves';

export class ProgressTracker {
  constructor(total) {
    this._total   = total;
    this._learned = this._load();
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return new Set(raw ? JSON.parse(raw) : []);
    } catch {
      return new Set();
    }
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...this._learned]));
    } catch {
      // localStorage unavailable (private mode / quota) — progress just won't persist
    }
  }

  isLearned(id) {
    return this._learned.has(id);
  }

  toggle(id) {
    if (this._learned.has(id)) this._learned.delete(id);
    else this._learned.add(id);
    this._save();
    return this._learned.has(id);
  }

  get count() { return this._learned.size; }
  get total() { return this._total; }
}
