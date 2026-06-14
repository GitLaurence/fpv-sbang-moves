export default {
  id: 'pendulum',
  name: 'Pendulum',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'l7F1a68G9r8',
  youtubeStart: 0,
  description: 'Pitch up papunta sa loop, tapos CUT ang throttle bago maabot ang taluktok — babagsak pabalik ang quad gaya ng pendulum sa parehong arc, hanggang sa "catch" sa ilalim na bumabalik sa forward motion. Tricky ang timing ng throttle cut.',
  tips: [
    'I-cut ang throttle eksakto bago mag-90° pitch — kung huli, makukumpleto ang loop sa lugar ng pag-swing',
    'Hayaan ang gravity gumawa ng trabaho sa swing-back — walang input maliban sa throttle cut',
    'Ang catch sa ilalim ay dapat tumutugma sa bilis ng pagbagsak — mas mabilis na bagsak, mas malakas ang punch',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Pitch Up' },
    { t: 1.2, label: 'Apex Cut' },
    { t: 1.8, label: 'Swing Back' },
    { t: 2.6, label: 'Bottom Catch' },
    { t: 3.2, label: 'Swing Fwd' },
    { t: 3.8, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch up — climb into the loop
    { t: 0.5,  throttle: 0.85, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    { t: 0.9,  throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // APEX CUT — throttle chopped near vertical, momentum becomes the pendulum bob
    { t: 1.2,  throttle: 0.10, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.08, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    // Swing back — gravity reverses the arc, quad falls back the way it came
    { t: 1.8,  throttle: 0.10, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 2.2,  throttle: 0.15, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Bottom catch — punch throttle to arrest the swing and reverse momentum
    { t: 2.6,  throttle: 0.75, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 2.9,  throttle: 0.75, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Swing forward — settle back to level
    { t: 3.2,  throttle: 0.68, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
