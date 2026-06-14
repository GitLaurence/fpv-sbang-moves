export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na throttle bounce papunta-pabalik sa pagitan ng lupa at kisame — chop throttle papunta sa ibaba, tapos punch papataas, ulit-ulit. Kailangan ng tumpak na throttle timing at distance awareness.',
  tips: [
    'CHOP ang throttle malapit sa zero bago tumama ang drone sa surface — tapos PUNCH pataas',
    'Panatilihin level ang pitch at roll — ang throttle lang ang gumagalaw sa buong move',
    'Magsimula sa malumanay na bounce bago dagdagan ang bilis at lapit sa mga surfaces',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Bounce 1' },
    { t: 1.4, label: 'Bounce 2' },
    { t: 2.4, label: 'Bounce 3' },
    { t: 3.4, label: 'Bounce 4' },
    { t: 4.1, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level approach
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — chop near zero, then punch up
    { t: 0.4,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.95, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 2
    { t: 1.4,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.65, throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.95, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 3
    { t: 2.4,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.65, throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.95, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 4 — final, slightly softer
    { t: 3.4,  throttle: 0.10, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.65, throttle: 0.90, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.95, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle to cruise
    { t: 4.1,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
