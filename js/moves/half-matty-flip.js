export default {
  id: 'half-matty-flip',
  name: 'Half Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.5,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Kalahating forward flip papunta sa inverted — HINDI nito kinukumpleto ang buong 360° tulad ng Matty Flip. Sa halip, humihinto ito sa inverted at lumalabas sa kabaligtarang direksyon (katulad ng Reverse Split-S). Mas subtle kaysa sa Matty Flip.',
  tips: [
    'PUSH pitch forward — ito ay forward flip, hindi backflip tulad ng Split-S',
    'Huwag mag-throttle punch sa inverted — ito ang pagkakaiba nito sa Matty Flip',
    'Mag-pull back mula sa inverted para sa malinaw na direksyonal na exit',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.1,  label: 'Pull Back' },
    { t: 2.2,  label: 'Level Out' },
    { t: 2.8,  label: 'Exit' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PUSH pitch forward — begin forward flip, throttle holds energy
    { t: 0.35, throttle: 0.72, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted — ease throttle, let flip stop at 180°
    { t: 0.8,  throttle: 0.35, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Fully inverted — center pitch, minimal throttle (no punch unlike Matty)
    { t: 0.95, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.05, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull back — pitch back arcs nose through bottom, exiting opposite direction
    { t: 1.15, throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.52, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Level out — exiting in opposite direction
    { t: 2.2,  throttle: 0.70, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 2.6,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
