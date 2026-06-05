export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Somersault + Matty Flip hybrid — isang buong forward loop (somersault) na direktang nagtutuloy sa Matty Flip exit. Hindi ito dalawang hiwalay na trick kundi isang tuluy-tuloy na galaw: loop → inverted punch-through → parabolic exit.',
  tips: [
    'Huwag i-stop ang forward pitch sa loop — tuluy-tuloy lang hanggang sa Matty punch phase',
    'Ang throttle punch inverted ay susi — maaga = ordinary loop, tamang timing = SomerMatty',
    'Mag-practice ng Matty Flip nang maayos muna — ang SomerMatty ay Matty Flip na may dagdag na loop sa umpisa',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Fwd Loop' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.15, label: 'Punch' },
    { t: 1.8, label: 'Matty Out' },
    { t: 2.5, label: 'Recovery' },
  ],
  keyframes: [
    // Moderate speed approach
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.18, throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin forward loop — pitch forward continuously (the "somer" part)
    { t: 0.3,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted — nose going overhead
    { t: 0.8,  throttle: 0.88, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — transition to Matty punch
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.22, throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Passing through inverted — continue forward pitch toward level
    { t: 1.45, throttle: 0.82, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Matty-style pull-out arc
    { t: 1.7,  throttle: 0.70, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    { t: 1.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 2.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
