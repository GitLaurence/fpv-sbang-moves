export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na flip-to-roll combo na walang "dead stop" sa pagitan — direktang nag-roll habang papasok pa lang sa pull-out ng forward flip. Pinangalanan sa bilis at pagkaka-chain ng mga input, parang martial-arts combo.',
  tips: [
    'Walang pause sa pagitan ng flip at roll — direktang i-chain ang dalawang input',
    'Mag-punch ng throttle habang papasok sa inverted, bago agad mag-roll',
    'Mag-practice muna ng flip at roll nang hiwalay bago i-combo nang mabilis',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Flip' },
    { t: 0.8,  label: 'Punch' },
    { t: 0.95, label: 'Roll' },
    { t: 1.7,  label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP — snap pitch forward, throttle building
    { t: 0.3,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — throttle through inverted, pitch easing off
    { t: 0.8,  throttle: 1.00, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // ROLL — chained immediately, no dead stop
    { t: 0.95, throttle: 0.70, yaw:  0.00, pitch:  0.20, roll:  1.00 },
    { t: 1.2,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Completing the roll back to upright
    { t: 1.45, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 1.7,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
