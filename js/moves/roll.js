export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll habang nagpapatuloy ang forward flight — full roll input hanggang makabalik sa upright. Pundasyon ng bawat freestyle move na may roll axis.',
  tips: [
    'Bawasan ng kaunti ang throttle habang inverted para hindi mabaliw ang pitch ng quad',
    'Full deflection ang roll stick — huwag partial, dapat tuluy-tuloy ang ikot',
    'I-level ang throttle pabalik sa cruise sa sandaling makabalik sa upright',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Start' },
    { t: 0.7, label: 'Inverted' },
    { t: 1.1, label: 'Roll Out' },
    { t: 1.4, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin full roll — slight throttle ease for the inverted portion
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Through inverted, continuing the roll
    { t: 0.9,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — ease back to center as upright is reached
    { t: 1.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 1.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
