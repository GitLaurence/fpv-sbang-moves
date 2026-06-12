export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll na pinananatili ang heading at altitude. Full roll stick deflection na may konsultanteng throttle adjustment habang inverted — pundasyon ng lahat ng advanced rolling combos.',
  tips: [
    'Full deflection ang roll stick — bigyan ng consistent na bilis sa buong 360°, huwag nag-aaccelerate o decelerate',
    'Maglagay ng konting throttle punch habang inverted para hindi bumaba ang altitude',
    'I-center agad ang roll stick pagkatapos ng exact 360° — huwag mag-overshoot',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Roll Start' },
    { t: 0.7, label: 'Inverted' },
    { t: 1.1, label: 'Roll Out' },
    { t: 1.4, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin roll — full deflection, slight throttle cut to start the rotation
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — punch throttle slightly to hold altitude
    { t: 0.55, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Continuing rotation back toward upright
    { t: 0.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — ease stick back to center as 360° completes
    { t: 1.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 1.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 1.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
