export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Roll papuntang inverted, tapos buong flat yaw spin habang nakabaligtad, at magtatapos sa pitch flip pabalik sa upright na may throttle punch — kumbinasyon ng tatlong skills sa iisang flow.',
  tips: [
    'Mag-dead stop muna sa inverted bago simulan ang yaw spin',
    'Constant ang yaw rate habang umiikot — huwag mag-iba ang ibang channel',
    'Ang pitch flip pabalik ay kasabay ng throttle punch para mabilis bumalik sa upright',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Inv' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.4, label: 'Yaw Spin' },
    { t: 2.6, label: 'Spin Out' },
    { t: 3.0, label: 'Flip' },
    { t: 3.6, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.4,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — inverted, sticks centered
    { t: 0.9,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flat yaw spin while inverted — full yaw, hold
    { t: 1.4,  throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.32, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Spin out — ease yaw back to center
    { t: 2.85, throttle: 0.32, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip pabalik to upright — throttle punch + pitch
    { t: 3.2,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.90, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Recover — settle to level
    { t: 3.6,  throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
