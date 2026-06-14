export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pinagsamang Somersault (forward pitch flip) at Matty-style throttle punch — sabay na pitch at roll input papunta sa inverted, kaya ang quad ay umiikot sa isang diagonal na axis sa halip na hiwalay na pitch at roll.',
  tips: [
    'Sabay na ipush ang pitch at roll — ang diagonal axis ang nagbibigay ng "Somer" sa Matty Flip',
    'PUNCH ang throttle sa apex (fully inverted) gaya ng regular na Matty Flip',
    'Mag-master muna ng hiwalay na Matty Flip at Roll bago pagsamahin ang dalawang axis',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Diagonal Flip' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.0,  label: 'Punch' },
    { t: 1.6,  label: 'Roll Through' },
    { t: 2.0,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — moderate cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal flip — pitch and roll pushed together
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch:  0.75, roll:  0.75 },
    { t: 0.55, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.85, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // PUNCH at the apex — full throttle while diagonally inverted
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.2,  throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    // Continue rotation back toward level on both axes
    { t: 1.45, throttle: 0.80, yaw:  0.00, pitch:  0.45, roll:  0.45 },
    { t: 1.7,  throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.10 },
    // Recovery — center both sticks
    { t: 1.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
