export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na sunod-sunod na roll-flip-roll combo — pinangalanan sa martial arts icon dahil sa bilis at flow ng mga sequential rotations. Bawat rotation ay dapat maging clean at walang pag-drift.',
  tips: [
    'Bawat rotation ay dapat maging full 360° bago lumipat sa susunod — huwag mag-partial spin',
    'Maikling "reset" sa center sa pagitan ng roll at flip para hindi maghalo ang axes',
    'Panatilihin ang throttle bahagyang mababa sa mga rotation para hindi tumaas ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Roll 1' },
    { t: 1.0, label: 'Reset' },
    { t: 1.2, label: 'Flip' },
    { t: 1.7, label: 'Reset' },
    { t: 2.0, label: 'Roll 2' },
    { t: 2.6, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL 1 — full 360° roll right
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Reset — sticks back to center between rotations
    { t: 1.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP — full forward pitch flip
    { t: 1.2,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Reset — sticks back to center
    { t: 1.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL 2 — full 360° roll left
    { t: 2.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    // Exit — resume level forward flight
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
