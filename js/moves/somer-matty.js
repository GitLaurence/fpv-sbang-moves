export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng Somersault (backward loop) papuntang Matty Flip (forward loop) — dalawang full loop sa magkasalungat na direksyon, walang pause sa pagitan. Kailangan ng tamang timing ng throttle punch sa bawat loop.',
  tips: [
    'Pitch back nang buo para sa Somersault — full throttle punch papuntang itaas',
    'Sa tuktok ng unang loop, mabilis na i-switch ang pitch papuntang forward para sa Matty Flip',
    'Mag-punch ulit ng throttle habang inverted sa pangalawang loop para sa malinis na pull-through',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Somersault' },
    { t: 1.1, label: 'Inverted' },
    { t: 1.4, label: 'Transition' },
    { t: 1.8, label: 'Matty Flip' },
    { t: 2.4, label: 'Punch' },
    { t: 2.9, label: 'Pull Out' },
    { t: 3.4, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — full pitch back with throttle punch, looping backward
    { t: 0.3,  throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.90, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.75, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Inverted at top of loop — center pitch briefly
    { t: 1.1,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY FLIP — switch to full pitch forward, building into the second loop
    { t: 1.6,  throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.8,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle while inverted to shoot through the second loop
    { t: 2.1,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.85, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Pull out to level — ease throttle
    { t: 2.7,  throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
