export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.8,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang magkasunod na forward pitch flip — somersault sinundan agad ng Matty Flip — sa iisang linya. Kumpletuhin ang unang 360° rotation bago mag-punch papasok sa pangalawang flip. Pagsubok ng back-to-back rotation timing at throttle control.',
  tips: [
    'Kumpletuhin muna ang unang flip nang tuluy-tuloy bago simulan ang pangalawa — huwag mag-overlap',
    'Maikli lang ang "reset" sa pagitan ng dalawang flip — level muna bago mag-punch ulit',
    'Ang throttle punch sa pangalawang flip (Matty Flip) ay mas malakas kaysa sa una',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Flip 1' },
    { t: 1.1, label: 'Reset' },
    { t: 1.4, label: 'Flip 2' },
    { t: 2.0, label: 'Punch' },
    { t: 2.5, label: 'Pull Out' },
    { t: 3.0, label: 'Recovery' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 1 — somersault, full pitch rotation
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.55, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Brief reset to level between flips
    { t: 1.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.25, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 2 — Matty Flip, pitch forward with throttle punch near inverted
    { t: 1.4,  throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.7,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.25, throttle: 0.80, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Pull out to level
    { t: 2.5,  throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.8,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
