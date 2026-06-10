export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na throttle cut at punch — para sa drone na "tumatalbog" paitaas-pababa tulad ng bola. Lahat ng ibang sticks ay nakacenter, puro throttle ang gumagalaw.',
  tips: [
    'Mag-cut ng throttle nang mabilis tapos i-punch agad pataas — timing ang susi',
    'Panatilihin ang ibang sticks nakacenter — puro throttle lang ang gumagalaw',
    'Subukang gawing consistent ang rhythm ng bounce — parang bouncing ball',
  ],
  phases: [
    { t: 0.0, label: 'Hover' },
    { t: 0.3, label: 'Drop 1' },
    { t: 1.0, label: 'Catch 1' },
    { t: 1.5, label: 'Drop 2' },
    { t: 2.2, label: 'Catch 2' },
    { t: 2.7, label: 'Drop 3' },
    { t: 3.4, label: 'Catch 3' },
    { t: 4.0, label: 'Settle' },
  ],
  keyframes: [
    // Hover — neutral throttle
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Drop 1 — chop throttle, free fall
    { t: 0.3,  throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.12, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Catch 1 — punch throttle to bounce back up
    { t: 1.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.25, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Drop 2 — chop throttle again
    { t: 1.5,  throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.12, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Catch 2 — punch back up
    { t: 2.2,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.45, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Drop 3 — smaller bounce, easing out
    { t: 2.7,  throttle: 0.20, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.18, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Catch 3 — final catch, settle to hover
    { t: 3.4,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 4.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
