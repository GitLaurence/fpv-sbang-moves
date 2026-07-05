export default {
  id: 'side-lookback-iys',
  name: 'Side Lookback + IYS',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.6,
  youtubeId:    'KEP9Ne2TuHM',
  youtubeStart: 0,
  description: 'Mabilis na 90° yaw snap papunta sa gilid (side lookback) sa halip na buong 180°, tapos mag-roll sa inverted para sa isang inverted yaw spin (IYS). Mas mabilis na entry kaysa regular lookback combos.',
  tips: [
    'Ang side lookback ay 90° lang — huwag ituloy hanggang 180°, dapat side-facing lang ang labas',
    'Mag-roll papunta sa inverted kaagad pagkatapos mag-center ang yaw ng lookback',
    'Panatilihing steady ang throttle habang inverted bago mag-umpisa ng yaw spin',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Side Snap' },
    { t: 0.75, label: 'Center' },
    { t: 1.0,  label: 'Roll Inv' },
    { t: 1.5,  label: 'Inverted' },
    { t: 1.85, label: 'Yaw Spin' },
    { t: 4.15, label: 'Spin Done' },
    { t: 4.5,  label: 'Flip Up' },
    { t: 5.0,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Side snap — half-strength yaw, only 90° of rotation
    { t: 0.4,  throttle: 0.65, yaw: -0.55, pitch:  0.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.65, yaw: -0.55, pitch:  0.00, roll:  0.00 },
    // Center yaw — now side-facing
    { t: 0.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to inverted
    { t: 1.0,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.25, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.4,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.20 },
    // Fully inverted — stabilize
    { t: 1.5,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin inverted yaw spin — elevated throttle to hold altitude
    { t: 1.85, throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.35, throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Sustain spin
    { t: 2.85, throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.35, throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.85, throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center
    { t: 4.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright
    { t: 4.4,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.62, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — punch throttle to catch altitude loss
    { t: 4.85, throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
