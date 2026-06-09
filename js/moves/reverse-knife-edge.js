export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: 'Knife edge sa kabaligtarang direksyon ng roll — ang kaliwang gilid ng quad ang nakatutok sa lupa sa halip na kanan. Nangangailangan ng kabaligtarang yaw at throttle correction para mapanatiling level ang flight path.',
  tips: [
    'Ang roll ay negatibo (kaliwa) — kabaligtaran ng normal na knife edge',
    'Ang yaw correction ay kabaligtaran din — kailangan ng opposite yaw para mapanatiling heading',
    'Mas mahirap ang Reverse KE dahil counter-intuitive ang lahat ng corrections',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll -90°' },
    { t: 0.9, label: 'Hold Rev' },
    { t: 2.9, label: 'Roll Back' },
    { t: 3.5, label: 'Level' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to -90° (left knife edge)
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -0.75 },
    { t: 0.7,  throttle: 0.73, yaw:  0.00, pitch:  0.00, roll: -0.55 },
    // Reverse knife edge hold — opposite yaw to maintain heading
    { t: 0.9,  throttle: 0.80, yaw: -0.30, pitch: -0.05, roll:  0.00 },
    { t: 1.3,  throttle: 0.82, yaw: -0.32, pitch: -0.05, roll:  0.00 },
    { t: 1.7,  throttle: 0.80, yaw: -0.28, pitch: -0.04, roll:  0.00 },
    { t: 2.1,  throttle: 0.82, yaw: -0.30, pitch: -0.05, roll:  0.00 },
    { t: 2.5,  throttle: 0.80, yaw: -0.30, pitch: -0.04, roll:  0.00 },
    // Roll back to upright (positive roll to return from -90°)
    { t: 2.9,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    { t: 3.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.38 },
    // Level
    { t: 3.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
