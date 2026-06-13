export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Sabay na full pitch at full roll input — isang diagonal na flip/roll combo na umiikot sa parehong axes nang sabay-sabay. Mas mabilis at mas "magulo" ang tingin kaysa sa hiwalay na flip o roll.',
  tips: [
    'Ibigay nang sabay ang pitch at roll — hindi sunod-sunod, kundi sa eksaktong parehong sandali',
    'Dagdagan ang throttle habang umiikot para hindi bumagsak nang sobra sa diagonal',
    'Pantay ang bilis ng dalawang axes para maging tunay na diagonal ang rotation, hindi paikot-ikot',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.35, label: 'Diagonal Punch' },
    { t: 0.7,  label: 'Inverted Diag' },
    { t: 1.4,  label: 'Roll Out' },
    { t: 1.65, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal punch — full pitch and full roll input together, throttle up
    { t: 0.35, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.55, throttle: 0.92, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Inverted diagonal — hold full throttle through the top of the rotation
    { t: 0.7,  throttle: 0.95, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.9,  throttle: 0.90, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.1,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Roll/pitch out — completing the rotation back to upright
    { t: 1.4,  throttle: 0.72, yaw:  0.00, pitch:  0.40, roll:  0.40 },
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — back to level cruise
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
