export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 3.6,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Tatlong sunod-sunod na throttle bounce — mabilis na pag-cut at pag-punch ng throttle, parang tumatalbog na bola sa hangin. Pinahuhusay na bersyon ng Stall throttle control, paulit-ulit sa rhythm.',
  tips: [
    'Maikli lang ang bawat throttle cut — 0.2-0.3 segundo bago mag-punch ulit',
    'Panatilihin sa center ang pitch, roll, at yaw — throttle lang ang gumagalaw sa buong trick',
    'I-master muna ang isang Stall bounce bago subukan ang tatlong bounce nang sunod-sunod sa parehong rhythm',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Bounce 1' },
    { t: 0.9, label: 'Catch 1' },
    { t: 1.3, label: 'Bounce 2' },
    { t: 1.9, label: 'Catch 2' },
    { t: 2.3, label: 'Bounce 3' },
    { t: 2.9, label: 'Catch 3' },
    { t: 3.6, label: 'Settle' },
  ],
  keyframes: [
    // Hover entry
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — chop throttle
    { t: 0.3,  throttle: 0.10, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.55, throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Catch 1 — punch then settle
    { t: 0.7,  throttle: 0.92, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 2
    { t: 1.3,  throttle: 0.10, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.55, throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.92, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 3
    { t: 2.3,  throttle: 0.10, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.55, throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.92, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.9,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle back to hover
    { t: 3.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
