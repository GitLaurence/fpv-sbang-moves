export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Throttle chop papuntang free-fall, tapos sharp pitch + throttle punch para "tumalbog" pataas — parang bumabagsak at tumatalon ang drone sa hangin. Mahusay para baguhin ang rhythm ng freestyle run.',
  tips: [
    'I-cut nang husto ang throttle para maramdaman ang tunay na free-fall bago mag-bounce',
    'I-time nang tama ang punch — masyadong maaga at mababaw ang bounce, masyadong huli at mawawala ang momentum',
    'Gamitin ang bahagyang pitch bago mag-throttle punch para ma-redirect ang trajectory pataas',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Chop' },
    { t: 1.0, label: 'Freefall' },
    { t: 1.5, label: 'Bounce' },
    { t: 2.1, label: 'Recover' },
  ],
  keyframes: [
    // Approach — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CHOP — throttle cut to near zero, slight nose down
    { t: 0.4,  throttle: 0.05, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 0.7,  throttle: 0.05, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // FREEFALL — continue falling, ease pitch back to set up the bounce
    { t: 1.0,  throttle: 0.08, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 1.25, throttle: 0.10, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    // BOUNCE — sharp throttle punch, pitch back to redirect upward
    { t: 1.5,  throttle: 1.00, yaw:  0.00, pitch: -0.35, roll:  0.00 },
    { t: 1.75, throttle: 0.90, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    // Recover — settle back to cruise
    { t: 2.1,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
