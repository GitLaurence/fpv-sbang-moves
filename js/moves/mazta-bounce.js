export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Pababang dive papunta sa malapit na ground o bagay, tapos throttle punch para "bounce" pataas — paulit-ulit na pattern na nagpapakita ng throttle control at proximity awareness. Tatak ni headmazta para sa flowy, energetic na freestyle.',
  tips: [
    'I-CUT ang throttle sa dive — hayaang bumaba nang mabilis ang drone papalapit sa ground',
    'PUNCH full throttle bago pa man umabot sa pinakailalim — para sa malinis na "bounce" pataas',
    'I-ulit ang pattern nang maayos ang timing — pantay ang bilis ng bounce sa bawat ikot',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Dive 1' },
    { t: 1.0, label: 'Bounce 1' },
    { t: 1.5, label: 'Dive 2' },
    { t: 2.1, label: 'Bounce 2' },
    { t: 2.7, label: 'Exit Dive' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise toward the bounce line
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE 1 — cut throttle, pitch forward to drop toward ground/obstacle
    { t: 0.4,  throttle: 0.18, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 0.75, throttle: 0.15, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    // BOUNCE 1 — punch throttle to full just before the bottom, pull pitch back
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch: -0.35, roll:  0.00 },
    { t: 1.2,  throttle: 0.85, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    // Brief level moment at the top of the bounce
    { t: 1.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE 2 — repeat the pattern, slightly steeper
    { t: 1.5,  throttle: 0.16, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 1.85, throttle: 0.14, yaw:  0.00, pitch:  0.48, roll:  0.00 },
    // BOUNCE 2 — second throttle punch
    { t: 2.1,  throttle: 1.00, yaw:  0.00, pitch: -0.38, roll:  0.00 },
    { t: 2.3,  throttle: 0.85, yaw:  0.00, pitch: -0.18, roll:  0.00 },
    // Level moment again
    { t: 2.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // EXIT DIVE — final shallow dive to flow into next line
    { t: 2.7,  throttle: 0.30, yaw:  0.00, pitch:  0.35, roll:  0.00 },
    { t: 2.95, throttle: 0.40, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // Recovery — level cruise
    { t: 3.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
