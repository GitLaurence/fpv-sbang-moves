export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Dalawang magkasunod na forward flip na may sharp yaw kick sa pagitan — dynamic at acrobatic na combo na nangangailangan ng tamang timing sa pitch at yaw bago mag-roll out pabalik sa upright.',
  tips: [
    'I-time ang yaw kick sa pagitan ng dalawang flips — dapat mabilis at sharp, hindi gradual',
    'Panatilihing magkapareho ang intensity ng dalawang flips para sa symmetrical na look',
    'Mag-practice muna ng iisang flip at yaw kick nang hiwalay bago pagsamahin sa combo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Flip 1' },
    { t: 1.3, label: 'Yaw Kick' },
    { t: 1.7, label: 'Flip 2' },
    { t: 2.7, label: 'Roll Out' },
    { t: 3.2, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 1 — full pitch forward loop, ease throttle
    { t: 0.3,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.50, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 1.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW KICK — sharp full yaw snap then back to center
    { t: 1.45, throttle: 0.60, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 2 — second forward loop
    { t: 1.7,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.05, throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.50, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL OUT — settle back to upright cruise
    { t: 2.9,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.1,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 3.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
