export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang forward flip nang sunod-sunod — unang full pitch loop (somersault), tapos diretso sa pangalawang flip na may throttle punch habang inverted (Matty Flip). Walang pahinga sa pagitan ng dalawang rotation.',
  tips: [
    'Mag-master muna ng Matty Flip nang hiwalay — ang SomerMatty ay dalawa nito back-to-back',
    'Walang pause sa pagitan ng unang loop at pangalawang flip — diretsuhan ang pitch input',
    'I-time ang throttle punch sa pangalawang flip habang inverted para hindi mawalan ng altitude sa dalawang rotation',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Somersault' },
    { t: 1.0,  label: 'Inverted 1' },
    { t: 1.3,  label: 'Matty Pitch' },
    { t: 1.9,  label: 'Inverted 2' },
    { t: 2.05, label: 'Punch' },
    { t: 2.7,  label: 'Pull Out' },
    { t: 3.2,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — moderate speed and altitude
    { t: 0.0,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault — full pitch forward to begin first loop
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // First inverted point — keep pitch pinned, no pause
    { t: 1.0,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Straight into second flip — continue full pitch through to second inversion
    { t: 1.3,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.88, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Second inverted point approaching
    { t: 1.9,  throttle: 0.90, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle while inverted on the second rotation (Matty-style)
    { t: 2.05, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.25, throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Past second inversion — ease pitch toward level
    { t: 2.5,  throttle: 0.80, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    // Pull out to level
    { t: 2.85, throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 3.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.6,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
