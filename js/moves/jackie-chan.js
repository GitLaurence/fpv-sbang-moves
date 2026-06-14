export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Acrobatic combo — forward pitch flip papuntang inverted, tapos habang patiwarik, mag-yaw spin (inverted yaw spin), bago mag-roll pabalik sa upright. Parang martial-arts spinning kick sa hangin.',
  tips: [
    'Mag-flip muna gamit ang forward pitch hanggang fully inverted bago simulan ang yaw',
    'Habang inverted, full yaw deflection — hawakan ang spin nang mahigpit, walang hesitation',
    'Ang roll-out ay dapat smooth at parehong direksyon ng paunang flip para tuloy-tuloy ang flow',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pitch Flip' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.2, label: 'Yaw Spin' },
    { t: 2.6, label: 'Spin Out' },
    { t: 3.2, label: 'Roll Out' },
    { t: 4.0, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch flip — forward pitch toward inverted
    { t: 0.4,  throttle: 0.78, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.7,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — dead stop, center sticks
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Yaw spin — sustained full yaw while inverted
    { t: 1.2,  throttle: 0.28, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.28, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Spin out — yaw eases off, dead stop again
    { t: 2.6,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out — roll back to upright in same rotational sense
    { t: 3.2,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.6,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.45 },
    { t: 3.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle to cruise
    { t: 4.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
