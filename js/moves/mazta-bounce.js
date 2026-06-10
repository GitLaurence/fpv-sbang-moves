export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Pitch dive papunta sa malapit sa lupa o tubig, tapos throttle punch para "bumalik" — paulit-ulit na bounce na parang bola. Maganda para sa low-altitude na freestyle malapit sa obstacles.',
  tips: [
    'Pitch forward nang konti lang habang bumababa — huwag sobrang steep para hindi mahirapan ang recovery',
    'Ang bounce punch ay mabilis at malakas — throttle blip lang, hindi sustained',
    'I-level ang pitch sa eksaktong sandali ng bounce para tumaas nang tuwid',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Dive 1' },
    { t: 1.1, label: 'Bounce 1' },
    { t: 1.5, label: 'Dive 2' },
    { t: 2.2, label: 'Bounce 2' },
    { t: 2.7, label: 'Climb Out' },
    { t: 3.4, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive 1 — pitch forward/down, ease throttle
    { t: 0.3,  throttle: 0.50, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 0.6,  throttle: 0.45, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 0.9,  throttle: 0.42, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    // BOUNCE 1 — throttle punch, level pitch
    { t: 1.1,  throttle: 1.00, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 1.3,  throttle: 0.70, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Dive 2 — pitch forward again
    { t: 1.5,  throttle: 0.48, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 1.85, throttle: 0.43, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 2.05, throttle: 0.42, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    // BOUNCE 2 — throttle punch, level pitch
    { t: 2.2,  throttle: 1.00, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 2.4,  throttle: 0.70, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Climb out — pitch back to gain altitude, ease throttle
    { t: 2.7,  throttle: 0.68, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch: -0.05, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
