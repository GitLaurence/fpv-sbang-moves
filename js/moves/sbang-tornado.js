export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang na may kasamang Tornado — Boost → Roll inverted → Dead stop → Full 360° yaw spin habang inverted ("Tornado") → Split-S pull-through → Juicy Flick. Ang pinaka-complex na variation ng Sbang style.',
  tips: [
    'Ang Tornado yaw spin ay controlled — full yaw input ngunit mahigpit ang throttle para manatiling level inverted',
    'Mag-complete ng buong 360° bago mag-initiate ng Split-S — huwag mag-rush sa labas ng tornado',
    'Ang exit velocity ay mababa pagkatapos ng tornado — mag-punch nang malakas para makuha ang enerya pabalik',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.5, label: 'Tornado' },
    { t: 3.5, label: 'Stop Yaw' },
    { t: 3.8, label: 'Pull S' },
    { t: 4.8, label: 'Juicy' },
    { t: 5.6, label: 'Roll Out' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, all sticks center
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.42, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — full yaw spin while inverted (elevated throttle holds altitude)
    { t: 1.5,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.72, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.1,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — complete the full 360°
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.65, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S PULL — pitch back arc through bottom half-loop
    { t: 3.8,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.15, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 4.5,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Recover level
    { t: 4.72, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap to inverted
    { t: 4.85, throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.18, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll back to upright
    { t: 5.3,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 5.55, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 5.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 5.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
