export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'beginner',
  difficulty: 2,
  durationSec: 3.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na "dive at pull" — pitch forward para mag-dive, tapos throttle punch + pitch back para mag-bounce pataas. Tatlong bounce sunod-sunod, parang tumatalon ang quad sa hangin. Magandang pang-warm up para sa throttle at pitch coordination.',
  tips: [
    'Magsimula ng dive sa malumanay na pitch forward — huwag biglaan',
    'Ang throttle punch sa ilalim ng bawat bounce ay dapat sabay sa pitch back para sa malinis na arc',
    'Subukang gawing pareho ang taas ng bawat bounce — consistency ang susi',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Dive 1' },
    { t: 0.9, label: 'Bounce 1' },
    { t: 1.4, label: 'Dive 2' },
    { t: 1.9, label: 'Bounce 2' },
    { t: 2.4, label: 'Dive 3' },
    { t: 2.9, label: 'Recover' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive 1 — pitch forward, nose down
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 0.65, throttle: 0.50, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Bounce 1 — throttle punch + pitch back to arc upward
    { t: 0.9,  throttle: 1.00, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 1.05, throttle: 0.85, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Dive 2
    { t: 1.4,  throttle: 0.55, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 1.65, throttle: 0.50, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Bounce 2
    { t: 1.9,  throttle: 1.00, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 2.05, throttle: 0.85, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Dive 3
    { t: 2.4,  throttle: 0.55, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 2.65, throttle: 0.50, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Final catch — punch and level out
    { t: 2.9,  throttle: 1.00, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 3.1,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
