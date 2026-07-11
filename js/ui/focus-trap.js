// ── Focus Trap ─────────────────────────────────────────────
// Keeps Tab/Shift-Tab focus inside a container while it's open
// (WCAG 2.1 SC 2.1.2) and restores focus to the opener on release.

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function trapFocus(container) {
  const opener = document.activeElement;

  function getFocusable() {
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR))
      .filter(el => el.offsetParent !== null);
  }

  function onKeydown(e) {
    if (e.key !== 'Tab') return;
    const focusable = getFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  container.addEventListener('keydown', onKeydown);

  return {
    release() {
      container.removeEventListener('keydown', onKeydown);
      opener?.focus?.();
    },
  };
}
