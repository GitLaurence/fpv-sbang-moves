export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.2,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: '90° roll papuntang knife edge, pero backward ang flight path — parang pag-thread sa isang gap habang umuurong. Mas mahirap ang orientation kaysa regular na Knife Edge.',
  tips: [
    'Magsimula sa backward flight (negative pitch) bago mag-roll papuntang 90°',
    'Gamitin ang yaw para mapanatili ang ground track habang naka-knife edge',
    'Mas mataas na throttle kailangan dahil pataas ang induced drag sa reverse',
  ],
  phases: [
    { t: 0.0, label: 'Reverse Entry' },
    { t: 0.6, label: 'Roll 90°' },
    { t: 1.1, label: 'Knife Hold' },
    { t: 3.2, label: 'Roll Back' },
    { t: 3.8, label: 'Level' },
  ],
  keyframes: [
    // Reverse entry — pitch backward to establish reverse flight
    { t: 0.0, throttle: 0.55, yaw: 0.00, pitch:  0.55, roll: 0.00 },
    { t: 0.4, throttle: 0.55, yaw: 0.00, pitch:  0.55, roll: 0.00 },
    // Roll to 90° while holding reverse pitch
    { t: 0.6, throttle: 0.62, yaw: 0.00, pitch:  0.40, roll: 0.78 },
    { t: 0.9, throttle: 0.70, yaw: 0.00, pitch:  0.25, roll: 0.55 },
    // Knife edge hold — yaw maintains track, slight pitch trim
    { t: 1.1, throttle: 0.82, yaw: -0.32, pitch: 0.08, roll: 0.00 },
    { t: 1.6, throttle: 0.84, yaw: -0.34, pitch: 0.06, roll: 0.00 },
    { t: 2.1, throttle: 0.82, yaw: -0.30, pitch: 0.06, roll: 0.00 },
    { t: 2.6, throttle: 0.84, yaw: -0.32, pitch: 0.05, roll: 0.00 },
    { t: 3.0, throttle: 0.82, yaw: -0.30, pitch: 0.05, roll: 0.00 },
    // Roll back to upright forward flight
    { t: 3.2, throttle: 0.72, yaw: 0.00, pitch: 0.00, roll: -0.72 },
    { t: 3.5, throttle: 0.66, yaw: 0.00, pitch: 0.00, roll: -0.40 },
    // Level exit
    { t: 3.8, throttle: 0.62, yaw: 0.00, pitch: 0.00, roll: 0.00 },
    { t: 4.2, throttle: 0.60, yaw: 0.00, pitch: 0.00, roll: 0.00 },
  ],
};
