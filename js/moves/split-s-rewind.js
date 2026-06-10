export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 6.0,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Split-S papuntang isang direksyon, tapos kaagad na "rewind" — isa pang Split-S pabalik sa orihinal na heading. Parang nag-back-track ang drone sa hangin.',
  tips: [
    'Ang unang Split-S ay parehong mekanika ng regular na Split-S — roll, dead center, pull',
    'Mabilis na i-set up ang pangalawang roll habang nag-le-level pa lang mula sa una',
    'Pantay ang dalawang pull — kung mas matagal ang isa, magkaiba ang exit altitude',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll 1' },
    { t: 1.0,  label: 'Inverted 1' },
    { t: 1.25, label: 'Pull 1' },
    { t: 2.7,  label: 'Rewind Set' },
    { t: 3.1,  label: 'Roll 2' },
    { t: 3.7,  label: 'Inverted 2' },
    { t: 3.95, label: 'Pull 2' },
    { t: 5.4,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S #1 — half-roll to inverted, cut throttle
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.88, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    { t: 1.0,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull #1 — arc through bottom of the S, now flying opposite heading
    { t: 1.25, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.48, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.1,  throttle: 0.62, yaw:  0.00, pitch: -0.65, roll:  0.00 },
    // Brief level — rewind set up
    { t: 2.7,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.9,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S #2 (rewind) — half-roll to inverted again, cut throttle
    { t: 3.1,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.35, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.58, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    { t: 3.7,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull #2 — arc back through bottom, returning to original heading
    { t: 3.95, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.4,  throttle: 0.48, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 4.8,  throttle: 0.62, yaw:  0.00, pitch: -0.65, roll:  0.00 },
    // Exit — flying original heading again
    { t: 5.2,  throttle: 0.75, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 5.4,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
