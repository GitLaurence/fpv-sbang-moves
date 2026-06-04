# FPV Sbang Moves — Codebase Audit

**Date:** 2026-06-04  
**Scope:** Full codebase review — JS logic, move data accuracy, CSS/layout, performance, accessibility, UX  
**Total findings:** 33 (2 Critical · 8 Major · 23 Minor)

---

## Severity Legend

| Icon | Severity | Definition |
|------|----------|------------|
| 🔴 | Critical | Silent breakage visible to all users right now |
| 🟠 | Major | Significant bug, notable perf hit, or broken a11y path |
| 🟡 | Minor | Small inaccuracy, dead code, or polish gap |

---

## 1 · JavaScript Bugs

### 🔴 BUG-01 — `bowtie.js` id mismatch breaks sidebar active state
**File:** `js/moves/bowtie.js:2`

The file was repurposed to hold the 360° Yaw Spin move but kept the import alias `bowtie` in `move-data.js`. The internal `id` field was changed to `'yaw-spin'`, so the sidebar card selector `[data-id="bowtie"]` never matches.

**Symptom:** Clicking the Bowtie/Yaw Spin card loads the move data but the card never receives the `active` CSS class, and `scrollIntoView` silently fails.

**Fix:**
```js
// js/moves/bowtie.js — change line 2
id: 'bowtie',   // was 'yaw-spin'
name: '360° Yaw Spin',
```
No change needed in `move-data.js`; the import alias already matches.

---

### 🟠 BUG-02 — `scrubbing` flag set but never read
**File:** `js/main.js` (scrubber `input` / `pointerdown` handlers)

`scrubbing = true` is set on `pointerdown` and cleared on `pointerup`, but the YT drift-correction block in the `onFrame` callback never checks it. During a scrub the engine time jumps sharply, which triggers the drift-correction heuristic and calls `ytPlayer.seek()` in the middle of a user drag — fighting the user.

**Fix:**
```js
// In the onFrame drift-correction block, add guard:
if (!scrubbing && _ytActive && engine.isPlaying) {
  // … existing drift correction …
}
```

---

### 🟠 BUG-04 — Keyboard resize calculates wrong percentage
**File:** `js/main.js` (resize handle `keydown` handler)

The handler adds/subtracts a pixel delta to `splitPct` directly instead of converting it to a fraction of the container height first. On a 600 px container, pressing Arrow Up once adds `8` to a value that should be in the range `[0.1, 0.9]`, jumping the split by ~1300 %.

**Fix:**
```js
const containerH = mainEl.getBoundingClientRect().height;
splitPct = clamp(splitPct + (delta / containerH), 0.1, 0.9);
```

---

### 🟡 BUG-05 — Scrubber ARIA value mismatch
**File:** `index.html` (`#scrubber` input)

`aria-valuemax="100"` but the native `max` attribute is `"1000"`. Screen readers announce the wrong maximum position.

**Fix:** Change `aria-valuemax` to `"1000"` (or better, update both to `"1"` and store fractional values).

---

### 🟡 BUG-06 — `loadMove` directly mutates private StickCamRenderer fields
**File:** `js/main.js` (`loadMove` function)

```js
stickCam._ghostTrail = [];
stickCam._recording  = false;
```
Private properties are mutated from outside the class, coupling `main.js` to `StickCamRenderer`'s internals.

**Fix:** Add a `resetGhost()` public method to `StickCamRenderer` and call that instead.

---

### 🟡 BUG-07 — Dead code in `onEnd` callback
**File:** `js/main.js` (`onEnd` handler)

```js
if (engine.isLooping && ghostEnabled) { … }
```
`onEnd` is never called when looping is active (`PlaybackEngine._tick` loops without calling `_onEnd`), so this branch is unreachable.

**Fix:** Remove the dead branch, or if ghost reset on loop-wrap is desired, handle it inside `PlaybackEngine` or detect wrap in `onFrame`.

---

### 🟡 BUG-08 — MobileSheet trigger button never updates `aria-expanded`
**File:** `js/main.js` (mobile sheet open/close logic)

The sheet overlay opens/closes but `aria-expanded` on the trigger button is never toggled, so assistive technology always announces it as collapsed.

**Fix:**
```js
triggerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
```

---

### 🟡 BUG-09 — `loadMove` errors silently swallowed in `dismissIntro`
**File:** `js/main.js` (`dismissIntro` function)

```js
try { loadMove(MOVES[0]); } catch (_) {}
```
Any error in the initial load (malformed move data, missing DOM node) is silently discarded, making first-load failures impossible to diagnose.

**Fix:** At minimum log the error: `catch (e) { console.error('[loadMove]', e); }`.

---

### 🟡 BUG-10 — `audio.update` called with stale speed when YT is active
**File:** `js/main.js` (`onFrame` callback)

When `_ytActive` is true, `fpvRenderer.sim` is not running, so `fpvRenderer.sim?.speed` returns `undefined`, and `audio.update(frame, undefined)` is called every frame. This may cause audio engine artefacts (motor whine stuck at idle).

**Fix:** Gate audio updates:
```js
if (!_ytActive) {
  audio.update(frame, fpvRenderer.sim?.speed ?? 0);
}
```

---

## 2 · Move Data Accuracy

### 🔴 DATA-01 — `bowtie.js` describes wrong move
**File:** `js/moves/bowtie.js`

`description`, `tips`, `phases`, and `keyframes` all correctly describe a 360° Yaw Spin. The filename is `bowtie.js` (a holdover), which is misleading but harmless as long as `id` is corrected (see BUG-01). The conceptual content is accurate for the Yaw Spin; no keyframe changes needed.

**Fix:** Rename file to `yaw-spin.js` and update the import in `move-data.js`, **or** keep filename and fix only `id` (simpler, recommended).

---

### 🟡 DATA-02 — `stall.js` throttle not zero during stall
**File:** `js/moves/stall.js`

Stall phase keyframes show `throttle: 0.04` instead of `0.00`. A true stall requires full throttle chop.

**Fix:** Set stall-phase keyframes to `throttle: 0.00`.

---

### 🟡 DATA-03 — `immelmann.js` top-of-loop throttle too high
**File:** `js/moves/immelmann.js`

At the inverted apex the throttle reads `0.62`, which would keep the drone flying fast through the top. A proper Immelmann has a brief throttle reduction (~`0.25`–`0.35`) at the top to allow the half-roll to complete cleanly.

**Fix:** Reduce apex throttle keyframe to `≈0.30`.

---

### 🟡 DATA-04 — `knife-edge.js` roll not held long enough
**File:** `js/moves/knife-edge.js`

The 90° bank is entered and exited within ~0.4 s total, giving no "held knife-edge" phase where the pilot demonstrates altitude maintenance with yaw/throttle only.

**Fix:** Extend the held-roll phase by 0.5–1.0 s with `roll: 1.00` and `yaw: 0.30`–`0.50` to maintain altitude.

---

### 🟡 DATA-05 — `juicy-spin.js` phase labels don't match keyframe timing
**File:** `js/moves/juicy-spin.js`

Phase timestamps declared in `phases[]` are offset by ~0.2 s from corresponding keyframe events. The phase badge will fire slightly early.

**Fix:** Align `phases[].t` values to match the nearest keyframe `t` that represents the described event.

---

### 🟡 DATA-06 — `sbang-lookback.js` missing lookback yaw phase
**File:** `js/moves/sbang-lookback.js`

The keyframes perform a standard S-bang but do not include the characteristic camera-lookback yaw input mid-flip. The move is functionally identical to `sbang.js`.

**Fix:** Add a yaw input (`yaw: 0.5`–`0.8`) keyframe during the inverted phase to simulate the lookback rotation.

---

## 3 · CSS / Layout

### 🟠 CSS-01 — Scanline `z-index` same as `#yt-container`
**File:** `styles/layout.css`

Both the scanline overlay and `#yt-container` have `z-index: 2`. Depending on DOM order the YT iframe may render above or below the scanline on some browsers.

**Fix:** Set `#scanline { z-index: 3; }` so it always renders above the video layer.

---

### 🟡 CSS-02 — No `will-change` on animated canvases
**File:** `styles/layout.css`

The stick-cam and FPV canvases are redrawn at 60 fps but lack `will-change: transform` (or `contents`), preventing the browser from promoting them to GPU-composited layers.

**Fix:**
```css
#stick-cam-canvas,
#fpv-canvas {
  will-change: contents;
}
```

---

### 🟡 CSS-03 — Daylight theme missing shadow/glow variable overrides
**File:** `styles/themes.css` (or equivalent)

The daylight theme overrides background and text colours but not `--glow-color`, `--shadow-color`, and `--border-accent`. These remain set to the dark-theme values, causing bright neon outlines that look wrong on light backgrounds.

**Fix:** Add overrides for all glow/shadow custom properties inside `.theme-day { … }`.

---

### 🟡 CSS-04 — Phase badge overflow in header
**File:** `styles/layout.css` (`#panel-header`)

`justify-content: space-between` causes the phase badge to overflow the header right edge when the label text is long (e.g. "Pull Through Bottom").

**Fix:** Add `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` to the badge element, or cap its `max-width`.

---

### 🟡 CSS-05 — Resize handle missing `:focus-visible` style
**File:** `styles/layout.css`

The resize handle div is keyboard-focusable (used by the Arrow Up/Down handler) but has no `outline` or `box-shadow` on `:focus-visible`, making keyboard navigation invisible.

**Fix:**
```css
#resize-handle:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: -2px;
}
```

---

### 🟡 CSS-06 — Mobile `#move-info` `max-height: 44px` clips long descriptions
**File:** `styles/layout.css` (mobile media query)

Move descriptions longer than ~2 lines are hard-clipped with no ellipsis. Users on small phones see a jarring cutoff.

**Fix:** Add `overflow: hidden; text-overflow: ellipsis;` and limit to `-webkit-line-clamp: 2` via a flex-column approach, or remove the hard `max-height` and rely on the parent scroll container.

---

## 4 · Performance

### 🟠 PERF-01 — `getComputedStyle` called every frame
**Files:** `js/renderers/stick-cam.js`, `js/renderers/fpv-cam.js`

Both renderers call `getComputedStyle(canvas)` inside their draw loop to read theme CSS custom properties. This forces a style recalculation on every animation frame (~60×/s).

**Fix:** Read colors once on construction and after theme change events, storing them in instance variables:
```js
_cacheThemeColors() {
  const s = getComputedStyle(this._canvas);
  this._colAccent = s.getPropertyValue('--accent').trim();
  // …
}
```
Call `_cacheThemeColors()` in the constructor and when a `themechange` CustomEvent fires.

---

### 🟠 PERF-02 — `getImageData`/`putImageData` for motion blur
**File:** `js/renderers/fpv-cam.js`

Per-frame pixel readback and write-back is extremely slow and blocks the main thread. On mid-range phones this alone can drop frame rate to 20–30 fps.

**Fix:** Replace with a CSS/canvas `globalAlpha` fade-trail approach:
```js
// At start of each frame, before drawing new content:
ctx.globalAlpha = 0.15;
ctx.fillStyle   = '#000';
ctx.fillRect(0, 0, w, h);
ctx.globalAlpha = 1.0;
// … draw new frame content …
```
No pixel readback needed; GPU handles the compositing.

---

### 🟡 PERF-03 — ResizeObserver re-queries DOM by ID
**File:** `js/main.js` (ResizeObserver callback)

`document.getElementById('stick-cam-canvas')` is called inside the observer callback, which fires on every resize. These references should be cached at startup.

**Fix:** Cache at module scope:
```js
const stickCamCanvas = document.getElementById('stick-cam-canvas');
const fpvCanvas      = document.getElementById('fpv-canvas');
```

---

### 🟡 PERF-04 — Channel-name object literal created every frame
**File:** `js/renderers/stick-cam.js`

```js
const CH = { t: 'throttle', y: 'yaw', p: 'pitch', r: 'roll' };
```
This object is re-created on every call to `draw()`. Move it to module scope as a constant.

---

### 🟡 PERF-05 — Catmull-Rom allocates `{ t }` output object every frame
**File:** `js/playback.js` (`_interpolate` method)

`const out = { t };` plus property assignment creates a new object ~60×/s. For a non-GC-heavy path, pre-allocate a reusable frame object and mutate it in place.

---

## 5 · Accessibility

### 🟠 A11Y-01 — No error state when YT video fails to embed
**File:** `js/main.js` (YT `onError` handler)

When the YouTube player fires error code `150` (embedding blocked) or `101` (video not found), the UI falls back to `ENDED` state and shows a black box with no user-facing message.

**Fix:** In the `onError` handler, set a visible error badge:
```js
ytBadge.textContent = '⚠ VIDEO UNAVAILABLE';
ytBadge.classList.add('yt-error');
```

---

### 🟠 A11Y-02 — Canvases have no text alternative
**Files:** `index.html` (`#stick-cam-canvas`, `#fpv-canvas`)

Both canvases lack `aria-label` and fallback inner text. Screen readers skip them entirely.

**Fix:**
```html
<canvas id="stick-cam-canvas" aria-label="RC transmitter stick positions for current move"></canvas>
```

---

### 🟠 A11Y-03 — Shortcuts overlay and MobileSheet don't trap focus
**File:** `js/main.js`

When the keyboard shortcuts modal or mobile info sheet is open, Tab focus escapes to background controls. This is a WCAG 2.1 failure (SC 2.1.2).

**Fix:** Implement a `trapFocus(el)` utility that intercepts Tab/Shift-Tab and keeps focus within the open overlay; release the trap on close.

---

### 🟡 A11Y-04 — No focus restoration on modal close
**File:** `js/main.js`

When the shortcuts modal closes, focus is not returned to the button that opened it.

**Fix:** Store `document.activeElement` before opening, restore after close:
```js
const opener = document.activeElement;
// … on close:
opener?.focus();
```

---

### 🟡 A11Y-05 — Move cards not keyboard-activatable
**File:** `index.html` (sidebar move cards)

Cards are `<div>` elements with `tabindex="0"` but handle only `click`. Pressing Enter or Space does nothing.

**Fix:** Add `keydown` listener:
```js
card.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
});
```

---

### 🟡 A11Y-06 — Live region missing for playback state announcements
**File:** `index.html`

Play/pause/seek actions have no `aria-live` region, so screen reader users get no feedback when playback state changes.

**Fix:** Add a visually-hidden live region and update it on state change:
```html
<div id="sr-status" aria-live="polite" class="sr-only"></div>
```
```js
srStatus.textContent = engine.isPlaying ? 'Playing' : 'Paused';
```

---

## 6 · UX Gaps

### 🟠 UX-01 — No error state when YT video fails to load
*(See A11Y-01 above — same root cause, both UX and accessibility impact)*

---

### 🟡 UX-02 — Ghost recording not restarted after `skipToStart`
**File:** `js/main.js`

`engine.skipToStart()` resets playback time but does not clear the ghost trail buffer. Replaying from the start overlays a stale ghost from the previous run.

**Fix:** Call `stickCam.resetGhost()` (public method per BUG-06 fix) inside the skip-to-start handler.

---

### 🟡 UX-03 — Speed pill hidden on mobile hides 0.5× option
**File:** `styles/controls.css` (mobile query)

The `.speed-pill` is shown via `display: flex !important` but overflows off-screen on 360 px wide phones because the scrubber takes full width on the second row.

**Fix:** Switch to a `<select>` speed control on mobile, or use a horizontally scrollable pill row with `overflow-x: auto`.

---

### 🟡 UX-04 — No visual feedback during initial YT API load
**File:** `js/main.js`

Between page load and `onYouTubeIframeAPIReady` firing (can be 1–3 s on slow connections), the YT panel shows a blank black area with no loading indicator.

**Fix:** Show a `⏳ LOADING…` badge state immediately in HTML, then clear it once `_ytReady` fires.

---

### 🟡 UX-05 — Loop toggle state not persisted across move changes
**File:** `js/main.js` (`loadMove`)

`loadMove` does not reset `engine.isLooping`, so if loop was enabled for one move it stays enabled for the next. This is inconsistent — loops are per-move by convention but behave globally.

**Fix:** Either reset loop to `false` in `loadMove`, or intentionally persist it and document the behaviour.

---

### 🟡 UX-06 — Selecting a move while playing doesn't restart video from zero
**File:** `js/main.js` (`loadMove`)

When a move is selected mid-playback, `engine.load()` resets time to `0` but `ytPlayer.load()` calls `cueVideoById` (not `seekTo 0`). The video cues from `youtubeStart` offset correctly, but if the same video is already loaded it may resume from its last position.

**Fix:** After `ytPlayer.load()`, explicitly call `ytPlayer.seek(0)` to force the video back to offset `0`.

---

## Recommended Fix Order

| Priority | ID | File | Effort |
|----------|----|------|--------|
| 1 | BUG-01 | `js/moves/bowtie.js:2` | 1 line |
| 2 | BUG-04 | `js/main.js` resize handler | 3 lines |
| 3 | BUG-02 | `js/main.js` onFrame | 2 lines |
| 4 | PERF-01 | `js/renderers/stick-cam.js`, `fpv-cam.js` | ~20 lines |
| 5 | PERF-02 | `js/renderers/fpv-cam.js` | ~10 lines |
| 6 | CSS-01 | `styles/layout.css` | 1 line |
| 7 | A11Y-01 / UX-01 | `js/main.js` onError | ~5 lines |
| 8 | A11Y-03 | `js/main.js` modals | ~30 lines |
| 9 | BUG-10 | `js/main.js` audio gate | 3 lines |
| 10 | BUG-07 | `js/main.js` dead code | delete 3 lines |
