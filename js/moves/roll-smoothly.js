export default {
  id: 'roll-smoothly',
  name: 'Roll Smoothly',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Isang buong 360° na roll gamit ang pare-parehong bilis mula simula hanggang wakas — walang stutter, walang bilis na pagbabago. Foundation skill ito bago matuto ng mas mabilisang combo rolls.',
  tips: [
    'Panatilihing constant ang throttle habang nag-ro-roll — huwag hayaang bumaba ang altitude',
    'Pare-pareho ang bilis ng roll sa buong 360° — hindi ito snap, kundi steady at fluid',
    'Magsanay sa parehong direksyon (kaliwa at kanan) para balanced ang skill',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Start' },
    { t: 1.15, label: 'Roll Complete' },
    { t: 1.5, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll — hold full deflection at a steady rate through the whole 360°
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Release stick — rotation complete, back to center
    { t: 1.15, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 1.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
