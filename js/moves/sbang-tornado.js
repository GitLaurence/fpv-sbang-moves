export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Variant ng Sbang kung saan may tuloy-tuloy na yaw spin sa kabuuan ng combo — boost, roll inverted, Split-S pull, at Juicy Flick, lahat habang umiikot ang yaw. Mas mataas ang disorientation kaysa regular na Sbang kaya "tornado".',
  tips: [
    'I-master muna ang regular Sbang nang hiwalay bago idagdag ang sustained yaw spin',
    'Panatilihing pare-pareho ang yaw rate sa buong combo — huwag ito i-modulate kasabay ng ibang inputs',
    'Ang final yaw accent burst sa exit ang nagbibigay ng "tornado" finish — gawing mabilis at decisive',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.4, label: 'Pull S' },
    { t: 2.2, label: 'Recover' },
    { t: 2.7, label: 'Flick' },
    { t: 3.2, label: 'Roll Out' },
    { t: 3.8, label: 'Tornado' },
  ],
  keyframes: [
    // Entry — level forward flight, yaw spin begins to wind up
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, yaw spin ramping
    { t: 0.4,  throttle: 1.00, yaw:  0.70, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.80, pitch: -0.15, roll:  0.00 },
    // Roll to inverted — yaw spin sustained throughout
    { t: 0.8,  throttle: 0.35, yaw:  0.80, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.30, yaw:  0.80, pitch:  0.00, roll:  1.00 },
    // Dead stop inverted — yaw spin keeps spinning (tornado signature)
    { t: 1.2,  throttle: 0.28, yaw:  0.80, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through while yaw spin continues
    { t: 1.4,  throttle: 0.35, yaw:  0.80, pitch: -1.00, roll:  0.00 },
    { t: 1.75, throttle: 0.52, yaw:  0.80, pitch: -0.95, roll:  0.00 },
    { t: 2.1,  throttle: 0.68, yaw:  0.75, pitch: -0.55, roll:  0.00 },
    // Recovery — yaw spin begins to slow
    { t: 2.4,  throttle: 0.70, yaw:  0.60, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.68, yaw:  0.45, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap, yaw winding down
    { t: 2.7,  throttle: 0.85, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    { t: 2.85, throttle: 0.28, yaw:  0.15, pitch:  1.00, roll:  0.00 },
    { t: 3.05, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 3.2,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.45, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO FINISH — final sharp yaw accent burst
    { t: 3.8,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.1,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 4.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
