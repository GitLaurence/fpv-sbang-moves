export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 7.0,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Pinahabang variant ng Sbang: Boost → Roll inverted → Dead stop → sustained inverted yaw spin ("tornado") ng maraming rotation → Split-S pull-through pabalik sa upright. Pinakamatagal at pinakamahirap kontrolin sa lahat ng Sbang variants — kailangan ng pare-parehong throttle habang patuloy na umiikot.',
  tips: [
    'Ang dead stop bago ang tornado ay dapat literal na tahimik — sticks sa center, fully inverted muna',
    'Habang nag-totornado, panatilihing steady ang throttle (~65-70%) para hindi mahulog habang umiikot',
    'Mag-exit gamit ang Split-S pull pagkatapos ihinto ang yaw — huwag biglaan, sustained ang pull',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.5, label: 'Tornado' },
    { t: 5.0, label: 'Stop Yaw' },
    { t: 5.4, label: 'Pull S' },
    { t: 6.5, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — moderate forward flight
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
    { t: 1.42, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — sustained full yaw spin habang inverted, steady throttle sa buong ikot
    { t: 1.5,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.66, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.66, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.69, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.9,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center left stick, brief settle inverted
    { t: 5.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.2,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S pull-through — sustained pitch back arcs nose down
    { t: 5.4,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 5.8,  throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 6.2,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Recovery — level out
    { t: 6.5,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 7.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
