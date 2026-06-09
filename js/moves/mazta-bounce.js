export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Orihinal na move ni headmazta: dive nose-down sa lupa, tapos biglang i-punch ang throttle at pitch pull para "tumalon" pabalik — parang bounce sa sahig. Umuulit ang bounce pattern para sa visual effect na parang naglalaro sa gravity.',
  tips: [
    'Ang dive ay dapat mabilis at direkta — huwag mag-atubili sa pababa',
    'Ang throttle punch + pitch pull ay sabay — mas malakas ang punch = mas dramatic ang bounce',
    'Huwag abalahin ang roll o yaw habang nag-bo-bounce — keep it clean at purely vertical',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Dive' },
    { t: 1.0,  label: 'Bounce 1' },
    { t: 1.5,  label: 'Climb' },
    { t: 2.0,  label: 'Dive 2' },
    { t: 2.6,  label: 'Bounce 2' },
    { t: 3.1,  label: 'Recover' },
  ],
  keyframes: [
    // Entry — level hover
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE — push nose down, reduce throttle
    { t: 0.3,  throttle: 0.40, yaw:  0.00, pitch:  0.75, roll:  0.00 },
    { t: 0.6,  throttle: 0.32, yaw:  0.00, pitch:  0.92, roll:  0.00 },
    { t: 0.85, throttle: 0.30, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    // BOUNCE 1 — simultaneous throttle punch + pitch pull
    { t: 1.0,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.15, throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Climbing — ease off both
    { t: 1.4,  throttle: 0.75, yaw:  0.00, pitch: -0.45, roll:  0.00 },
    { t: 1.65, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Brief level pause
    { t: 1.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE 2 — repeat
    { t: 2.0,  throttle: 0.38, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 2.3,  throttle: 0.30, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 2.48, throttle: 0.28, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    // BOUNCE 2
    { t: 2.62, throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.78, throttle: 1.00, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    // Recovery climb
    { t: 3.05, throttle: 0.72, yaw:  0.00, pitch: -0.28, roll:  0.00 },
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
