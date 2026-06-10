export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na sunod-sunod na flip at roll na walang pahinga sa pagitan — parang stunt combo ni Jackie Chan. Bawat rotation ay direktang umaagos papunta sa susunod, walang dead stop.',
  tips: [
    'Walang center pause sa pagitan ng mga rotation — direktang dumadaloy ang bawat input papunta sa susunod',
    'Panatilihin ang throttle medyo mataas sa buong combo para hindi masyadong bumagsak',
    'Mag-master muna ng hiwalay na flip at roll bago pagsamahin sa mabilis na sunod-sunod',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip 1' },
    { t: 1.1, label: 'Roll 1' },
    { t: 1.8, label: 'Flip 2' },
    { t: 2.5, label: 'Roll 2' },
    { t: 3.2, label: 'Recover' },
    { t: 3.8, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 1 — forward pitch flip, throttle punch through inverted
    { t: 0.4,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL 1 — straight into a full roll, no pause
    { t: 1.1,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.45, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 2 — second forward flip, throttle punch again
    { t: 1.8,  throttle: 0.88, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL 2 — second roll, opposite direction, flowing straight in
    { t: 2.5,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.85, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 3.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — punch to catch any altitude loss after the combo
    { t: 3.2,  throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
