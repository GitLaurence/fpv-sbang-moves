export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na multi-axis combo: throttle punch → aggressive forward pitch snap → yaw snap habang nasa rotation → roll exit sa bagong direksyon. Ang snappy, mabilis na pagbabago ng heading ang nagbibigay ng "fighting style" na dating.',
  tips: [
    'Lahat ng inputs ay snap — walang gradual, kundi instant full deflection tapos biglang center',
    'Ang yaw snap ay habang nag-iikot pa ang quad — hindi pagkatapos ng flip kundi habang ongoing',
    'Mas maraming yaw = mas malaking pagbabago ng exit heading — i-practice ang timing',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Punch' },
    { t: 0.5,  label: 'Pitch Snap' },
    { t: 0.9,  label: 'Yaw Snap' },
    { t: 1.15, label: 'Roll Exit' },
    { t: 1.75, label: 'Upright' },
    { t: 2.3,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — moderate forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle punch — brief energy burst
    { t: 0.3,  throttle: 0.90, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Forward pitch snap — chop throttle, aggressive push forward
    { t: 0.5,  throttle: 0.27, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.72, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Yaw snap mid-rotation — snap to change exit heading
    { t: 0.9,  throttle: 0.27, yaw:  0.88, pitch:  0.45, roll:  0.00 },
    { t: 1.05, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll exit — snap roll to return upright in new heading
    { t: 1.2,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.48, throttle: 0.46, yaw:  0.00, pitch:  0.00, roll:  0.78 },
    { t: 1.7,  throttle: 0.56, yaw:  0.00, pitch:  0.00, roll:  0.18 },
    // Upright — throttle punch to recover
    { t: 1.88, throttle: 0.73, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.9,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
