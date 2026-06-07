export default {
  id: 'tracking-front-flip',
  name: 'Tracking Front Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.5,
  youtubeId:    'th4Y8HVnG4Q',
  youtubeStart: 0,
  description: 'Forward pitch flip habang sinusubaybayan ang isang paksa — tuluy-tuloy na pitch forward sa buong 360°, punch throttle sa inverted na posisyon, at lalabas sa parehong direksyon. Kapaki-pakinabang para sa cinematic shots.',
  tips: [
    'PUSH pitch forward (hindi pull) — ito ay forward flip, hindi backflip',
    'Punch throttle habang papunta sa inverted — huwag hintayin ang fully inverted bago mag-punch',
    'Panatilihin ang tracking ng paksa sa buong flip — ang mata ay dapat nasa paksa palagi',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.0, label: 'Punch' },
    { t: 1.6, label: 'Pull Out' },
    { t: 2.2, label: 'Recovery' },
  ],
  keyframes: [
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Push pitch forward to initiate forward flip
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.55, throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.80, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — throttle punch through
    { t: 0.95, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.15, throttle: 1.00, yaw:  0.00, pitch:  0.88, roll:  0.00 },
    // Past inverted, easing pitch toward level
    { t: 1.38, throttle: 0.82, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 1.62, throttle: 0.70, yaw:  0.00, pitch:  0.12, roll:  0.00 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
