export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang sunod-sunod na forward pitch flip — unang somersault na walang throttle punch, tapos pagkatapos ay isang Matty Flip na may full throttle punch habang inverted. Mataas na demand sa throttle timing.',
  tips: [
    'Sa unang flip (somersault), panatilihing steady ang throttle — walang punch, dahan-dahan lang ang rotation',
    'Pagkatapos ng unang flip, mag-level muna saglit bago simulan ang pangalawa',
    'Sa pangalawang flip (Matty), mag-punch ng throttle habang inverted para mabilis na makalipas pababa',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Somersault' },
    { t: 0.95, label: 'Inverted 1' },
    { t: 1.4, label: 'Level' },
    { t: 1.6, label: 'Matty Flip' },
    { t: 2.1, label: 'Punch' },
    { t: 2.75, label: 'Pull Out' },
    { t: 3.4, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — steady forward pitch flip, no throttle punch
    { t: 0.4,  throttle: 0.60, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.58, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted apex — continue steady rotation
    { t: 0.95, throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.58, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Level — brief pause between flips
    { t: 1.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY FLIP — push pitch forward again, building toward inverted
    { t: 1.6,  throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 1.85, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle while inverted to shoot through
    { t: 2.1,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.3,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Pull out to level
    { t: 2.55, throttle: 0.82, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 2.75, throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 2.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
