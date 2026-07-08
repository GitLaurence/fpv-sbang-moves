export default {
  id: 'lookback-roll-iys',
  name: 'Lookback + Roll + IYS',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.3,
  youtubeId:    'Hvy04PiWypw',
  youtubeStart: 0,
  description: 'Triple-combo: full 180° yaw lookback → isang buong roll → flip papuntang inverted para sa Inverted Yaw Spin. Tatlong magkaibang skill na magkasunod-sunod na walang paghinto — yaw authority, roll control, at inverted spin management.',
  tips: [
    'Ang lookback snap ay dapat mabilis at full input — huwag mag-atubili',
    'Ang roll pagkatapos ng lookback ay dapat sustained at steady, hindi snappy',
    'Ang flip papuntang IYS ay simulan agad pagkatapos mag-level ang roll — panatilihin ang momentum ng combo',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Lookback' },
    { t: 0.95, label: 'Roll' },
    { t: 2.3,  label: 'Roll Done' },
    { t: 2.6,  label: 'Flip Inv' },
    { t: 3.1,  label: 'Inverted' },
    { t: 3.3,  label: 'IYS Start' },
    { t: 4.9,  label: 'IYS Done' },
    { t: 5.15, label: 'Flip Up' },
    { t: 5.6,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Full yaw lookback
    { t: 0.4,  throttle: 0.65, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 0.62, throttle: 0.65, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    // Center yaw — new heading established
    { t: 0.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll — full sustained roll
    { t: 0.95, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.35, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.6,  throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.05 },
    { t: 2.45, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip to inverted
    { t: 2.6,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.85, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — settle throttle
    { t: 3.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // IYS — full yaw spin while inverted
    { t: 3.3,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.1,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.8,  throttle: 0.68, yaw:  0.35, pitch:  0.00, roll:  0.00 },
    { t: 4.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright
    { t: 5.15, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.37, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — throttle punch
    { t: 5.6,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
