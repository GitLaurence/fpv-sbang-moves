export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal flip — sabay na pitch at roll input para mag-rotate ang drone sa diagonal axis, parang martial-arts spin kick. Mas mahirap kaysa regular flip dahil dalawang axis ang kasabay na ginagalaw.',
  tips: [
    'Sabay na full deflection ng pitch AT roll stick — eksaktong magkasabay, hindi sunod-sunod',
    'Panatilihing pantay ang ratio ng pitch sa roll para tama ang diagonal axis (45°)',
    'I-recover sa parehong oras — sabay na bitawan ang dalawang stick pabalik sa center',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Diagonal Flip' },
    { t: 1.1, label: 'Inverted' },
    { t: 1.8, label: 'Continue' },
    { t: 2.5, label: 'Recover' },
    { t: 3.0, label: 'Level' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIAGONAL FLIP — simultaneous full pitch + roll, throttle chop
    { t: 0.35, throttle: 0.30, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    { t: 0.6,  throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Through the diagonal rotation — hold both inputs
    { t: 0.9,  throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // INVERTED on the diagonal axis
    { t: 1.1,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.45, throttle: 0.32, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Continue rotation toward upright
    { t: 1.8,  throttle: 0.45, yaw:  0.00, pitch:  0.70, roll:  0.70 },
    { t: 2.15, throttle: 0.58, yaw:  0.00, pitch:  0.35, roll:  0.35 },
    // Recover — ease both sticks back to center together
    { t: 2.5,  throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.10 },
    { t: 2.75, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Level
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
