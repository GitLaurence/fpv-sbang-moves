export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na pag-dive at pag-angat ng quad gamit ang pitch at throttle — parang bolang tumatalbog sa lupa at kisame. Maganda para sa pag-master ng throttle-pitch coordination sa mabilis na pagbabago ng altitude.',
  tips: [
    'Mag-maintain ng rhythmic na timing sa pagitan ng dive at bounce — parang tumatalbog na bola',
    'I-punch ang throttle sa pinakababang punto ng dive para ma-convert ang downward momentum papuntang taas',
    'Mag-practice muna ng iisang bounce nang tama bago mag-chain ng maraming bounces',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Dive 1' },
    { t: 1.1, label: 'Bounce 1' },
    { t: 1.9, label: 'Level' },
    { t: 2.1, label: 'Dive 2' },
    { t: 2.7, label: 'Bounce 2' },
    { t: 3.5, label: 'Recover' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE 1 — nose down, ease off throttle
    { t: 0.5,  throttle: 0.50, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 0.85, throttle: 0.45, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // BOUNCE 1 — punch throttle, pull pitch up to redirect into a climb
    { t: 1.1,  throttle: 0.90, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 1.3,  throttle: 0.85, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Level out between bounces
    { t: 1.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE 2 — repeat the cycle
    { t: 2.1,  throttle: 0.50, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 2.45, throttle: 0.45, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // BOUNCE 2
    { t: 2.7,  throttle: 0.90, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 2.9,  throttle: 0.85, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Settle
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
