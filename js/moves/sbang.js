export default {
  id: 'sbang',
  name: 'Sbang',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  description: 'Signature combo ng Sbang style (ni Farouk FPV): Boost → Roll inverted → Split-S pull-through → Juicy Flick → Yaw accent. Explosive at snappy ang bawat input — ang "dead stop" sa pagitan ay trademark ng style.',
  tips: [
    'Ang bawat transition ay may "dead stop" — bumalik ang stick sa center bago ang susunod na input',
    'Mabilis at decisively — hindi gradual ang mga input, kundi full snap at immediate center',
    'Mag-master ng Split-S at Juicy Flick nang hiwalay bago pagsamahin sa combo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Inverted' },
    { t: 1.4, label: 'Pull' },
    { t: 2.2, label: 'Recover' },
    { t: 2.7, label: 'Flick' },
    { t: 3.2, label: 'Roll Out' },
    { t: 3.8, label: 'Yaw Acc' },
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
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through — pitch back arcs nose down through the half-loop
    { t: 1.4,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.75, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.1,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Recovery — level out, brief pause before the juicy flick
    { t: 2.4,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap to inverted
    { t: 2.7,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.85, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.05, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 3.2,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.45, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW ACCENT — sharp snap finish, then center
    { t: 3.8,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 4.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
