export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Split-S na sinusundan ng kabaliktarang Split-S — ang drone ay bumabalik sa orihinal na direksyon sa pamamagitan ng reverse na galaw. Dalawang beses ang direction change para sa isang kompletong rewind effect.',
  tips: [
    'Ang bawat half-roll ay dapat katapat ang isa sa kabilang panig — iba-iba ang direksyon ng roll',
    'Panatilihing simetriko ang dalawang pull at push phases para sa malinis na rewind',
    'Kailangan ng sapat na altitude — dalawang split-s ang ginagawa, doble ang altitude loss',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Roll Inv' },
    { t: 1.0, label: 'Pull' },
    { t: 2.3, label: 'Level' },
    { t: 2.6, label: 'Rewind Roll' },
    { t: 3.1, label: 'Push' },
    { t: 4.3, label: 'Exit' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted (right)
    { t: 0.5,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.75, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.95, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.20 },
    // Fully inverted — center roll
    { t: 1.08, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull through half-loop
    { t: 1.25, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.65, throttle: 0.50, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.05, throttle: 0.65, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Level — now flying opposite direction
    { t: 2.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND: Half-roll inverted opposite direction (left)
    { t: 2.65, throttle: 0.35, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.9,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 3.1,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll: -0.20 },
    // Fully inverted again
    { t: 3.2,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Push through (opposite of pull — forward pitch)
    { t: 3.35, throttle: 0.38, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.75, throttle: 0.50, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 4.1,  throttle: 0.65, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Exit — back to original heading
    { t: 4.4,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
