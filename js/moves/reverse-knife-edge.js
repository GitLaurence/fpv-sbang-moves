export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: 'Knife edge sa reverse — i-roll ang drone 90° tapos lumipad paatras habang naka-sideways. Kailangan ng coordinated yaw at pitch para mapanatili ang backwards drift at heading.',
  tips: [
    'Mag-establish ng backward momentum muna bago mag-roll sa knife edge position',
    'Ang yaw at pitch coordination ay mas challenging kaysa regular knife edge — mag-start sa maliit na attempts',
    'Mas mataas na throttle ang kailangan — ~80% para manatiling level habang sideways at paatras',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pitch Back' },
    { t: 0.8, label: 'Roll 90°' },
    { t: 1.3, label: 'Hold Rev' },
    { t: 3.2, label: 'Roll Back' },
    { t: 3.8, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch back briefly to establish backward momentum
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    { t: 0.65, throttle: 0.68, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Roll to 90° — snap to knife edge
    { t: 0.8,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.80 },
    { t: 1.05, throttle: 0.76, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    // Reverse knife edge hold — yaw + pitch to maintain heading and backward flight
    { t: 1.3,  throttle: 0.82, yaw: -0.28, pitch: -0.15, roll:  0.00 },
    { t: 1.7,  throttle: 0.80, yaw: -0.30, pitch: -0.12, roll:  0.00 },
    { t: 2.1,  throttle: 0.82, yaw: -0.28, pitch: -0.15, roll:  0.00 },
    { t: 2.5,  throttle: 0.80, yaw: -0.30, pitch: -0.12, roll:  0.00 },
    { t: 2.9,  throttle: 0.82, yaw: -0.28, pitch: -0.15, roll:  0.00 },
    // Roll back to upright
    { t: 3.2,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll: -0.75 },
    { t: 3.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll: -0.35 },
    // Level recovery
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
