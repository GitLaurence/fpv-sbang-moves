export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Sunod-sunod na throttle "bounces" habang nakaharap pataas — i-punch ang throttle papunta sa itaas, hayaang bumagal/mahulog, tapos i-punch ulit. Parang bola na tumatalbog sa hangin. Throttle control trick na pang-pro.',
  tips: [
    'Bawat punch ay short at decisive — chop kaagad pagkatapos ng punch para magsimula ang bagsak',
    'Pareho ang taas ng bawat "bounce" — consistent ang timing ng punch-chop cycle',
    'Panatilihin ang pitch at roll na neutral — ang throttle lang ang gumagalaw',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Bounce 1' },
    { t: 1.3, label: 'Bounce 2' },
    { t: 2.3, label: 'Bounce 3' },
    { t: 3.3, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — punch up, then chop and free-fall
    { t: 0.3,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.45, throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.55, throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 2 — punch up again, then chop
    { t: 1.3,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.45, throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.55, throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 3 — final punch, then chop
    { t: 2.3,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.45, throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.55, throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — catch and settle to hover
    { t: 3.3,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
