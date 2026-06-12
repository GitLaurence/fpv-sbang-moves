export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Double throttle chop-and-catch — parang stall pero mas mabilis at dalawang beses ang "bounce" bago bumalik sa level flight. Gamitin ang quick wrist flicks sa throttle stick.',
  tips: [
    'Bawat bounce ay mabilis na chop-catch — huwag idiin nang matagal ang throttle cut',
    'Ang pangalawang bounce ay mas maikli kaysa una — papaliit ang amplitude',
    'Panatilihing centered ang pitch at roll sticks — ang throttle lang ang gumagalaw',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Bounce 1' },
    { t: 1.1, label: 'Catch 1' },
    { t: 1.6, label: 'Bounce 2' },
    { t: 2.2, label: 'Catch 2' },
    { t: 2.7, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — sudden chop
    { t: 0.3,  throttle: 0.06, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.55, throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.85, throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CATCH 1 — punch to arrest fall
    { t: 1.1,  throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.45, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 2 — smaller, quicker chop
    { t: 1.6,  throttle: 0.12, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.85, throttle: 0.10, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CATCH 2 — softer punch, settle to level
    { t: 2.2,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — level cruise
    { t: 2.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
