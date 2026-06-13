export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.4,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal flip — sabay na pitch at roll input na nagdudulot ng pag-ikot sa diagonal axis (kombinasyon ng forward flip at roll). Mabilis, snappy, at mukhang martial-arts kick kung mapanood — kaya napangalanang "Jackie Chan".',
  tips: [
    'Sabay na PUSH ng pitch forward at FULL roll sa parehong oras — diagonal ang axis ng pag-ikot',
    'Panatilihing pantay ang halaga ng pitch at roll input para tumpak ang 45° diagonal',
    'PUNCH ang throttle habang nasa kalagitnaan ng ikot para hindi mawalan ng altitude',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Diagonal Snap' },
    { t: 0.85, label: 'Inverted Diag' },
    { t: 1.0, label: 'Punch' },
    { t: 1.6, label: 'Continue Rot' },
    { t: 2.1, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal snap — sabay na pitch forward at full roll
    { t: 0.35, throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.80 },
    { t: 0.6,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Approaching inverted diagonal — sustained inputs
    { t: 0.85, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // PUNCH throttle sa gitna ng ikot para hindi mawalan ng altitude
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.2,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.90 },
    // Continue rotation — papunta sa upright
    { t: 1.4,  throttle: 0.82, yaw:  0.00, pitch:  0.55, roll:  0.55 },
    // Pull out to level
    { t: 1.65, throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.15 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 2.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.9,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
