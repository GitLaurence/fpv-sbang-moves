export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature na rhythmic throttle bounce ni Headmazta — paulit-ulit na throttle punch tapos chop, parang bumabagsak at tumatalbog ang drone habang patuloy na nagpapasulong.',
  tips: [
    'Maikli at malakas ang bawat throttle punch — huwag gradual',
    'I-chop agad ang throttle pagkatapos ng punch para sa free-fall na pakiramdam',
    'Panatilihin ang slight forward pitch sa buong move para tuloy-tuloy ang paglipad',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Bounce 1 Up' },
    { t: 0.6, label: 'Bounce 1 Down' },
    { t: 1.2, label: 'Bounce 2 Up' },
    { t: 1.5, label: 'Bounce 2 Down' },
    { t: 2.1, label: 'Bounce 3 Up' },
    { t: 2.4, label: 'Bounce 3 Down' },
    { t: 3.0, label: 'Recover' },
  ],
  keyframes: [
    // Entry — cruise
    { t: 0.0,  throttle: 0.55, yaw: 0.00, pitch: 0.20, roll: 0.00 },
    { t: 0.15, throttle: 0.55, yaw: 0.00, pitch: 0.20, roll: 0.00 },
    // Bounce 1 — punch then chop
    { t: 0.3,  throttle: 1.00, yaw: 0.00, pitch: 0.20, roll: 0.00 },
    { t: 0.45, throttle: 0.85, yaw: 0.00, pitch: 0.20, roll: 0.00 },
    { t: 0.6,  throttle: 0.12, yaw: 0.00, pitch: 0.20, roll: 0.00 },
    { t: 0.9,  throttle: 0.12, yaw: 0.00, pitch: 0.20, roll: 0.00 },
    // Bounce 2 — punch then chop
    { t: 1.2,  throttle: 1.00, yaw: 0.00, pitch: 0.20, roll: 0.00 },
    { t: 1.35, throttle: 0.85, yaw: 0.00, pitch: 0.20, roll: 0.00 },
    { t: 1.5,  throttle: 0.12, yaw: 0.00, pitch: 0.20, roll: 0.00 },
    { t: 1.8,  throttle: 0.12, yaw: 0.00, pitch: 0.20, roll: 0.00 },
    // Bounce 3 — punch then chop, slightly softer
    { t: 2.1,  throttle: 0.92, yaw: 0.00, pitch: 0.15, roll: 0.00 },
    { t: 2.25, throttle: 0.80, yaw: 0.00, pitch: 0.15, roll: 0.00 },
    { t: 2.4,  throttle: 0.20, yaw: 0.00, pitch: 0.15, roll: 0.00 },
    { t: 2.7,  throttle: 0.30, yaw: 0.00, pitch: 0.10, roll: 0.00 },
    // Recover — settle back to cruise
    { t: 3.0,  throttle: 0.55, yaw: 0.00, pitch: 0.05, roll: 0.00 },
    { t: 3.5,  throttle: 0.58, yaw: 0.00, pitch: 0.00, roll: 0.00 },
    { t: 4.0,  throttle: 0.58, yaw: 0.00, pitch: 0.00, roll: 0.00 },
  ],
};
