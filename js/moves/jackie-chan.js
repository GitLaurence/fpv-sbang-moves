export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na combo ng snap roll papuntang inverted, sundan ng forward pitch flip habang baligtad, tapos roll out pabalik upright — parang martial-arts flurry na walang hinto sa pagitan ng mga input.',
  tips: [
    'Snap full roll papuntang inverted — mabilis at full deflection, hindi gradual',
    'Habang inverted, agad mag-throttle punch + pitch forward para sa flip — walang pause',
    'Ang roll out ay full roll pabalik sa upright — i-time para matapos kasabay ng pag-level ng pitch',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Snap Roll' },
    { t: 0.9, label: 'Flip' },
    { t: 1.6, label: 'Roll Out' },
    { t: 2.1, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap full roll to inverted
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.55, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Settle inverted, roll back to center — set up the flip
    { t: 0.75, throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Forward pitch flip with throttle punch while inverted
    { t: 0.9,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.15, throttle: 0.90, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.70, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Roll out — full roll back to upright
    { t: 1.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.85, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 2.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle to cruise
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
