export default {
  id: 'pendulum',
  name: 'Pendulum',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    'l7F1a68G9r8',
  youtubeStart: 0,
  description: 'Bagong trick mula kay headmazta — paswing pabalik-balik tulad ng pendulum. I-cut ang throttle papunta sa isang dive na may roll bank, tapos i-punch papataas pabalik sa center, paulit-ulit sa kabilang direksyon.',
  tips: [
    'I-cut ang throttle nang sabay ng pitch forward dip sa simula ng bawat swing — parang hinahagis ang quad pababa',
    'Mag-alternate ng roll bank — kaliwa sa unang swing, kanan sa pangalawa — para sa tunay na pendulum feel',
    'Smooth at tuloy-tuloy ang oscillation — iwasan ang sudden stop sa apex ng bawat swing',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Swing Down L' },
    { t: 1.2, label: 'Swing Up L' },
    { t: 1.8, label: 'Apex' },
    { t: 2.1, label: 'Swing Down R' },
    { t: 3.0, label: 'Swing Up R' },
    { t: 3.6, label: 'Apex' },
    { t: 4.2, label: 'Settle' },
    { t: 5.0, label: 'Exit' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Swing 1 — cut throttle, pitch forward dip, bank left
    { t: 0.3,  throttle: 0.25, yaw:  0.00, pitch:  0.55, roll: -0.45 },
    { t: 0.7,  throttle: 0.30, yaw:  0.00, pitch:  0.55, roll: -0.45 },
    // Bottom of swing 1 — punch throttle, pitch back to climb out
    { t: 1.0,  throttle: 0.75, yaw:  0.00, pitch: -0.40, roll: -0.30 },
    { t: 1.2,  throttle: 0.85, yaw:  0.00, pitch: -0.55, roll: -0.15 },
    // Apex 1 — momentary center
    { t: 1.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Swing 2 — mirror, bank right
    { t: 2.1,  throttle: 0.25, yaw:  0.00, pitch:  0.55, roll:  0.45 },
    { t: 2.5,  throttle: 0.30, yaw:  0.00, pitch:  0.55, roll:  0.45 },
    // Bottom of swing 2 — punch throttle, climb out
    { t: 2.8,  throttle: 0.75, yaw:  0.00, pitch: -0.40, roll:  0.30 },
    { t: 3.0,  throttle: 0.85, yaw:  0.00, pitch: -0.55, roll:  0.15 },
    // Apex 2 — center
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle / exit
    { t: 4.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
