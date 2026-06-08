export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.4,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: '"Drone kung fu" — mabilisang kombinasyon ng snap roll, forward flip, yaw flick, at counter-roll na sunod-sunod na walang puwang sa pagitan. Parang martial-arts combo sa ere; ang bawat input ay sharp, decisive, at parehong bilis.',
  tips: [
    'Walang dead stop sa pagitan ng mga element — agad dumadaloy ang isa papunta sa susunod',
    'Hiwalay munang i-master ang bawat piraso (roll, flip, yaw flick, counter-roll) bago pagsamahin',
    'Pantay na ritmo ang susi — dapat magkasing-bilis ang bawat snap input para "flow" ang buong combo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Snap Roll' },
    { t: 0.95, label: 'Flip' },
    { t: 1.55, label: 'Yaw Flick' },
    { t: 2.1, label: 'Counter Roll' },
    { t: 2.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SNAP ROLL — full-speed roll, in and out quickly
    { t: 0.35, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.55, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP — immediate forward pitch snap, no pause after the roll
    { t: 0.95, throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.42, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.4,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW FLICK — sharp full yaw snap
    { t: 1.55, throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.75, throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // COUNTER ROLL — opposite-direction snap to finish the combo
    { t: 2.1,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.3,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.95, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
