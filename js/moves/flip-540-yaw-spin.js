export default {
  id: 'flip-540-yaw-spin',
  name: '540° Flip + Roll + Inverted Yaw Spin',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.5,
  youtubeId:    'l3Y8brXYYQw',
  youtubeStart: 0,
  description: 'Mahabang combo: 540° forward flip (1.5 loops), tapos roll papuntang inverted, tapos buong inverted yaw spin bago mag-flip pabalik sa upright. Test ng stamina at timing ng combo flying.',
  tips: [
    'Hatiin ang combo sa tatlong hiwalay na skill — flip, roll, yaw spin — at i-master isa-isa',
    'Sa 540° flip, dalawang beses dumadaan sa inverted bago tumigil — huwag agad i-stop sa unang pass',
    'Panatilihin ang throttle base sa ~0.65-0.70 sa pagitan ng mga phase para hindi mawala ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: '540 Flip' },
    { t: 1.6, label: 'Recover' },
    { t: 2.0, label: 'Roll Inv' },
    { t: 2.5, label: 'Dead Stop' },
    { t: 2.9, label: 'Yaw Spin' },
    { t: 5.4, label: 'Flip Up' },
    { t: 6.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 540° FLIP — 1.5 loops of forward pitch, throttle cuts going inverted, punches coming back
    { t: 0.4,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.95, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.45, throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Recover from flip — center pitch, settle level
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 2.0,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.25, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, sticks center, brief pause
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // INVERTED YAW SPIN — full yaw, elevated throttle to hold altitude
    { t: 2.9,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.9,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.4,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.9,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center
    { t: 5.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright — pitch snap, throttle cut
    { t: 5.4,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.65, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Recovery — punch throttle to catch altitude, settle
    { t: 5.9,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
