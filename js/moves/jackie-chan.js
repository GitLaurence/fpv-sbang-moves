export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal na flip — sabay na full pitch at full roll input para sa snap rotation sa diagonal axis, tapos throttle punch para "sipain" palabas ang quad pabalik sa upright. "Drone Kung Fu" ang bansag dahil sa kabilisan ng galaw.',
  tips: [
    'Sabay na i-snap ang pitch at roll sa parehong direksyon — hindi sunod-sunod',
    'Manatili sa diagonal hold nang maikli bago ang punch — huwag agad i-throttle',
    'Ang throttle punch ay siyang kumukumpleto ng rotation pabalik sa upright',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Snap' },
    { t: 0.9, label: 'Diagonal Inv' },
    { t: 1.5, label: 'Punch' },
    { t: 2.1, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SNAP — simultaneous full pitch + roll for diagonal-axis flip, throttle cut
    { t: 0.35, throttle: 0.26, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    { t: 0.6,  throttle: 0.25, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    // Diagonal inverted — brief hold
    { t: 0.9,  throttle: 0.30, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    { t: 1.15, throttle: 0.32, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    // PUNCH through — full throttle completes the diagonal rotation
    { t: 1.5,  throttle: 1.00, yaw:  0.00, pitch:  0.60, roll:  0.60 },
    { t: 1.75, throttle: 0.85, yaw:  0.00, pitch:  0.30, roll:  0.30 },
    // Recover to upright
    { t: 2.1,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
