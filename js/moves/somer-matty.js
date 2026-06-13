export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng dalawang flips: Somersault (pitch back loop) agad na sinusundan ng Matty Flip (pitch forward na may throttle punch sa inverted). Dalawang magkasalungat na rotation sa isang flow.',
  tips: [
    'Sa somersault, pitch back nang buo at dagdagan ang throttle para hindi mawala ang altitude',
    'Mag-level muna nang maigsi bago pumasok sa Matty Flip — huwag direktang i-chain ang dalawa',
    'Sa Matty Flip, mag-punch ng throttle habang papunta sa inverted, hindi pagkatapos',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Somersault' },
    { t: 1.3, label: 'Level' },
    { t: 1.9, label: 'Pitch Fwd' },
    { t: 2.5, label: 'Punch' },
    { t: 3.2, label: 'Pull Out' },
    { t: 3.7, label: 'Recovery' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — pitch back full, throttle up to carry the loop
    { t: 0.4,  throttle: 0.75, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.85, throttle: 0.78, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Coming out of loop, back toward level
    { t: 1.1,  throttle: 0.70, yaw:  0.00, pitch: -0.45, roll:  0.00 },
    // Brief level pause between the two flips
    { t: 1.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY FLIP — pitch forward, building toward inverted
    { t: 1.9,  throttle: 0.74, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 2.2,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle while inverted, continuing pitch
    { t: 2.5,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.7,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Pull out to level — ease throttle and pitch
    { t: 3.0,  throttle: 0.80, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    { t: 3.2,  throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Recovery
    { t: 3.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
