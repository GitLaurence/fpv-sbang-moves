export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal flip-roll combo — sabay na full pitch at full roll input para mag-spin ang quad sa diagonal axis, tapos kabaligtaran na input para ibalik sa upright. Mukhang "tumatakbo papalibot" katulad ng stunt roll.',
  tips: [
    'Sabayan ang pitch at roll input — dapat parehong full deflection at sabay ang timing',
    'Maikling dead stop sa gitna ng spin bago ang counter input papuntang upright',
    'Ang counter snap ay dapat eksaktong kabaligtaran ng unang input para malinis ang recovery',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Snap' },
    { t: 0.85, label: 'Diagonal' },
    { t: 1.5, label: 'Counter' },
    { t: 2.2, label: 'Recover' },
    { t: 2.9, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIAGONAL SNAP — full pitch + full roll together, throttle chop
    { t: 0.5,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Hold through diagonal rotation — brief dead stop at the midpoint
    { t: 0.85, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.05, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // COUNTER SNAP — opposite diagonal to complete the rotation back upright
    { t: 1.5,  throttle: 0.32, yaw:  0.00, pitch: -1.00, roll: -1.00 },
    { t: 1.75, throttle: 0.35, yaw:  0.00, pitch: -1.00, roll: -1.00 },
    // Center out — upright again
    { t: 2.0,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — throttle punch to regain altitude
    { t: 2.2,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
