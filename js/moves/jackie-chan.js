export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na back-to-back na diagonal flip-roll combo — sabay na full pitch at roll input papunta sa isang diagonal, mabilis na i-snap pabalik sa center, tapos agad na sabay na pitch at roll papunta sa kabilang diagonal.',
  tips: [
    'Sabay ang pitch at roll input — pareho full deflection sa parehong oras para sa diagonal na rotation',
    'Mabilis ang snap pabalik sa center sa pagitan ng dalawang rotation — huwag mag-atubili',
    'Ang ikalawang diagonal ay kabaligtaran ng roll direction ng una',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Flip 1' },
    { t: 0.9,  label: 'Inverted 1' },
    { t: 1.55, label: 'Snap' },
    { t: 1.7,  label: 'Flip 2' },
    { t: 2.3,  label: 'Inverted 2' },
    { t: 2.8,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — moderate cruise
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal flip 1 — pitch forward + roll right together
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  0.90, roll:  0.90 },
    { t: 0.9,  throttle: 0.45, yaw:  0.00, pitch:  0.90, roll:  0.90 },
    // Finishing rotation 1 — ease toward center
    { t: 1.4,  throttle: 0.55, yaw:  0.00, pitch:  0.60, roll:  0.60 },
    // SNAP — brief center moment between rotations
    { t: 1.55, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal flip 2 — pitch forward + roll left (opposite diagonal)
    { t: 1.7,  throttle: 0.50, yaw:  0.00, pitch:  0.90, roll: -0.90 },
    { t: 2.3,  throttle: 0.45, yaw:  0.00, pitch:  0.90, roll: -0.90 },
    // Finishing rotation 2 — ease toward center
    { t: 2.8,  throttle: 0.62, yaw:  0.00, pitch:  0.40, roll: -0.40 },
    // Recovery — level flight
    { t: 3.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
