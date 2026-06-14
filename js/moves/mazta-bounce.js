export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.2,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Chop ang throttle para bumagsak, tapos PUNCH para "mag-bounce" pataas — paulit-ulit gaya ng bola na tumatalbog. Pinapanatili ang patag na attitude habang nag-bounce ang altitude.',
  tips: [
    'I-chop ang throttle nang sudden at buo sa bawat drop — instant zero, hindi gradual',
    'Mag-punch ng throttle nang maaga, bago pa man maramdaman ang bagsak, para tumalbog pataas',
    'Panatilihin ang sticks na centered (pitch/roll/yaw) — ang throttle lang ang gumagawa ng bounce',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Drop 1' },
    { t: 1.0, label: 'Bounce 1' },
    { t: 1.8, label: 'Drop 2' },
    { t: 2.3, label: 'Bounce 2' },
    { t: 2.8, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DROP 1 — chop throttle to near zero
    { t: 0.5,  throttle: 0.10, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.8,  throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — punch throttle to catch and rebound
    { t: 1.0,  throttle: 0.90, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DROP 2 — repeat the chop
    { t: 1.8,  throttle: 0.10, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 2 — second punch/rebound
    { t: 2.3,  throttle: 0.90, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to hover
    { t: 2.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
