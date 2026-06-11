export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang-style boost → roll inverted → dead stop, pero sa halip na Split-S, mag-i-inverted yaw spin (ang "tornado") bago mag-flip pabalik upright at mag-Juicy Flick exit. Kombinasyon ng dalawang signature na elemento ng Sbang style.',
  tips: [
    'Pareho ng Sbang ang entry — boost, roll inverted, dead stop bago ang susunod na input',
    'Itaas ang throttle ng ~65-70% habang umiikot ang tornado para hindi bumagsak',
    'Mag-flip lang pabalik pagkatapos ihinto ang yaw — saka i-time ang Juicy Flick exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.6, label: 'Tornado' },
    { t: 3.9, label: 'Stop Spin' },
    { t: 4.2, label: 'Flip Up' },
    { t: 4.6, label: 'Recover' },
    { t: 5.0, label: 'Flick' },
    { t: 5.5, label: 'Roll Out' },
    { t: 6.0, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, sticks center, brief pause
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.45, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — sustained inverted yaw spin, elevated throttle to hold altitude
    { t: 1.6,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.1,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center left stick
    { t: 3.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.98, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright — pitch snap, throttle cut
    { t: 4.1,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.32, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Recovery — punch throttle, level out
    { t: 4.5,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.75, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap to inverted
    { t: 5.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.15, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.35, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 5.5,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 5.75, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 5.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 6.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
