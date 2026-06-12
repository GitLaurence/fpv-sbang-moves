export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.0,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang entry na sinusundan ng sustained flat yaw spin habang nasa inverted-ish attitude — parang "tornado" na umiikot habang dumadausdaus. Ang pinaka-demanding na combo dahil sa tagal ng sustained multi-axis input.',
  tips: [
    'Pareho sa Sbang ang entry — boost, roll inverted, dead stop',
    'Sa "tornado" phase, panatilihing constant ang yaw spin habang banayad na binabalanse ng pitch/roll',
    'Mag-master muna ng Sbang at Juicy Spin nang hiwalay bago subukan ang combo na ito',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.5, label: 'Tornado' },
    { t: 4.0, label: 'Unwind' },
    { t: 4.8, label: 'Roll Out' },
    { t: 5.5, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — both sticks back to center (inverted)
    { t: 1.2,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — sustained flat yaw spin with gentle pitch/roll balance
    { t: 1.5,  throttle: 0.45, yaw:  1.00, pitch: -0.10, roll:  0.10 },
    { t: 2.0,  throttle: 0.48, yaw:  1.00, pitch: -0.08, roll: -0.10 },
    { t: 2.5,  throttle: 0.45, yaw:  1.00, pitch: -0.10, roll:  0.10 },
    { t: 3.0,  throttle: 0.48, yaw:  1.00, pitch: -0.08, roll: -0.10 },
    { t: 3.5,  throttle: 0.45, yaw:  1.00, pitch: -0.10, roll:  0.10 },
    // Unwind — ease yaw out, level pitch/roll
    { t: 4.0,  throttle: 0.50, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    { t: 4.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out back to upright
    { t: 4.8,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 5.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 5.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
