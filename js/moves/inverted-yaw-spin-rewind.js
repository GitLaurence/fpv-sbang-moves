export default {
  id: 'inverted-yaw-spin-rewind',
  name: 'Inverted Yaw Spin Rewind',
  level: 'pro',
  difficulty: 5,
  durationSec: 7.0,
  youtubeId:    'T7uEolLo_9c',
  youtubeStart: 0,
  description: 'Inverted Yaw Spin na sinusundan ng instant na reverse spin — pagkatapos ng buong 360° yaw inverted, biglaang binabaligtad ang direksyon ng spin para sa rewind effect bago mag-flip pabalik sa upright. Ultra-satisfying na tingnan.',
  tips: [
    'Ang pause sa pagitan ng forward at reverse spin ay kritikal — ilang frames lang bago mag-rewind',
    'Parehong throttle level sa parehong spin phases — consistency ang susi sa level altitude',
    'Mag-ensure ng tamang oryentasyon bago mag-exit flip — malaman kung saan ka nakaharap',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Flip Inv' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.3, label: 'Fwd Spin' },
    { t: 3.1, label: 'Stop' },
    { t: 3.5, label: 'Rev Spin' },
    { t: 5.3, label: 'Stop Yaw' },
    { t: 5.7, label: 'Flip Up' },
    { t: 6.2, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.35, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip to inverted — pitch snap forward, throttle cut
    { t: 0.5,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.72, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — re-establish throttle
    { t: 0.95, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.15, throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Forward yaw spin (clockwise)
    { t: 1.3,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Brief stop before rewind
    { t: 3.1,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND — reverse yaw spin (counter-clockwise)
    { t: 3.5,  throttle: 0.68, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.70, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.68, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.70, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center sticks
    { t: 5.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright — pitch snap
    { t: 5.65, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.88, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Back upright — throttle punch to catch altitude loss
    { t: 6.1,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 7.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
