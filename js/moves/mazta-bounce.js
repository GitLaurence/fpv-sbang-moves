export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature bounce move ni Headmazta — mabilis na pitch dive papunta sa imaginary surface, sundan ng matalas na throttle punch at pitch pull para "tumalbog" pataas, parang bumabangga sa hangin.',
  tips: [
    'Bigyan ng espasyo ang dive bago mag-punch — huwag masyadong mababaw',
    'Ang throttle punch at pitch pull ay dapat sabay at biglaan para sa "bounce" effect',
    'Pagkatapos ng bounce, agad bumalik ang sticks sa center para sa malinis na recovery',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Dive' },
    { t: 1.0, label: 'Bounce' },
    { t: 1.4, label: 'Pop' },
    { t: 1.9, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive — throttle chop, pitch forward toward "ground"
    { t: 0.4,  throttle: 0.25, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 0.7,  throttle: 0.25, yaw:  0.00, pitch:  0.65, roll:  0.00 },
    // Bounce — sharp throttle punch + pitch pull, "bumps" off the surface
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch: -0.75, roll:  0.00 },
    { t: 1.2,  throttle: 0.95, yaw:  0.00, pitch: -0.65, roll:  0.00 },
    // Pop — momentum carries up, ease throttle and pitch back to center
    { t: 1.4,  throttle: 0.70, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle level
    { t: 1.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
