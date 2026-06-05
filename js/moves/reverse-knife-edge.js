export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: 'Knife edge na lumilipad nang paatras — ang drone ay naka-roll ng 90° at gumagamit ng reversed yaw para lumayo sa direksyon ng harap. Mas mahirap kaysa regular knife edge dahil nakakagambala ang spatial disorientation.',
  tips: [
    'Baligtad ang yaw input — kung lumilipad ka sa kanan, yaw pabaligtad (kaliwang yaw input)',
    'Mas mataas ang throttle kaysa regular knife edge — kailangan ng dagdag na lift habang reversed',
    'Magsanay ng regular knife edge nang maayos bago subukang reverse — parehong physics, kabaligtad',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll 90°' },
    { t: 0.9, label: 'Rev Hold' },
    { t: 3.2, label: 'Roll Back' },
    { t: 3.8, label: 'Level' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to 90° knife edge
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.75 },
    { t: 0.7,  throttle: 0.74, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    // Reverse knife edge hold — opposite yaw to fly backward + slight pitch
    { t: 0.9,  throttle: 0.84, yaw: -0.30, pitch:  0.05, roll:  0.00 },
    { t: 1.3,  throttle: 0.86, yaw: -0.32, pitch:  0.05, roll:  0.00 },
    { t: 1.7,  throttle: 0.84, yaw: -0.28, pitch:  0.03, roll:  0.00 },
    { t: 2.1,  throttle: 0.86, yaw: -0.30, pitch:  0.05, roll:  0.00 },
    { t: 2.5,  throttle: 0.84, yaw: -0.30, pitch:  0.03, roll:  0.00 },
    { t: 2.9,  throttle: 0.86, yaw: -0.30, pitch:  0.05, roll:  0.00 },
    // Roll back to upright
    { t: 3.2,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll: -0.70 },
    { t: 3.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll: -0.40 },
    // Level out
    { t: 3.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
