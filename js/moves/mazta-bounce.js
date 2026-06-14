export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'beginner',
  difficulty: 2,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na throttle bounce habang dumadako pasulong — "i-pump" ang throttle sa rhythm para gumawa ng bouncy, hopping na motion sa ere. Maganda para sa throttle control at timing practice.',
  tips: [
    'Pantay ang rhythm ng bounce — parehong haba ng up at down sa bawat pulso',
    'Konting forward pitch lang habang naka-bounce para may patuloy na paggalaw pasulong',
    'Mag-relax sa throttle sa pagitan ng mga pulso — huwag i-hold ang full throttle nang matagal',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Bounce 1' },
    { t: 1.2, label: 'Bounce 2' },
    { t: 2.0, label: 'Bounce 3' },
    { t: 2.8, label: 'Bounce 4' },
    { t: 3.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.55, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 0.2,  throttle: 0.55, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Bounce 1 — punch up then ease off
    { t: 0.4,  throttle: 0.90, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 0.6,  throttle: 0.55, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 0.9,  throttle: 0.35, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Bounce 2
    { t: 1.2,  throttle: 0.90, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 1.4,  throttle: 0.55, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 1.7,  throttle: 0.35, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Bounce 3
    { t: 2.0,  throttle: 0.90, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 2.2,  throttle: 0.55, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 2.5,  throttle: 0.35, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Bounce 4 — final pulse, slightly softer
    { t: 2.8,  throttle: 0.85, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 3.0,  throttle: 0.55, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 3.3,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to level cruise
    { t: 3.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
