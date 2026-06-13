export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° axial roll — pinaka-pundasyong trick para matuto ng smooth roll input at altitude control habang naka-inverted. Lahat ng advanced combo ay nagsisimula dito.',
  tips: [
    'Steady at full roll input — huwag biglaan, panatilihing constant ang rotation rate',
    'Maglagay ng kaunting throttle pagkatapos ng inverted point para hindi bumagsak',
    'I-time ang roll out papunta sa exactly 360° — huwag overshoot o undershoot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll In' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.5, label: 'Roll Out' },
    { t: 2.5, label: 'Level' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Full roll input — constant rotation begins
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — slight throttle add to fight the drop
    { t: 0.9,  throttle: 0.70, yaw:  0.00, pitch: -0.05, roll:  1.00 },
    { t: 1.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Completing the 360° — ease roll input out
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.7,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Level out
    { t: 1.9,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
