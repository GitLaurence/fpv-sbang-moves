export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll habang pinapanatili ang level forward flight — ang pundasyon ng lahat ng acro moves. Tinuturo nito kung paano mag-isolate ng roll axis nang hindi naapektuhan ang pitch at altitude.',
  tips: [
    'Full roll input, isang smooth at constant na rate — huwag biglain o i-jerk',
    'Magdagdag ng kaunting forward pitch habang inverted para hindi mawala ang altitude',
    'I-time ang pag-center ng roll stick eksakto sa 360° — huwag overshoot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll In' },
    { t: 1.25, label: 'Inverted' },
    { t: 2.1, label: 'Roll Out' },
    { t: 2.5, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll in — full constant roll input
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.8,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  1.00 },
    // Inverted — small forward pitch holds altitude
    { t: 1.25, throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  1.00 },
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  1.00 },
    // Roll out — finish the 360° back to upright
    { t: 2.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Exit — level forward flight
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
