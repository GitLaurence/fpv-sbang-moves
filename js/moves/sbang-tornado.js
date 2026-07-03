export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang-style boost → roll inverted → dead stop → Split-S pull, pero sa halip na Juicy Flick, nagtatapos sa buong inverted Yaw Spin ("tornado") bago mag-flip pabalik sa upright. Ang pinaka-mahabang miyembro ng Sbang family.',
  tips: [
    'Ang dead stop bago ang Split-S ay dapat literal na tigil — walang float sa sticks',
    'Ang tornado spin ay kailangan ng mas mataas na throttle (~65-70%) para manatiling level habang inverted',
    'Full yaw lang sa spin — walang partial input, at panatilihing centered ang ibang axes',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.5, label: 'Pull S' },
    { t: 2.5, label: 'Level Inv' },
    { t: 2.9, label: 'Tornado' },
    { t: 5.2, label: 'Stop Yaw' },
    { t: 5.5, label: 'Flip Up' },
    { t: 6.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — moderate forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.22, roll:  0.00 },
    { t: 0.62, throttle: 1.00, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.78, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, all sticks center, brief pause
    { t: 1.18, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.42, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S pull — pitch back, arc nose through bottom half-loop
    { t: 1.55, throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.2,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Level out briefly, but flip straight back to inverted for the tornado
    { t: 2.5,  throttle: 0.60, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 2.7,  throttle: 0.58, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Fully inverted again — center pitch, raise throttle for the spin
    { t: 2.9,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.1,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — full inverted yaw spin, elevated throttle to hold altitude
    { t: 3.3,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.3,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.8,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center left stick
    { t: 5.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.35, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright — pitch snap, throttle cut
    { t: 5.5,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.72, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — punch throttle to catch any altitude loss
    { t: 5.95, throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
