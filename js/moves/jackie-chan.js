export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal flip-roll combo — sabay na pitch at roll input para gumawa ng corkscrew rotation papunta sa inverted, tapos PUNCH throttle para lumipas sa diagonal. Mukhang flip at roll na pinagsama sa isang fluid na motion.',
  tips: [
    'Sabayan ang pitch at roll input — dapat magkasamang gumagalaw papunta sa diagonal inverted',
    'PUNCH throttle habang sa diagonal inverted point para makaraan nang mabilis',
    'Pantay ang exit rotation sa entry — kung 45° ang diagonal entry, 45° din ang exit roll-out',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Diagonal Flip' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.05, label: 'Punch' },
    { t: 1.55, label: 'Roll Out' },
    { t: 2.2,  label: 'Level' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal flip — pitch and roll together toward inverted diagonal
    { t: 0.35, throttle: 0.75, yaw:  0.00, pitch:  0.70, roll:  0.70 },
    { t: 0.6,  throttle: 0.85, yaw:  0.00, pitch:  0.90, roll:  0.90 },
    // Inverted diagonal — full deflection on both axes
    { t: 0.85, throttle: 0.95, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // PUNCH through the diagonal inverted point
    { t: 1.05, throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.85 },
    // Continue rotation back toward level
    { t: 1.3,  throttle: 0.85, yaw:  0.00, pitch:  0.50, roll:  0.50 },
    { t: 1.55, throttle: 0.72, yaw:  0.00, pitch:  0.15, roll:  0.15 },
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle back to cruise
    { t: 2.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
