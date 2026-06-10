export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na sunod-sunod na flip at roll combo — parang stunt sequence ni Jackie Chan. Front flip muna, sunod agad ang full roll bago pa makapag-recover, tapos isa pang quick roll papuntang exit.',
  tips: [
    'Throttle cut bago ang bawat inversion — ito ang pinakamahalagang technique sa buong combo',
    'Walang paghinto sa pagitan ng flip at roll — dapat tuluy-tuloy at mabilis ang transition',
    'I-practice muna ang flip at roll nang hiwalay, tapos pagsamahin nang dahan-dahan bago bilisan',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Front Flip' },
    { t: 1.1, label: 'Roll 1' },
    { t: 1.8, label: 'Snap' },
    { t: 2.3, label: 'Roll 2' },
    { t: 3.0, label: 'Recover' },
    { t: 3.5, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FRONT FLIP — throttle cut, full pitch forward
    { t: 0.4,  throttle: 0.20, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.20, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Briefly center before snapping into roll
    { t: 1.1,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL 1 — immediate full roll, throttle cut again
    { t: 1.25, throttle: 0.22, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.55, throttle: 0.22, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.8,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // SNAP — dead stop, both sticks center
    { t: 1.9,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL 2 — quick second roll, opposite direction
    { t: 2.3,  throttle: 0.24, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.6,  throttle: 0.24, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.85, throttle: 0.40, yaw:  0.00, pitch:  0.00, roll: -0.30 },
    // Recover — settle back to level
    { t: 3.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — resume forward flight
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
