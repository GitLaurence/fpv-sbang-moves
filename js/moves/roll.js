export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll na may constant na rate. Pundasyon ng halos lahat ng freestyle combo — kailangang maging smooth at controlled bago matuto ng mas mahihirap na moves.',
  tips: [
    'Panatilihing constant ang roll rate — huwag bibilis o babagal sa gitna ng roll',
    'Maliit na forward pitch habang inverted para hindi tumaas ang nose',
    'Steady ang throttle sa buong roll — huwag aalis sa cruise level',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Start' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.6, label: 'Roll Out' },
    { t: 2.0, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll start — smooth, constant roll input
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — slight forward pitch to hold altitude
    { t: 1.0,  throttle: 0.62, yaw:  0.00, pitch:  0.10, roll:  1.00 },
    { t: 1.3,  throttle: 0.63, yaw:  0.00, pitch:  0.05, roll:  1.00 },
    // Continue roll back to upright
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level cruise
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
