export default {
  id: 'barani',
  name: 'Barani',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Diagonal flip — sabay na full pitch at full roll input para mag-ikot ang quad sa diagonal axis. Lumalabas sa parehong direksyon pero naka-rotate ang oryentasyon, mas mabilis at mas "off-axis" kaysa sa plain roll.',
  tips: [
    'Sabay-sabay ang pitch at roll input — full deflection sa parehong stick para sa diagonal na ikot',
    'Bawasan ang throttle nang kaunti habang nasa diagonal-inverted portion',
    'I-release ang parehong stick nang sabay habang papalapit sa upright para malinis ang exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Flip+Roll' },
    { t: 0.95, label: 'Diag Inv' },
    { t: 1.3,  label: 'Continue' },
    { t: 1.8,  label: 'Recover' },
    { t: 2.2,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal flip — full pitch + full roll together, ease throttle
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    { t: 0.6,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Through the diagonal-inverted portion
    { t: 0.95, throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Continuing rotation toward upright
    { t: 1.3,  throttle: 0.62, yaw:  0.00, pitch:  0.60, roll:  0.60 },
    // Easing both sticks back to center together
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.15, roll:  0.15 },
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle to cruise
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
