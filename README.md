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
│   ├── layout.css          # Two-panel layout, sidebar, responsive
│   ├── hud.css             # FPV HUD overlays (horizon, battery, etc.)
│   └── controls.css        # Playback bar, speed selector, buttons
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
│   │   └── fpv-cam.js      # Simulates FPV camera view on Canvas
│   ├── playback.js         # Timeline engine — drive keyframes at any speed
│   └── hud.js              # Draws FPV HUD overlays (horizon bar, speed, etc.)
└── assets/
    └── icons/              # SVG icons for UI
```

---

## Implementation Plan

### Phase 1 — Shell & Layout

**Goal:** Get the two-panel layout on screen with placeholder canvases.

1. `index.html` — semantic layout:
   - Left sidebar: move list (`<nav>`)
   - Main area: two `<canvas>` elements side by side (stick cam | FPV cam)
   - Bottom: playback controls bar
2. `layout.css` — CSS Grid layout, dark FPV-style theme (dark bg, neon accents)
3. `controls.css` — play/pause button, speed selector (0.25×, 0.5×, 1×), progress scrubber
4. Verify layout renders correctly at desktop and mobile widths

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

### Phase 7 — Polish & Extras

- **Step mode** — advance frame by frame to study inputs precisely
- **Loop mode** — auto-repeat the move
- **Comparison overlay** — ghost trail on stick cam showing previous playthrough
- **Dark/light theme toggle** — day vs night FPV look
- **Responsive layout** — stack panels vertically on narrow screens
- **Intro screen** — animated logo with a looping sample move on load

---

## Visual Design Reference

```
┌─────────────────────────────────────────────────────────────┐
│  FPV Freestyle Moves                              [⚙] [🌙]  │
├──────────────┬──────────────────────────────────────────────┤
│ MOVES        │                                              │
│              │   [  STICK CAM  ] │ [    FPV CAM    ]        │
│ > Split-S ★★ │                   │                          │
│   Power Loop │   ┌──────────┐    │  ░░░░░░░░░░░░░░░░        │
│   Matty Flip │   │  ╭────╮  │    │  ░░░ SKY ░░░░░░░░        │
│   Juicy Spin │   │  │ ●  │  │    │  ──────────────── ← HZ  │
│   Knife Edge │   │  ╰────╯  │    │  ░░░ GROUND ░░░░░        │
│   Trippy Spin│   └──────────┘    │  124km/h  4S 87%        │
│   Bowtie     │                   │                          │
│   Sbang      ├───────────────────┴─────────────────────────┤
│              │  |◀  ▶  ▶|   [──────●──────────]  0.5× 1× 2×│
└──────────────┴──────────────────────────────────────────────┘
```

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

1. `index.html` + `styles/reset.css` + `styles/layout.css` — shell
2. `styles/controls.css` — playback bar
3. `js/renderers/stick-cam.js` — draw static sticks
4. `js/renderers/fpv-cam.js` + `js/hud.js` — draw static FPV view
5. `js/moves/move-data.js` + one move file (split-s.js)
6. `js/playback.js` — wire up timeline
7. `js/main.js` — connect everything
8. Remaining move files
9. UI polish, keyboard shortcuts, responsive layout
