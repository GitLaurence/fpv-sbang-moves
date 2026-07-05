export default {
  id: 'rapid-split-s-iys',
  name: 'Rapid Split-S + IYS Combo',
  level: 'pro',
  difficulty: 4,
  durationSec: 5.8,
  youtubeId:    'S7v9Pla4Lr8',
  youtubeStart: 0,
  description: 'Mabilis na Split-S — roll sa inverted, agad na pull pababa nang walang paghinto — sinundan kaagad ng inverted yaw spin bago pa lubos na maka-level out. Dalawang move na pinagdikit nang walang puwang.',
  tips: [
    'Gawing mas mabilis ang roll-to-pull transition kaysa regular Split-S — walang pahinga sa pagitan',
    'Huwag hintaying makumpleto ang Split-S exit — mag-umpisa ng yaw spin habang bahagyang nag-iinverted pa',
    'Kailangan ng sobrang altitude buffer dahil dalawang move ang magkasunod bago mag-recover',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll Inv' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.1,  label: 'Rapid Pull' },
    { t: 1.9,  label: 'Low Level' },
    { t: 2.15, label: 'Yaw Spin' },
    { t: 4.4,  label: 'Spin Done' },
    { t: 4.8,  label: 'Climb Out' },
    { t: 5.3,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Rapid half-roll to inverted — faster than a standard split-s
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.58, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.75, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.15 },
    // Fully inverted — immediately begin pull, no pause
    { t: 0.9,  throttle: 0.34, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Rapid pull — sustained pitch, aggressive descent
    { t: 1.1,  throttle: 0.40, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 1.75, throttle: 0.62, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    // Low level — briefly, immediately transition to yaw spin
    { t: 1.9,  throttle: 0.66, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 2.0,  throttle: 0.66, yaw:  0.20, pitch:  0.00, roll:  0.00 },
    // Begin inverted yaw spin without full recovery — still low
    { t: 2.15, throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.65, throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Sustain spin
    { t: 3.15, throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.65, throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.15, throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Complete spin — center yaw
    { t: 4.4,  throttle: 0.65, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    { t: 4.55, throttle: 0.68, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Climb out — throttle up to recover altitude lost through the combo
    { t: 4.8,  throttle: 0.88, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 5.1,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
