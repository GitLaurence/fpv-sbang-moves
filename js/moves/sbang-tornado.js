export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang-style boost → roll inverted → dead stop → buong 360° yaw tornado spin habang inverted → Split-S pull-through exit. Pinagsama ang Sbang aesthetic (dead stop, snappy inputs) at ang Inverted Yaw Spin para sa pinaka-dramatic na combo.',
  tips: [
    'Ang dead stop bago ang tornado ay dapat perpekto — kahit isang frame ng motion bago ang yaw ay makakasira ng look',
    'Panatilihing mataas ang throttle (~68-70%) habang nag-iinverted spin para hindi bumaba',
    'I-time ang pagtapos ng yaw spin bago mag-Split-S — center ang yaw bago mag-pull',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.5, label: 'Tornado' },
    { t: 3.8, label: 'Stop Yaw' },
    { t: 4.1, label: 'Pull S' },
    { t: 5.2, label: 'Recover' },
  ],
  keyframes: [
    // Entry — moderate forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, slight pitch back
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.22, roll:  0.00 },
    { t: 0.62, throttle: 1.00, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP inverted — all sticks center
    { t: 1.18, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.42, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — full yaw spin while inverted, elevated throttle
    { t: 1.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center left stick before pull
    { t: 3.82, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S pull-through — pitch back, arc nose through half-loop
    { t: 4.15, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 4.85, throttle: 0.68, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Recovery — level out
    { t: 5.2,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
