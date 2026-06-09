export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 7.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang combo na may kasamang Tornado (inverted yaw spin) sa dulo: Boost → Roll inverted → Dead stop → Split-S → Juicy Flick → Flip inverted → buong 360° yaw spin → Flip pabalik. Pinaka-kumplikadong Sbang variation.',
  tips: [
    'I-master ang Sbang at Inverted Yaw Spin nang hiwalay bago pagsamahin',
    'Ang Tornado portion ay nangangailangan ng mas mataas na throttle — ~68-70% habang inverted',
    'Ang dead stop bago ang Tornado ay nagpapakita ng kontrol — huwag mag-rush sa yaw spin',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.45, label: 'Pull S' },
    { t: 2.4, label: 'Recover' },
    { t: 2.8, label: 'Juicy' },
    { t: 3.3, label: 'Roll Out' },
    { t: 3.9, label: 'Flip Inv' },
    { t: 4.4, label: 'Tornado' },
    { t: 6.2, label: 'Stop Yaw' },
    { t: 6.6, label: 'Flip Up' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    // Roll to inverted
    { t: 0.8,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.02, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop inverted
    { t: 1.2,  throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.38, throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through
    { t: 1.5,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.82, throttle: 0.52, yaw:  0.00, pitch: -0.92, roll:  0.00 },
    { t: 2.15, throttle: 0.68, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    // Recovery — brief level pause
    { t: 2.42, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.65, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip, pitch snap
    { t: 2.78, throttle: 0.86, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.92, throttle: 0.27, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.1,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll back upright
    { t: 3.25, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.5,  throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.48 },
    { t: 3.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Brief recovery level
    { t: 3.8,  throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip to inverted for Tornado
    { t: 3.95, throttle: 0.27, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.18, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — establish throttle
    { t: 4.38, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — full yaw spin while inverted
    { t: 4.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw
    { t: 6.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright
    { t: 6.55, throttle: 0.27, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 6.78, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Recovery
    { t: 7.0,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 7.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
