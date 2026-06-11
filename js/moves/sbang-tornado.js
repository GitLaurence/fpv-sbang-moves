export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Variant ng Sbang na may dagdag na multiple inverted yaw spins ("tornado") bago ang pull-out. Mas mahaba at mas mahirap panatilihin ang oryentasyon dahil sa patuloy na pag-ikot habang inverted.',
  tips: [
    'Mag-master muna ng regular Sbang bago subukan ang Tornado variant',
    'Panatilihing steady ang yaw input habang umiikot ng maraming beses — huwag biglaang ihinto',
    'Mag-focus sa horizon line bilang reference habang umiikot para hindi mawala ang oryentasyon',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Spin' },
    { t: 3.6, label: 'Stop Spin' },
    { t: 4.0, label: 'Pull Out' },
    { t: 4.7, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 0.6,  throttle: 1.00, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // INVERTED YAW SPIN x3 — sustained yaw with slight pitch hold for a flat spin
    { t: 1.2,  throttle: 0.40, yaw:  1.00, pitch:  0.20, roll:  0.00 },
    { t: 1.6,  throttle: 0.42, yaw:  1.00, pitch:  0.20, roll:  0.00 },
    { t: 2.0,  throttle: 0.42, yaw:  1.00, pitch:  0.20, roll:  0.00 },
    { t: 2.4,  throttle: 0.42, yaw:  1.00, pitch:  0.20, roll:  0.00 },
    { t: 2.8,  throttle: 0.42, yaw:  1.00, pitch:  0.20, roll:  0.00 },
    { t: 3.2,  throttle: 0.45, yaw:  1.00, pitch:  0.20, roll:  0.00 },
    // Stop spin — center yaw and pitch
    { t: 3.6,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull through to upright
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 4.4,  throttle: 0.70, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    // Recovery — settle level
    { t: 4.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
