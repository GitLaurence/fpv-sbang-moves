export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.0,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang combo na may Inverted Yaw Spin (Tornado) bilang finale — Boost → Roll Inverted → Dead Stop → buong inverted yaw spin → Split-S pull-through → Recovery. Mas matagal at mas theatrical kaysa sa standard Sbang.',
  tips: [
    'Ang inverted yaw spin ay dapat buong 360° — hayaan itong kumompleto ng isang paligid',
    'Panatilihing mababa ang throttle sa buong yaw spin para manatiling stable at flat',
    'Ang dead stop bago ang yaw spin ay nagbibigay ng mas dramatic na theatrical effect',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.9, label: 'Roll Inv' },
    { t: 1.3, label: 'Dead Stop' },
    { t: 1.6, label: 'Tornado' },
    { t: 2.8, label: 'Dead Stop' },
    { t: 3.0, label: 'Pull-S' },
    { t: 4.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — moderate forward flight
    { t: 0.00, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, slight nose-up
    { t: 0.40, throttle: 1.00, yaw:  0.00, pitch: -0.22, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.78, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.00, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, all sticks center
    { t: 1.18, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.42, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — full inverted yaw spin, one complete revolution
    { t: 1.55, throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.90, throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.20, throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.55, throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // DEAD STOP after spin — pause for effect
    { t: 2.70, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.88, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S pull — pitch back to exit the inverted position
    { t: 3.00, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.30, throttle: 0.55, yaw:  0.00, pitch: -0.88, roll:  0.00 },
    { t: 3.60, throttle: 0.68, yaw:  0.00, pitch: -0.42, roll:  0.00 },
    { t: 3.85, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 4.20, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.70, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.20, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.70, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.00, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
