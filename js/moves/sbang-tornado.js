export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 7.0,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Pinalawak na Sbang: boost → roll inverted → dead stop → buong 360° inverted yaw spin → Split-S pull-through → Juicy Flick → yaw accent. Mas mahaba at mas "spinny" kaysa regular Sbang dahil sa idinagdag na inverted yaw spin sa gitna.',
  tips: [
    'Panatilihing matatag ang throttle (~65-70%) habang inverted spin para hindi bumagsak',
    'Dapat clean ang dead stop bago at pagkatapos ng yaw spin — full center bago ang susunod na phase',
    'Mag-master muna ng Sbang at Inverted Yaw Spin nang hiwalay bago ito subukan',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.5, label: 'Yaw Spin' },
    { t: 4.0, label: 'Stop Spin' },
    { t: 4.3, label: 'Pull' },
    { t: 5.1, label: 'Recover' },
    { t: 5.6, label: 'Flick' },
    { t: 6.1, label: 'Roll Out' },
    { t: 6.6, label: 'Yaw Acc' },
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
    { t: 1.4,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // INVERTED YAW SPIN — full 360°, elevated throttle to hold altitude
    { t: 1.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.85, throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop spin — center yaw, brief dead stop again
    { t: 4.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.15, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through — pitch back arcs nose down through the half-loop
    { t: 4.3,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.65, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 5.0,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Recovery — level out, brief pause before the juicy flick
    { t: 5.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap to inverted
    { t: 5.6,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.75, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.95, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 6.1,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 6.35, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 6.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW ACCENT — sharp snap finish, then center
    { t: 6.6,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 6.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 7.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
