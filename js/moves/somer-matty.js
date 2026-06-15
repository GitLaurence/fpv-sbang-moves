export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng dalawang full flips sa magkasalungat na direksyon — Somersault (pitch back, backflip) kaagad sinusundan ng Matty Flip (pitch forward, throttle punch habang inverted). Kailangan ng mabilis na recovery sa pagitan ng dalawang rotations.',
  tips: [
    'Ang backflip muna — full pitch back, walang throttle cut, hayaang umikot ang quad',
    'Pagkatapos bumalik sa upright mula sa backflip, kaagad mag-Matty Flip sa kabilang direksyon',
    'Mag-throttle punch habang inverted sa Matty Flip portion para hindi mawalan ng altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Somersault' },
    { t: 1.3, label: 'Recover 1' },
    { t: 1.8, label: 'Pitch Fwd' },
    { t: 2.7, label: 'Punch' },
    { t: 3.4, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — full pitch back, backflip loop
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.65, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.05, throttle: 0.68, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Coming back upright from backflip
    { t: 1.3,  throttle: 0.66, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 1.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Brief recover before second flip
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY FLIP — push pitch forward, building toward inverted
    { t: 2.1,  throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 2.4,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — full throttle punch to shoot through
    { t: 2.7,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.9,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Pull out to level
    { t: 3.1,  throttle: 0.80, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 3.4,  throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Recovery — settle
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
