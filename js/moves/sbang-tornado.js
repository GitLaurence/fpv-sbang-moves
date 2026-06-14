export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Variant ng Sbang na may sustained inverted yaw spin sa gitna — Boost → Roll inverted habang nagsisimula ang yaw → "Tornado" full yaw spin habang nakabitin inverted → Split-S pull-through → Juicy Flick exit. Mas matagal at mas mahirap kontrolin ang spin axis kaysa sa regular na Sbang.',
  tips: [
    'I-hold ang full yaw input habang inverted — ang tornado spin ay dapat constant-rate, walang hesitation',
    'Pagsamahin ang roll-to-inverted at simula ng yaw sa isang fluid na motion, hindi hiwalay na inputs',
    'I-time ang pag-ease out ng yaw kasabay ng pitch pull para hindi mawalan ng orientation bago ang Split-S',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv + Yaw' },
    { t: 1.6, label: 'Tornado Spin' },
    { t: 2.8, label: 'Pull' },
    { t: 3.6, label: 'Recover' },
    { t: 4.2, label: 'Flick' },
    { t: 4.75, label: 'Roll Out' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up to launch upward
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 0.6,  throttle: 1.00, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Roll to inverted while the tornado yaw spin begins
    { t: 0.8,  throttle: 0.50, yaw:  0.80, pitch:  0.00, roll:  1.00 },
    { t: 1.1,  throttle: 0.45, yaw:  1.00, pitch:  0.00, roll:  0.50 },
    // TORNADO — sustained full yaw spin, inverted, moderate throttle to hold altitude
    { t: 1.6,  throttle: 0.45, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.45, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.45, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.50, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through — yaw eases out as pitch pulls down through the half-loop
    { t: 3.2,  throttle: 0.55, yaw:  0.40, pitch: -1.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Recovery — level out
    { t: 3.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap to inverted
    { t: 4.2,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.35, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.55, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 4.75, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    { t: 4.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 5.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
