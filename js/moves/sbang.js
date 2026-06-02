export default {
  id: 'sbang',
  name: 'Sbang',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.5,
  description: 'Inverted yaw spin reversal — ang pinaka-advanced na trick. Mabilis na transition mula inverted papunta sa opposite heading gamit ang yaw snap. Originated sa Betaflight freestyle scene.',
  tips: [
    'Kailangan ng high speed sa entry — huwag mag-slow down bago mag-sbang',
    'Ang yaw reversal ay dapat lightning-fast na input, hindi gradual na push',
    'Mag-practice ng inverted hover nang matagal bago subukan ito sa mataas',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Inv' },
    { t: 0.7, label: 'Inverted' },
    { t: 0.9, label: 'Yaw Spin' },
    { t: 1.6, label: 'Reversal' },
    { t: 2.2, label: 'Roll Out' },
    { t: 2.9, label: 'Exit' },
  ],
  keyframes: [
    // Entry — high speed, level
    { t: 0.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to inverted — fast and decisive
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.68, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    // Inverted — chop throttle, set up for yaw
    { t: 0.75, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Yaw spin — full deflection one direction
    { t: 0.9,  throttle: 0.28, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.45, throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Yaw snap reversal — instant opposite input
    { t: 1.55, throttle: 0.30, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.85, throttle: 0.32, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.05, throttle: 0.32, yaw: -0.20, pitch:  0.00, roll:  0.00 },
    // Roll back upright
    { t: 2.2,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.55, throttle: 0.48, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.75, throttle: 0.58, yaw:  0.00, pitch:  0.00, roll: -0.20 },
    // Exit — level and climb to recover altitude
    { t: 2.9,  throttle: 0.68, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 3.2,  throttle: 0.66, yaw:  0.00, pitch: -0.05, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
