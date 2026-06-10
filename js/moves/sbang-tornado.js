export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.0,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang-style boost → roll inverted → dead stop, pero sa halip na Split-S, sumabog sa isang continuous flat yaw spin (tornado) habang papalapag — pagkatapos ng ilang ikot, Juicy Flick papalabas. Kailangan ng matibay na yaw authority habang patuloy na umiikot.',
  tips: [
    'Habang umiikot sa tornado, panatilihin ang throttle na konsistent para hindi mawalan ng altitude',
    'Bilangin ang mga ikot — huwag bitawan ang yaw nang masyadong maaga o huli',
    'Ang dead stop bago ang tornado at ang Juicy Flick exit ay parehong dapat snappy at decisive',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.5, label: 'Tornado' },
    { t: 4.0, label: 'Spin Out' },
    { t: 4.5, label: 'Flick' },
    { t: 5.2, label: 'Roll Out' },
  ],
  keyframes: [
    // Entry — moderate forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, sticks center, brief pause
    { t: 1.2,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — flat yaw spin while inverted, sustained full yaw, throttle holds altitude
    { t: 1.5,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.58, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    { t: 2.5,  throttle: 0.56, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.58, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    { t: 3.5,  throttle: 0.56, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // SPIN OUT — ease yaw to zero, settle inverted
    { t: 4.0,  throttle: 0.50, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap upright
    { t: 4.5,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.65, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.85, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 5.2,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 5.45, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.45 },
    { t: 5.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 6.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
