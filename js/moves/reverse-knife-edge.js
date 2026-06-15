export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: 'Variant ng knife edge kung saan kabaligtaran ang direksyon ng roll at yaw — papunta sa kabilang gilid ng eroplano ang quad. Mas mahirap dahil salungat ito sa natural na "feel" ng karaniwang knife edge.',
  tips: [
    'Mag-roll papunta sa kabilang direksyon (kaliwa kung kanan ang normal knife edge, at vice versa)',
    'I-reverse din ang yaw correction — kabaligtaran ng muscle memory mo dito',
    'Magsanay muna nang husto sa regular Knife Edge bago subukan ang reverse version',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll -90°' },
    { t: 0.9, label: 'Hold' },
    { t: 2.8, label: 'Roll Back' },
    { t: 3.4, label: 'Level' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to -90° (opposite direction vs. standard knife edge)
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -0.75 },
    { t: 0.7,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll: -0.55 },
    // Knife edge hold — yaw and pitch correction reversed
    { t: 0.9,  throttle: 0.80, yaw: -0.30, pitch:  0.05, roll:  0.00 },
    { t: 1.3,  throttle: 0.82, yaw: -0.32, pitch:  0.05, roll:  0.00 },
    { t: 1.7,  throttle: 0.80, yaw: -0.28, pitch:  0.03, roll:  0.00 },
    { t: 2.1,  throttle: 0.82, yaw: -0.30, pitch:  0.05, roll:  0.00 },
    { t: 2.5,  throttle: 0.80, yaw: -0.30, pitch:  0.03, roll:  0.00 },
    // Roll back to upright
    { t: 2.8,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    { t: 3.1,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Level
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
