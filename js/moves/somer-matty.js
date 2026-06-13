export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo move — full backflip somersault (pitch back na buong loop), tapos diretsong sundan ng Matty Flip (pitch forward na flip na may throttle punch habang inverted). Dalawang flip sa magkasalungat na direksyon nang sunod-sunod, kailangan ng mabilis na transition sa pagitan.',
  tips: [
    'Mag-master muna ng backflip somersault at Matty Flip nang hiwalay bago pagsamahin',
    'Ang transition sa pagitan ng dalawang flip ay dapat maikli — center ang sticks saglit bago agad mag-Matty Flip',
    'Bantayan ang altitude — dalawang flip pababa-pataas, kaya mas mataas ang entry altitude na kailangan',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pitch Back' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.8, label: 'Recover 1' },
    { t: 2.0, label: 'Pitch Fwd' },
    { t: 2.7, label: 'Punch' },
    { t: 3.35, label: 'Pull Out' },
    { t: 4.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault — pull back into a backflip
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.65, throttle: 0.50, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.48, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted point of the somersault — re-establish lift
    { t: 1.0,  throttle: 0.55, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.60, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Recover to level — backflip complete
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Matty Flip — pitch forward into the second flip
    { t: 2.0,  throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 2.25, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — throttle punch through
    { t: 2.7,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.9,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 3.1,  throttle: 0.82, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Pull out to level
    { t: 3.35, throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 3.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 4.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
