export default {
  id: 'split-s-yaw-spin',
  name: 'Low Split-S + Yaw Spin',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.2,
  youtubeId:    'UAbUgwmSqbs',
  youtubeStart: 0,
  description: 'Split-S papuntang mababang altitude, tapos agad na flat 360° yaw spin habang mababa sa lupa bago mag-climb pabalik. Kumbinasyon ng dalawang magkaibang skill sa magkasunod na altitude band — Split-S descent tapos low-altitude yaw control.',
  tips: [
    'I-commit ang buong pull ng Split-S papunta sa mas mababang altitude kaysa regular na Split-S',
    'Sa sandaling level na sa mababang altitude, agad na full yaw input — walang paghinto sa pagitan',
    'Mag-climb kaagad pagkatapos makumpleto ang yaw spin — huwag manatili nang matagal sa mababang altitude',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.25, label: 'Pull Low' },
    { t: 2.3,  label: 'Level Low' },
    { t: 2.65, label: 'Yaw Spin' },
    { t: 3.95, label: 'Spin Done' },
    { t: 4.35, label: 'Climb Out' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.88, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    { t: 1.0,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull through low — sustained pitch, arc close to the ground
    { t: 1.25, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.65, throttle: 0.45, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.0,  throttle: 0.58, yaw:  0.00, pitch: -0.65, roll:  0.00 },
    // Level out low to the ground
    { t: 2.3,  throttle: 0.66, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 2.5,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Immediately begin flat 360° yaw spin — low altitude
    { t: 2.65, throttle: 0.66, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    { t: 3.0,  throttle: 0.67, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    { t: 3.35, throttle: 0.66, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    { t: 3.7,  throttle: 0.67, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    // Complete spin — center yaw
    { t: 3.95, throttle: 0.68, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    { t: 4.1,  throttle: 0.70, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Climb out — throttle up
    { t: 4.35, throttle: 0.85, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 4.7,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
