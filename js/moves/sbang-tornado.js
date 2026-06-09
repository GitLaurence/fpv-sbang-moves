export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 7.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang-style entry (Boost → Roll inverted → Dead Stop) na sinusundan ng isang buong inverted yaw spin "tornado" bago mag-exit sa Juicy Flick roll-out. Pinakamatagal at pinaka-visual na variant ng Sbang — ang tornado phase ay "signature stop" na pinalawak.',
  tips: [
    'Ang dead stop bago ang tornado ay dapat malinaw — sticks sa center, ilang frames, bago magsimula ng yaw',
    'Mas mataas ang throttle sa tornado phase (0.68-0.72) kaysa simpleng inverted hover — altitude ay critical',
    'Ang exit roll-out ay dapat decisive at mabilis — throttle blip, brief hold, tapos full roll pabalik sa upright',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Boost' },
    { t: 0.8,  label: 'Roll Inv' },
    { t: 1.2,  label: 'Dead Stop' },
    { t: 1.55, label: 'Tornado' },
    { t: 5.25, label: 'Stop Yaw' },
    { t: 5.5,  label: 'Blip' },
    { t: 5.65, label: 'Roll Out' },
    { t: 6.3,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch: -0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.62, throttle: 1.00, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, all sticks center, signature Sbang pause
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.42, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — begin inverted yaw spin, ramp throttle to hold altitude
    { t: 1.55, throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center left stick
    { t: 5.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.42, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Juicy exit — throttle blip while inverted, then 180° roll to upright
    { t: 5.5,  throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.65, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 5.9,  throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 6.1,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.28 },
    // Upright — throttle punch to recover
    { t: 6.3,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 7.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
