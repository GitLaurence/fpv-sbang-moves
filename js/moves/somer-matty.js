export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang flip nang pagkakasunod-sunod — unang backflip (pitch back) papuntang inverted, tapos diretsong Matty Flip (pitch forward) pabalik sa upright. Combo na nagpapakita ng full control sa pitch axis sa magkasalungat na direksyon.',
  tips: [
    'Ang unang flip ay PULL pitch back — full backflip papuntang inverted',
    'Sa sandaling makarating sa inverted, agad i-reverse ang pitch papuntang forward para sa Matty Flip',
    'Walang dead pause sa pagitan ng dalawang flip — dapat tuloy-tuloy ang transition',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Backflip' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.3, label: 'Reverse' },
    { t: 1.7, label: 'Matty Pitch' },
    { t: 2.3, label: 'Inverted 2' },
    { t: 2.7, label: 'Punch' },
    { t: 3.3, label: 'Exit' },
  ],
  keyframes: [
    // Entry — moderate forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BACKFLIP — pull pitch back, throttle up for the loop
    { t: 0.3,  throttle: 0.85, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted at top of backflip — brief hold
    { t: 0.9,  throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.80, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    // Reverse — pitch sweeps through center toward forward
    { t: 1.3,  throttle: 0.78, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 1.45, throttle: 0.78, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // MATTY FLIP — pitch forward continues, building toward inverted again
    { t: 1.7,  throttle: 0.82, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.95, throttle: 0.88, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted (second pass) — full throttle punch through
    { t: 2.3,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.5,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Punch through to level — pitch easing forward toward zero
    { t: 2.7,  throttle: 0.85, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 2.95, throttle: 0.72, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // Exit — settle to cruise
    { t: 3.3,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.65, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
