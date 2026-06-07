export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 3.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Ang pinaka-pundasyon na trick — buong 360° roll habang nagpapatuloy ang forward momentum. I-chop nang kaunti ang throttle papasok sa inversion, panatilihin ang full roll input mula simula hanggang dulo, at i-catch pag level na muli.',
  tips: [
    'Full roll deflection mula umpisa hanggang matapos — huwag tumigil sa kalagitnaan',
    'I-chop nang bahagya ang throttle habang baligtad para hindi tumaas ang altitude',
    'Magsanay sa simulator muna — dapat predictable at smooth ang bilis ng pag-ikot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll In' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.6, label: 'Roll Out' },
    { t: 2.2, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll in — full deflection, slight throttle reduction
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.48, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — lowest throttle point, hold full roll
    { t: 1.0,  throttle: 0.48, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.3,  throttle: 0.56, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — ease deflection as it completes the circle, restore throttle
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.35 },
    { t: 1.85, throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — level flight resumes
    { t: 2.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
