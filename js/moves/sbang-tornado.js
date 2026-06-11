export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Variant ng Sbang na may extended inverted yaw spin "tornado" sa gitna — pagkatapos mag-roll inverted, magpapatuloy sa ilang buong yaw spin habang inverted bago mag-Split-S pull-through palabas. Mas mahaba at mas paikot kumpara sa orihinal na Sbang.',
  tips: [
    'Pareho ng Sbang ang entry — boost, roll inverted, dead stop',
    'Sa halip na agad mag-Split-S, magpatuloy muna ng ilang yaw spin habang inverted',
    'Itaas nang slight ang throttle habang umiikot para hindi mawalan ng altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Inverted' },
    { t: 1.4, label: 'Tornado' },
    { t: 3.4, label: 'Stop Spin' },
    { t: 3.7, label: 'Pull' },
    { t: 4.4, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — both sticks back to center (inverted)
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — full yaw spin while inverted, elevated throttle to hold altitude
    { t: 1.4,  throttle: 0.66, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.9,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop spin — center yaw
    { t: 3.4,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through — pitch back arcs nose down through the half-loop
    { t: 3.7,  throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.55, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    // Recovery — level out
    { t: 4.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
