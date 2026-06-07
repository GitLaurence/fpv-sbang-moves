export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Mag-dive papunta sa lupa o obstacle, tapos PUNCH ang throttle sa pinakamababang punto para "tumalbog" pataas — parang bumabagsak na bola na bumabalik. Pinagsasama ang throttle control ng Stall at ang aggressive na pitch ng diving moves.',
  tips: [
    'I-time ang dive papunta sa target — masyadong mabilis ay delikado, masyadong mabagal ay walang "bounce" effect',
    'I-cut ang throttle papunta sa ibaba para mapabilis ang dive, tapos i-punch nang sudden sa pinakamababang punto',
    'Bantayan ang clearance — kailangan ng sapat na espasyo bago subukan nang malapit sa lupa',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Dive' },
    { t: 1.3, label: 'Bottom' },
    { t: 1.5, label: 'Bounce' },
    { t: 2.1, label: 'Rise' },
    { t: 2.8, label: 'Settle' },
  ],
  keyframes: [
    // Approach — level cruise, slight nose-down to set up the dive
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Dive — pitch forward, cut throttle to drop toward the target
    { t: 0.4,  throttle: 0.30, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 0.85, throttle: 0.22, yaw:  0.00, pitch:  0.35, roll:  0.00 },
    // Bottom — level out just above the surface, throttle near zero
    { t: 1.3,  throttle: 0.18, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE — sharp throttle punch to rebound upward
    { t: 1.5,  throttle: 1.00, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 1.7,  throttle: 0.92, yaw:  0.00, pitch: -0.45, roll:  0.00 },
    // Rise — ease throttle as altitude is regained
    { t: 2.1,  throttle: 0.72, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 2.45, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle — back to cruise
    { t: 2.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
