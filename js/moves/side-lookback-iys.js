export default {
  id: 'side-lookback-iys',
  name: 'Side Lookback + IYS',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.6,
  youtubeId:    'KEP9Ne2TuHM',
  youtubeStart: 0,
  description: 'Yaw snap paakyat sa gilid (side lookback) habang upright pa, tapos mag-flip papuntang inverted at mag-Inverted Yaw Spin. Ang side-facing camera angle bago ang flip ang nagpapaiba dito sa regular na lookback moves.',
  tips: [
    'Ang side yaw snap ay hindi buong 180° — sapat lang para makita ang subject sa gilid',
    'Panatilihing bahagya pa ring naka-yaw habang papasok sa flip para smooth ang transition',
    'Mag-throttle burst pagkatapos ng flip bago simulan ang IYS para hindi bumagsak ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Side Yaw' },
    { t: 0.95, label: 'Flip Inv' },
    { t: 1.6, label: 'Inverted' },
    { t: 1.8, label: 'IYS Start' },
    { t: 3.3, label: 'IYS Done' },
    { t: 3.6, label: 'Flip Up' },
    { t: 4.05, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Side yaw snap — partial yaw toward the subject
    { t: 0.4,  throttle: 0.65, yaw:  0.60, pitch:  0.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.65, yaw:  0.60, pitch:  0.00, roll:  0.00 },
    // Ease yaw while entering the flip
    { t: 0.95, throttle: 0.32, yaw:  0.25, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — settle throttle
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // IYS — full yaw spin while inverted
    { t: 1.8,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.70, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright
    { t: 3.6,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.82, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — throttle punch
    { t: 4.05, throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
