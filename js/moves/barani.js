export default {
  id: 'barani',
  name: 'Barani',
  level: 'advanced',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Forward flip na may kalakip na half-roll twist sa kalagitnaan ng rotation — parang Matty Flip na may "twist", pagsasama ng pitch at roll axes sa iisang smooth na rotation.',
  tips: [
    'Magsimula tulad ng normal forward flip — pitch forward muna bago idagdag ang roll',
    'I-time ang roll twist papunta sa inverted point para makumpleto bago ang pull out',
    'Mag-master muna ng Matty Flip at simpleng roll nang hiwalay bago pagsamahin',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.55, label: 'Twist' },
    { t: 1.05, label: 'Inverted' },
    { t: 1.3, label: 'Roll Out' },
    { t: 1.8, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward — begin the flip like a Matty Flip
    { t: 0.3,  throttle: 0.74, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Twist — add full roll while pitch holds, blending the two axes
    { t: 0.55, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.40 },
    { t: 0.8,  throttle: 0.84, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Inverted — roll twist complete, still carrying pitch rotation
    { t: 1.05, throttle: 0.86, yaw:  0.00, pitch:  0.85, roll:  1.00 },
    // Roll Out — ease roll back to center, continue pitch toward exit
    { t: 1.3,  throttle: 0.85, yaw:  0.00, pitch:  0.55, roll:  0.50 },
    { t: 1.55, throttle: 0.78, yaw:  0.00, pitch:  0.25, roll:  0.00 },
    // Recovery — level out
    { t: 1.8,  throttle: 0.70, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 2.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
