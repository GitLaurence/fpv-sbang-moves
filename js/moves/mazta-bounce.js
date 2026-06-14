export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na throttle chop-and-punch na may pitch oscillation — parang "bouncing" papunta-pabalik sa pagitan ng dalawang altitude levels. Magandang drill para sa throttle control at timing.',
  tips: [
    'I-chop ang throttle habang bahagyang nose-down para sa "dive" — hindi dapat biglaan ang pitch',
    'I-punch ang throttle nang sabay sa nose-up para sa "bounce" — saka agad mag-ease pabalik',
    'Panatilihin ang rhythm na consistent — pareho ang timing ng bawat dive-bounce cycle',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Dive 1' },
    { t: 1.0, label: 'Bounce 1' },
    { t: 1.6, label: 'Dive 2' },
    { t: 2.1, label: 'Bounce 2' },
    { t: 2.7, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE 1 — throttle chop with slight nose-down
    { t: 0.5,  throttle: 0.25, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 0.8,  throttle: 0.25, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // BOUNCE 1 — throttle punch with nose-up
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 1.3,  throttle: 0.85, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // DIVE 2 — throttle chop with slight nose-down
    { t: 1.6,  throttle: 0.25, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 1.9,  throttle: 0.25, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // BOUNCE 2 — throttle punch with nose-up
    { t: 2.1,  throttle: 1.00, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 2.4,  throttle: 0.80, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Exit — resume level forward flight
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
