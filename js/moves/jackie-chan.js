export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Trick ni Shauny D: mabilis na lookback (yaw flick) sinundan ng roll habang nag-rerecover pa ang yaw, tapos sustained yaw habang inverted, at roll pabalik para bumangon. Napakabilis at technical na combo.',
  tips: [
    'Ang yaw flick at roll ay dapat mag-overlap — huwag hintayin matapos ang isa bago simulan ang isa',
    'Habang inverted, panatilihin ang sustained yaw para sa spin effect',
    'Ang roll pabalik sa upright ay dapat mabilis at desisibo, katulad ng ibang Sbang-style moves',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Yaw Flick' },
    { t: 0.8, label: 'Roll+Recover' },
    { t: 1.3, label: 'Inverted Yaw' },
    { t: 2.8, label: 'Roll Upright' },
    { t: 3.4, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Yaw flick — quick lookback
    { t: 0.4,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.50, yaw:  0.80, pitch:  0.00, roll:  0.30 },
    // Roll overlapping the yaw recovery
    { t: 0.8,  throttle: 0.42, yaw:  0.40, pitch:  0.00, roll:  0.90 },
    { t: 1.0,  throttle: 0.38, yaw:  0.15, pitch:  0.00, roll:  1.00 },
    { t: 1.15, throttle: 0.35, yaw:  0.05, pitch:  0.00, roll:  1.00 },
    // Inverted — sustained yaw spin
    { t: 1.3,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.58, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.50, yaw:  0.60, pitch:  0.00, roll:  0.00 },
    // Roll back upright — quick and decisive
    { t: 2.8,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.05, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit
    { t: 3.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
