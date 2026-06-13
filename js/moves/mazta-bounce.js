export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Dive papunta sa malapit na obstacle, tapos sabay na throttle punch at roll flick para "tumalbog" (bounce) palayo papuntang kabilang direksyon. Mabilis na pagbabago ng directional momentum, signature move ni Headmazta.',
  tips: [
    'I-commit ang dive — pitch forward at bawasan ang throttle papalapit sa obstacle',
    'Ang bounce ay isang sabay na throttle punch + full roll flick, hindi sunod-sunod',
    'I-time ang flick bago ka pa man "tumama" — mas maaga kaysa sa gut feeling mo',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Dive' },
    { t: 0.9, label: 'Bottom' },
    { t: 1.05, label: 'Bounce' },
    { t: 1.3, label: 'Flick' },
    { t: 1.8, label: 'Recover' },
    { t: 2.4, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive — pitch forward, ease off throttle
    { t: 0.4,  throttle: 0.30, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 0.7,  throttle: 0.25, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Bottom of dive — dead stop on pitch
    { t: 0.9,  throttle: 0.25, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // BOUNCE — throttle punch + full roll flick, reverse pitch
    { t: 1.05, throttle: 1.00, yaw:  0.00, pitch: -0.20, roll:  1.00 },
    { t: 1.3,  throttle: 0.85, yaw:  0.00, pitch: -0.40, roll:  1.00 },
    // Roll out, pitch back toward level/climb
    { t: 1.55, throttle: 0.75, yaw:  0.00, pitch: -0.30, roll:  0.50 },
    { t: 1.8,  throttle: 0.70, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Recover to cruise
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
