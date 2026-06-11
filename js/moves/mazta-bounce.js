export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Dive papuntang malapit sa lupa, tapos throttle punch para "tumalbog" pataas — paulit-ulit na bounce na parang bola. Kailangan ng tumpak na timing ng throttle punch para hindi tumama sa lupa.',
  tips: [
    'Pitch forward papuntang dive, tapos full throttle punch bago tumama sa lupa',
    'Ang bawat bounce ay dapat mas mababa kaysa sa nauna — controlled deceleration',
    'I-time ang throttle punch base sa altitude — mas mababa, mas maaga ang punch',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Dive 1' },
    { t: 1.2, label: 'Bounce 1' },
    { t: 1.8, label: 'Climb' },
    { t: 2.4, label: 'Dive 2' },
    { t: 3.0, label: 'Bounce 2' },
    { t: 3.6, label: 'Recover' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive 1 — pitch forward, ease throttle
    { t: 0.5,  throttle: 0.45, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 0.85, throttle: 0.40, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Bounce 1 — full throttle punch + pitch back to arrest dive
    { t: 1.2,  throttle: 1.00, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 1.45, throttle: 0.90, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Climb — ease back to level
    { t: 1.8,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive 2 — smaller dive, less pitch than first
    { t: 2.4,  throttle: 0.50, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    { t: 2.7,  throttle: 0.46, yaw:  0.00, pitch:  0.35, roll:  0.00 },
    // Bounce 2 — smaller throttle punch
    { t: 3.0,  throttle: 0.88, yaw:  0.00, pitch: -0.35, roll:  0.00 },
    { t: 3.25, throttle: 0.78, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    // Recover — settle to level cruise
    { t: 3.6,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
