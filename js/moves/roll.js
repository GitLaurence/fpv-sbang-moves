export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Isang buong 360° aileron roll gamit ang roll stick lang. Pundasyon ng lahat ng flips at combos — ang layunin ay smooth at consistent ang rate, walang biglaang altitude loss.',
  tips: [
    'Maglagay ng kaunting throttle boost bago pumasok sa roll para mabawi ang lift na nawawala habang inverted',
    'Panatilihin ang roll input na pare-pareho ang bilis mula start hanggang finish — huwag bumibilis o bumabagal',
    'I-center agad ang roll stick pagkatapos ng exact 360° para hindi mag-overshoot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.2, label: 'Roll' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.8, label: 'Roll Out' },
    { t: 2.0, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin roll — full roll input, slight throttle boost
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted point — hold roll, throttle stays elevated
    { t: 1.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.4,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Finish roll back to upright
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.9,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
