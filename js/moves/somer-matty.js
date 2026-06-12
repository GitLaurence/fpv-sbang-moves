export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang forward flip na sunod-sunod: unang isang dalisay na somersault (pitch flip, walang yaw), direktang chinain sa pangalawang flip na may dagdag na yaw spin — ang Matty Flip. Pro-level combo na nangangailangan ng tumpak na throttle timing sa bawat punch.',
  tips: [
    'Ang unang somersault ay dalisay na pitch flip — walang yaw, focus muna sa rotation speed',
    'I-chain agad ang pangalawang flip habang papabalik pa lang sa level — huwag hintayin ang buong recovery',
    'Idagdag ang yaw input sa pangalawang flip habang naka-punch ang throttle para sa Matty Flip spin',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Somersault' },
    { t: 1.0, label: 'Punch 1' },
    { t: 1.4, label: 'Matty Flip' },
    { t: 2.0, label: 'Punch+Yaw' },
    { t: 2.9, label: 'Recover' },
    { t: 3.8, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — pure forward pitch flip, no yaw
    { t: 0.4,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH 1 — throttle through first inversion
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.85, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // MATTY FLIP — chain immediately into second flip, yaw building in
    { t: 1.4,  throttle: 0.78, yaw:  0.50, pitch:  1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.85, yaw:  0.80, pitch:  1.00, roll:  0.00 },
    // PUNCH+YAW — throttle through second inversion with full yaw spin
    { t: 2.0,  throttle: 1.00, yaw:  1.00, pitch:  0.90, roll:  0.00 },
    { t: 2.3,  throttle: 0.85, yaw:  0.60, pitch:  0.50, roll:  0.00 },
    { t: 2.6,  throttle: 0.72, yaw:  0.20, pitch:  0.15, roll:  0.00 },
    // Recovery — yaw and pitch settle to zero
    { t: 2.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle back to cruise
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
