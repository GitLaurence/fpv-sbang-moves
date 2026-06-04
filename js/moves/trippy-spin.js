export default {
  id: 'trippy-spin',
  name: 'Trippy Spin',
  level: 'advanced',
  difficulty: 4,
  durationSec: 6.0,
  youtubeId:    'HbUVa1IUfFs',
  youtubeStart: 0,
  description: 'Inverted orbit — lumipad nang baligtad sa paligid ng isang bagay (puno, poste) habang nakasentro ito sa camera. Kailangan ng lahat ng apat na axis nang sabay-sabay. Tinatawag ding "Cyclone" o "Inverted Orbit".',
  tips: [
    'Magsanay ng inverted hover nang 5+ segundo muna — kung hindi kaya, magiging crash ito',
    'Yaw ang nagpapapaliko sa orbit, pitch ang nagpapanatiling nakatuon sa center, roll ang nagbe-bank',
    'Mag-start sa malawak na orbit — mas madali ang malaking bilog kaysa maliit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Flip Inv' },
    { t: 1.1, label: 'Inverted' },
    { t: 1.5, label: 'Orbit' },
    { t: 5.0, label: 'Exit Flip' },
    { t: 5.5, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach toward the subject
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip to inverted — full pitch forward snap, throttle cut
    { t: 0.5,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — re-establish throttle, center pitch
    { t: 1.0,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin inverted orbit — all 4 axes simultaneously:
    // yaw drives orbit rotation, pitch leans toward subject,
    // roll banks into the circle, elevated throttle holds altitude inverted
    { t: 1.5,  throttle: 0.68, yaw:  1.00, pitch:  0.38, roll:  0.45 },
    { t: 2.0,  throttle: 0.70, yaw:  1.00, pitch:  0.40, roll:  0.45 },
    // Sustain orbit — throttle modulates to hold altitude
    { t: 2.5,  throttle: 0.67, yaw:  1.00, pitch:  0.38, roll:  0.45 },
    { t: 3.0,  throttle: 0.70, yaw:  1.00, pitch:  0.40, roll:  0.45 },
    { t: 3.5,  throttle: 0.68, yaw:  1.00, pitch:  0.38, roll:  0.45 },
    { t: 4.0,  throttle: 0.70, yaw:  1.00, pitch:  0.40, roll:  0.45 },
    { t: 4.5,  throttle: 0.67, yaw:  1.00, pitch:  0.38, roll:  0.45 },
    // Begin exit — release orbit inputs
    { t: 5.0,  throttle: 0.42, yaw:  0.25, pitch:  0.00, roll:  0.00 },
    // Flip back upright — pitch forward snap
    { t: 5.1,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.3,  throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Back upright — punch throttle to recover
    { t: 5.55, throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
