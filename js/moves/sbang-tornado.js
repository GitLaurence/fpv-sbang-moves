export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Variant ng Sbang kung saan ang inverted pull ay sinasamahan ng tuluy-tuloy na yaw spin — "tornado" effect habang bumababa. Ang pinaka-technical na bersyon ng Sbang combo, kailangan ng tumpak na throttle management habang umiikot.',
  tips: [
    'Mas mataas ang throttle na kailangan habang nag-i-inverted yaw spin kaysa sa regular na pull',
    'Panatilihing pare-pareho ang yaw rate sa buong tornado — huwag mag-stutter',
    'I-time ang pagtigil ng yaw at ang pagtapos ng pull sa parehong sandali para malinis ang exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Inverted' },
    { t: 1.4, label: 'Tornado' },
    { t: 3.2, label: 'Tornado End' },
    { t: 3.6, label: 'Pull' },
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
    // Dead stop — sticks back to center (inverted)
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — sustained inverted yaw spin while gradually pulling
    { t: 1.4,  throttle: 0.55, yaw:  1.00, pitch: -0.40, roll:  0.00 },
    { t: 1.9,  throttle: 0.60, yaw:  1.00, pitch: -0.45, roll:  0.00 },
    { t: 2.4,  throttle: 0.58, yaw:  1.00, pitch: -0.50, roll:  0.00 },
    { t: 2.9,  throttle: 0.62, yaw:  1.00, pitch: -0.45, roll:  0.00 },
    { t: 3.2,  throttle: 0.60, yaw:  1.00, pitch: -0.40, roll:  0.00 },
    // Stop yaw, complete the pull to level
    { t: 3.4,  throttle: 0.65, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 3.6,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 4.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
