export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang-style boost → roll inverted → dead stop, pero sa puntong ito mag-sustain ng full yaw spin habang inverted (ang "tornado") bago mag Split-S pull palabas. Pinagsasama ang signature dead stop ng Sbang at ang continuous spin ng Inverted Yaw Spin.',
  tips: [
    'Ang dead stop bago ang tornado ay dapat literal na tigil — sticks center, ilang frames, tapos i-roll ang yaw',
    'Habang nag-tornado, dagdagan ang throttle para hindi mawala ang altitude sa buong spin',
    'I-stop ang yaw nang malinaw bago mag-pull — center muna ang yaw stick bago mag-Split-S',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.4, label: 'Tornado' },
    { t: 3.2, label: 'Stop Spin' },
    { t: 3.4, label: 'Pull' },
    { t: 4.4, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, all sticks center, brief pause
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — sustained full yaw spin while inverted, throttle up to hold altitude
    { t: 1.4,  throttle: 0.66, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.66, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.9,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center stick
    { t: 3.2,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S pull — pitch back through bottom half-loop
    { t: 3.4,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.75, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 4.1,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Recovery
    { t: 4.4,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.1,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
