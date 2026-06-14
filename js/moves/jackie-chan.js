export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Multi-axis combo: front flip → throttle chop sa inverted → full inverted yaw spin → roll recovery pabalik sa upright. Pinangalanan sa martial-arts-style na "spin" na ginagaya ng drone sa gitna ng combo.',
  tips: [
    'Mag-chop ng throttle agad pagkatapos maging inverted ang drone — dito magsisimula ang yaw spin',
    'Panatilihin ang low throttle habang umiikot ang inverted yaw spin para hindi tumaas ang altitude',
    'Ang roll recovery ay full deflection sa isang direksyon lang — huwag i-counter ang spin',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.2, label: 'Yaw Spin' },
    { t: 2.4, label: 'Roll Out' },
    { t: 3.3, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Front flip — pitch forward full
    { t: 0.4,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — chop throttle to set up the spin
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // INVERTED YAW SPIN — full yaw, low throttle, ease pitch to neutral
    { t: 1.2,  throttle: 0.20, yaw:  1.00, pitch:  0.20, roll:  0.00 },
    { t: 1.6,  throttle: 0.22, yaw:  1.00, pitch:  0.10, roll:  0.00 },
    { t: 2.0,  throttle: 0.20, yaw:  1.00, pitch:  0.05, roll:  0.00 },
    { t: 2.4,  throttle: 0.25, yaw:  0.50, pitch:  0.00, roll:  0.00 },
    // Roll out — full roll back to upright
    { t: 2.7,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 3.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle to cruise
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
