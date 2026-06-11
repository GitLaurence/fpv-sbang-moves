export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Sunod-sunod na throttle "punch" kasabay ng pitch oscillation, na lumilikha ng bouncing na motion sa hangin. Bawat bounce ay isang mabilis na throttle-up + nose-up tapos throttle-cut + nose-down — paulit-ulit nang tatlong beses bago mag-recover.',
  tips: [
    'Bawat bounce ay throttle PUNCH kasabay ng slight nose-up, sundan ng throttle CUT kasabay ng nose-down',
    'Panatilihing magkapareho ang rhythm ng tatlong bounce — consistent ang timing ang susi',
    'Mag-recover nang dahan-dahan sa huling bounce para hindi biglaan ang stop',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Bounce 1' },
    { t: 0.7, label: 'Dip 1' },
    { t: 1.0, label: 'Bounce 2' },
    { t: 1.4, label: 'Dip 2' },
    { t: 1.7, label: 'Bounce 3' },
    { t: 2.1, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — throttle punch with nose-up
    { t: 0.3,  throttle: 1.00, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 0.5,  throttle: 0.30, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Dip 1 — throttle cut with nose-down
    { t: 0.7,  throttle: 0.25, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // Bounce 2 — repeat
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 1.2,  throttle: 0.30, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Dip 2
    { t: 1.4,  throttle: 0.25, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // Bounce 3 — final, smaller punch
    { t: 1.7,  throttle: 1.00, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 1.9,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle to cruise
    { t: 2.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
