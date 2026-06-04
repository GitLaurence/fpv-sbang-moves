export default {
  id: 'power-loop',
  name: 'Sideways Power Loop',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.5,
  youtubeId:    'LcYJFd3gMEQ',
  youtubeStart: 0,
  description: 'Power loop na may kasamang roll — ang loop ay nagaganap sa gilid (sa halip na tuwirang overhead). Sabay na pitch back at full roll sa iisang direksyon para mag-arc ang drone sa patag na anggulo.',
  tips: [
    'Sabay ang pitch back at roll input — pareho full deflection sa parehong oras',
    'Mas malakas ang roll component = mas "sideways" ang loop; mas malakas ang pitch = mas patayo',
    'CHOP throttle sa inverted phase — parehong technique sa regular power loop',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Roll+Pull' },
    { t: 1.4, label: 'Climbing' },
    { t: 2.1, label: 'Top/Chop' },
    { t: 3.0, label: 'Pull Thru' },
    { t: 3.8, label: 'Exit' },
  ],
  keyframes: [
    // High-speed approach
    { t: 0.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.92, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Simultaneous pitch back + full roll — initiates sideways loop
    { t: 0.5,  throttle: 1.00, yaw:  0.00, pitch: -0.80, roll:  1.00 },
    { t: 0.85, throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  1.00 },
    // Through rotation — maintain both inputs
    { t: 1.2,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  1.00 },
    { t: 1.6,  throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.90 },
    // Approaching inverted top — begin throttle chop
    { t: 1.95, throttle: 0.40, yaw:  0.00, pitch: -1.00, roll:  0.70 },
    // INVERTED — chop throttle near-zero
    { t: 2.15, throttle: 0.06, yaw:  0.00, pitch: -1.00, roll:  0.50 },
    { t: 2.4,  throttle: 0.05, yaw:  0.00, pitch: -1.00, roll:  0.40 },
    // Back around, nose pointing down — ramp throttle, ease roll
    { t: 2.65, throttle: 0.30, yaw:  0.00, pitch: -1.00, roll:  0.20 },
    { t: 2.95, throttle: 0.72, yaw:  0.00, pitch: -0.90, roll:  0.10 },
    // Pulling through bottom
    { t: 3.25, throttle: 0.88, yaw:  0.00, pitch: -0.75, roll:  0.00 },
    // Exit — ease pitch to level
    { t: 3.75, throttle: 0.72, yaw:  0.00, pitch: -0.28, roll:  0.00 },
    { t: 4.15, throttle: 0.67, yaw:  0.00, pitch: -0.04, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
