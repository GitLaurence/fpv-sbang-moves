export default {
  id: 'sbang-lookback',
  name: 'Sbang Lookback',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'WlqeC2reZkA',
  youtubeStart: 0,
  description: 'Sbang-style boost → roll inverted → dead stop → yaw whip habang inverted (ang "lookback", tumitingin sa pinanggalingang linya) → Split-S pull para lumabas sa kabaligtarang direksyon → Juicy Flick pabalik sa forward flight. Ang "dead stop" inverted ay signature ng sbang aesthetic.',
  tips: [
    'Ang dead stop inverted ay dapat literal na dead — sticks sa center, tahimik, ilang frames bago mag-yaw whip',
    'Ang yaw whip ang buong punto ng "lookback" — mabilis na snap papuntang likod habang inverted, hindi buong 360°',
    'Mabilis at snappy ang lahat ng input — huwag smooth, kundi decisive at immediate',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.18, label: 'Dead Stop' },
    { t: 1.3, label: 'Lookback' },
    { t: 1.55, label: 'Pull S' },
    { t: 2.5, label: 'Reverse Heading' },
    { t: 3.0, label: 'Juicy' },
    { t: 3.9, label: 'Roll Out' },
    { t: 4.5, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — moderate forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, slight pitch back for nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.22, roll:  0.00 },
    { t: 0.62, throttle: 1.00, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.78, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, brief pause before the yaw whip
    { t: 1.18, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // LOOKBACK — yaw whip while inverted, camera snaps toward the entry line
    { t: 1.3,  throttle: 0.30, yaw:  0.65, pitch:  0.00, roll:  0.00 },
    { t: 1.42, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S pull — pitch back, arc nose through bottom half-loop
    { t: 1.55, throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.2,  throttle: 0.68, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // REVERSE HEADING — now flying opposite direction; brief level pause for camera
    { t: 2.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip, pitch snap to inverted
    { t: 2.95, throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.1,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.28, throttle: 0.26, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll back to upright
    { t: 3.42, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.68, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    { t: 3.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — throttle punch to regain altitude
    { t: 4.1,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
