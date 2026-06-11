export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal na flip — sabay na pitch at roll input na pantay ang lakas, gumagawa ng rotation sa diagonal axis sa halip na purong pitch o roll. Mahirap panatilihin ang oryentasyon dahil hindi ito level o inverted lang.',
  tips: [
    'I-apply ang pitch at roll nang sabay-sabay at pantay ang lakas para sa tunay na diagonal axis',
    'I-manage ang throttle habang papasok sa diagonal inverted position — huwag mawalan ng altitude',
    'Mag-focus sa isang reference point sa background para hindi mawala ang oryentasyon',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Diagonal In' },
    { t: 1.2, label: 'Inverted' },
    { t: 1.8, label: 'Diagonal Out' },
    { t: 2.4, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal in — equal pitch and roll deflection
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  0.70, roll:  0.70 },
    { t: 0.7,  throttle: 0.50, yaw:  0.00, pitch:  0.75, roll:  0.75 },
    { t: 1.0,  throttle: 0.48, yaw:  0.00, pitch:  0.75, roll:  0.75 },
    // Inverted diagonal point — hold
    { t: 1.2,  throttle: 0.48, yaw:  0.00, pitch:  0.75, roll:  0.75 },
    { t: 1.5,  throttle: 0.52, yaw:  0.00, pitch:  0.75, roll:  0.75 },
    // Diagonal out — continue same direction to complete rotation
    { t: 1.8,  throttle: 0.58, yaw:  0.00, pitch:  0.70, roll:  0.70 },
    { t: 2.1,  throttle: 0.63, yaw:  0.00, pitch:  0.30, roll:  0.30 },
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle level
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
