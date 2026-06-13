export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Dalawang Split-S na sunod-sunod — pagkatapos ng unang Split-S, agad na mag-Split-S ulit pabalik (kabaligtaran na roll direction) para "i-rewind" ang flight path patungo sa pinanggalingan.',
  tips: [
    'Ibahin ang direksyon ng roll sa pangalawang Split-S para malinaw ang "rewind" na epekto',
    'Bigyan ng kaunting level na sandali sa pagitan ng dalawang Split-S bago mag-roll ulit',
    'Sustained pull sa parehong pulls — hindi jab, kundi tuluy-tuloy na pitch input',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll 1' },
    { t: 1.0,  label: 'Inverted 1' },
    { t: 1.2,  label: 'Pull 1' },
    { t: 2.45, label: 'Rewind Pt' },
    { t: 2.6,  label: 'Roll 2' },
    { t: 3.2,  label: 'Inverted 2' },
    { t: 3.4,  label: 'Pull 2' },
    { t: 4.75, label: 'Exit' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S #1 — half-roll to inverted, throttle cut
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.85, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.20 },
    { t: 1.0,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull #1 — sustained pitch back through the bottom half-loop
    { t: 1.2,  throttle: 0.40, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.50, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    { t: 2.3,  throttle: 0.72, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Rewind point — brief level moment, now flying opposite heading
    { t: 2.45, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S #2 — roll the OTHER way (rewind look), throttle cut again
    { t: 2.6,  throttle: 0.36, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.85, throttle: 0.34, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 3.05, throttle: 0.34, yaw:  0.00, pitch:  0.00, roll: -0.20 },
    { t: 3.2,  throttle: 0.34, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull #2 — sustained pitch back, second half-loop
    { t: 3.4,  throttle: 0.40, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.50, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 4.2,  throttle: 0.65, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    { t: 4.5,  throttle: 0.72, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Exit — back on original heading
    { t: 4.75, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
