export default {
  id: 'iys-rewind',
  name: 'Inverted Yaw Spin Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.6,
  youtubeId:    'T7uEolLo_9c',
  youtubeStart: 0,
  description: 'Mag-flip sa inverted, magsimula ng yaw spin sa isang direksyon, pero bago makumpleto ang buong 360°, i-reverse agad ang yaw (rewind) para bumalik sa parehong orientation kung saan nagsimula, tapos flip pabalik sa upright. Iba ito sa regular na Inverted Yaw Spin dahil hindi tuluy-tuloy ang direksyon ng spin.',
  tips: [
    'Huwag hintayin ang 180° bago mag-rewind — halfway lang, parang "nag-second-guess" ang spin',
    'Ang direksyon ng rewind ay eksaktong kabaligtaran ng orihinal na yaw input — walang overshoot',
    'Panatilihing steady ang throttle sa buong spin at rewind — ang flip lang dapat may malaking throttle change',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Flip Inv' },
    { t: 1.0,  label: 'Spin' },
    { t: 1.55, label: 'Rewind' },
    { t: 2.3,  label: 'Back to Start' },
    { t: 2.42, label: 'Flip Up' },
    { t: 2.85, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip to inverted — pitch snap, throttle cut
    { t: 0.4,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.62, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — settle throttle
    { t: 0.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin yaw spin — one direction, roughly half rotation
    { t: 1.0,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.35, throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // REWIND — snap yaw to opposite direction, unwind back to start orientation
    { t: 1.55, throttle: 0.68, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.95, throttle: 0.68, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    // Back at original orientation — center yaw
    { t: 2.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright
    { t: 2.42, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.64, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — punch throttle to catch altitude loss
    { t: 2.85, throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
