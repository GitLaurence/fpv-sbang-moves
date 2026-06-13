export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Diagonal flip — pinagsamang forward pitch flip (somersault) at roll na sabay na sabay, kaya parang umiikot ang quad sa isang diagonal axis. Mas mataas ang difficulty kaysa Matty Flip dahil dalawang axis ang kontrolado mo nang sabay.',
  tips: [
    'Sabay na PUSH ang pitch forward at roll — hindi sunod-sunod, kundi parehas na input',
    'PUNCH ang throttle habang malapit nang fully inverted para makatawid sa diagonal flip',
    'I-center ang pitch at roll nang sabay sa exit — huwag iwanan ang isa habang naka-center na ang isa',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Flip+Roll' },
    { t: 0.9, label: 'Diagonal Inv' },
    { t: 1.1, label: 'Punch' },
    { t: 1.65, label: 'Pull Out' },
    { t: 2.3, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — moderate speed and altitude
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin diagonal flip — pitch and roll pushed together
    { t: 0.4,  throttle: 0.72, yaw:  0.00, pitch:  1.00, roll:  0.60 },
    { t: 0.65, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.80 },
    // Diagonal inverted — both axes near full deflection
    { t: 0.9,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // PUNCH through — full throttle to carry through the diagonal axis
    { t: 1.1,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  1.00 },
    { t: 1.35, throttle: 0.85, yaw:  0.00, pitch:  0.55, roll:  0.70 },
    // Pull out — ease both pitch and roll back toward center together
    { t: 1.65, throttle: 0.70, yaw:  0.00, pitch:  0.20, roll:  0.30 },
    { t: 1.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 2.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
