export default {
  id: 'orbits',
  name: 'Orbits',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 5.0,
  youtubeId:    'XJDBezfCwyY',
  youtubeStart: 0,
  description: 'Sustained bank gamit ang roll, kasabay ng steady yaw at kaunting pitch, para mag-fly ng buong circle sa paligid ng isang fixed subject. Kailangan ng matiyagang stick coordination sa halip na quick snap.',
  tips: [
    'Panatilihin ang bank angle na pantay sa buong circle — huwag hayaang mag-iba ang roll deflection',
    'I-match ang yaw rate sa roll rate para manatiling nakaharap ang camera sa subject',
    'Magdagdag ng kaunting throttle sa gitna ng bank para hindi mawala ang altitude sa buong orbit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Bank In' },
    { t: 1.2, label: 'Quarter' },
    { t: 2.2, label: 'Half' },
    { t: 3.2, label: 'Three-Quarter' },
    { t: 4.1, label: 'Roll Out' },
    { t: 4.5, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level flight, subject centered
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bank in — sustained roll + matching yaw + light forward pitch
    { t: 0.4,  throttle: 0.75, yaw:  0.32, pitch:  0.22, roll:  0.50 },
    { t: 0.8,  throttle: 0.78, yaw:  0.35, pitch:  0.25, roll:  0.52 },
    // Quarter orbit — sustain, throttle compensates for bank
    { t: 1.2,  throttle: 0.80, yaw:  0.35, pitch:  0.25, roll:  0.52 },
    { t: 1.7,  throttle: 0.76, yaw:  0.35, pitch:  0.25, roll:  0.52 },
    // Half orbit — still sustaining
    { t: 2.2,  throttle: 0.79, yaw:  0.35, pitch:  0.25, roll:  0.52 },
    { t: 2.7,  throttle: 0.77, yaw:  0.35, pitch:  0.25, roll:  0.52 },
    // Three-quarter orbit
    { t: 3.2,  throttle: 0.79, yaw:  0.35, pitch:  0.25, roll:  0.52 },
    { t: 3.65, throttle: 0.75, yaw:  0.32, pitch:  0.22, roll:  0.48 },
    // Roll out — ease back to level as circle completes
    { t: 4.1,  throttle: 0.68, yaw:  0.15, pitch:  0.10, roll:  0.20 },
    { t: 4.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level flight
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
