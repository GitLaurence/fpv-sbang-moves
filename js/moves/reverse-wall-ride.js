export default {
  id: 'reverse-wall-ride',
  name: 'Reverse Wall Ride',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.4,
  youtubeId:    '2koGdcQ1XOU',
  youtubeStart: 0,
  description: 'Roll papuntang knife edge malapit sa isang wall o structure, pero sa reverse na direksyon — i-drift pabalik ang pitch habang naka-knife-edge sa halip na pasulong, bago mag-roll out palayo. Kailangan ng eksaktong altitude at distance control malapit sa gilid.',
  tips: [
    'Mag-commit sa 90° roll agad papuntang wall — huwag maging maingat sa deflection',
    'Habang naka-knife-edge, i-drift ang pitch paatras (reverse) para mapanatili ang distansya sa wall',
    'Mag-roll out palayo bago pa tuluyang mawalan ng momentum — huwag mag-linger nang labis',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll 90°' },
    { t: 0.9, label: 'Wall Hold' },
    { t: 2.6, label: 'Reverse Drift' },
    { t: 3.3, label: 'Roll Away' },
    { t: 3.9, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — approach the wall line
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to 90° knife edge facing the wall
    { t: 0.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.78 },
    { t: 0.7,  throttle: 0.74, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    // Wall hold — yaw maintains heading parallel to the wall
    { t: 0.9,  throttle: 0.82, yaw:  0.28, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.84, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.82, yaw:  0.28, pitch:  0.00, roll:  0.00 },
    // Reverse drift — pitch pulled back, flying backward along the wall
    { t: 2.6,  throttle: 0.78, yaw:  0.30, pitch: -0.55, roll:  0.00 },
    { t: 2.95, throttle: 0.76, yaw:  0.28, pitch: -0.60, roll:  0.00 },
    // Roll away from the wall back to upright
    { t: 3.3,  throttle: 0.70, yaw:  0.00, pitch: -0.20, roll: -0.72 },
    { t: 3.6,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll: -0.35 },
    // Recovery
    { t: 3.9,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
