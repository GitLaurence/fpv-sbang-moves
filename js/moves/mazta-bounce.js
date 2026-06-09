export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature move ni Headmazta — mabilis na mababang approach, biglang pitch up + throttle punch para "mag-bounce" ang drone pataas tulad ng bola na tumatalbog. Ang timing ng throttle punch sa pinakamababang punto ang susi sa dramatic na epekto.',
  tips: [
    'Mababa at mabilis ang approach — mas mababa at mas mabilis = mas dramatic ang bounce',
    'Ang pitch up at throttle punch ay sabay — isang coordinated na movement, hindi sunod-sunod',
    'Hayaan ang momentum na mag-carry sa drone pataas bago i-level out — huwag agad i-correct',
  ],
  phases: [
    { t: 0.0, label: 'Low Approach' },
    { t: 0.6, label: 'Pitch Up' },
    { t: 1.1, label: 'Bounce Up' },
    { t: 1.8, label: 'Apex' },
    { t: 2.3, label: 'Nose Down' },
    { t: 3.2, label: 'Pull Out' },
    { t: 3.8, label: 'Recovery' },
  ],
  keyframes: [
    // Fast low approach
    { t: 0.0,  throttle: 0.88, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 0.3,  throttle: 0.88, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 0.5,  throttle: 0.90, yaw:  0.00, pitch:  0.25, roll:  0.00 },
    // BOUNCE — simultaneous pitch up (nose up = pull back) + full throttle punch
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 0.9,  throttle: 1.00, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    // Climbing up — throttle reduces, pitch eases
    { t: 1.2,  throttle: 0.80, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    // Apex — level out momentarily at the top
    { t: 1.8,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Nose down — pitch forward to dive back toward ground level
    { t: 2.25, throttle: 0.55, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 2.6,  throttle: 0.55, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    // Pull out — ramp throttle to arrest descent
    { t: 3.0,  throttle: 0.72, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 3.4,  throttle: 0.72, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Recovery — level cruise
    { t: 3.8,  throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
