export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang sunod-sunod na forward pitch flip — unang full somersault, tapos diretso sa Matty Flip na may throttle punch sa pangalawang inverted. Kailangan ng mahusay na throttle management para hindi mabigla sa dalawang flip.',
  tips: [
    'I-maintain ang sustained forward pitch sa buong dalawang flip — huwag bibitawan sa pagitan',
    'Bahagyang i-ease ang throttle sa unang somersault para makontrol ang rotation speed',
    'Ang throttle punch ay para lang sa pangalawang inverted (Matty Flip) — huwag mag-punch sa una',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Somersault' },
    { t: 0.95, label: 'Inverted 1' },
    { t: 1.5, label: 'Continue' },
    { t: 1.7, label: 'Punch' },
    { t: 2.2, label: 'Pull Out' },
    { t: 2.8, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — full forward pitch, ease throttle to control rotation speed
    { t: 0.35, throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted (top of the somersault) — sticks held, no punch yet
    { t: 0.95, throttle: 0.48, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Continue pitching forward — straight into the Matty Flip rotation
    { t: 1.2,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.60, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // MATTY PUNCH — full throttle at the second inverted to shoot through
    { t: 1.7,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.9,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Pull out toward level
    { t: 2.2,  throttle: 0.80, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 2.5,  throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
