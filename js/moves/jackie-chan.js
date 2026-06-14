export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Throttle punch na may hard pitch-back "eject", roll papunta sa inverted habang naka-lookback, dead stop, tapos inverted yaw spin bago mag-roll out pabalik sa upright. Combo na nagsasama ng eject, lookback, at yaw spin sa isang galaw.',
  tips: [
    'Ang eject ay dapat puro climb — full throttle + full pitch back, walang roll pa',
    'Maghintay ng tunay na dead stop bago simulan ang yaw spin — kontrolado ang spin kung mahinahon ang entry',
    'I-ease out ang yaw bago mag-roll out — biglaang stop ng yaw habang nag-ro-roll ay nagiging magulo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Eject' },
    { t: 1.0, label: 'Roll Inv' },
    { t: 1.5, label: 'Dead Stop' },
    { t: 2.0, label: 'Yaw Spin' },
    { t: 3.5, label: 'Spin End' },
    { t: 3.8, label: 'Roll Out' },
    { t: 4.3, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // EJECT — full throttle punch + hard pitch back, climbs straight up
    { t: 0.5,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.85, yaw:  0.00, pitch: -0.60, roll:  0.30 },
    // Roll to inverted while looking back at the takeoff point
    { t: 1.0,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.3,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, sticks centered, brief lookback pause
    { t: 1.5,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // INVERTED YAW SPIN — full yaw, hold altitude while inverted
    { t: 2.0,  throttle: 0.42, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.43, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.42, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    // Ease yaw out, still inverted
    { t: 3.5,  throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out back to upright
    { t: 3.8,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 4.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 4.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 4.6,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
