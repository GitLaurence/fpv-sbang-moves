export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Kombinasyon ng Somer (backward half-loop papunta sa inverted) at Matty Flip (forward punch habang inverted). Pitch back para maabot ang inverted, i-dead stop, tapos Matty-style throttle punch + forward pitch para kumpleto ang buong rotation.',
  tips: [
    'Ang Somer phase ay pitch-back — huwag gamitin ang forward pitch hanggang sa inverted ka na',
    'Ang dead stop sa inverted ay mahalagang timing marker — sandali lang, bago ang Matty punch',
    'Ang Matty exit ay parehong direksyon ng entry — buong 360° ang kabuuang arc',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Pitch Back' },
    { t: 1.1, label: 'Somer Arc' },
    { t: 1.6, label: 'Inverted' },
    { t: 1.85, label: 'Dead Stop' },
    { t: 2.1, label: 'Matty Punch' },
    { t: 2.7, label: 'Pull Out' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — moderate forward speed
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMER phase — hard pitch back, nose up, climb into backward arc
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 0.7,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.80, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Approaching inverted — ease throttle
    { t: 1.4,  throttle: 0.38, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    // FULLY INVERTED — center sticks (dead stop), inverted hover
    { t: 1.62, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.82, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY PUNCH — throttle blip then full forward pitch
    { t: 2.05, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.3,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Past inverted, completing the arc toward level
    { t: 2.55, throttle: 0.80, yaw:  0.00, pitch:  0.65, roll:  0.00 },
    // Pull out to level
    { t: 2.78, throttle: 0.68, yaw:  0.00, pitch:  0.18, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
