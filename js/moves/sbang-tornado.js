export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.0,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang-style boost → roll inverted → dead stop, sundan ng sustained inverted yaw spin ("tornado") sa loob ng ilang segundo, tapos flip pabalik sa upright na may yaw accent finish. Pinaka-mahabang Sbang variant — kailangan ng matatag na throttle control habang umiikot.',
  tips: [
    'Habang inverted at nag-spin, panatilihin ang throttle nang mas mataas (~65-70%) para hindi mahulog',
    'Ang dead stop bago ang tornado ay dapat literal na tigil — sticks sa center bago simulan ang yaw',
    'Mag-flip palabas sa tamang oryentasyon matapos ang spin — bantayan ang heading bago mag-flip up',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.1, label: 'Dead Stop' },
    { t: 1.3, label: 'Tornado' },
    { t: 3.8, label: 'Stop Yaw' },
    { t: 4.1, label: 'Flip Up' },
    { t: 4.5, label: 'Yaw Acc' },
    { t: 5.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.62, throttle: 1.00, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.98, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, all sticks center
    { t: 1.1,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.22, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — sustained inverted yaw spin, elevated throttle
    { t: 1.3,  throttle: 0.66, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.65, throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center
    { t: 3.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.98, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright — pitch snap forward, throttle cut
    { t: 4.1,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.32, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — punch throttle to recover altitude
    { t: 4.5,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW ACCENT — sharp snap finish, then center
    { t: 4.8,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 5.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
