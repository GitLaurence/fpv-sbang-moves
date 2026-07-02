// ── Focus Trap ─────────────────────────────────────────────
// Keeps Tab/Shift-Tab focus cycling within a modal container
// while it's open (WCAG 2.1 SC 2.1.2). See A11Y-03.

const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/** Trap Tab focus within `container`. Returns a cleanup function. */
export function trapFocus(container) {
  function onKeydown(e) {
    if (e.key !== 'Tab') return;

    const focusables = [...container.querySelectorAll(FOCUSABLE)]
      .filter(el => el.offsetParent !== null);
    if (focusables.length === 0) return;

    const first = focusables[0];
    const last  = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  container.addEventListener('keydown', onKeydown);
  return () => container.removeEventListener('keydown', onKeydown);
}
