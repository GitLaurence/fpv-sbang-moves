export default {
  id: 'forward-flip',
  name: 'Forward Flip',
  level: 'beginner',
  difficulty: 2,
  durationSec: 3.0,
  youtubeId:    'YPjSWXFgHEQ',
  youtubeStart: 0,
  description: 'Simpleng 360° forward pitch flip — i-push ang pitch pasulong nang buo, hayaan ang quad na mag-loop sa harapan, tapos i-recover. Pundasyon ng lahat ng flip-based moves at ng Matty Flip.',
  tips: [
    'Mag-carry ng sapat na bilis at altitude bago mag-flip — bawal mababa ang entry',
    'I-push ang pitch pasulong nang buo at agad — huwag gradual o half-input',
    'Mag-add ng throttle habang inverted — lalo sa tuktok ng loop para hindi bumaba',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.4, label: 'Past Top' },
    { t: 1.9, label: 'Pull Out' },
    { t: 2.3, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — carry speed
    { t: 0.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.2,  throttle: 0.70, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Push pitch forward — initiate 360° forward flip
    { t: 0.3,  throttle: 0.78, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 0.6,  throttle: 0.82, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    // Climbing / approaching inverted — add throttle to carry through
    { t: 0.9,  throttle: 0.90, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 1.2,  throttle: 0.82, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 1.5,  throttle: 0.72, yaw: 0.00, pitch:  0.70, roll: 0.00 },
    // Nose pointing down — ease pitch, prep exit
    { t: 1.8,  throttle: 0.65, yaw: 0.00, pitch:  0.20, roll: 0.00 },
    // Recovery — back to level flight
    { t: 2.1,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 2.5,  throttle: 0.63, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 3.0,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
