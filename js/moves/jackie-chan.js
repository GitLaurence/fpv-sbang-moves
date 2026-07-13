export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Dalawang magkaibang acrobatics na pinagsama nang walang pahinga — front flip agad sinundan ng full roll sa parehong takbo, parang combo ng kickboxing. Bilis at flow ang laman ng trick na ito, hindi kalinisan ng bawat isang element.',
  tips: [
    'Huwag maghintay ng buong "settle" sa pagitan ng flip at roll — dapat magkadikit ang dalawang input',
    'Panatilihin ang throttle na medyo mataas sa buong combo para hindi mawalan ng altitude',
    'Mag-master muna ng hiwalay na front flip at roll bago pagsamahin sa combo na ito',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Flip' },
    { t: 0.8, label: 'Inverted' },
    { t: 1.2, label: 'Recover' },
    { t: 1.6, label: 'Roll' },
    { t: 2.1, label: 'Roll Out' },
    { t: 2.5, label: 'Settle' },
  ],
  keyframes: [
    // Entry — cruise
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Front flip — pitch forward into rotation
    { t: 0.3,  throttle: 0.78, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.55, throttle: 0.88, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — punch through
    { t: 0.8,  throttle: 0.95, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.80, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Recover to upright — brief settle, no full pause
    { t: 1.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll — immediately chained, no dead stop
    { t: 1.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.85, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out to upright
    { t: 2.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
