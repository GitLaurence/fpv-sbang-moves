export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pinagsamang Somersault at Matty Flip — pitch forward papunta sa inverted, full yaw spin habang inverted (ang "somer"), tapos throttle punch + pitch para kumpletuhin ang flip pabalik sa upright (ang "matty"). Kailangan ng eksaktong throttle timing sa bawat phase.',
  tips: [
    'Pitch forward muna papunta sa inverted, parang simpleng Matty Flip',
    'Habang inverted, full yaw spin nang isang buong 360° — panatilihin ang throttle para hindi bumagsak',
    'Pagkatapos ng spin, throttle punch + pitch forward para kumpletuhin ang Matty exit pabalik sa upright',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.1, label: 'Somer Yaw' },
    { t: 2.6, label: 'Yaw Stop' },
    { t: 3.0, label: 'Punch' },
    { t: 3.6, label: 'Pull Out' },
    { t: 4.1, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — moderate speed and altitude
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PUSH pitch forward toward inverted (like Matty entry)
    { t: 0.35, throttle: 0.72, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.65, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — re-establish hover throttle, center pitch
    { t: 0.9,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — full yaw spin while inverted
    { t: 1.1,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.70, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    // Stop yaw, center
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY PUNCH — full throttle + pitch forward completes the flip upright
    { t: 3.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.25, throttle: 0.85, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Pull out to level
    { t: 3.6,  throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 3.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 4.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
