export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Variant ng Sbang kung saan dinadagdagan ng tuloy-tuloy na yaw spin habang pumupull-through patungo sa inverted dive — gumagawa ng "tornado" na visual effect. Kailangan ng matibay na coordination ng yaw at pitch nang sabay-sabay.',
  tips: [
    'Panatilihin ang full yaw input habang pumupull-through ang pitch — sabay dapat mangyari ang dalawa',
    'Mag-master muna ng regular Sbang bago dagdagan ng tornado spin',
    'Ang continuous rotation habang nag-i-inverted dive ay nangangailangan ng matatag na orientation awareness',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.4, label: 'Tornado' },
    { t: 3.0, label: 'Pull Out' },
    { t: 3.4, label: 'Roll Out' },
    { t: 4.0, label: 'Recover' },
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
    // Dead stop — inverted, all sticks center
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — pitch back through the half-loop while holding full yaw
    { t: 1.4,  throttle: 0.35, yaw:  1.00, pitch: -1.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.45, yaw:  1.00, pitch: -0.90, roll:  0.00 },
    { t: 2.2,  throttle: 0.55, yaw:  1.00, pitch: -0.80, roll:  0.00 },
    { t: 2.6,  throttle: 0.60, yaw:  1.00, pitch: -0.60, roll:  0.00 },
    // PULL OUT — ease yaw and pitch back to level
    { t: 3.0,  throttle: 0.65, yaw:  0.50, pitch: -0.30, roll:  0.00 },
    { t: 3.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 3.4,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.7,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle
    { t: 4.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
