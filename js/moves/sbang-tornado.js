export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Variation ng Sbang na may dagdag na sustained inverted yaw spin sa gitna ng combo — "tornado" effect habang umiikot ang quad paikot sa sarili nitong axis bago bumalik sa Split-S exit. Mas mahirap kaysa regular na Sbang dahil sa extended na disorientation.',
  tips: [
    'Mag-master muna ng regular na Sbang bago dagdagan ng yaw spin',
    'Panatilihin ang throttle na elevated habang inverted yaw spin para hindi mawalan ng altitude',
    'Bilangin ang bilang ng spins — alamin kung kailan i-stop ang yaw bago ang exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Inverted' },
    { t: 1.4, label: 'Tornado' },
    { t: 3.6, label: 'Stop Spin' },
    { t: 3.9, label: 'Pull' },
    { t: 4.7, label: 'Roll Out' },
    { t: 5.5, label: 'Recovery' },
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
    // Dead stop — center sticks, inverted
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — sustained inverted yaw spin, elevated throttle to hold altitude
    { t: 1.4,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.9,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop the spin — center yaw
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through — pitch back arcs nose down through the half-loop
    { t: 3.9,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.25, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 4.6,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Roll exit back to upright
    { t: 4.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 5.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
