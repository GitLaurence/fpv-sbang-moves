export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal flip-roll combo — sabay na full pitch at roll input para mag-ikot sa diagonal axis, parang mabilis na "kick" sa hangin. Mabilis at snappy, kailangan ng tamang timing para makabalik sa upright.',
  tips: [
    'I-input ang pitch at roll nang sabay-sabay at full deflection — ito ang gumagawa ng diagonal axis',
    'Panatilihin ang throttle medyo mababa habang umiikot para hindi tumaas masyado ang altitude',
    'Mag-ease pabalik sa center ang parehong stick habang papalapit na sa pagkumpleto ng rotation',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Flip+Roll' },
    { t: 0.85, label: 'Diagonal' },
    { t: 1.15, label: 'Recover' },
    { t: 2.0,  label: 'Settle' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap flip+roll simultaneously — diagonal axis flip
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.55, throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Past halfway through the diagonal rotation
    { t: 0.85, throttle: 0.50, yaw:  0.00, pitch:  0.60, roll:  0.60 },
    // Completing the rotation — ease sticks back to center as drone catches up
    { t: 1.15, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
