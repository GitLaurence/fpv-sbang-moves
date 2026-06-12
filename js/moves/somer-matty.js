export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.8,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Backflip (somersault) papuntang inverted sa likod, tapos diretsong tumuloy sa Matty Flip pasulong — dalawang buong pitch loop sa kabaligtarang direksyon, sunod-sunod, walang pahinga sa pagitan.',
  tips: [
    'I-master muna ang Stall at Matty Flip nang hiwalay bago pagsamahin sa combo na ito',
    'Sa unang backflip, panatilihin ang throttle nang mas mataas para hindi mabawasan ng altitude',
    'Ang transition pabalik sa level pagkatapos ng backflip ay dapat mabilis bago agad simulan ang Matty Flip',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Backflip' },
    { t: 1.0, label: 'Inv (Back)' },
    { t: 1.3, label: 'Recover' },
    { t: 1.6, label: 'Matty Pitch' },
    { t: 2.2, label: 'Inv (Fwd)' },
    { t: 2.3, label: 'Punch' },
    { t: 2.9, label: 'Pull Out' },
    { t: 3.3, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Backflip — pitch back through a full loop
    { t: 0.3,  throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.90, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Recover to level after backflip
    { t: 1.3,  throttle: 0.70, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 1.45, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Matty Flip — pitch forward into a full forward loop
    { t: 1.6,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.95, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Throttle punch through inverted to finish the second loop
    { t: 2.2,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 2.45, throttle: 0.85, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Pull out to level
    { t: 2.7,  throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
