export default {
  id: 'flip',
  name: 'Flip',
  level: 'beginner',
  difficulty: 2,
  durationSec: 2.2,
  youtubeId:    'YPjSWXFgHEQ',
  youtubeStart: 0,
  description: 'Full 360° forward flip — push pitch forward at full deflection hanggang makumpleto ang isang buong loop, may throttle punch habang inverted para mapanatili ang altitude. Counterpart ng Roll, susunod na building block bago ang mas advanced combos.',
  tips: [
    'Full pitch forward — buong stick travel, hindi paunti-unti',
    'Throttle punch habang inverted (kalahati ng flip) para hindi bumagsak',
    'Hawakan ang pitch input hanggang makumpleto ang buong 360°, tapos bumalik sa center',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch In' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.5, label: 'Pitch Out' },
    { t: 2.2, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap full pitch forward — begin the flip
    { t: 0.3,  throttle: 0.66, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.68, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — throttle punch to hold altitude through the top
    { t: 0.9,  throttle: 0.76, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Continuing rotation back toward level
    { t: 1.5,  throttle: 0.66, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 1.75, throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Recovery — settle to level cruise
    { t: 1.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
