export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature move ni HeadMazta — mabilis na throttle punch papataas, sundan ng matalas na pitch-forward dive, tapos ulitin nang tatlong beses. Parang tumatalbog ang drone sa hangin habang patuloy sa forward momentum.',
  tips: [
    'Ang bounce ay galing sa throttle, hindi sa pitch — full punch tapos chop, ulit-ulit',
    'Magdagdag ng pitch forward sa bawat dive para hindi mawala ang forward momentum',
    'I-time ang bawat bounce nang pareho ang rhythm — consistency ang susi ng signature look',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Bounce 1' },
    { t: 0.9, label: 'Dive 1' },
    { t: 1.4, label: 'Bounce 2' },
    { t: 2.0, label: 'Dive 2' },
    { t: 2.5, label: 'Bounce 3' },
    { t: 3.1, label: 'Dive 3' },
    { t: 3.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — throttle punch
    { t: 0.3,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE 1 — chop throttle, pitch forward
    { t: 0.6,  throttle: 0.25, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 0.9,  throttle: 0.28, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 1.2,  throttle: 0.50, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // BOUNCE 2 — throttle punch
    { t: 1.4,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE 2
    { t: 1.7,  throttle: 0.25, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 2.0,  throttle: 0.28, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 2.3,  throttle: 0.50, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // BOUNCE 3 — throttle punch
    { t: 2.5,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE 3
    { t: 2.8,  throttle: 0.25, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 3.1,  throttle: 0.30, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 3.4,  throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.6,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
