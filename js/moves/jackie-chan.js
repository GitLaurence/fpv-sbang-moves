export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Acrobatic combo: pitch flip papuntang inverted → yaw spin habang nakabaligtad → pitch flip pabalik sa upright. Parang stunt roll ni Jackie Chan — paikot-ikot pero kontrolado, walang dead stop sa pagitan ng mga rotation.',
  tips: [
    'Walang dead stop — direktang dumadaloy ang flip papunta sa yaw spin papunta sa flip pabalik',
    'I-time ang throttle punch sa simula ng bawat flip para mapanatili ang altitude',
    'Mag-master muna ng hiwalay na flip at inverted yaw spin bago pagsamahin',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip In' },
    { t: 1.1, label: 'Inverted' },
    { t: 1.4, label: 'Yaw Spin' },
    { t: 2.8, label: 'Spin Out' },
    { t: 3.2, label: 'Flip Out' },
    { t: 4.0, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip in — pitch forward into the flip
    { t: 0.4,  throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.75, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — ease pitch, prepare for yaw spin
    { t: 1.1,  throttle: 0.45, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // Inverted yaw spin — full yaw input while inverted
    { t: 1.4,  throttle: 0.40, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.40, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.42, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.40, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Spin out — ease yaw, hold inverted
    { t: 2.8,  throttle: 0.42, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip out — continue pitch through to upright
    { t: 3.2,  throttle: 0.78, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 3.55, throttle: 0.75, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 3.85, throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Recover — settle to level cruise
    { t: 4.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
