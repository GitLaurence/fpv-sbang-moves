export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 4,
  durationSec: 4.6,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo: Somersault (backward pitch flip) na direktang chinain papuntang Matty Flip (forward pitch flip na may throttle punch habang inverted) — walang pause sa pagitan ng dalawang flips.',
  tips: [
    'Ang Somersault ay pitch BACKWARD habang ang Matty Flip ay pitch FORWARD — magkasalungat ang direksyon',
    'I-chain agad ang Matty Flip pagkatapos bumalik sa level mula sa Somersault — huwag maghintay',
    'Mag-master muna ng Somersault at Matty Flip nang hiwalay bago pagsamahin sa combo na ito',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Somersault' },
    { t: 0.9, label: 'Through' },
    { t: 1.35, label: 'Chain' },
    { t: 1.55, label: 'Matty Flip' },
    { t: 2.05, label: 'Punch' },
    { t: 2.75, label: 'Pull Out' },
    { t: 3.4, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — pitch back full, throttle chops near the top of the loop
    { t: 0.4,  throttle: 0.45, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.30, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Continue through the loop, throttle re-establishes
    { t: 0.9,  throttle: 0.50, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.15, throttle: 0.65, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    // Dead stop — brief level beat before chaining the next flip
    { t: 1.35, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY FLIP — chain immediately, pitch forward full
    { t: 1.55, throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.8,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — full throttle punch
    { t: 2.05, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.3,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Pull out toward level — ease throttle and pitch
    { t: 2.5,  throttle: 0.80, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 2.75, throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
