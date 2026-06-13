export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na "bounce" — throttle chop habang pitch down para bumagsak, tapos biglang punch ng throttle para tumalbog pataas. Ang rhythm ng throttle ang gumagawa ng bounce effect, parang tumatalbog na bola.',
  tips: [
    'Throttle chop nang sabay sa pitch down para sa malinis na dive sa bawat bounce',
    'I-time ang throttle punch sa pinakailalim ng dive — huwag maaga, huwag huli',
    'Panatilihing pareho ang rhythm sa bawat bounce para consistent ang pattern',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Dive 1' },
    { t: 1.1, label: 'Bounce 1' },
    { t: 1.8, label: 'Dive 2' },
    { t: 2.4, label: 'Bounce 2' },
    { t: 3.1, label: 'Dive 3' },
    { t: 3.7, label: 'Bounce 3' },
    { t: 4.2, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive 1 — throttle chop, pitch down
    { t: 0.5,  throttle: 0.15, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 0.85, throttle: 0.12, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    // Bounce 1 — punch throttle, pitch back up
    { t: 1.1,  throttle: 1.00, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 1.4,  throttle: 0.85, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // Dive 2
    { t: 1.8,  throttle: 0.18, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    { t: 2.1,  throttle: 0.12, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    // Bounce 2
    { t: 2.4,  throttle: 1.00, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    { t: 2.7,  throttle: 0.85, yaw:  0.00, pitch:  0.18, roll:  0.00 },
    // Dive 3
    { t: 3.1,  throttle: 0.18, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 3.4,  throttle: 0.12, yaw:  0.00, pitch: -0.35, roll:  0.00 },
    // Bounce 3 — smaller, settling
    { t: 3.7,  throttle: 0.90, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 4.0,  throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Recover — settle to cruise
    { t: 4.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
