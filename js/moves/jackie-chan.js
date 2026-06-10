export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: '"Drone Kung Fu" combo — Boost → Forward Flip → Inverted Roll → Yaw Spin finish. Mabilis na sunod-sunod na flips at rolls na parang martial arts combo.',
  tips: [
    'Boost muna bago mag-flip — kailangan ng momentum para sa buong combo',
    'Habang inverted, agad mag-roll bago bumalik sa upright — walang habang-pause',
    'Tapusin nang may yaw spin habang papabalik sa level — mag-decelerate pagkatapos mag-spin',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Boost' },
    { t: 0.6, label: 'Flip Fwd' },
    { t: 1.1, label: 'Inv Roll' },
    { t: 1.7, label: 'Roll Out' },
    { t: 2.2, label: 'Yaw Spin' },
    { t: 3.0, label: 'Recover' },
  ],
  keyframes: [
    // Entry — cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.3,  throttle: 1.00, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 0.45, throttle: 0.90, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // Forward flip — pitch through to inverted
    { t: 0.6,  throttle: 0.78, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 0.85, throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — snap full roll while upside down
    { t: 1.1,  throttle: 0.40, yaw:  0.00, pitch:  0.20, roll:  1.00 },
    { t: 1.4,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out back to upright
    { t: 1.7,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 1.9,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW SPIN finish — sharp full rotation
    { t: 2.2,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.85, throttle: 0.60, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    // Recover — settle to cruise
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
