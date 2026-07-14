export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.2,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature move ni headmazta — throttle punch pataas, roll snap sa peak, tapos throttle cut para bumagsak at "bounce" pabalik pataas gaya ng tumatalbog na bola. Purong vertical bounce, walang pitch.',
  tips: [
    'Ang bounce feel ay galing sa mabilis na throttle up-down-up, hindi sa pitch',
    'I-snap lang ang roll sa pinakamataas na punto ng bounce — huwag habang umaakyat o bumabagsak',
    'Panatilihing neutral ang pitch sa buong move — vertical bounce ito, hindi loop',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Punch Up' },
    { t: 0.9, label: 'Peak' },
    { t: 1.1, label: 'Roll Snap' },
    { t: 1.5, label: 'Fall' },
    { t: 2.0, label: 'Bounce Out' },
    { t: 2.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level hover-cruise
    { t: 0.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PUNCH UP — full throttle to launch vertically
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.65, throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PEAK — near-zero vertical speed, throttle eased
    { t: 0.9,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL SNAP — quick full roll right at the top of the bounce
    { t: 1.1,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.3,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FALL — throttle chopped to let gravity take over
    { t: 1.5,  throttle: 0.20, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE OUT — throttle punch to arrest the fall like an elastic floor
    { t: 2.0,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 2.6,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
