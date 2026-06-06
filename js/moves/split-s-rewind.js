export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 6.5,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Dalawang magkasunod na Split-S — ang ikalawa ay agad pagkatapos ng una at gumagamit ng kabaligtarang roll direction para "i-rewind" ang heading pabalik sa orihinal. Ang double altitude loss ay nangangailangan ng malaking clearance.',
  tips: [
    'Walang tigil sa pagitan ng dalawang Split-S — agad na i-initiate ang pangalawa',
    'Gumamit ng kabaligtarang roll direction sa ikalawang Split-S para sa cleaner transition',
    'Kailangan ng doble na altitude clearance — mas mataas na entry kaysa sa simpleng Split-S',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll 1' },
    { t: 1.0, label: 'Inverted 1' },
    { t: 1.2, label: 'Pull 1' },
    { t: 2.5, label: 'Roll 2' },
    { t: 3.1, label: 'Inverted 2' },
    { t: 3.3, label: 'Pull 2' },
    { t: 5.0, label: 'Exit' },
  ],
  keyframes: [
    // Entry upright — carry altitude
    { t: 0.0,  throttle: 0.70, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.70, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S #1 — Roll right to inverted, chop throttle
    { t: 0.4,  throttle: 0.35, yaw: 0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.33, yaw: 0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.88, throttle: 0.33, yaw: 0.00, pitch:  0.00, roll:  0.25 },
    // Inverted 1 — center roll
    { t: 1.0,  throttle: 0.33, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    // Pull through #1
    { t: 1.2,  throttle: 0.38, yaw: 0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.48, yaw: 0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.0,  throttle: 0.62, yaw: 0.00, pitch: -0.70, roll:  0.00 },
    // Brief level at exit of #1
    { t: 2.3,  throttle: 0.72, yaw: 0.00, pitch: -0.10, roll:  0.00 },
    { t: 2.45, throttle: 0.70, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S #2 — Roll LEFT to inverted (rewind direction)
    { t: 2.6,  throttle: 0.35, yaw: 0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.85, throttle: 0.33, yaw: 0.00, pitch:  0.00, roll: -1.00 },
    { t: 3.08, throttle: 0.33, yaw: 0.00, pitch:  0.00, roll: -0.25 },
    // Inverted 2 — center roll
    { t: 3.2,  throttle: 0.33, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    // Pull through #2 — back to original heading, lower altitude
    { t: 3.4,  throttle: 0.38, yaw: 0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.48, yaw: 0.00, pitch: -0.95, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw: 0.00, pitch: -0.70, roll:  0.00 },
    // Exit — original heading, lower altitude
    { t: 4.6,  throttle: 0.75, yaw: 0.00, pitch: -0.22, roll:  0.00 },
    { t: 5.0,  throttle: 0.70, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.8,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.5,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll:  0.00 },
  ],
};
