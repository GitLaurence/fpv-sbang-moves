export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng Somersault (backflip) at Matty Flip — buong backward loop muna, tapos agad na susunod ng forward flip na may throttle punch habang inverted. Mahirap dahil sa pabaligtad na direksyon ng dalawang rotation na walang pahinga sa pagitan.',
  tips: [
    'Ang somersault ay PITCH BACKWARD (kabaligtad ng Matty Flip na pitch forward)',
    'Walang pahinga sa pagitan ng dalawang rotation — agad isunod ang Matty Flip pagkatapos ng somersault',
    'Mag-master muna ng Matty Flip nang hiwalay bago idagdag ang backflip entry',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Somersault' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.3, label: 'Loop Out' },
    { t: 1.7, label: 'Pitch Fwd' },
    { t: 2.3, label: 'Inverted' },
    { t: 2.5, label: 'Punch' },
    { t: 3.1, label: 'Pull Out' },
    { t: 3.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — pitch backward, ease throttle into the loop
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.48, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted — top of the backward loop
    { t: 0.9,  throttle: 0.44, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.48, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    // Loop out — complete the backward 360°, settle level
    { t: 1.3,  throttle: 0.62, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 1.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH FORWARD — begin Matty Flip immediately
    { t: 1.7,  throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 1.95, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted
    { t: 2.15, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — full throttle punch through (Matty Flip signature)
    { t: 2.3,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.5,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Past inverted, pitching back toward level
    { t: 2.75, throttle: 0.82, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Pull out to level
    { t: 3.0,  throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 3.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 3.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
