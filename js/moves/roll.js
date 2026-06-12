export default {
  id: 'roll',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° aileron roll na pinapanatili ang parehong heading at altitude. Pundasyon ng lahat ng roll-based tricks — kailangan ng constant rate at smooth na throttle compensation sa inverted portion.',
  tips: [
    'Full roll input mula simula hanggang dulo — huwag mag-pause sa gitna',
    'Bahagyang babaan ang throttle habang inverted para hindi tumaas ang altitude',
    'Panatilihin ang pitch sa center sa buong roll — ang roll lang ang gumagalaw',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Start' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.7, label: 'Roll Out' },
    { t: 2.0, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin full roll — ease throttle down slightly
    { t: 0.3,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — minimum throttle to hold altitude upside down
    { t: 0.65, throttle: 0.48, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.48, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Continuing rotation back toward upright
    { t: 1.35, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — ramp throttle back to cruise as upright is reached
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
