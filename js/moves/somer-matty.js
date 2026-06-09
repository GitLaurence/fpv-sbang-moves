export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Kombinasyon ng somersault (buong 360° forward flip) at Matty Flip — buong pag-ikot muna, tapos sa pangalawang inverted phase, i-punch ang throttle para dumaan nang baligtad tulad ng Matty. Nangangailangan ng maingat na throttle timing sa dalawang inverted phase.',
  tips: [
    'Ang unang inverted (somersault) ay walang throttle punch — hayaan lang itong dumaan',
    'Ang pangalawang inverted (Matty phase) ay saka ka mag-punch — doon ang pagkakaiba',
    'Panatilihing tuloy-tuloy ang pitch forward sa buong maneuver — huwag mag-relax',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.3,  label: 'Pitch Fwd' },
    { t: 0.8,  label: '1st Inv' },
    { t: 1.15, label: 'Continue' },
    { t: 1.65, label: '2nd Inv' },
    { t: 1.75, label: 'Punch' },
    { t: 2.3,  label: 'Pull Out' },
    { t: 2.8,  label: 'Recovery' },
  ],
  keyframes: [
    // Approach — moderate speed
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Forward pitch — begin somersault rotation
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 0.55, throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // First inverted (somersault phase) — NO throttle punch, keep rotating
    { t: 0.8,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.72, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Back upright briefly, continue pitch momentum
    { t: 1.3,  throttle: 0.68, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Second inverted (Matty phase) — NOW punch throttle hard
    { t: 1.6,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.75, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.95, throttle: 1.00, yaw:  0.00, pitch:  0.88, roll:  0.00 },
    // Pull out — ease pitch, manage throttle
    { t: 2.2,  throttle: 0.80, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 2.5,  throttle: 0.68, yaw:  0.00, pitch:  0.12, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
