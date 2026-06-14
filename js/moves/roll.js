export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll na pinananatili ang heading at altitude. Pundasyon ng lahat ng roll-based moves — dito nagsisimula ang smooth na stick control.',
  tips: [
    'Isang smooth na continuous input ang roll — huwag i-jab, i-hold hanggang makumpleto ang 360°',
    'Taasan ng bahagya ang throttle habang inverted para mapanatili ang altitude',
    'Ibalik agad sa center ang roll stick pagkatapos ng full rotation',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll In' },
    { t: 0.7, label: 'Inverted' },
    { t: 1.1, label: 'Roll Out' },
    { t: 1.5, label: 'Level' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll in — full deflection, hold through the rotation
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — slight throttle bump to hold altitude upside down
    { t: 0.7,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — completing the 360°, easing throttle back down
    { t: 1.1,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.25, throttle: 0.61, yaw:  0.00, pitch:  0.00, roll:  0.35 },
    // Level — back to upright cruise
    { t: 1.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
