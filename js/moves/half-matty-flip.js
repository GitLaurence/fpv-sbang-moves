export default {
  id: 'half-matty-flip',
  name: 'Half Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Reverse ng Split-S — pitch pataas (pabalik) para maabot ang inverted, tapos i-center ang lahat ng sticks. Kalahating Matty Flip lang — papunta sa inverted mula sa ibaba, hindi papababa mula sa taas. Mas madaling matuto kaysa full Matty Flip.',
  tips: [
    'Pitch back (hindi forward) — ito ang pangunahing pagkakaiba sa Matty Flip',
    'I-center lahat ng sticks pagdating sa inverted — huwag ipagpatuloy ang pitch para hindi maging full flip',
    'Dagdagan ang throttle habang papunta sa inverted para mapanatili ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Pitch Back' },
    { t: 0.8, label: 'Climbing' },
    { t: 1.3, label: 'Inverted' },
    { t: 1.7, label: 'Hold' },
    { t: 2.1, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level moderate forward flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch back aggressively — nose pitches up/back toward inverted
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    { t: 0.55, throttle: 0.80, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Continuing pitch-back arc through vertical
    { t: 0.85, throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.88, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    // Approaching inverted — ease pitch, re-establish throttle for inverted
    { t: 1.3,  throttle: 0.70, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 1.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Hold inverted — sticks centered
    { t: 1.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — roll back upright (180° roll)
    { t: 2.1,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.35, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.15 },
    // Upright — punch throttle, exit
    { t: 2.7,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
