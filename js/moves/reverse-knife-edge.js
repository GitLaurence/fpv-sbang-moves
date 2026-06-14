export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: 'Variant ng Knife Edge — 90° roll papunta sa edge, pero ang yaw ay nakatuon papuntang likod ng flight path, kaya parang "paatras" lumilipad ang drone habang naka-edge. Mas mahirap kontrolin dahil baligtad ang oryentasyon ng camera kumpara sa direksyon ng paggalaw.',
  tips: [
    'Mag-master muna ng regular Knife Edge bago subukan ang reverse variant',
    'Ang yaw input ay kabaliktaran ng normal knife edge — i-check muna ang heading bago mag-commit',
    'Mas mataas na throttle ang kailangan dahil sa karagdagang drag mula sa "paatras" na oryentasyon',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll 90°' },
    { t: 0.9, label: 'Reverse Hold' },
    { t: 2.8, label: 'Roll Back' },
    { t: 3.4, label: 'Level' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to 90°
    { t: 0.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll: -0.75 },
    { t: 0.7,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll: -0.55 },
    // Reverse knife edge hold — opposite yaw direction vs. regular knife edge
    { t: 0.9,  throttle: 0.85, yaw: -0.30, pitch:  0.05, roll:  0.00 },
    { t: 1.3,  throttle: 0.88, yaw: -0.32, pitch:  0.05, roll:  0.00 },
    { t: 1.7,  throttle: 0.85, yaw: -0.28, pitch:  0.03, roll:  0.00 },
    { t: 2.1,  throttle: 0.88, yaw: -0.30, pitch:  0.05, roll:  0.00 },
    { t: 2.5,  throttle: 0.85, yaw: -0.30, pitch:  0.03, roll:  0.00 },
    // Roll back to upright
    { t: 2.8,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    { t: 3.1,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Level
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
