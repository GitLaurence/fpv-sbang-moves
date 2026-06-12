export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pinagsamang somersault at Matty Flip — pitch at roll na sabay-sabay sa pagsisimula ng flip, tapos PUNCH throttle habang inverted gaya ng Matty Flip. Isa sa pinaka-technical na combo.',
  tips: [
    'Sabay na i-input ang pitch forward at full roll para sa somersault rotation',
    'Habang inverted at kalahati ng spin, PUNCH ang throttle gaya ng Matty Flip para hindi bumagsak',
    'I-unwind ang roll at pitch nang sabay habang papalapit sa upright para tamang exit heading',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch+Roll' },
    { t: 0.9, label: 'Inverted Spin' },
    { t: 1.4, label: 'Punch' },
    { t: 2.0, label: 'Unwind' },
    { t: 2.8, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin somersault — pitch forward and roll together
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    { t: 0.6,  throttle: 0.60, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Inverted, mid-spin
    { t: 0.9,  throttle: 0.70, yaw:  0.00, pitch:  0.60, roll:  1.00 },
    // Matty-style throttle punch while inverted
    { t: 1.4,  throttle: 1.00, yaw:  0.00, pitch:  0.30, roll:  0.60 },
    { t: 1.7,  throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Unwind roll/pitch back toward upright
    { t: 2.0,  throttle: 0.80, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 2.4,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
