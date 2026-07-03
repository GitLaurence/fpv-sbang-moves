export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Sunud-sunod na throttle chop-and-catch — parang tumatalbog ang drone sa pagitan ng "sahig" at "kisame". Extension ng Stall trick, pero dalawang beses ang bounce bago mag-recover.',
  tips: [
    'Bawat bounce ay dapat parehong lakas ng chop — consistent ang rhythm',
    'Huwag masyadong mataas ang catch throttle — sapat lang para bumalik pataas nang bahagya',
    'Panatilihing centered ang ibang sticks — ang throttle lang ang gumagalaw sa buong move',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Chop 1' },
    { t: 0.9, label: 'Bounce 1' },
    { t: 1.7, label: 'Chop 2' },
    { t: 2.2, label: 'Bounce 2' },
    { t: 3.2, label: 'Catch' },
    { t: 3.8, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CHOP 1 — instant zero
    { t: 0.4,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — small catch, not a full recovery
    { t: 0.9,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.15, throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CHOP 2 — second free-fall
    { t: 1.7,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.95, throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 2 — slightly stronger than bounce 1
    { t: 2.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.45, throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CATCH — final full-strength ramp to arrest the drop for good
    { t: 3.2,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to hover
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
