export default {
  id: 'orbit',
  name: 'Orbit',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 6.0,
  youtubeId:    'XJDBezfCwyY',
  youtubeStart: 0,
  description: 'Lumipad sa paligid ng isang bagay (puno, poste, tao) habang nakatuon dito ang camera — isang buong 360° na bilog. Roll ang nagbe-bank papunta sa gitna ng orbit, yaw ang nagpapaikot, pitch ang nagpapanatili sa subject sa frame.',
  tips: [
    'Mag-bank papunta sa subject — ang roll ang gumagawa ng bilog, hindi ang yaw mag-isa',
    'Konsistent ang yaw rate sa buong orbit para maging pantay-pantay ang bilog',
    'Mag-start sa malayong distansya — mas madaling i-coordinate ang malaking orbit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.6, label: 'Bank In' },
    { t: 1.2, label: 'Orbit' },
    { t: 5.0, label: 'Exit' },
    { t: 5.6, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach toward the subject
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bank into the orbit — roll + yaw + slight pitch toward the subject
    { t: 0.6,  throttle: 0.65, yaw:  0.55, pitch:  0.25, roll:  0.55 },
    { t: 1.0,  throttle: 0.66, yaw:  0.60, pitch:  0.28, roll:  0.60 },
    // Sustain the orbit — constant bank, yaw, and pitch toward center
    { t: 1.6,  throttle: 0.65, yaw:  0.60, pitch:  0.28, roll:  0.60 },
    { t: 2.2,  throttle: 0.67, yaw:  0.62, pitch:  0.30, roll:  0.58 },
    { t: 2.8,  throttle: 0.65, yaw:  0.60, pitch:  0.28, roll:  0.60 },
    { t: 3.4,  throttle: 0.67, yaw:  0.62, pitch:  0.30, roll:  0.58 },
    { t: 4.0,  throttle: 0.65, yaw:  0.60, pitch:  0.28, roll:  0.60 },
    { t: 4.6,  throttle: 0.67, yaw:  0.60, pitch:  0.28, roll:  0.58 },
    // Exit — release bank, yaw, and pitch back to level
    { t: 5.0,  throttle: 0.64, yaw:  0.30, pitch:  0.12, roll:  0.25 },
    { t: 5.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — level flight
    { t: 5.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
