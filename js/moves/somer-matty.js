export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng Somersault (backflip) at Matty Flip (forward flip na may throttle punch) — pabago-bagong direksyon ng pitch rotation na nangangailangan ng eksaktong throttle control.',
  tips: [
    'Unahin ang Somersault — pitch backward nang buo bago bumalik sa level',
    'Maglagay ng maikling pause sa pagitan ng dalawang flips para sa control',
    'Sa Matty Flip bahagi, mag-punch ng throttle habang inverted para sa malinis na pull-through',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Somersault' },
    { t: 1.2, label: 'Pause' },
    { t: 1.5, label: 'Matty Flip' },
    { t: 2.0, label: 'Punch' },
    { t: 2.7, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault — full backflip rotation
    { t: 0.4,  throttle: 0.70, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.75, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.65, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 1.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Brief pause before second flip
    { t: 1.35, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Matty Flip — forward flip with throttle punch while inverted
    { t: 1.5,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.2,  throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 2.45, throttle: 0.78, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 2.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
