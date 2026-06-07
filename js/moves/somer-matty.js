export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pinagsamang combo — backward somersault (pitch back loop) na agad sinusundan ng Matty Flip punch-through (pitch forward + full throttle). Dalawang magkasalungat na rotation na pinagdugtong nang walang pause — mataas ang demand sa timing.',
  tips: [
    'Ang somersault ay backward loop — hold ang pitch back hanggang umabot sa inverted bago lumipat ng direksyon',
    'Mag-dead-stop muna sa inverted bago i-reverse ang pitch papunta sa Matty punch — malinaw na paghinto sa pagitan',
    'Ang Matty punch ay kailangan ng full throttle nang sabay sa pitch forward — sabay na input, hindi sunod-sunod',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Somersault' },
    { t: 1.2, label: 'Inverted' },
    { t: 1.5, label: 'Transition' },
    { t: 1.8, label: 'Matty Punch' },
    { t: 2.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault — pitch back, throttle held to carry through the backward loop
    { t: 0.4,  throttle: 0.78, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.75, throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted — top of the backward loop, throttle eases
    { t: 1.2,  throttle: 0.55, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Transition — dead stop, sticks centered, brief pause inverted
    { t: 1.5,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY PUNCH — snap pitch forward + full throttle to flip through and shoot out
    { t: 1.8,  throttle: 1.00, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 2.05, throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Pull out to level
    { t: 2.3,  throttle: 0.78, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 2.5,  throttle: 0.68, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.8,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
