export default {
  id: 'roll-smoothly',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 3.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll na may pare-pareho, steady na rate — hindi snap, hindi sudden. Foundational na trick bago matuto ng mas advanced na flips at flicks.',
  tips: [
    'Pare-pareho ang roll rate sa buong ikot — huwag bilisan o bagalan sa gitna',
    'Taasan ang throttle habang papalapit sa inverted para hindi bumaba ang altitude',
    'I-release ang roll input nang tama sa 360° — huwag sobrahan para hindi mag-overshoot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Start' },
    { t: 1.3, label: 'Inverted' },
    { t: 2.2, label: 'Complete' },
    { t: 2.6, label: 'Level' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin smooth, steady roll
    { t: 0.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 0.8,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    // Inverted midpoint — throttle up to hold altitude
    { t: 1.3,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 1.8,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    // Completing the 360° — ease roll out
    { t: 2.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 2.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Level / exit
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
