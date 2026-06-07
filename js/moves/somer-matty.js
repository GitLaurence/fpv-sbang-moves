export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang magkasunod na forward flip — somersault (buong 360° pitch forward) na direktang sinusundan ng Matty Flip. Kailangang maging tuluy-tuloy at fluid ang dalawang flip para magmukhang isang galaw.',
  tips: [
    'Ang dalawang flip ay dapat tuluy-tuloy — walang pahinga o hesitasyon sa pagitan',
    'Punch throttle nang malakas sa bawat inverted na punto para mapanatili ang altitude',
    'Mas mahirap ang pangalawang flip — siguraduhing may sapat na altitude para sa exit',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: '1st Flip' },
    { t: 0.9, label: 'Inv 1' },
    { t: 1.5, label: '2nd Flip' },
    { t: 2.1, label: 'Inv 2' },
    { t: 2.7, label: 'Pull Out' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // First flip — pitch forward continuously
    { t: 0.30, throttle: 0.72, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 0.55, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.80, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted 1 — full throttle punch
    { t: 0.92, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.10, throttle: 0.95, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 1.30, throttle: 0.80, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // Carry pitch momentum straight into the second flip
    { t: 1.45, throttle: 0.76, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 1.70, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.95, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted 2 — full throttle again
    { t: 2.10, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.28, throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Pull out — ease pitch back to level
    { t: 2.50, throttle: 0.82, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    { t: 2.70, throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.90, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.30, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.80, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.50, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.00, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
