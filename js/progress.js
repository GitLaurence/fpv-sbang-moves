// ── ProgressStore ──────────────────────────────────────────
// Tracks which moves the pilot has marked as "practiced",
// persisted in localStorage so it survives across sessions.

const STORAGE_KEY = 'fpv-sbang-moves:practiced';

export class ProgressStore {
  constructor() {
    this._ids = this._load();
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...this._ids]));
    } catch {
      // localStorage unavailable (private mode / quota) — progress just won't persist
    }
  }

  isPracticed(id) {
    return this._ids.has(id);
  }

  toggle(id) {
    if (this._ids.has(id)) this._ids.delete(id);
    else this._ids.add(id);
    this._save();
    return this._ids.has(id);
  }

  count() {
    return this._ids.size;
  }
}
