export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Multi-axis combo — roll papuntang inverted, tapos habang inverted ay mag-pitch flip pabalik sa upright, at magtatapos sa isang mabilis na yaw snap. Pinangalanan sa sunod-sunod, acrobatic na rotations na parang fight choreography.',
  tips: [
    'Hiwalay ang bawat axis input — huwag pagsabayin ang roll at pitch flip, sunod-sunod ito',
    'Mag-pause ng saglit habang inverted bago mag-flick ng pitch — bigyan ng oras ang camera',
    'Ang yaw snap sa exit ay dapat mabilis at maikli — parang punctuation mark sa combo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Inv' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.6, label: 'Pitch Flip' },
    { t: 2.6, label: 'Yaw Snap' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to inverted — snap full roll
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted hold — brief pause, sticks center
    { t: 1.0,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch flip — full pitch forward through to upright
    { t: 1.6,  throttle: 0.60, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.35, throttle: 0.68, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    // Upright — brief settle before yaw snap
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Yaw snap — quick full yaw accent then center
    { t: 2.85, throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
