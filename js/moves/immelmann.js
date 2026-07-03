export default {
  id: 'immelmann',
  name: 'Immelmann Turn',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 4.0,
  youtubeId:    'NIRiyWI668E',
  youtubeStart: 0,
  description: 'Kalahating vertical loop pataas — sa tuktok (inverted), mag-half roll para lumabas na nakaharap sa kabaligtarang direksyon. Nagbabago ng direksyon nang 180° habang nakakakuha ng altitude.',
  tips: [
    'Kailangan ng full throttle at bilis sa entry — kulang na bilis = hindi maabot ang tuktok',
    'Ang half roll sa tuktok ay dapat mabilis at malinis — huwag mag-atubili sa roll input',
    'Ang exit altitude ay mas mataas kaysa entry — gamitin ito para sa dramatic change of direction',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Pull Up' },
    { t: 1.5, label: 'Vertical' },
    { t: 2.0, label: 'Top/Roll' },
    { t: 2.4, label: 'Upright' },
    { t: 3.0, label: 'Exit' },
  ],
  keyframes: [
    // High-speed approach
    { t: 0.0,  throttle: 0.82, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.92, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PULL pitch back — nose up, full throttle through half loop
    { t: 0.5,  throttle: 1.00, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 0.9,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Climbing vertically — hold full pull
    { t: 1.3,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Approaching top — ease pitch slightly, prepare roll
    { t: 1.95, throttle: 0.75, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    // TOP (inverted) — throttle eased off so the half roll completes cleanly
    { t: 2.05, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.28, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Upright — roll complete, exit in opposite direction
    { t: 2.45, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.20 },
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level flight, opposite heading, higher altitude
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
