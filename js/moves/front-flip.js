export default {
  id: 'front-flip',
  name: 'Front Flip',
  level: 'beginner',
  difficulty: 2,
  durationSec: 2.5,
  youtubeId:    'YPjSWXFgHEQ',
  youtubeStart: 0,
  description: 'Buong 360° forward flip sa parehong lugar — full pitch forward sa buong rotation, tapos i-recover pabalik sa level. Pundasyon para sa lahat ng flip-based moves.',
  tips: [
    'Full pitch forward at panatilihin habang umiikot — huwag i-release sa gitna',
    'Bahagyang i-ease ang throttle habang inverted para hindi tumaas ang altitude',
    'I-anticipate ang pagbalik sa level — i-center ang pitch bago pa man tapos ang rotation',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Flip' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.5, label: 'Recover' },
    { t: 1.8, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level hover/cruise
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin flip — full pitch forward
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — ease throttle slightly to hold altitude
    { t: 0.9,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Recover — ease pitch back toward center as rotation completes
    { t: 1.5,  throttle: 0.62, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 1.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle back to cruise
    { t: 2.1,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
