export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.5,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: '90° roll sa kabaligtarang direksyon ng regular Knife Edge — kung ang regular KE ay roll-right, ito ay roll-left. Ang drone ay lumipad sa gilid pero sa ibang oryentasyon, kaya naman iba ang nararamdamang yaw correction.',
  tips: [
    'Ang yaw correction ay sa kabaligtarang direksyon kumpara sa regular Knife Edge — mag-ingat sa reflex',
    'Mag-roll ng exactly -90° (kabaligtaran ng regular KE) — parehong technique, kabaligtarang roll',
    'Mas mataas na throttle kaysa level flight para manatiling level sa reverse KE position',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll -90°' },
    { t: 0.9, label: 'Hold' },
    { t: 3.0, label: 'Roll Back' },
    { t: 3.6, label: 'Level' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to -90° (reverse direction from regular knife edge)
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -0.75 },
    { t: 0.7,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll: -0.55 },
    // Reverse knife edge hold — opposite yaw to maintain heading
    { t: 0.9,  throttle: 0.80, yaw: -0.30, pitch: -0.05, roll:  0.00 },
    { t: 1.3,  throttle: 0.82, yaw: -0.32, pitch: -0.05, roll:  0.00 },
    { t: 1.7,  throttle: 0.80, yaw: -0.28, pitch: -0.03, roll:  0.00 },
    { t: 2.1,  throttle: 0.82, yaw: -0.30, pitch: -0.05, roll:  0.00 },
    { t: 2.55, throttle: 0.80, yaw: -0.28, pitch: -0.03, roll:  0.00 },
    // Roll back to upright (positive roll to return)
    { t: 3.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    { t: 3.28, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Level
    { t: 3.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
