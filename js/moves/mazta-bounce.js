export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Rhythmic na throttle bounce — pataas-pababa ang quad gamit ang oscillating throttle pulses habang nakacenter ang ibang sticks. Maganda para sa musical/rhythm freestyle.',
  tips: [
    'Centered ang pitch, roll, at yaw — ang throttle lang ang gumagalaw',
    'Bawat bounce ay may mabilis na punch pataas at saka relax para sa pagbagsak',
    'Subukang i-time ang bounces sa beat ng music para sa rhythm freestyle',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Bounce 1' },
    { t: 1.1, label: 'Bounce 2' },
    { t: 1.9, label: 'Bounce 3' },
    { t: 2.6, label: 'Settle' },
  ],
  keyframes: [
    // Entry — hover level
    { t: 0.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — punch up then ease
    { t: 0.3,  throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.5,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.75, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 2
    { t: 1.1,  throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.55, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 3
    { t: 1.9,  throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.35, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle — back to steady hover
    { t: 2.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
