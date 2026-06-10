export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 2.4,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Mabilis na pag-dive papunta sa lupa o obstacle, tapos throttle punch + pitch back para "tumalbog" pataas — parang bumabagsak at tumatalon ang drone gaya ng bola.',
  tips: [
    'Throttle chop bago ang dive para mapabilis ang pagbaba',
    'Mag-time ng throttle punch sa pinakamababang punto para maging matalas ang "bounce"',
    'Magsanay muna sa malawak na espasyo bago subukan malapit sa lupa o obstacle',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Dive' },
    { t: 0.9, label: 'Low Point' },
    { t: 1.05, label: 'Bounce' },
    { t: 1.5, label: 'Rise' },
    { t: 2.0, label: 'Peak' },
  ],
  keyframes: [
    // Entry — level approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE — throttle cut, pitch forward toward ground
    { t: 0.3,  throttle: 0.35, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 0.6,  throttle: 0.30, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Low point — approaching ground/object
    { t: 0.9,  throttle: 0.28, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // BOUNCE — full throttle punch, pitch snaps back
    { t: 1.05, throttle: 1.00, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 1.25, throttle: 0.95, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Rise back up
    { t: 1.5,  throttle: 0.75, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 1.8,  throttle: 0.68, yaw:  0.00, pitch: -0.05, roll:  0.00 },
    // Peak — settle to level
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
