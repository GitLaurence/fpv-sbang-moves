export default {
  id: 'roll',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° aileron roll gamit ang roll stick lang. Pundasyon ng lahat ng flips at combos — kailangan ng constant throttle at smooth, sustained na roll input.',
  tips: [
    'Full roll input nang sabay-sabay — huwag partial, dapat isang tuloy-tuloy na motion',
    'Maintain ang throttle sa cruise level habang umiikot — bahagyang dip sa inverted point ay normal',
    'I-practice muna sa simulator nang mabagal bago bilisan — focus sa smoothness, hindi bilis',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Start' },
    { t: 0.8, label: 'Inverted' },
    { t: 1.3, label: 'Roll Out' },
    { t: 1.7, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin smooth full roll input
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.55, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — slight throttle dip to hold altitude
    { t: 0.8,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.05, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — completing the 360°
    { t: 1.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — back to level cruise
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
