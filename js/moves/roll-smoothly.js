export default {
  id: 'roll-smoothly',
  name: 'Roll Smoothly',
  level: 'beginner',
  difficulty: 2,
  durationSec: 2.8,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Isang clean at smooth na 360° roll — patuloy na full roll input habang dinadagdagan ang throttle sa inverted portion para hindi bumagsak. Pundasyon ng lahat ng roll-based tricks.',
  tips: [
    'Panatilihin ang roll stick sa full deflection sa buong rotation — huwag mag-ease in/out',
    'Dagdagan ang throttle habang inverted para mabawi ang altitude na nawawala',
    'I-time ang pag-center ng roll stick eksakto sa pagbalik sa upright para hindi mag-overshoot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Start' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.9, label: 'Roll Out' },
    { t: 2.3, label: 'Recovery' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin smooth roll — sustained full deflection
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — bump throttle to hold altitude
    { t: 0.9,  throttle: 0.76, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.4,  throttle: 0.74, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Continue rotation back toward upright
    { t: 1.9,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Center stick as it reaches upright
    { t: 2.1,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 2.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
