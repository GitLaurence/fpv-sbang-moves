export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll sa isang axis — ang pundasyon ng lahat ng acro maneuvers. Pantay at tuloy-tuloy ang roll rate mula umpisa hanggang dulo, walang biglaang pagbabago sa bilis.',
  tips: [
    'Panatilihing pantay ang roll rate — huwag bilisan o bagalan sa kalagitnaan',
    'Konting throttle adjustment lang habang inverted para hindi bumaba ang altitude',
    'Master muna ito bago subukan ang mas advanced na rolls at flips',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Start' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.7, label: 'Roll Out' },
    { t: 2.0, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin smooth full roll — constant rate
    { t: 0.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — halfway through, slight throttle hold
    { t: 1.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Completing 360° — ease roll back to center as upright
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level flight
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
