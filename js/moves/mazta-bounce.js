export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Sunod-sunod na throttle cut + pitch dive, tapos throttle punch para "tumalbog" pataas — parang bola na bumabagsak at bumabalik. Dalawang bounce na may parehong rhythm, magandang trick para ma-master ang throttle-pitch coordination.',
  tips: [
    'Mag-cut ng throttle habang nag-dive forward — hayaan munang bumuo ang bilis bago mag-bounce',
    'Ang throttle punch sa bounce ay kasabay ng pitch back — sabay na input para sa malinis na arc',
    'Panatilihin ang parehong rhythm sa dalawang bounce — consistent na timing ang susi',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.4,  label: 'Dive 1' },
    { t: 0.95, label: 'Bounce 1' },
    { t: 1.7,  label: 'Dive 2' },
    { t: 2.25, label: 'Bounce 2' },
    { t: 2.8,  label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE 1 — cut throttle, pitch nose down
    { t: 0.4,  throttle: 0.15, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 0.7,  throttle: 0.10, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // BOUNCE 1 — throttle punch + pitch back to arrest the dive
    { t: 0.95, throttle: 1.00, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 1.2,  throttle: 0.85, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 1.45, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE 2 — repeat the cut + dive
    { t: 1.7,  throttle: 0.15, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 2.0,  throttle: 0.10, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // BOUNCE 2 — second throttle punch + pitch back
    { t: 2.25, throttle: 1.00, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 2.5,  throttle: 0.85, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle back to cruise
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
