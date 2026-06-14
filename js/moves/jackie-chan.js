export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Forward pitch flip na may sabay na full roll — corkscrew na combo na umiikot sa dalawang axes nang sabay-sabay. Mas mahirap kontrolin ang orientation kaysa sa plain flip dahil dalawang channel ang gumagalaw.',
  tips: [
    'I-push ang pitch forward at roll sa parehong oras — kailangan sabay ang dalawang input para mag-corkscrew',
    'Panatilihin ang throttle medyo mataas habang umiikot para hindi mawalan ng altitude',
    'Mag-practice muna ng plain forward flip at roll nang hiwalay bago pagsamahin',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Flip+Roll' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.3, label: 'Continue' },
    { t: 1.8, label: 'Recover' },
    { t: 2.2, label: 'Exit' },
  ],
  keyframes: [
    // Entry — moderate forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Combo input — full pitch forward AND full roll begin together
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    { t: 0.55, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Inverted midpoint — both axes continuing through rotation
    { t: 0.9,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.1,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Continue rotation — past inverted, easing toward level
    { t: 1.3,  throttle: 0.78, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    { t: 1.55, throttle: 0.70, yaw:  0.00, pitch:  0.50, roll:  0.45 },
    // Recovery — both sticks easing back to center as rotation completes
    { t: 1.8,  throttle: 0.66, yaw:  0.00, pitch:  0.15, roll:  0.10 },
    { t: 2.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle to cruise
    { t: 2.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
