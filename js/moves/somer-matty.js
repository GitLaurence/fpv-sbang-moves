export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng Somersault (backflip) papuntang Matty Flip (forward flip) — dalawang full rotation sa magkaibang direksyon, walang pause sa pagitan. Kailangan ng mabilis na pagpalit ng pitch direction habang naka-throttle punch.',
  tips: [
    'Ang Somersault (pitch back) ay dapat tapusin muna ang buong rotation bago lumipat sa Matty Flip',
    'Sa transition, agad palitan ang pitch direction — mula full back papuntang full forward, walang dead stop',
    'Dalawang throttle punch — isa sa gitna ng Somersault, isa sa gitna ng Matty Flip',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Somersault' },
    { t: 1.0, label: 'Punch 1' },
    { t: 1.7, label: 'Transition' },
    { t: 2.1, label: 'Matty Flip' },
    { t: 2.8, label: 'Punch 2' },
    { t: 3.5, label: 'Recover' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — pitch back into backflip, throttle chop
    { t: 0.35, throttle: 0.30, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.25, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // PUNCH 1 — throttle blip at the inverted point of the backflip
    { t: 1.0,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.25, throttle: 0.55, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    // Finish backflip rotation, approaching upright
    { t: 1.5,  throttle: 0.50, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // TRANSITION — snap pitch direction from full back to full forward
    { t: 1.7,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.40, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // MATTY FLIP — pitch forward into forward flip
    { t: 2.1,  throttle: 0.35, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.32, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH 2 — throttle punch at the inverted point of the forward flip
    { t: 2.8,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.05, throttle: 0.78, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Recover — ease pitch to level
    { t: 3.3,  throttle: 0.68, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 3.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
