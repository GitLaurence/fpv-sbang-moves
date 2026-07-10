export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.8,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Karaniwang Split-S, tapos bigla mong babalikan ("rewind") — mabilis na yaw spin na may bahagyang roll pabalik sa orihinal na direksyon sa halip na magpatuloy dumeretso. Dramatic dahil parang "nag-rewind" ang drone sa hangin.',
  tips: [
    'Kumpletuhin muna nang husto ang Split-S bago mag-rewind — huwag maagang mag-yaw',
    'Ang rewind ay full yaw snap na may kasamang bahagyang roll — hindi purong yaw lang',
    'Mag-throttle punch bago ang rewind para may sapat na momentum para sa pabalik na spin',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.25, label: 'Pull' },
    { t: 2.5,  label: 'Punch' },
    { t: 2.8,  label: 'Rewind' },
    { t: 3.1,  label: 'Recover' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted — CUT throttle, full roll snap
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.88, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    // Fully inverted
    { t: 1.0,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull — sustained pitch back through the bottom half-loop
    { t: 1.25, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.48, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.1,  throttle: 0.65, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Throttle punch to build momentum before the rewind
    { t: 2.5,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND — full yaw snap with a bank, spinning back toward the original heading
    { t: 2.8,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.30 },
    { t: 3.0,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.30 },
    { t: 3.1,  throttle: 0.55, yaw:  0.40, pitch:  0.00, roll:  0.10 },
    // Recover — settle to level, original heading
    { t: 3.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
