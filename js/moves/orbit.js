export default {
  id: 'orbit',
  name: 'Orbits',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 5.0,
  youtubeId:    'XJDBezfCwyY',
  youtubeStart: 0,
  description: 'Umiikot sa paligid ng isang bagay habang pinananatili itong nasa gitna ng frame. Roll papunta sa center kasabay ng kabaligtarang yaw at kaunting pitch pasulong para mapanatili ang bilog na landas.',
  tips: [
    'I-lock ang bagay sa gitna ng camera — i-adjust ang yaw kung ito ay lumihis',
    'Panatilihin ang consistent na roll at yaw ratio para sa matino at bilog na orbit',
    'Kaunting pitch forward lang ang kailangan — sobrang pitch ay magpapalaki ng radius',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Enter Orbit' },
    { t: 1.5, label: '¼ Orbit' },
    { t: 2.5, label: '½ Orbit' },
    { t: 3.5, label: '¾ Orbit' },
    { t: 4.3, label: 'Exit' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Enter orbit — bank toward the object, counter-yaw keeps it centered
    { t: 0.5,  throttle: 0.66, yaw: -0.45, pitch:  0.20, roll:  0.55 },
    { t: 1.0,  throttle: 0.68, yaw: -0.45, pitch:  0.18, roll:  0.55 },
    // Continue orbit — hold the ratio steady all the way around
    { t: 1.8,  throttle: 0.68, yaw: -0.45, pitch:  0.18, roll:  0.55 },
    { t: 2.6,  throttle: 0.68, yaw: -0.45, pitch:  0.18, roll:  0.55 },
    { t: 3.4,  throttle: 0.68, yaw: -0.45, pitch:  0.18, roll:  0.55 },
    // Ease out of the orbit back to straight flight
    { t: 4.0,  throttle: 0.66, yaw: -0.30, pitch:  0.12, roll:  0.35 },
    { t: 4.3,  throttle: 0.63, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
