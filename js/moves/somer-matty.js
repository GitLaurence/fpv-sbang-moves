export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Back-to-back na combo — isang Somersault (backward loop) na agad sinusundan ng Matty Flip (forward punch-through). Magkasalungat ang direksyon ng dalawang rotations, walang level pause sa pagitan.',
  tips: [
    'Bawasan ang throttle papasok sa somersault para sumara ang loop nang mabilis',
    'Walang center pause sa pagitan ng dalawang flips — direktang sumasalit ang pitch direction',
    'Mag-master muna ng hiwalay na Matty Flip bago subukan ang combo na ito',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Somer Back' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.7, label: 'Matty Fwd' },
    { t: 2.3, label: 'Punch' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — moderate cruise
    { t: 0.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.2,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Somersault — pitch back, loop backward over the top
    { t: 0.3,  throttle: 0.55, yaw: 0.00, pitch: -0.85, roll: 0.00 },
    { t: 0.6,  throttle: 0.45, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    // Inverted at top of loop
    { t: 0.9,  throttle: 0.45, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    { t: 1.2,  throttle: 0.55, yaw: 0.00, pitch: -0.85, roll: 0.00 },
    // Completing somersault, momentary level
    { t: 1.5,  throttle: 0.62, yaw: 0.00, pitch: -0.30, roll: 0.00 },
    // Chain directly into Matty Flip — pitch forward
    { t: 1.7,  throttle: 0.70, yaw: 0.00, pitch:  0.75, roll: 0.00 },
    { t: 1.95, throttle: 0.80, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    // PUNCH through inverted
    { t: 2.3,  throttle: 1.00, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 2.6,  throttle: 0.85, yaw: 0.00, pitch:  0.55, roll: 0.00 },
    // Recovery to level
    { t: 2.9,  throttle: 0.70, yaw: 0.00, pitch:  0.15, roll: 0.00 },
    { t: 3.2,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 3.6,  throttle: 0.63, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 4.0,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
