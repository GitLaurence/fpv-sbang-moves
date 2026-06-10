# FPV Freestyle Moves Tutorial App

Isang interactive web app para matuto ng FPV freestyle moves gamit ang synchronized dual-view playback — may **stick cam** (para makita ang exact na stick inputs sa RC transmitter) at **FPV cam** (simulated na view ng drone habang ginagawa ang move).

---

## Ano Ang Gagawin Nito

Sa bawat tutorial, dalawa ang makikita mo nang sabay-sabay:

- **Stick Cam** — animated na RC transmitter sticks na nagpapakita ng tamang stick inputs in real time
- **FPV Cam** — simulated na FPV camera view ng drone habang ginagawa ang move

Pwede mong pabagalin ang playback, i-step frame by frame, at makita kung paano exactly nagko-connect ang stick inputs sa kung ano ang nangyayari sa drone.

---

## Tech Stack

- Pure HTML5, CSS3, JavaScript (ES modules — walang frameworks)
- Canvas API — para i-render ang stick inputs at FPV camera simulation
- Web Animations API — para sa smooth at controllable na playback
- CSS Custom Properties + Grid/Flexbox — para sa layout at theming

---

## Istruktura ng App

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
│   │   └── ...             # Isa pang file per move
│   ├── renderers/
│   │   ├── stick-cam.js    # Gumuhit ng TX sticks sa Canvas
│   │   ├── fpv-cam.js      # Nag-si-simulate ng FPV camera view sa Canvas
│   │   └── effects.js      # Lens distortion, scanlines, noise, prop wash
│   ├── playback.js         # Timeline engine — nagpapatakbo ng keyframes sa kahit anong speed
│   └── hud.js              # Gumuhit ng FPV HUD overlays (horizon bar, speed, atbp.)
└── assets/
    ├── fonts/              # Bebas Neue (headings), JetBrains Mono (OSD/HUD)
    ├── icons/              # SVG icons para sa UI controls
    └── sounds/             # Opsyonal: arm beep, motor whine, hangin sa mataas na throttle
```

---

## Implementation Plan

### Phase 1 — Shell, Tokens, at Layout

**Layunin:** Ipakita ang two-panel layout sa screen nang may placeholder canvases at lahat ng design tokens.

1. `tokens.css` — lahat ng CSS custom properties (colors, fonts, glow effects, transitions) na itatakda agad para ma-reference ng lahat ng susunod na files
2. `index.html` — semantic na layout:
   - Kaliwang sidebar: listahan ng moves (`<nav>`)
   - Main area: dalawang `<canvas>` na magkatabi (stick cam | FPV cam) na may draggable resize handle sa pagitan
   - Ibaba: fixed na playback controls bar
3. `layout.css` — CSS Grid, madilim na background, panel borders, at inset na glow
4. `sidebar.css` — base styles ng move cards, kulay ng difficulty bar, category headers
5. `controls.css` — custom-styled na range input (scrubber), play/pause na bilog na button, speed pill group
6. `animations.css` — lahat ng `@keyframes` at transition classes (card hover lift, button ripple, panel fade-in)
7. I-verify na nagre-render nang tama ang layout sa desktop, tablet, at mobile

---

### Phase 2 — Stick Cam Renderer

**Layunin:** Gumuhit ng RC transmitter sticks na nag-a-animate base sa keyframe data.

**Mga elementi sa stick cam canvas:**
- Dalawang bilog na gimbal (kaliwa = throttle/yaw, kanan = pitch/roll)
- Isang dot sa bawat gimbal para ipakita ang posisyon ng stick
- Linya ng axes at panlabas na bilog na singsing
- Mga label: T, Y, P, R

**Format ng data para sa isang frame:**
```js
{
  t: 0.0,         // oras sa seconds
  throttle: 0.5,  // -1 hanggang 1 (kaliwang stick, pataas-pababa)
  yaw: 0.0,       // -1 hanggang 1 (kaliwang stick, pakanan-pakaliwa)
  pitch: 0.0,     // -1 hanggang 1 (kanang stick, pataas-pababa)
  roll: 0.0       // -1 hanggang 1 (kanang stick, pakanan-pakaliwa)
}
```

**Responsibilidad ng `stick-cam.js`:**
- `StickCamRenderer(canvas)` — mag-set up ng canvas context
- `render(frame)` — gumuhit ng dalawang sticks para sa isang frame object
- Maayos na interpolation sa pagitan ng keyframes gamit ang `lerp()`

---

### Phase 3 — FPV Camera Renderer

**Layunin:** I-simulate ang hitsura ng FPV camera base sa attitude ng drone mula sa stick inputs.

**Mga sine-simulate na elemento:**
- Sky/ground na hiwalay — nagti-tilt sa roll, nagshi-shift sa pitch
- Horizon line
- Motion blur effect (CSS filter o canvas alpha trails) na proporsyonal sa speed
- Opsyonal: grid overlay, prop wash shimmer

**Responsibilidad ng `fpv-cam.js`:**
- `FpvCamRenderer(canvas)` — mag-set up ng canvas
- `render(state)` — gumuhit ng frame gamit ang `{ roll, pitch, yaw, throttle, speed }`
- Sky gradient (maliwanag na araw o gabi)
- Ground gradient (berde/kayumanggi)
- Artificial horizon line na may roll/pitch transformation
- HUD overlay pass (ipinapasa kay `hud.js`)

**`hud.js`:**
- Porsyento ng baterya (simulated na pagbaba habang tumatagal ang move)
- Video timer
- Speed readout (simulated na m/s)
- RSSI bars
- OSD-style na monospace font, semi-transparent

---

### Phase 4 — Move Data at Keyframe System

**Layunin:** I-define ang mga moves bilang keyframe arrays at mag-interpolate sa pagitan nila.

**Halimbawa ng move definition:**
```js
export const splitS = {
  id: 'split-s',
  name: 'Split-S',
  difficulty: 2,           // 1–5
  durationSec: 3.5,
  description: 'Nag-ro-roll ng inverted tapos nagpu-pull sa pababang half loop.',
  tips: [
    'Unahin ang roll, hindi ang pitch — maging fully inverted muna',
    'Magdala ng speed sa entry o magiging mabagal ang exit',
    'Ang timing ng pull ang magtatakda ng altitude pagkatapos ng move'
  ],
  keyframes: [
    { t: 0.0, throttle: 0.7, yaw: 0, pitch: 0,    roll: 0    },
    { t: 0.5, throttle: 0.7, yaw: 0, pitch: 0,    roll: 1.0  }, // full roll input
    { t: 1.0, throttle: 0.7, yaw: 0, pitch: 0,    roll: 0    }, // inverted na
    { t: 1.2, throttle: 0.4, yaw: 0, pitch: -1.0, roll: 0    }, // mag-pull
    { t: 3.0, throttle: 0.6, yaw: 0, pitch: 0,    roll: 0    }, // labas na
  ]
};
```

**`playback.js`:**
- `PlaybackEngine(moveData, onFrame)` — nagpapatakbo ng timeline
- `play()`, `pause()`, `seek(t)`, `setSpeed(multiplier)`
- Gumagamit ng `requestAnimationFrame` — ang delta times ay naka-scale ayon sa speed multiplier
- Tinatawag ang `onFrame(interpolatedFrame)` sa bawat tick
- Nag-i-interpolate sa pagitan ng mga keyframes gamit ang linear o cubic interpolation

---

### Phase 5 — Move Library

I-implement ang mga moves na ito bilang keyframe data files (isa bawat move):

| Move | Difficulty | Paliwanag |
|---|---|---|
| Split-S | ★★☆☆☆ | Mag-roll ng inverted, mag-pull ng half loop pababa |
| Power Loop | ★★★☆☆ | Buong vertical loop sa ibabaw ng isang bagay |
| Matty Flip | ★★★☆☆ | Nose-down flip papunta sa inverted, mag-roll pabalik |
| Knife Edge | ★★★☆☆ | 90° roll na pinananatili sa axis |
| Reverse Knife Edge | ★★★☆☆ | Knife Edge sa kabilang direksyon |
| Juicy Spin | ★★★★☆ | Flat na yaw spin na may tamang throttle management |
| Trippy Spin | ★★★★☆ | Diagonal na corkscrew roll |
| Bowtie | ★★★★☆ | Figure-8 na may inverted na bahagi |
| Inverted Yaw Spin | ★★★★☆ | Mag-flip inverted, 360° yaw spin, mag-flip pabalik |
| Split-S Rewind | ★★★★☆ | Split-S na may yaw para bumalik sa parehong landas |
| Sbang | ★★★★★ | Inverted yaw spin reversal — ang pinaka-advanced |
| Sbang Lookback | ★★★★★ | Sbang combo na may lookback exit |
| Sbang Tornado | ★★★★★ | Sbang na may dagdag na 360° inverted yaw spin |

Bawat move ay may sariling file sa `js/moves/` na naka-export ang keyframe data.

---

### Phase 6 — UI at Navigation

**Layunin:** Pagandahin ang sidebar, playback bar, at move info panel.

- Ang sidebar ay nagtatala ng lahat ng moves na may difficulty stars at click-to-load
- Naka-highlight ang aktibong move
- Move info panel sa ilalim ng canvases: pangalan, difficulty, paliwanag, listahan ng tips
- Playback bar: scrubber (input range), play/pause toggle, speed buttons
- Keyboard shortcuts: `Space` = play/pause, `←`/`→` = step frame, `[`/`]` = speed

---

### Phase 7 — Visual Effects at Atmosphere

**Layunin:** Dagdag ng cinematic FPV effects para maging mas totoo ang hitsura.

- **Vignette + fisheye** — permanenteng madilim na oval sa FPV canvas, CSS `perspective` barrel distortion
- **Motion blur** — persistence trail sa mabilis na frames (nakaraang frame sa 20% alpha)
- **Chromatic aberration** — double-draw na may red/cyan offset sa mga max-deflection na sandali
- **Prop wash shimmer** — corner radial na pagkilos sa mabilis na pitch changes
- **Scanline + noise overlay** — CRT scanlines sa 4%, random pixel noise na nagbabago bawat 8 frames
- **OSD simulation** — pagbaba ng baterya, speed mula sa throttle, altitude mula sa pitch, kumukurap na REC dot

### Phase 8 — Polish at Mga Dagdag na Feature

- **Step mode** — mag-advance ng frame by frame gamit ang `⚡` toggle at `←/→` keys
- **Loop mode** — `↺` toggle, nagpapakita ng loop region shading sa scrubber
- **Ghost trail** — ang stick cam ay nagdradrawing ng mabaw na overlay ng nakaraang playthrough para mapaghambing
- **Responsive layout** — icon-rail sidebar sa tablet, bottom sheet sa mobile, swipe-scrub sa FPV panel
- **Theme switcher** — Night (default), Daylight, Betaflight OSD modes sa pamamagitan ng CSS class sa `<html>`
- **Intro screen** — animated na logo fade-in na may Split-S na naka-loop sa background habang naglo-load
- **Sound layer (opsyonal)** — throttle-proportional na motor whine gamit ang Web Audio API oscillator, hangin sa mataas na speed

---

## High-Fidelity UI/UX Design

### Design Language

Ang visual identity ay gumuhit mula sa dalawang bagay na pamilyar sa lahat ng FPV pilot: ang **Betaflight OSD** (raw, monospace, functional) at ang **modernong FPV brand aesthetic** (mataas na contrast, neon accents, cinematic na madilim na background). Ang resulta ay mukhang isang tool na talagang mapagkakatiwalaan ng tunay na pilot — hindi laruan.

---

### Design Tokens (`tokens.css`)

```css
:root {
  /* Background stack — malalim na itim na may asul na tint */
  --bg-void:       #050608;   /* pinaka-labas na background */
  --bg-panel:      #0b0d12;   /* canvas/panel backgrounds */
  --bg-surface:    #12151d;   /* cards, sidebar */
  --bg-raised:     #1a1e2a;   /* hover states, active items */
  --bg-overlay:    rgba(5, 6, 8, 0.85); /* modal/tooltip scrim */

  /* Neon accent palette */
  --accent-primary:  #00f5d4;  /* teal — pangunahing interactive na kulay */
  --accent-secondary:#f72585;  /* hot pink — para sa warnings at active states */
  --accent-throttle: #f7b731;  /* amber — kulay ng throttle channel */
  --accent-yaw:      #a855f7;  /* purple — kulay ng yaw channel */
  --accent-pitch:    #3b82f6;  /* asul — kulay ng pitch channel */
  --accent-roll:     #00f5d4;  /* teal — kulay ng roll channel */

  /* Text */
  --text-primary:    #e8eaf0;
  --text-secondary:  #6b7280;
  --text-osd:        #ffffff;  /* puro puti para sa HUD/OSD overlays */

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

### Layout at Panels

**Overall shell:**
- Full-viewport na madilim na layout (`--bg-void`), walang nakikitang scrollbars
- CSS Grid: `220px sidebar | 1fr FPV cam | 1fr stick cam` (pwedeng i-resize sa pamamagitan ng drag handle)
- Bottom playback bar na naka-fix sa `64px` taas
- Banayad na `1px` inner glow borders sa pagitan ng lahat ng panels gamit ang `box-shadow` inset

**Panel headers:**
- Uppercase na label sa `--font-display`, `11px`, letter-spacing `0.15em`, `--text-secondary`
- Isang `2px` teal na left-border accent ang nagtatanda ng aktibong panel
- Icon badge (camera icon / gamepad icon) sa kanang sulok sa itaas ng bawat panel

**Drag-to-resize handle sa pagitan ng panels:**
- `4px` na patayong divider, nagiging teal sa hover na may glow
- Nagbabago ang cursor sa `col-resize`
- May snap-back animation kapag napunta sa extreme

---

### Sidebar — Move Browser

**Istruktura:**
```
FREESTYLE MOVES                    [filter icon]
─────────────────────────────────────────────
SIMULA (BEGINNER)
  ┌─────────────────────────────────────────┐
  │ Split-S            ●●○○○  3.5s          │
  │ "Mag-roll ng inverted, mag-pull pababa" │
  └─────────────────────────────────────────┘

KATAMTAMAN (INTERMEDIATE)
  [Power Loop card]
  [Matty Flip card]
  [Knife Edge card]

MAHIRAP (ADVANCED)
  [Juicy Spin card]
  [Trippy Spin card]
  [Bowtie card]

PROPESYONAL (PRO)
  [Sbang card]
```

**Disenyo ng move card:**
- `--bg-surface` background, `--border-panel` border, `--radius-md`
- Kaliwang gilid: `3px` na patayong bar na may kulay ayon sa difficulty (berde → dilaw → orange → pula)
- Pangalan ng move sa `--font-display` na `18px`
- Difficulty na ipinapakita bilang 5 puno/walang laman na tuldok na may kulay ng channel
- Duration badge: hugis pilula, `--bg-raised`, teal na teksto
- Maigsi na paliwanag sa `--font-ui` na `11px`, `--text-secondary`, isang linya lang na may truncation
- **Hover:** ang card ay tumaas ng `translateY(-2px)`, nagiging maliwanag ang border, nagliliwanag ang kaliwang bar
- **Active:** `--bg-raised` fill, teal na kaliwang bar, glow-subtle box-shadow, lumalabas ang `>` arrow

**Category headers:**
- Uppercase, `--font-display`, `11px`, `--text-secondary` na may `0.2em` letter-spacing
- `1px` na pahalang na linya pagkatapos ng label

---

### Stick Cam Panel

**Detalye ng canvas rendering:**

Bawat gimbal ay ginuguhit bilang layered circles:
```
Outer ring:   stroke, rgba(255,255,255,0.08), 2px
Gate ring:    stroke, rgba(0,245,212,0.15), 1px  ← banayad na panloob na hangganan
Center cross: rgba(255,255,255,0.12), 1px na linya
Stick dot:    puno na bilog, puting core + colored glow na katugma ng channel
Trail:        huling N na posisyon na ginuhit na may bumababang alpha (motion trail)
```

**Per-channel color coding** (katugma ng `tokens.css`):
- Throttle axis: amber `#f7b731` glow kapag gumagalaw
- Yaw axis: purple `#a855f7` glow
- Pitch axis: asul `#3b82f6` glow
- Roll axis: teal `#00f5d4` glow

**Mga estado ng stick dot:**
- Idle (nakasentro): maliit na puting tuldok, walang glow
- Gumagalaw: bahagyang lumalaki ang tuldok, nagpu-pulse ang channel-color glow
- Full deflection: tinatamaan ng tuldok ang gate ring, bahagyang kumikislap ang singsing

**Sa ilalim ng bawat gimbal — axis meters:**
Apat na manipis na pahalang na bar (isa bawat channel) na nagpapakita ng kasalukuyang halaga mula -1 hanggang +1 na may colored fill. Mga label sa kaliwa (T / Y / P / R), value readout sa kanan (`+0.84`).

**Panel chrome:**
- `STICK CAM` na label sa kaliwang itaas
- Controller icon sa kanang itaas (SVG)
- Mode indicator: `MODE 2` badge (o MODE 1 — mababago sa settings)
- Scanline overlay (CSS `repeating-linear-gradient`) sa 3% opacity para sa CRT na pakiramdam

---

### FPV Camera Panel

**Sky/ground na eksena:**

```
Sky gradient:    linear-gradient(to bottom, #0a1628 0%, #1a3a5c 60%, #2d6a8f 100%)
Ground gradient: linear-gradient(to bottom, #1a2e0a 0%, #0d1a06 100%)
```

Ang buong eksena ng canvas ay umiinog kasabay ng `roll` at gumagalaw pataas-pababa kasabay ng `pitch` — ang horizon line ay nananatiling nakaayos sa mundo habang ang camera view ay umiikot sa paligid nito.

**Atmospheric effects (Canvas 2D):**
- **Motion blur** — sa mataas na throttle/speed, iguhit ang nakaraang frame sa 20% alpha bago muling iguhit (persistence effect)
- **Prop wash shimmer** — sa mabilis na pitch changes, radial gradient flicker sa mga sulok ng canvas
- **Vignette** — permanenteng madilim na oval na vignette na ginuhit sa ibabaw ng eksena (para sa wide-angle lens na pakiramdam)
- **Chromatic aberration** — sa max-deflection na moves, iguhit ang eksena nang dalawang beses na offset ng 2px na may red/cyan channel offset sa mababang alpha
- **Fisheye distortion** — CSS `perspective` transform sa canvas element, bahagyang barrel distortion sa pamamagitan ng SVG `feTurbulence` filter

**Scanline / noise overlay:**
- Semi-transparent na `repeating-linear-gradient` scanlines (2px on/2px off sa 4% opacity)
- Canvas noise layer: random pixel dots sa 2% opacity, binabago bawat 8 frames

**Artificial horizon (AHH) line:**
- `3px` na puting linya na sumasaklaw ng buong lapad, nagbabago kasabay ng roll angle
- `1px` teal center marker sa zero pitch
- Maiikling ladder marks sa ±10°, ±20°, ±30°, ±45°, ±60° pitch

---

### FPV HUD / OSD Layer

Ginuguhit sa hiwalay na transparent canvas na nakapatong sa ibabaw ng FPV scene. Font: `--font-osd`, lahat ng teksto ay puti, may semi-transparent na background sa likod ng teksto para madaling mabasa.

**Layout ng OSD elements:**
```
┌──────────────────────────────────────────────────────┐
│ 87%  ████████░░  4S            00:03:42   REC ●      │  ← itaas na bar
│                                                      │
│                                                      │
│            ────────[  ]────────                      │  ← artificial horizon
│                                                      │
│                                                      │
│ 124 km/h                           RSSI ████░  -72  │  ← ibabang bar
│ ↑ 18m                              GPS  12sat        │
└──────────────────────────────────────────────────────┘
```

**Mga OSD element:**

| Element | Detalye |
|---|---|
| Battery % + bar | Nagiging berde → dilaw → pula habang naubos. Ang bar ay may 10 segments. |
| Cell count badge | `4S` sa rounded pill, amber tint |
| Timer | `MM:SS:FF` format, dumadami habang nag-a-play |
| REC indicator | Pulang tuldok + `REC` na teksto, kumikislap bawat 1 segundo |
| Speed | Malaking readout, toggle sa `km/h` o `mph` |
| Altitude | Signed meters, may up-arrow icon |
| RSSI bar | 5-segment bar, may kulay ayon sa kalidad ng signal |
| dBm readout | `-72` style, secondary na teksto |
| GPS sats | Satellite icon + bilang |
| Crosshair | 4-point na minimal crosshair sa gitna, 30% opacity |

**Lahat ng OSD values ay simulated** — kinukuha mula sa keyframe data (throttle → speed, tagal → pagbaba ng baterya, pitch inputs → pagbabago ng altitude).

---

### Playback Controls Bar

**Layout (mula kaliwa pakanan):**
```
[⏮]  [⏪]  [▶/⏸]  [⏩]  [⏭]   ══════●══════════════════   00:01.4 / 00:03.5   [0.25×] [0.5×] [1×] [2×]   [↺] [⚡]
```

**Mga detalye ng disenyo:**

- Bar background: `--bg-panel` na may `1px` itaas na border sa `rgba(255,255,255,0.06)`
- Play/pause button: `48px` bilog, `--accent-primary` fill, icon sa loob — nagpu-pulse ng 1-ring ripple animation kapag pinindot
- Step buttons (⏪⏩): mas maliit na `36px`, border style, teal sa hover
- Skip-to-start/end (⏮⏭): `28px`, ghost style
- **Scrubber:**
  - Custom na `<input type="range">` na fully styled
  - Track: `--bg-raised`, `4px` taas, bilugan
  - Fill sa kaliwa ng thumb: teal gradient
  - Thumb: `14px` puting bilog, teal glow sa focus/drag
  - Hover sa track: tooltip na nagpapakita ng oras sa cursor position
  - Keyframe tick marks sa track (isa bawat keyframe)
- Time display: `--font-osd`, `--text-primary` kasalukuyang oras / `--text-secondary` kabuuang oras
- Speed buttons: pill group (`0.25×` `0.5×` `1×` `2×`), ang aktibong state ay may teal fill + glow
- Loop toggle `↺`: nagiliwanag ng teal kapag aktibo, umiikot ng 360° kapag naka-click
- Flash/step mode toggle `⚡`: nag-a-activate ng frame-by-frame stepping

---

### Move Info Panel

Ipinapakita sa ilalim ng dalawang canvases, sa itaas ng playback bar. Nagsi-slide pataas mula sa ibaba kapag pumili ng move.

```
┌─────────────────────────────────────────────────────────────────────┐
│  SPLIT-S                              ●●○○○  SIMULA   3.5s          │
│                                                                     │
│  Nag-ro-roll ng inverted tapos nagpu-pull sa pababang half loop.    │
│  Magaling para sa pagbabago ng direksyon nang hindi masyadong       │
│  nababawasan ang altitude.                                          │
│                                                                     │
│  MGA TIPS                                                           │
│  ›  Unahin ang roll, hindi ang pitch — maging fully inverted muna   │
│  ›  Magdala ng speed sa entry o magiging mabagal ang exit           │
│  ›  Ang timing ng pull ang magtatakda ng exit altitude              │
│                                                                     │
│  CHANNELS NA GINAGAMIT   [ROLL ████]  [PITCH ████]  [THROTTLE ░░▓▓] │
└─────────────────────────────────────────────────────────────────────┘
```

**Channel usage summary:** Mini horizontal bar bawat channel na nagpapakita ng average absolute deflection sa buong move. Agad na makikita ng pilot kung aling mga stick ang pangunahing ginagamit sa move.

---

### Micro-interactions at Animations

| Trigger | Animation |
|---|---|
| Pumili ng move | Ang sidebar card ay nag-a-activate, ang canvases ay nag-fa-fade+scale in (`opacity 0→1`, `scale 0.97→1`), ang info panel ay nagsi-slide pataas |
| Pinindot ang play button | Ang button ay dumidikit (`scale 0.9`) tapos bumabalik, ang ripple ay lumalawak palabas |
| Ini-drag ang scrubber | Live na nag-a-update ang FPV cam at stick cam, nag-a-update rin ang OSD values in real time |
| Binago ang speed | Ang aktibong speed pill ay nagpo-pop ng `scale 1.15` bounce, maayos na nagbabago ang playback rate |
| Naabot ang dulo ng move | Nagpu-pulse nang isang beses ang scrubber thumb, nag-a-auto-pause, bahagyang nagliliwanag ang play button |
| Naabot ng stick ang full deflection | Kumikislap ang katumbas na axis bar, bahagyang nagiliwanag ang gimbal ring |
| Tumaas nang bilis ang throttle | Nag-tightening ang FPV cam vignette, bahagyang zoom-in (`scale 1.02`) sa eksena |
| Hover sa move card | Tumaas ang card ng 2px, lumalo ng 2px ang kaliwang difficulty bar, nag-si-slide patungo sa full visibility ang paliwanag |
| Na-on ang loop toggle | Umiikot ng 360° ang `↺` icon na may `--ease-bounce`, lumalabas ang loop badge sa scrubber |
| Binago ang theme | Full-page crossfade sa pamamagitan ng CSS transition sa `--bg-void` at sky gradient |

---

### Responsive Behavior

**≥1200px (desktop):** Buong side-by-side na layout gaya ng nakalarawan sa itaas.

**768px–1199px (tablet):**
- Nagko-collapse ang sidebar sa icon rail (difficulty dot + pinaikli na pangalan sa hover tooltip)
- Nagsi-stack nang patayo ang canvases (FPV cam sa itaas, stick cam sa ibaba)
- Nananatiling naka-fix ang playback bar sa ibaba

**<768px (mobile):**
- Full-width na solong haligi
- Nagiging bottom sheet ang sidebar na triggered ng floating hamburger button
- Pinupuno ng canvases ang lapad ng viewport, nag-e-enable ng swipe para sa pag-scrub sa FPV panel
- Tap-hold sa stick cam para mag-pause at suriin ang frame

---

### Mga Tema

**Night/Race (default):** Malalim na itim na background, teal + pink neon accents gaya ng nakalarawan sa itaas.

**Daylight (Araw):** Nagiging maliwanag na asul ang sky gradient, maliwanag na berde ang lupa, ini-invert ang OSD sa dark-on-light, gumagamit ang sidebar ng maliwanag na grey surface. I-toggle gamit ang sun/moon icon sa header.

**Betaflight OSD (hardcore):** Monochrome na berde-sa-itim sa lahat ng dako, pixel-grid font, CRT scanlines sa 8% opacity, walang bilugang sulok. Para sa mga pilot na gusto ang tunay na hitsura ng Betaflight.

---

## Visual Design Reference

```
┌─────────────────────────────────────────────────────────────┐
│  FPV FREESTYLE MOVES                              [⚙] [🌙]  │
├──────────────┬──────────────────────────────────────────────┤
│ SIMULA       │                                              │
│              │   [  STICK CAM  ] │ [    FPV CAM    ]        │
│ > Split-S ●● │                   │                          │
│              │   ┌──────────┐    │  ░░░░░░░░░░░░░░░░        │
│ KATAMTAMAN   │   │  ╭────╮  │    │  ░░░ LANGIT ░░░░░        │
│   Power Loop │   │  │ ●  │  │    │  ──────────────── ← HZ  │
│   Matty Flip │   │  ╰────╯  │    │  ░░░ LUPA ░░░░░░░        │
│   Knife Edge │   └──────────┘    │  124km/h  4S 87%        │
│              │                   │                          │
│ MAHIRAP      ├───────────────────┴─────────────────────────┤
│   Juicy Spin │  |◀  ▶  ▶|  [──────●──────────]  0.5× 1× 2×│
└──────────────┴──────────────────────────────────────────────┘
```

---

## Paano Magsimula

Walang kailangang i-build. Buksan lang ang `index.html` sa kahit anong modernong browser, o mag-serve nang lokal:

```bash
npx serve .
# o kaya naman
python3 -m http.server 8080
```

---

## Pagkakasunod ng Paggawa ng Files

Sundin ang sequence na ito para matayo ang app nang hakbang-hakbang:

1. `styles/tokens.css` + `styles/reset.css` — pundasyon ng design system
2. `index.html` + `styles/layout.css` + `styles/sidebar.css` — shell na may tunay na card designs
3. `styles/controls.css` + `styles/animations.css` — playback bar at lahat ng transitions
4. `js/renderers/stick-cam.js` — gumuhit ng styled na gimbals na may channel color glow
5. `js/renderers/fpv-cam.js` + `js/hud.js` — FPV scene na may horizon + OSD layer
6. `js/renderers/effects.js` — vignette, motion blur, scanlines, chromatic aberration
7. `js/moves/move-data.js` + `js/moves/split-s.js` — unang move mula simula hanggang katapusan
8. `js/playback.js` — i-wire up ang timeline na may scrubber at speed controls
9. `js/main.js` — i-connect ang lahat, theme switching, micro-interactions
10. Mga natitirang move files (isa bawat move)
11. Responsive layout — tablet icon rail, mobile bottom sheet
12. Intro screen, loop mode, ghost trail, opsyonal na sound layer
