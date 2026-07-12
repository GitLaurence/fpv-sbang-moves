export default {
  id: 'reverse-wall-ride',
  name: 'Reverse Wall Ride',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '2koGdcQ1XOU',
  youtubeStart: 0,
  description: 'Karaniwang wall ride, pero sa gitna, mag-180° yaw spin para baligtarin ang direksyon habang patuloy sa gilid ng pader — biglang tumatakbo pabalik ang drone bago mag-roll pabalik papunta sa pader para mag-level at lumabas.',
  tips: [
    'Kailangan matatag ang altitude at distansya sa pader bago simulan ang reversal',
    'Ang yaw spin ay dapat mabilis at kumpleto — kalahating gawa lang ay mawawalan ng control',
    'Panatilihin ang throttle na medyo mataas habang nag-rereverse para hindi mahulog',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.6, label: 'Wall Ride' },
    { t: 1.4, label: 'Reverse Yaw' },
    { t: 2.2, label: 'Backward Ride' },
    { t: 3.0, label: 'Roll to Exit' },
    { t: 3.6, label: 'Level' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Wall ride — banked roll, slight yaw to hold the line
    { t: 0.6,  throttle: 0.72, yaw:  0.15, pitch:  0.00, roll:  0.55 },
    { t: 1.0,  throttle: 0.74, yaw:  0.18, pitch:  0.00, roll:  0.55 },
    // Reverse — full yaw spin flips travel direction
    { t: 1.4,  throttle: 0.60, yaw:  1.00, pitch:  0.00, roll:  0.20 },
    { t: 1.7,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.55, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    // Backward along the wall
    { t: 2.2,  throttle: 0.68, yaw:  0.10, pitch:  0.00, roll: -0.50 },
    { t: 2.6,  throttle: 0.70, yaw:  0.12, pitch:  0.00, roll: -0.50 },
    // Roll back toward the wall to level and exit
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -0.20 },
    { t: 3.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
