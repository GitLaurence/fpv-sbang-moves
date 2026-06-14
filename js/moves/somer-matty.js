export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang forward flip nang sunod-sunod — ordinaryong somersault pagkatapos diretsong sumabay ng Matty Flip bago tuluyang mag-recover. Kailangan ng tamang timing ng throttle sa bawat inverted pass para hindi mawalan ng altitude.',
  tips: [
    'Ang unang flip ay smooth, controlled pitch forward — hindi pa kailangan ng punch',
    'Sa pangalawang flip (Matty), mag-punch ng throttle habang inverted para hindi bumaba',
    'Panatilihing magkapareho ang rate ng dalawang flip — magkasunod dapat ang rhythm',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Flip 1' },
    { t: 0.75, label: 'Inverted 1' },
    { t: 1.05, label: 'Recover 1' },
    { t: 1.35, label: 'Flip 2' },
    { t: 1.8, label: 'Inverted 2' },
    { t: 2.0, label: 'Punch' },
    { t: 2.6, label: 'Pull Out' },
    { t: 3.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 1 — smooth controlled forward pitch, no punch yet
    { t: 0.3,  throttle: 0.68, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.55, throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted on first flip — hold pitch through
    { t: 0.75, throttle: 0.65, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.65, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // Recover briefly to level before second flip
    { t: 1.05, throttle: 0.66, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    { t: 1.2,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 2 (Matty) — aggressive forward pitch
    { t: 1.35, throttle: 0.74, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.6,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted 2 — approaching inverted
    { t: 1.8,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle while inverted to shoot through
    { t: 2.0,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 2.2,  throttle: 1.00, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Pull out to level
    { t: 2.45, throttle: 0.78, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 2.65, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
