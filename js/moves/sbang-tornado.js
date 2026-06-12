export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Variant ng Sbang: Boost → Roll inverted → full Yaw Spin habang baligtad ("tornado") → Split-S pull-through pabalik sa upright. Ang spin habang inverted ang nagdaragdag ng "tornado" visual sa classic Sbang flow.',
  tips: [
    'Pagkatapos mag-roll inverted, panatilihing matatag ang throttle bago mag-full yaw input',
    'Full yaw lang, walang partial — para malinis at mabilis ang spin habang baligtad',
    'I-time ang Split-S pull-through pagkatapos lang kumpleto ang spin, hindi habang umiikot pa',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Inverted' },
    { t: 1.4, label: 'Tornado' },
    { t: 2.9, label: 'Pull' },
    { t: 3.8, label: 'Recover' },
    { t: 4.2, label: 'Roll Out' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up to launch upward
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — both sticks back to center (inverted)
    { t: 1.2,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — full yaw spin while inverted
    { t: 1.4,  throttle: 0.35, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.35, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.35, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.38, yaw:  0.50, pitch:  0.00, roll:  0.00 },
    // Spin complete, still inverted
    { t: 2.9,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through — pitch back arcs nose down through the half-loop
    { t: 3.1,  throttle: 0.50, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 3.8,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 4.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
