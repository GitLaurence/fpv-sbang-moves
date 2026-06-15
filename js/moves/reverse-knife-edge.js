export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: 'Sabay na 90° roll at 180° pitch flip papunta sa baligtad na knife edge — lumilipad ka pabalik (tail-first) sa gilid bago mag-roll level pabalik.',
  tips: [
    'I-input ang roll at pitch nang sabay para sa malinis na combined rotation',
    'Gamitin ang yaw para mapanatili ang heading habang nasa reverse knife edge',
    'Mag-roll pabalik nang mabagal at controlled para sa malinis na exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll + Flip' },
    { t: 0.8, label: 'Rev Knife Edge' },
    { t: 1.2, label: 'Hold' },
    { t: 2.8, label: 'Roll Out' },
    { t: 3.2, label: 'Level' },
  ],
  keyframes: [
    // Entry — level approach
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Combined 90° roll + 180° pitch flip into reverse knife edge
    { t: 0.4,  throttle: 0.68, yaw:  0.00, pitch:  1.00, roll:  0.75 },
    { t: 0.8,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Reverse knife edge hold — yaw maintains heading flying tail-first
    { t: 1.2,  throttle: 0.82, yaw: -0.30, pitch:  1.00, roll:  1.00 },
    { t: 1.6,  throttle: 0.82, yaw: -0.32, pitch:  1.00, roll:  1.00 },
    { t: 2.0,  throttle: 0.80, yaw: -0.28, pitch:  1.00, roll:  1.00 },
    { t: 2.4,  throttle: 0.82, yaw: -0.30, pitch:  1.00, roll:  1.00 },
    // Roll and pitch back out to level
    { t: 2.8,  throttle: 0.72, yaw:  0.00, pitch:  0.50, roll:  0.50 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
