export default {
  id: 'half-matty-flip',
  name: 'Half Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.5,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Kalahating Matty Flip — pitch forward 180° papunta sa inverted, tapos mag-half roll para lumabas sa kabaligtarang direksyon. Tinatawag ding "Reverse Split-S" dahil kalabaligtaran ng klasikong Split-S.',
  tips: [
    'Mag-pitch forward aggressively — kailangan ng buong 180° rotation bago mag-roll',
    'Ang half roll sa inverted ay dapat mabilis at malinis — parang Immelmann sa ibaba',
    'Mas mababa ang exit kaysa entry — kailangan ng altitude para sa maneuver na ito',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.2, label: 'Half Roll' },
    { t: 1.7, label: 'Upright' },
    { t: 2.2, label: 'Exit' },
  ],
  keyframes: [
    // Approach — moderate speed
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward — begin forward flip
    { t: 0.35, throttle: 0.72, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.55, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.35, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — center pitch, brief pause
    { t: 0.95, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half roll to upright — snap 180°
    { t: 1.2,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.45, throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Upright — roll complete
    { t: 1.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    { t: 1.75, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — flying opposite direction, throttle up to maintain altitude
    { t: 2.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
