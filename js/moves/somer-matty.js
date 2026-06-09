export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Somer Flip (buong 360° forward loop) → direktang Matty Flip exit. Dalawang magkasunod na trick sa iisang mabilis na combo: ang unang Somer loop ay nagbibigay ng altitude at momentum, ang Matty ang nagbibigay ng explosive na pagtatapos.',
  tips: [
    'Huwag magpahinga sa pagitan — ang Somer ay diretso sa Matty entry nang walang tigil',
    'I-maintain ang pitch forward mula Somer hanggang Matty entry — continuous na momentum',
    'Mas mataas ang approach altitude para may puwang sa Somer loop bago ang Matty exit',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.4,  label: 'Somer In' },
    { t: 1.1,  label: '½ Loop' },
    { t: 1.8,  label: 'Somer Out' },
    { t: 2.2,  label: 'Matty In' },
    { t: 2.8,  label: 'Inverted' },
    { t: 3.15, label: 'Punch' },
    { t: 3.9,  label: 'Pull Out' },
    { t: 4.3,  label: 'Exit' },
  ],
  keyframes: [
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMER FLIP — full pitch forward, moderate throttle to maintain loop shape
    { t: 0.4,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.72, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted at top of Somer — mild throttle reduction
    { t: 1.1,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Coming back around, approaching upright
    { t: 1.5,  throttle: 0.72, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Somer complete — back to upright, brief level transition
    { t: 1.85, throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // MATTY entry — throttle burst for energy
    { t: 2.1,  throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY — pitch forward snap, throttle cut
    { t: 2.3,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED PUNCH — full throttle through the object
    { t: 2.85, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.1,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Past inverted, nose rising back toward level
    { t: 3.4,  throttle: 0.80, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Pull out
    { t: 3.7,  throttle: 0.70, yaw:  0.00, pitch:  0.12, roll:  0.00 },
    { t: 3.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit
    { t: 4.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
