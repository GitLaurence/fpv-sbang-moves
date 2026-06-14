export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Forward pitch flip na may matalas na yaw "kick" sa gitna ng rotation habang inverted — parang martial arts kick na idinagdag sa kalagitnaan ng flip, kaya ang pangalan.',
  tips: [
    'Ipasok ang yaw kick eksaktong sa apex (fully inverted) ng pitch flip — masyadong maaga o huli ay hindi magiging clean',
    'Panatilihin ang pitch input habang gumagawa ng yaw kick — huwag i-release pareho nang sabay',
    'Maikli at matalas ang yaw input — full deflection pero agad ibalik sa center',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Pitch Flip' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.0,  label: 'Yaw Kick' },
    { t: 1.4,  label: 'Continue Flip' },
    { t: 1.85, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward into the flip
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.85, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Yaw kick — sharp yaw snap at the inverted apex while pitch is held
    { t: 1.0,  throttle: 0.80, yaw:  1.00, pitch:  1.00, roll:  0.00 },
    { t: 1.15, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Continue the pitch rotation back to level
    { t: 1.4,  throttle: 0.75, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 1.65, throttle: 0.68, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
