export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pagsasama ng backward somersault at Matty Flip — pitch back papuntang inverted (somersault), tapos agad na pitch forward papalabas (Matty) bago bumalik sa level flight. Kailangan ng maingat na throttle control sa bawat kalahati.',
  tips: [
    'Pitch back muna nang buo para sa somersault — huwag mag-roll, purong backward loop',
    'Sa pagitan ng dalawang kalahati, mag-chop ng throttle nang bahagya para hindi tumaas nang sobra',
    'Ang ikalawang kalahati ay pitch forward (Matty) — kabaligtaran ng direksyon kumpara sa una',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Pitch Back' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.3, label: 'Level' },
    { t: 1.6, label: 'Pitch Fwd' },
    { t: 2.2, label: 'Inv Punch' },
    { t: 2.6, label: 'Pull Out' },
    { t: 3.1, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — pitch back, throttle up into backward loop
    { t: 0.3,  throttle: 0.85, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.55, throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // INVERTED — top of the backward loop, ease throttle
    { t: 0.9,  throttle: 0.55, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.50, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    // Level out between the two halves — brief settle
    { t: 1.3,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.45, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY FLIP — pitch forward, building toward inverted
    { t: 1.6,  throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.9,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED PUNCH — full throttle through the second half
    { t: 2.2,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 2.4,  throttle: 0.90, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Pull out to level
    { t: 2.6,  throttle: 0.72, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    { t: 2.85, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.1,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
