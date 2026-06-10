export default {
  id: 'roll-smoothly',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Isang clean na 360° roll na may consistent na rate mula simula hanggang katapusan. Pundasyon ng lahat ng roll-based na tricks — kailangang maging mahinahon at predictable bago dagdagan ng ibang inputs.',
  tips: [
    'Panatilihin ang constant na roll rate — huwag bumilis o bumagal sa gitna ng spin',
    'Dagdagan nang bahagya ang throttle habang inverted (kalagitnaan ng roll) para hindi bumaba ang altitude',
    'Centered ang pitch sa buong move para manatili sa straight line',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Roll Start' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.7,  label: 'Roll Out' },
    { t: 2.0,  label: 'Exit' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin full roll — constant deflection drives a smooth continuous rotation
    { t: 0.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted halfway — slight throttle bump to hold the line
    { t: 1.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Completing the 360 — ease throttle back down
    { t: 1.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll complete — center stick, back upright
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
