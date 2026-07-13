export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.2,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Kumbinasyon ng somersault (buong forward flip) direkta sa Matty Flip — dalawang magkasunod na forward rotation na halos walang recovery sa gitna. Kailangan ng eksaktong throttle timing para hindi mawalan ng altitude sa dalawang magkasunod na pag-ikot.',
  tips: [
    'Kumpletuhin ang unang somersault bago pumasok sa Matty Flip — pero panatilihing maigsi ang pagitan',
    'I-punch ang throttle sa bawat inverted point ng dalawang flip para mapanatili ang bilis at altitude',
    'Mag-master muna ng Matty Flip nang mag-isa bago idagdag ang unang somersault sa harap',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Somer Fwd' },
    { t: 0.85, label: 'Inverted 1' },
    { t: 1.25, label: 'Recover' },
    { t: 1.5, label: 'Matty Fwd' },
    { t: 2.0, label: 'Inverted 2' },
    { t: 2.4, label: 'Punch' },
    { t: 2.9, label: 'Pull Out' },
    { t: 3.4, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault — pitch forward into first flip
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 0.55, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted 1 — full throttle punch through
    { t: 0.85, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.05, throttle: 0.85, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Recover — brief level before second flip, minimal pause
    { t: 1.25, throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 1.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Matty Flip — pitch forward into second flip
    { t: 1.5,  throttle: 0.75, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 1.75, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted 2 — full throttle punch
    { t: 2.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.2,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 2.4,  throttle: 0.82, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Pull out to level
    { t: 2.65, throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 2.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
