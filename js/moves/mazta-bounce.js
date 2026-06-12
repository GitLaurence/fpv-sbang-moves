export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.8,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Mabilis na pitch oscillations na gumagawa ng "bouncing ball" effect — paulit-ulit na pitch up tapos pitch down, may throttle pulse sa bawat bounce, parang tumatalbog ang drone sa hangin.',
  tips: [
    'Maikli at paulit-ulit ang pitch input — hindi malalim, parang rhythm ng bola na tumatalbog',
    'I-sync ang throttle pulse sa bawat pitch-down para magbigay ng "lift" sa bounce',
    'Manatiling level ang heading — ang bounce ay dapat purong pitch oscillation, walang roll/yaw drift',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Bounce 1' },
    { t: 0.9, label: 'Bounce 2' },
    { t: 1.5, label: 'Bounce 3' },
    { t: 2.1, label: 'Bounce 4' },
    { t: 2.7, label: 'Settle' },
    { t: 3.2, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — pitch up then snap down with throttle pulse
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    { t: 0.45, throttle: 0.85, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    { t: 0.6,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 2
    { t: 0.9,  throttle: 0.60, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    { t: 1.05, throttle: 0.85, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    { t: 1.2,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 3
    { t: 1.5,  throttle: 0.60, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    { t: 1.65, throttle: 0.85, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    { t: 1.8,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 4 — slightly bigger to finish the rhythm
    { t: 2.1,  throttle: 0.58, yaw:  0.00, pitch: -0.65, roll:  0.00 },
    { t: 2.25, throttle: 0.88, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 2.4,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle — ease oscillation back to level
    { t: 2.7,  throttle: 0.66, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
