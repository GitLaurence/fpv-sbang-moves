# FPV Freestyle Moves Tutorial App

An interactive web app that teaches FPV freestyle moves using synchronized dual-view playback — a stick cam (RC transmitter input visualization) alongside an FPV camera view.

---

## Concept

Each tutorial shows two panels side by side:

- **Stick Cam** — animated RC transmitter sticks showing exact stick inputs in real time
- **FPV Cam** — a simulated or recorded FPV camera view of the drone executing the move

The user can step through moves, slow down playback, and see how stick inputs map to drone behavior.

---

## Tech Stack

- Pure HTML5, CSS3, JavaScript (ES modules, no frameworks)
- Canvas API — for rendering stick inputs and FPV camera simulation
- Web Animations API — for smooth, controllable playback
- CSS Custom Properties + Grid/Flexbox — for layout and theming

---

## App Structure

```
fpv-sbang-moves/
├── index.html              # Shell — layout, panels, move list sidebar
├── styles/
│   ├── reset.css
│   ├── tokens.css          # Design tokens — colors, spacing, typography, effects
│   ├── layout.css          # Two-panel layout, sidebar, responsive
│   ├── sidebar.css         # Move cards, difficulty badges, category groups
│   ├── hud.css             # FPV HUD overlays (horizon, battery, OSD elements)
│   ├── stick-cam.css       # Stick cam panel chrome and glow effects
│   ├── controls.css        # Playback bar, speed selector, buttons
│   └── animations.css      # Keyframe animations, transitions, micro-interactions
├── js/
│   ├── main.js             # App init, routing between moves
│   ├── moves/
│   │   ├── move-data.js    # Move definitions (keyframes, metadata)
│   │   ├── split-s.js      # Split-S move
│   │   ├── power-loop.js   # Power Loop
│   │   ├── matty-flip.js   # Matty Flip
│   │   └── ...             # One file per move
│   ├── renderers/
│   │   ├── stick-cam.js    # Draws TX sticks on Canvas
│   │   ├── fpv-cam.js      # Simulates FPV camera view on Canvas
│   │   └── effects.js      # Lens distortion, scanlines, noise, prop wash
│   ├── playback.js         # Timeline engine — drive keyframes at any speed
│   └── hud.js              # Draws FPV HUD overlays (horizon bar, speed, etc.)
└── assets/
    ├── fonts/              # Bebas Neue (headings), JetBrains Mono (OSD/HUD)
    ├── icons/              # SVG icons for UI controls
    └── sounds/             # Optional: arm beep, motor whine, wind on throttle
```

---

## Implementation Plan

### Phase 1 — Shell, Tokens & Layout

**Goal:** Get the two-panel layout on screen with placeholder canvases and all design tokens in place.

1. `tokens.css` — all CSS custom properties (colors, fonts, glow effects, transitions) defined upfront so every subsequent file references them
2. `index.html` — semantic layout:
   - Left sidebar: move list (`<nav>`)
   - Main area: two `<canvas>` elements side by side (stick cam | FPV cam) with a draggable resize handle
   - Bottom: fixed playback controls bar
3. `layout.css` — CSS Grid, dark void background, panel borders and inset glows
4. `sidebar.css` — move card base styles, difficulty bar colors, category headers
5. `controls.css` — custom-styled range input (scrubber), play/pause circle button, speed pill group
6. `animations.css` — all `@keyframes` and transition classes (card hover lift, button ripple, panel fade-in)
7. Verify layout renders at desktop, tablet, and mobile widths with correct token application

---

### Phase 2 — Stick Cam Renderer

**Goal:** Draw RC transmitter sticks that animate based on keyframe data.

**Stick cam canvas elements:**
- Two circular gimbals (left = throttle/yaw, right = pitch/roll)
- Center dot per gimbal showing stick position
- Axes lines and outer circle ring
- Labels: T, Y, P, R

**Data format for a single frame:**
```js
{
  t: 0.0,         // time in seconds
  throttle: 0.5,  // -1 to 1 (left stick vertical)
  yaw: 0.0,       // -1 to 1 (left stick horizontal)
  pitch: 0.0,     // -1 to 1 (right stick vertical)
  roll: 0.0       // -1 to 1 (right stick horizontal)
}
```

**`stick-cam.js` responsibilities:**
- `StickCamRenderer(canvas)` — sets up canvas context
- `render(frame)` — draws both sticks for a given frame object
- Smooth interpolation between keyframes via `lerp()`

---

### Phase 3 — FPV Camera Renderer

**Goal:** Simulate the look of an FPV camera based on drone attitude derived from stick inputs.

**Simulated elements:**
- Sky/ground split — tilts with roll, pitches with pitch
- Horizon line
- Motion blur effect (CSS filter or canvas alpha trails) proportional to speed
- Optional: grid overlay, prop wash shimmer effect

**`fpv-cam.js` responsibilities:**
- `FpvCamRenderer(canvas)` — sets up canvas
- `render(state)` — draws frame given `{ roll, pitch, yaw, throttle, speed }`
- Sky gradient (bright daytime or night mode)
- Ground gradient (green/brown)
- Artificial horizon line with roll/pitch transformation
- HUD overlay pass (delegates to `hud.js`)

**`hud.js`:**
- Battery percentage (simulated drain over move duration)
- Video timer
- Speed readout (simulated m/s)
- RSSI bars
- OSD-style monospace font, semi-transparent

---

### Phase 4 — Move Data & Keyframe System

**Goal:** Define moves as keyframe arrays and interpolate between them.

**Move definition:**
```js
export const splitS = {
  id: 'split-s',
  name: 'Split-S',
  difficulty: 2,           // 1–5
  durationSec: 3.5,
  description: 'Rolls inverted then pulls through a half loop downward.',
  tips: [
    'Lead with roll, not pitch',
    'Carry speed into the move',
    'Pull timing determines exit altitude'
  ],
  keyframes: [
    { t: 0.0, throttle: 0.7, yaw: 0, pitch: 0,    roll: 0    },
    { t: 0.5, throttle: 0.7, yaw: 0, pitch: 0,    roll: 1.0  }, // full roll input
    { t: 1.0, throttle: 0.7, yaw: 0, pitch: 0,    roll: 0    }, // inverted
    { t: 1.2, throttle: 0.4, yaw: 0, pitch: -1.0, roll: 0    }, // pull
    { t: 3.0, throttle: 0.6, yaw: 0, pitch: 0,    roll: 0    }, // exit
  ]
};
```

**`playback.js`:**
- `PlaybackEngine(moveData, onFrame)` — drives the timeline
- `play()`, `pause()`, `seek(t)`, `setSpeed(multiplier)`
- Uses `requestAnimationFrame` — wall-clock delta times scaled by speed multiplier
- Calls `onFrame(interpolatedFrame)` each tick
- Interpolates between surrounding keyframes using linear (or cubic) interpolation

---

### Phase 5 — Move Library

Implement these moves as keyframe data files (one per move):

| Move | Difficulty | Description |
|---|---|---|
| Split-S | ★★☆☆☆ | Roll inverted, pull half loop |
| Power Loop | ★★★☆☆ | Full vertical loop over an obstacle |
| Matty Flip | ★★★☆☆ | Nose-down flip to inverted, roll upright |
| Juicy Spin | ★★★★☆ | Flat yaw spin with throttle management |
| Knife Edge | ★★★☆☆ | 90° roll sustained on axis |
| Trippy Spin | ★★★★☆ | Diagonal corkscrewing roll |
| Bowtie | ★★★★☆ | Figure-8 with inverted segments |
| Sbang | ★★★★★ | Inverted yaw spin reversal |

Each move gets a dedicated file in `js/moves/` with its keyframe data exported.

---

### Phase 6 — UI & Navigation

**Goal:** Polish the sidebar, playback bar, and move info panel.

- Sidebar lists all moves with difficulty stars and click-to-load
- Active move highlighted
- Move info panel below canvases: name, difficulty, description, tips list
- Playback bar: scrubber (input range), play/pause toggle, speed buttons
- Keyboard shortcuts: `Space` = play/pause, `←`/`→` = step frame, `[`/`]` = speed

---

### Phase 7 — Visual Effects & Atmosphere

**Goal:** Layer in the cinematic FPV effects that make the sim feel real.

- **Vignette + fisheye** — permanent dark oval over FPV canvas, CSS `perspective` barrel distortion
- **Motion blur** — persistence trail on high-speed frames (prev frame at 20% alpha)
- **Chromatic aberration** — double-draw with red/cyan offset on max-deflection moments
- **Prop wash shimmer** — corner radial flicker on rapid pitch changes
- **Scanline + noise overlay** — CRT scanlines at 4%, random pixel noise re-randomized every 8 frames
- **OSD simulation** — battery drain, speed from throttle, altitude from pitch, blinking REC dot

### Phase 8 — Polish & Extras

- **Step mode** — advance frame by frame with `⚡` toggle, `←/→` keys
- **Loop mode** — `↺` toggle, scrubber shows loop region shading
- **Ghost trail** — stick cam draws faded overlay of previous playthrough for comparison
- **Responsive layout** — icon-rail sidebar at tablet, bottom-sheet at mobile, swipe-scrub on FPV panel
- **Theme switcher** — Night (default), Daylight, Betaflight OSD modes via CSS class on `<html>`
- **Intro screen** — animated logo fade-in with Split-S looping in background canvases on first load
- **Sound layer (optional)** — throttle-proportional motor whine via Web Audio API oscillator, wind on high speed

---

## High-Fidelity UI/UX Design

### Design Language

The visual identity borrows from two FPV-native references: **Betaflight OSD** (raw, monospace, functional) and **modern FPV brand aesthetics** (high contrast, neon accents, cinematic dark backgrounds). The result feels like a tool a real pilot would trust, not a toy.

---

### Design Tokens (`tokens.css`)

```css
:root {
  /* Background stack — deep blacks with blue-tinted depth */
  --bg-void:       #050608;   /* outermost background */
  --bg-panel:      #0b0d12;   /* canvas/panel backgrounds */
  --bg-surface:    #12151d;   /* cards, sidebar */
  --bg-raised:     #1a1e2a;   /* hover states, active items */
  --bg-overlay:    rgba(5, 6, 8, 0.85); /* modal/tooltip scrim */

  /* Neon accent palette */
  --accent-primary:  #00f5d4;  /* teal — main interactive color */
  --accent-secondary:#f72585;  /* hot pink — warnings, active states */
  --accent-throttle: #f7b731;  /* amber — throttle channel color */
  --accent-yaw:      #a855f7;  /* purple — yaw channel */
  --accent-pitch:    #3b82f6;  /* blue — pitch channel */
  --accent-roll:     #00f5d4;  /* teal — roll channel */

  /* Text */
  --text-primary:    #e8eaf0;
  --text-secondary:  #6b7280;
  --text-osd:        #ffffff;  /* pure white for HUD/OSD overlays */

  /* Typography */
  --font-display:  'Bebas Neue', 'Arial Narrow', sans-serif;
  --font-ui:       'Inter', system-ui, sans-serif;
  --font-osd:      'JetBrains Mono', 'Courier New', monospace;

  /* Glow effects */
  --glow-primary:  0 0 8px rgba(0, 245, 212, 0.6), 0 0 24px rgba(0, 245, 212, 0.2);
  --glow-danger:   0 0 8px rgba(247, 37, 133, 0.6), 0 0 24px rgba(247, 37, 133, 0.2);
  --glow-subtle:   0 0 12px rgba(0, 245, 212, 0.08);

  /* Borders */
  --border-panel:  1px solid rgba(255, 255, 255, 0.06);
  --border-accent: 1px solid rgba(0, 245, 212, 0.3);

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;

  /* Transitions */
  --ease-snap:   cubic-bezier(0.23, 1, 0.32, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --dur-fast:    120ms;
  --dur-base:    220ms;
  --dur-slow:    400ms;
}
```

---

### Layout & Panels

**Overall shell:**
- Full-viewport dark layout (`--bg-void`), no scrollbars visible
- CSS Grid: `220px sidebar | 1fr FPV cam | 1fr stick cam` (resizable via drag handle)
- Bottom playback bar fixed at `64px` height
- Subtle `1px` inner glow borders between all panels using `box-shadow` inset

**Panel headers:**
- Uppercase label in `--font-display`, `11px`, letter-spacing `0.15em`, `--text-secondary`
- A `2px` teal left-border accent marks the active panel on focus
- Icon badge (camera icon / gamepad icon) in top-right corner of each panel

**Drag-to-resize handle between panels:**
- `4px` vertical divider, teal on hover with glow
- Cursor changes to `col-resize`
- Snap-back animation if dragged to extreme

---

### Sidebar — Move Browser

**Structure:**
```
FREESTYLE MOVES                    [filter icon]
─────────────────────────────────────────────
BEGINNER
  ┌─────────────────────────────────────────┐
  │ Split-S            ●●○○○  3.5s          │
  │ "Roll inverted, pull half loop"         │
  └─────────────────────────────────────────┘

INTERMEDIATE
  [Power Loop card]
  [Matty Flip card]
  [Knife Edge card]

ADVANCED
  [Juicy Spin card]
  [Trippy Spin card]
  [Bowtie card]

PRO
  [Sbang card]
```

**Move card design:**
- `--bg-surface` background, `--border-panel` border, `--radius-md`
- Left edge: `3px` vertical bar colored by difficulty (green → yellow → orange → red)
- Move name in `--font-display` at `18px`
- Difficulty shown as 5 filled/empty dots with channel colors
- Duration badge: pill shape, `--bg-raised`, teal text
- Short description in `--font-ui` at `11px`, `--text-secondary`, single line truncated
- **Hover:** card lifts with `translateY(-2px)`, border brightens, left bar glows
- **Active:** `--bg-raised` fill, teal left bar, glow-subtle box-shadow, `>` arrow appears

**Category headers:**
- Uppercase, `--font-display`, `11px`, `--text-secondary` with `0.2em` letter-spacing
- `1px` horizontal rule after the label

---

### Stick Cam Panel

**Canvas rendering details:**

Each gimbal is drawn as layered circles:
```
Outer ring:   stroke, rgba(255,255,255,0.08), 2px
Gate ring:    stroke, rgba(0,245,212,0.15), 1px  ← subtle inner boundary
Center cross: rgba(255,255,255,0.12), 1px lines
Stick dot:    filled circle, white core + colored glow matching channel
Trail:        last N positions drawn with decreasing alpha (motion trail)
```

**Per-channel color coding** (matches `tokens.css`):
- Throttle axis: amber `#f7b731` glow when moving
- Yaw axis: purple `#a855f7` glow
- Pitch axis: blue `#3b82f6` glow  
- Roll axis: teal `#00f5d4` glow

**Stick dot states:**
- Idle (centered): small white dot, no glow
- Moving: dot expands slightly, channel-color glow pulses
- Full deflection: dot hits gate ring, ring flashes briefly

**Below each gimbal — axis meters:**
Four thin horizontal bars (one per channel) showing current value from -1 to +1 with colored fill. Labels on left (T / Y / P / R), value readout on right (`+0.84`).

**Panel chrome:**
- `STICK CAM` label top-left
- Controller icon top-right (SVG)
- Mode indicator: `MODE 2` badge (or MODE 1 — switchable in settings)
- Scanline overlay (CSS `repeating-linear-gradient`) at 3% opacity for CRT feel

---

### FPV Camera Panel

**Sky/ground scene:**

```
Sky gradient:    linear-gradient(to bottom, #0a1628 0%, #1a3a5c 60%, #2d6a8f 100%)
Ground gradient: linear-gradient(to bottom, #1a2e0a 0%, #0d1a06 100%)
```

The entire scene canvas rotates with `roll` and shifts vertically with `pitch` — the horizon line stays fixed in world space while the camera view rotates around it.

**Atmospheric effects (Canvas 2D):**
- **Motion blur** — on high throttle/speed, draw previous frame at 20% alpha before redrawing (persistence effect)
- **Prop wash shimmer** — on rapid pitch changes, radial gradient flicker at canvas corners
- **Vignette** — permanent dark oval vignette drawn over the scene (wide-angle lens feel)
- **Chromatic aberration** — on max-deflection moves, draw scene twice offset 2px with red/cyan channel offset at low alpha
- **Fisheye distortion** — CSS `perspective` transform on the canvas element, slight barrel distortion via SVG `feTurbulence` filter

**Scanline / noise overlay:**
- Semi-transparent `repeating-linear-gradient` scanlines (2px on/2px off at 4% opacity)
- Canvas noise layer: random pixel dots at 2% opacity, re-randomized every 8 frames

**Artificial horizon (AHH) line:**
- `3px` white line spanning full width, transforms with roll angle
- `1px` teal center marker at zero pitch
- Short ladder marks at ±10°, ±20°, ±30°, ±45°, ±60° pitch

---

### FPV HUD / OSD Layer

Drawn on a separate transparent canvas layered above the FPV scene. Font: `--font-osd`, all text white, semi-transparent backgrounds behind text for legibility.

**OSD element layout:**
```
┌──────────────────────────────────────────────────────┐
│ 87%  ████████░░  4S            00:03:42   REC ●      │  ← top bar
│                                                      │
│                                                      │
│            ────────[  ]────────                      │  ← artificial horizon
│                                                      │
│                                                      │
│ 124 km/h                           RSSI ████░  -72  │  ← bottom bar
│ ↑ 18m                              GPS  12sat        │
└──────────────────────────────────────────────────────┘
```

**Individual OSD elements:**

| Element | Detail |
|---|---|
| Battery % + bar | Colored green → yellow → red as it drains. Bar is 10 segments. |
| Cell count badge | `4S` in a rounded pill, amber tint |
| Timer | `MM:SS:FF` format, increments during playback |
| REC indicator | Red dot + `REC` text, blinks every 1s |
| Speed | Large readout, `km/h` or `mph` toggle |
| Altitude | Signed meters, up-arrow icon |
| RSSI bar | 5-segment bar, colored by signal strength |
| dBm readout | `-72` style, secondary text |
| GPS sats | Satellite icon + count |
| Crosshair | 4-point minimal crosshair at dead center, 30% opacity |

**All OSD values are simulated** — derived from the keyframe data (throttle → speed, duration → battery drain, pitch inputs → altitude change).

---

### Playback Controls Bar

**Layout (left to right):**
```
[⏮]  [⏪]  [▶/⏸]  [⏩]  [⏭]   ══════●══════════════════   00:01.4 / 00:03.5   [0.25×] [0.5×] [1×] [2×]   [↺] [⚡]
```

**Design details:**

- Bar background: `--bg-panel` with `1px` top border at `rgba(255,255,255,0.06)`
- Play/pause button: `48px` circle, `--accent-primary` fill, icon inside — pulses with a 1-ring ripple animation on press
- Step buttons (⏪⏩): smaller `36px`, border style, teal on hover
- Skip-to-start/end (⏮⏭): `28px`, ghost style
- **Scrubber:**
  - Custom `<input type="range">` fully styled
  - Track: `--bg-raised`, `4px` tall, rounded
  - Fill left of thumb: teal gradient
  - Thumb: `14px` white circle, teal glow on focus/drag
  - Hover over track: tooltip showing time at cursor position
  - Keyframe tick marks on the track (one per keyframe)
- Time display: `--font-osd`, `--text-primary` current time / `--text-secondary` total time
- Speed buttons: pill group (`0.25×` `0.5×` `1×` `2×`), active state has teal fill + glow
- Loop toggle `↺`: glows teal when active, rotates 360° on click
- Flash/step mode toggle `⚡`: activates frame-by-frame stepping

---

### Move Info Panel

Displayed below the dual canvases, above the playback bar. Slides up from bottom when a move is selected.

```
┌─────────────────────────────────────────────────────────────────────┐
│  SPLIT-S                              ●●○○○  BEGINNER   3.5s        │
│                                                                     │
│  Rolls inverted then pulls through a half loop downward. Great      │
│  for reversing direction while losing minimal altitude.             │
│                                                                     │
│  TIPS                                                               │
│  ›  Lead with roll input, not pitch — get fully inverted first      │
│  ›  Carry speed into the entry or the exit will be sluggish         │
│  ›  Pull timing determines exit altitude — late pull = deeper dive  │
│                                                                     │
│  CHANNELS USED    [ROLL ████]  [PITCH ████]  [THROTTLE ░░▓▓]       │
└─────────────────────────────────────────────────────────────────────┘
```

**Channel usage summary:** mini horizontal bar per channel showing average absolute deflection during the move. Lets pilots instantly see which sticks dominate the move.

---

### Micro-interactions & Animations

| Trigger | Animation |
|---|---|
| Select a move | Sidebar card snaps active, canvases fade+scale in (`opacity 0→1`, `scale 0.97→1`), info panel slides up |
| Play button press | Button compresses (`scale 0.9`) then bounces back, ripple expands outward |
| Scrubber drag | FPV cam and stick cam update live, OSD values update in real time |
| Speed change | Active speed pill pops with `scale 1.15` bounce, playback rate changes smoothly |
| Reach end of move | Scrubber thumb pulses once, auto-pauses, play button glows briefly |
| Stick hits full deflection | Corresponding axis bar flashes, gimbal ring briefly brightens |
| Throttle surge | FPV cam vignette tightens, slight zoom-in (`scale 1.02`) on the scene |
| Move card hover | Card lifts 2px, left difficulty bar elongates 2px, description slides into full visibility |
| Loop toggle on | `↺` icon rotates 360° with `--ease-bounce`, loop badge appears on scrubber |
| Theme switch | Full-page crossfade via CSS transition on `--bg-void` and sky gradient |

---

### Responsive Behavior

**≥1200px (desktop):** Full side-by-side layout as described above.

**768px–1199px (tablet):**
- Sidebar collapses to icon rail (difficulty dot + abbreviated name on hover tooltip)
- Canvases stack vertically (FPV cam top, stick cam bottom)
- Playback bar remains fixed at bottom

**<768px (mobile):**
- Full-width single column
- Sidebar becomes bottom sheet triggered by a floating hamburger button
- Canvases fill viewport width, scrub by swiping the FPV panel
- Tap-hold on stick cam to pause and inspect frame

---

### Theme Variants

**Night/Race (default):** Deep black backgrounds, teal + pink neon accents as described above.

**Daylight:** Sky gradient becomes light blue, ground is bright green, OSD inverts to dark-on-light, sidebar uses a light grey surface. Toggle via sun/moon icon in the header.

**Betaflight OSD (hardcore):** Monochrome green-on-black everywhere, pixel-grid font, CRT scanlines at 8% opacity, no rounded corners. For pilots who want the authentic Betaflight look.

---

## Visual Design Reference

---

## Getting Started

No build step required. Open `index.html` in any modern browser, or serve locally:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## File Creation Order

Follow this sequence to build the app incrementally:

1. `styles/tokens.css` + `styles/reset.css` — design system foundation
2. `index.html` + `styles/layout.css` + `styles/sidebar.css` — shell with real card designs
3. `styles/controls.css` + `styles/animations.css` — playback bar and all transitions
4. `js/renderers/stick-cam.js` — draw styled gimbals with channel color glow
5. `js/renderers/fpv-cam.js` + `js/hud.js` — FPV scene with horizon + OSD layer
6. `js/renderers/effects.js` — vignette, motion blur, scanlines, chromatic aberration
7. `js/moves/move-data.js` + `js/moves/split-s.js` — first move end-to-end
8. `js/playback.js` — wire up timeline with scrubber and speed controls
9. `js/main.js` — connect everything, theme switching, micro-interactions
10. Remaining move files (one per move)
11. Responsive layout — tablet icon rail, mobile bottom sheet
12. Intro screen, loop mode, ghost trail, optional sound layer
