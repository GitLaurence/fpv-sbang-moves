export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang combo na may dagdag na 360° inverted yaw spin ("tornado") sa gitna — Boost → Roll inverted → Dead stop → Full Yaw Spin habang inverted → Split-S pull-through → Juicy Flick → Yaw accent. Pinakamahirap sa lahat ng sbang variations dahil sa dami ng rotations sa magkaibang axes.',
  tips: [
    'Ang tornado spin ay full yaw input habang inverted at dead stop ang pitch/roll — panatilihing flat ang spin',
    'Bilangin ang rotation — 360° lang, huwag sobra-sobra bago mag-pull',
    'Mag-master muna ng Sbang at Inverted Yaw Spin nang hiwalay bago pagsamahin sa combo na ito',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.5, label: 'Tornado' },
    { t: 3.0, label: 'Pull' },
    { t: 3.8, label: 'Recover' },
    { t: 4.3, label: 'Flick' },
    { t: 4.8, label: 'Roll Out' },
    { t: 5.4, label: 'Yaw Acc' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — both sticks center, inverted
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.35, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — full 360° yaw spin while inverted, throttle held low and flat
    { t: 1.5,  throttle: 0.32, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.32, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.32, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.32, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Spin complete — ease yaw out, still inverted
    { t: 2.9,  throttle: 0.30, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through — pitch back arcs nose down
    { t: 3.2,  throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.55, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 3.8,  throttle: 0.70, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    // Recovery — level out, brief pause before juicy flick
    { t: 4.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.15, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap to inverted
    { t: 4.3,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.45, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.65, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 4.8,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 5.05, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 5.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW ACCENT — sharp snap finish, then center
    { t: 5.4,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 5.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 6.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
