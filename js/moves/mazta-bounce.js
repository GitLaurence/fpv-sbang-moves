export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.2,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Parang tumatalbog sa lupa at kisame — full throttle punch pataas, cut papababa, punch ulit, paulit-ulit. Walang flip o roll, throttle finesse lang ang laman ng signature move na ito ni headmazta.',
  tips: [
    'Full throttle punch, tapos halos zero — walang katamtamang gitna sa pagitan ng dalawa',
    'Bawat "bounce" ay dapat pareho ang timing at lakas para consistent ang rhythm',
    'Panatilihing steady ang pitch/roll/yaw — ang throttle lang dapat gumagalaw',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Bounce 1' },
    { t: 1.1, label: 'Bounce 2' },
    { t: 1.9, label: 'Bounce 3' },
    { t: 2.6, label: 'Settle' },
  ],
  keyframes: [
    // Entry — hover
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — punch then chop
    { t: 0.3,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.5,  throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.65, throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.85, throttle: 0.06, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 2
    { t: 1.1,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.45, throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.65, throttle: 0.06, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 3
    { t: 1.9,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.25, throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle back to hover
    { t: 2.45, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
