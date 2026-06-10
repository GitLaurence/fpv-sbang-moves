export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Double dive-and-bounce — pitch forward papababa habang pinuputol ang throttle, tapos sharp pitch-back kasabay ng throttle punch para "tumalbog" pataas. Ulitin ng dalawang beses para sa rhythmic na bounce combo.',
  tips: [
    'Sa bawat dive, sabay ang pitch forward at throttle cut — hayaan tumulin ang bagsak',
    'Ang bounce ay dapat sharp at sabay — pitch back snap kasabay ng throttle punch',
    'Pantay ang timing ng dalawang bounce para magmukhang rhythmic at intentional',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Dive 1' },
    { t: 0.75, label: 'Bounce 1' },
    { t: 1.35, label: 'Dive 2' },
    { t: 1.8,  label: 'Bounce 2' },
    { t: 2.45, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive 1 — pitch forward, throttle cut
    { t: 0.3,  throttle: 0.30, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 0.55, throttle: 0.28, yaw:  0.00, pitch:  0.75, roll:  0.00 },
    // Bounce 1 — sharp pitch-back snap with throttle punch
    { t: 0.75, throttle: 0.95, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.95, throttle: 0.85, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 1.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Brief settle between bounces
    { t: 1.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive 2 — repeat
    { t: 1.45, throttle: 0.30, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 1.7,  throttle: 0.28, yaw:  0.00, pitch:  0.75, roll:  0.00 },
    // Bounce 2 — sharp pitch-back snap with throttle punch
    { t: 1.9,  throttle: 0.95, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 2.1,  throttle: 0.85, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
