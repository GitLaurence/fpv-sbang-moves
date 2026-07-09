export default {
  id: 'reverse-orbit',
  name: 'Reverse Orbit',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.8,
  youtubeId:    'o_MqTly9mIg',
  youtubeStart: 0,
  description: 'Umikot sa paligid ng isang subject habang nakaharap paatras (reverse) — pinagsasama ang bank roll, yaw at reverse pitch para mapanatili ang circular na landas habang paurong ang oryentasyon. Mas mahirap kontrolin dahil baligtad ang instinct kumpara sa forward-facing orbit.',
  tips: [
    'Panatilihing steady ang bank roll sa buong orbit — ito ang nagpapanatili ng radius papalibot sa subject',
    'Ang reverse pitch ay dapat pare-pareho — huwag hayaang mag-vary para hindi ma-loss ang circular path',
    'I-anticipate ang yaw rate — mas mabilis ang kailangan kumpara sa forward orbit dahil sa baligtad na oryentasyon',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Bank In' },
    { t: 1.1, label: 'Reverse' },
    { t: 1.6, label: 'Orbit' },
    { t: 3.7, label: 'Unwind' },
    { t: 4.3, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 0.3,  throttle: 0.66, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Bank into the orbit — roll and yaw begin together
    { t: 0.5,  throttle: 0.68, yaw:  0.45, pitch:  0.05, roll:  0.55 },
    { t: 0.85, throttle: 0.70, yaw:  0.55, pitch: -0.10, roll:  0.60 },
    // Flip to reverse-facing orientation, still banked
    { t: 1.1,  throttle: 0.72, yaw:  0.60, pitch: -0.45, roll:  0.60 },
    // Sustained reverse orbit — constant bank, yaw and reverse pitch
    { t: 1.6,  throttle: 0.73, yaw:  0.60, pitch: -0.50, roll:  0.60 },
    { t: 2.2,  throttle: 0.74, yaw:  0.60, pitch: -0.50, roll:  0.60 },
    { t: 2.8,  throttle: 0.73, yaw:  0.60, pitch: -0.50, roll:  0.60 },
    { t: 3.4,  throttle: 0.74, yaw:  0.60, pitch: -0.50, roll:  0.60 },
    // Unwind — ease roll, yaw and pitch back toward level
    { t: 3.7,  throttle: 0.70, yaw:  0.30, pitch: -0.20, roll:  0.30 },
    { t: 4.0,  throttle: 0.66, yaw:  0.10, pitch:  0.00, roll:  0.10 },
    // Exit
    { t: 4.3,  throttle: 0.63, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 4.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
