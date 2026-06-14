export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Front flip na sinusundan agad ng full roll bago pa makabalik sa upright — parehong direksyon ang dalawang rotation, kaya parang "kung-fu spin" ang tingnan. Kailangan ng tamang timing para hindi mag-overlap nang masakit sa mata ang dalawang input.',
  tips: [
    'Tapusin muna ang front flip rotation bago pasukin ang roll — huwag sabay-sabay',
    'Itong dalawang rotation ay parehong direksyon (forward tapos roll patungo sa parehong "daloy")',
    'Maintain throttle sa transition sa pagitan ng flip at roll — huwag bitawan',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Front Flip' },
    { t: 1.0, label: 'Transition' },
    { t: 1.3, label: 'Roll' },
    { t: 2.0, label: 'Recover' },
    { t: 2.5, label: 'Exit' },
  ],
  keyframes: [
    // Approach — moderate cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FRONT FLIP — full pitch forward snap, slight throttle boost into it
    { t: 0.35, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.85, throttle: 0.78, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // TRANSITION — pitch resolves to center as flip completes, brief settle
    { t: 1.0,  throttle: 0.55, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 1.15, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL — full roll snap immediately after, same flow direction
    { t: 1.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.55, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.8,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.85 },
    // RECOVER — roll resolves to upright, throttle climbs back
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.20 },
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level cruise
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
