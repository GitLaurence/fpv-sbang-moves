export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'advanced',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: 'Katulad ng Knife Edge ngunit naka-roll sa kabaligtarang direksyon (-90°) — ang mga propeller ay nakaharap sa kabilang gilid. Mas mahirap panatilihing level dahsa naiiba ang direksyon ng yaw compensation at pitch correction.',
  tips: [
    'Mag-roll ng exactly -90° sa kabaligtarang direksyon ng regular knife edge',
    'Gamitin ang yaw sa KABALIGTARANG direksyon para mapanatili ang heading at level flight',
    'Ang throttle ay kailangan din na mas mataas kaysa hover — ang gravitational correction ay pareho',
    'Mag-master ng regular knife edge muna bago subukan ang reverse — ang muscle memory ay naiiba',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll -90°' },
    { t: 0.9, label: 'Hold' },
    { t: 2.8, label: 'Roll Back' },
    { t: 3.4, label: 'Level' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to -90° (opposite direction from standard knife edge)
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -0.75 },
    { t: 0.7,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll: -0.55 },
    // Reverse knife edge hold — opposite yaw + mirrored pitch correction
    { t: 0.9,  throttle: 0.80, yaw: -0.30, pitch: -0.05, roll:  0.00 },
    { t: 1.3,  throttle: 0.82, yaw: -0.32, pitch: -0.05, roll:  0.00 },
    { t: 1.7,  throttle: 0.80, yaw: -0.28, pitch: -0.03, roll:  0.00 },
    { t: 2.1,  throttle: 0.82, yaw: -0.30, pitch: -0.05, roll:  0.00 },
    { t: 2.5,  throttle: 0.80, yaw: -0.30, pitch: -0.03, roll:  0.00 },
    // Roll back to upright (+roll to undo the -roll)
    { t: 2.8,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    { t: 3.1,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Level
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
