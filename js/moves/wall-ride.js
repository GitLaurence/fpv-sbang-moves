export default {
  id: 'wall-ride',
  name: 'Wall Ride',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.6,
  youtubeId:    'JJ9W8wpwsxA',
  youtubeStart: 0,
  description: 'Roll papuntang 90° knife edge malapit sa isang building o wall, tapos mag-fly nang pasulong kahilera ng gilid nito bago mag-roll out. Ang pundasyon ng mga wall-related tricks — kailangan ng eksaktong distance at altitude control.',
  tips: [
    'Mag-commit sa 90° roll agad papuntang wall — huwag maging maingat sa deflection',
    'I-maintain ang forward pitch habang naka-knife-edge para manatiling parallel sa wall',
    'Mag-roll out palayo bago pa tuluyang mawalan ng momentum sa dulo ng structure',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll 90°' },
    { t: 0.9, label: 'Wall Hold' },
    { t: 2.4, label: 'Roll Away' },
    { t: 3.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — approach the wall line
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 0.3,  throttle: 0.68, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // Roll to 90° knife edge facing the wall
    { t: 0.4,  throttle: 0.72, yaw:  0.00, pitch:  0.15, roll:  0.78 },
    { t: 0.7,  throttle: 0.76, yaw:  0.00, pitch:  0.20, roll:  0.55 },
    // Wall hold — forward pitch maintains parallel travel, yaw keeps heading aligned
    { t: 0.9,  throttle: 0.82, yaw:  0.20, pitch:  0.35, roll:  0.00 },
    { t: 1.4,  throttle: 0.84, yaw:  0.22, pitch:  0.35, roll:  0.00 },
    { t: 1.9,  throttle: 0.82, yaw:  0.20, pitch:  0.35, roll:  0.00 },
    // Roll away from the wall back to upright
    { t: 2.4,  throttle: 0.72, yaw:  0.00, pitch:  0.20, roll: -0.70 },
    { t: 2.7,  throttle: 0.68, yaw:  0.00, pitch:  0.10, roll: -0.30 },
    // Recovery
    { t: 3.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
