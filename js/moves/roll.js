export default {
  id: 'roll',
  name: 'Aileron Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.2,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll gamit ang roll stick lamang — patuloy na full roll input hanggang kumpleto ang isang ikot, panatilihin ang throttle at heading. Pundasyon ng lahat ng flip/roll combos.',
  tips: [
    'Full roll input hanggang makumpleto ang 360° — huwag tumigil sa kalagitnaan',
    'Panatilihin ang throttle steady sa buong roll, kahit habang inverted',
    'I-center ang roll stick agad pagkatapos makumpleto ang ikot para huminto sa tamang oryentasyon',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.5, label: 'Roll Out' },
    { t: 2.2, label: 'Recovery' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Full roll input — steady throttle through the rotation
    { t: 0.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Passing inverted
    { t: 1.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Completing the 360°
    { t: 1.3,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — center stick back to upright
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle level
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
