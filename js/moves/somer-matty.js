export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 2.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng full forward somersault (360° pitch flip) na direktang chinain sa Matty Flip — ikalawang forward rotation na may throttle punch habang inverted. Double front-flip na nangangailangan ng tamang timing sa pagitan ng dalawang rotation.',
  tips: [
    'Sa unang somersault, throttle cut habang umiikot para hindi tumaas ang altitude',
    'Direktang ichain ang ikalawang flip — walang pause sa pagitan ng dalawang rotation',
    'Ang throttle punch sa Matty Flip phase ang tutulong para makaramdam ng momentum papunta sa exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Somersault' },
    { t: 1.0, label: 'Chain' },
    { t: 1.4, label: 'Punch' },
    { t: 1.85, label: 'Pull Out' },
    { t: 2.5, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — full forward flip, throttle cut during rotation
    { t: 0.3,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.8,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // CHAIN directly into Matty Flip — pitch continues forward, throttle ramps up
    { t: 1.0,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle while inverted on second rotation
    { t: 1.4,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 1.6,  throttle: 0.85, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Pull out to level
    { t: 1.85, throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 2.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
