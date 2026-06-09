export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Half-roll papunta sa inverted katulad ng Split-S, pero sa halip na mag-pull through pababa, mag-pitch forward ("rewind") para arkin ang ilong pabalik-taas at lumabas sa orihinal na direksyon. Kabaligtaran ng Split-S exit.',
  tips: [
    'Ang "rewind" na pitch forward mula sa inverted ay katulad ng Matty Flip exit — sustained forward pitch',
    'Mas mabagal ang rewind arc kaysa normal Split-S pull-through — kontrolado ang throttle pabalik',
    'Kapag matagumpay, lalabas ka sa PAREHONG direksyon na pinasok mo — ito ang pagkakaiba sa Split-S',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll Inv' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.2,  label: 'Rewind' },
    { t: 2.5,  label: 'Level Up' },
    { t: 3.0,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — carry speed
    { t: 0.0,  throttle: 0.70, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.28, throttle: 0.70, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Half roll to inverted — snap full roll, cut throttle
    { t: 0.4,  throttle: 0.35, yaw: 0.00, pitch:  0.00, roll: 1.00 },
    { t: 0.65, throttle: 0.33, yaw: 0.00, pitch:  0.00, roll: 1.00 },
    { t: 0.88, throttle: 0.33, yaw: 0.00, pitch:  0.00, roll: 0.25 },
    // Fully inverted — center roll stick
    { t: 1.0,  throttle: 0.33, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // REWIND — pitch forward (opposite of Split-S pull) to arc nose back upward
    { t: 1.2,  throttle: 0.38, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 1.6,  throttle: 0.52, yaw: 0.00, pitch:  0.95, roll: 0.00 },
    { t: 2.0,  throttle: 0.65, yaw: 0.00, pitch:  0.62, roll: 0.00 },
    // Approaching level, same direction as entry
    { t: 2.4,  throttle: 0.72, yaw: 0.00, pitch:  0.20, roll: 0.00 },
    { t: 2.8,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 4.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
