export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: 'Mag-yaw flip ng 180° muna para mag-reverse ang direksyon, tapos mag-roll sa knife edge sa kabilang side. Habang naka-hold, gamitin ang opposite yaw para mapanatili ang heading. Mas mahirap kaysa regular knife edge dahil baligtad ang reference frame.',
  tips: [
    'Mag-master muna ng regular Knife Edge bago subukan ito — kabaligtaran ang lahat ng correction',
    'Ang yaw flip sa entry ay dapat mabilis at full — hindi pwedeng half-hearted',
    'Sa reverse hold, kabaligtad ang yaw correction kumpara sa normal knife edge — i-anticipate ito',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Yaw Flip' },
    { t: 1.0, label: 'Roll -90°' },
    { t: 1.5, label: 'Reverse Hold' },
    { t: 3.2, label: 'Roll Back' },
    { t: 3.7, label: 'Level' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Yaw flip 180° — reverse the facing direction
    { t: 0.3,  throttle: 0.62, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 0.8,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Roll to -90° knife edge
    { t: 1.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -0.75 },
    { t: 1.3,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll: -0.55 },
    // Reverse knife edge hold — opposite yaw correction to maintain heading
    { t: 1.5,  throttle: 0.80, yaw: -0.30, pitch: -0.05, roll:  0.00 },
    { t: 1.9,  throttle: 0.82, yaw: -0.32, pitch: -0.05, roll:  0.00 },
    { t: 2.3,  throttle: 0.80, yaw: -0.28, pitch: -0.03, roll:  0.00 },
    { t: 2.7,  throttle: 0.82, yaw: -0.30, pitch: -0.05, roll:  0.00 },
    // Roll back to upright
    { t: 3.2,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    { t: 3.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Level
    { t: 3.7,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
