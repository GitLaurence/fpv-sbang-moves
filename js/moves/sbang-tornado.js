export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang-style combo na may kasamang Tornado (inverted yaw spin) sa gitna: Boost → Roll inverted → Dead stop → 360°+ yaw tornado → Split-S pull-through → Juicy Flick exit. Ang pinaka-complex na Sbang variant — sabay-sabay ang lahat ng technique.',
  tips: [
    'I-master ang Sbang Lookback at Inverted Yaw Spin nang hiwalay bago pagsamahin',
    'Ang dead stop bago ang tornado ay required — kung walang pause, mawawala ang "drama" ng trick',
    'Throttle management habang nasa inverted tornado ay kritikal — ~68-70% para mapanatiling level',
    'Ang transition mula sa tornado stop papunta sa split-s pull ay dapat smooth at walang hesitation',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.85, label: 'Roll Inv' },
    { t: 1.3,  label: 'Dead Stop' },
    { t: 1.6,  label: 'Tornado' },
    { t: 4.0,  label: 'Stop Yaw' },
    { t: 4.3,  label: 'Pull Thru' },
    { t: 5.25, label: 'Juicy' },
    { t: 5.85, label: 'Roll Out' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.22, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.85, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.05, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, all sticks center
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — inverted yaw spin 360°+, elevated throttle holds altitude
    { t: 1.6,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.1,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center left stick
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S PULL-THROUGH — arc nose through bottom half-loop
    { t: 4.3,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.65, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 5.0,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Brief level pause before juicy exit
    { t: 5.15, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK exit — throttle blip then pitch snap to inverted
    { t: 5.25, throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.4,  throttle: 0.27, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.58, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll back to upright
    { t: 5.72, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 5.98, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    { t: 6.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 6.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
