export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Extension ng Sbang — pagkatapos ng roll-to-inverted at Split-S pull-through, agad na sumunod ang patuloy na flat yaw spin ("tornado") bago ang exit. Pinagsasama ang snap transitions ng Sbang at ang sustained yaw authority ng 360° Yaw Spin.',
  tips: [
    'I-maintain ang "dead stop" sa pagitan ng roll-to-inverted at ng pull-through, parang regular Sbang',
    'Pagkatapos ng pull-through, agad na full yaw input — walang pause bago ang tornado',
    'Mag-ease ng pitch pasulong habang umiikot para mapanatili ang forward momentum sa tornado',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Inverted' },
    { t: 1.4, label: 'Pull' },
    { t: 2.2, label: 'Recover' },
    { t: 2.5, label: 'Tornado' },
    { t: 4.5, label: 'Spin Out' },
    { t: 5.0, label: 'Exit' },
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
    // Split-S pull-through — pitch back arcs nose down through the half-loop
    { t: 1.4,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.75, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.1,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Recovery — brief level moment before the tornado
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — sustained full yaw flat spin with slight forward pitch
    { t: 2.5,  throttle: 0.65, yaw:  1.00, pitch: -0.10, roll:  0.00 },
    { t: 3.0,  throttle: 0.66, yaw:  1.00, pitch: -0.08, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  1.00, pitch: -0.10, roll:  0.00 },
    { t: 4.0,  throttle: 0.66, yaw:  1.00, pitch: -0.08, roll:  0.00 },
    // Spin out — ease yaw back to center
    { t: 4.5,  throttle: 0.65, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    { t: 4.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — resume level cruise
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
