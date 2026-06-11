export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang forward flip na magkasunod nang walang pause — unang somersault para makakuha ng rotation, tapos direktang Matty Flip throttle punch sa pangalawang pag-ikot. Pinaka-mahirap na chained-flip combo.',
  tips: [
    'Panatilihin ang pitch forward na naka-hold sa pagitan ng dalawang flips — huwag bumalik sa center',
    'Ang ikalawang throttle punch ang magdadala sa exit — mas malakas dapat kaysa sa una',
    'Mag-master muna ng solong Matty Flip bago subukan ang dobleng pag-ikot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Somer 1' },
    { t: 1.2, label: 'Chain' },
    { t: 1.6, label: 'Matty 2' },
    { t: 2.4, label: 'Punch' },
    { t: 3.0, label: 'Pull Out' },
    { t: 3.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // First flip (somersault) — pitch forward, throttle dips going inverted
    { t: 0.4,  throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Continuing through inverted — small punch to keep rotation going
    { t: 1.0,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Chain — hold pitch forward, no center pause, ease throttle for second flip
    { t: 1.2,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.42, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Second flip (Matty Flip) — approaching inverted again
    { t: 1.6,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.15, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle to shoot through and complete the second rotation
    { t: 2.4,  throttle: 1.00, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 2.65, throttle: 0.95, yaw:  0.00, pitch:  0.65, roll:  0.00 },
    // Pull out to level — ease throttle and pitch
    { t: 3.0,  throttle: 0.75, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    { t: 3.3,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.8,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
