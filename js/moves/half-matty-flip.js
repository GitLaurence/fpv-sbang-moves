export default {
  id: 'half-matty-flip',
  name: 'Half Matty Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Kalahati lamang ng buong Matty Flip — mag-pitch forward papuntang inverted, tapos mag-roll palabas sa halip na tapusin ang buong 360° loop. Tinatawag ding "Reverse Split-S" dahil katulad ito ng Split-S pero ang papasok na pitch direction ang baligtad.',
  tips: [
    'Pitch forward papuntang inverted — itigil ang input bago marating ang ilalim ng loop',
    'Mag-roll palabas (90-180°) sa halip na ipagpatuloy ang pitch — dito nagiging "half" ang move',
    'Magdagdag ng katumbas na yaw habang nag-ro-roll para hindi mawala ang heading sa exit',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.05, label: 'Roll Out' },
    { t: 1.6,  label: 'Recover' },
    { t: 2.2,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — moderate cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Push pitch forward — begin the loop, just like the first half of a Matty Flip
    { t: 0.35, throttle: 0.72, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.76, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted — ease off pitch instead of continuing the loop ("the half")
    { t: 0.85, throttle: 0.70, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // Roll out — full roll input with counter-yaw to peel off and exit upright
    { t: 1.05, throttle: 0.55, yaw: -0.20, pitch:  0.00, roll:  1.00 },
    { t: 1.35, throttle: 0.58, yaw: -0.10, pitch:  0.00, roll:  0.85 },
    // Recover — sticks easing back toward center as the roll completes
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    { t: 1.9,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle back to cruise
    { t: 2.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
