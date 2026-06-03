export default {
  id: 'knife-edge',
  name: 'Knife Edge',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'FamqCNGrq2M',
  youtubeStart: 0,
  description: '90° roll na pinananatili sa axis. Mukhang parang lumilipad ka sa gilid ng eroplano. Kailangan ng yaw para mapanatili ang heading.',
  tips: [
    'Mag-roll ng exactly 90° — huwag labis, huwag kulang sa input',
    'Gamitin ang yaw para mapanatili ang heading at level habang naka-roll',
    'Kailangan ng mas mataas na throttle para manatiling level sa knife edge position',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll 90°' },
    { t: 0.9, label: 'Hold' },
    { t: 2.8, label: 'Roll Back' },
    { t: 3.4, label: 'Level' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to 90°
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.75 },
    { t: 0.7,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    // Knife edge hold — yaw to maintain heading, slight pitch correction
    { t: 0.9,  throttle: 0.80, yaw:  0.30, pitch:  0.05, roll:  0.00 },
    { t: 1.3,  throttle: 0.82, yaw:  0.32, pitch:  0.05, roll:  0.00 },
    { t: 1.7,  throttle: 0.80, yaw:  0.28, pitch:  0.03, roll:  0.00 },
    { t: 2.1,  throttle: 0.82, yaw:  0.30, pitch:  0.05, roll:  0.00 },
    { t: 2.5,  throttle: 0.80, yaw:  0.30, pitch:  0.03, roll:  0.00 },
    // Roll back to upright
    { t: 2.8,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll: -0.70 },
    { t: 3.1,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll: -0.40 },
    // Level
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
