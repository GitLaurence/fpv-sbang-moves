export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal na flip — sabay na full pitch at full roll input para gumawa ng "kick"-like na rotation sa diagonal axis. Mabilis na palabas-pasok sa gaps o sa ilalim ng obstacles dahil sa diagonal na flight path.',
  tips: [
    'Talagang sabay ang pitch at roll input — full deflection sa parehong sticks nang sabay-sabay',
    'I-chop ang throttle habang nasa diagonal inverted point para hindi ma-overshoot ang altitude',
    'Ang exit heading ay diagonal din — mag-adjust ng yaw kapag kailangan bumalik sa orihinal na linya',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Diag Flip' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.1,  label: 'Chop' },
    { t: 1.7,  label: 'Pull Out' },
    { t: 2.2,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal flip — sabay na full pitch forward at full roll
    { t: 0.35, throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Approaching diagonal-inverted point
    { t: 0.85, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // CHOP — throttle cut at the inverted point of the diagonal rotation
    { t: 1.1,  throttle: 0.15, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    { t: 1.35, throttle: 0.18, yaw:  0.00, pitch:  0.70, roll:  0.65 },
    // Continue rotation toward upright — ease both sticks back toward center
    { t: 1.6,  throttle: 0.45, yaw:  0.00, pitch:  0.35, roll:  0.30 },
    // Pull out to level
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.05 },
    { t: 2.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
