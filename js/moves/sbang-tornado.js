export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 7.0,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Pinakacomplex na Sbang combo — Boost → Roll inverted → Dead Stop → Inverted Yaw Spin (ang "Tornado") → Stop Yaw → Juicy Flick → Roll Out. Ang sbang dead-stop aesthetic ay pinagsama sa buong tornado spin para sa pinaka-signature na Farouk FPV sequence.',
  tips: [
    'I-master ang Sbang at ang Inverted Yaw Spin nang hiwalay bago pagsamahin',
    'Ang dead stop bago ang tornado ay kritikal — dapat literal na nakatahan ang drone bago mag-spin',
    'Maingat ang throttle sa tornado phase — kailangan ng ~68-70% para manatiling level habang inverted',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.85, label: 'Roll Inv' },
    { t: 1.25, label: 'Dead Stop' },
    { t: 1.6,  label: 'Tornado' },
    { t: 4.5,  label: 'Stop Yaw' },
    { t: 4.9,  label: 'Juicy' },
    { t: 5.7,  label: 'Roll Out' },
    { t: 6.3,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.85, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.05, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — fully inverted, sticks to center
    { t: 1.22, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.50, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Establish inverted throttle before tornado
    { t: 1.62, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — full yaw spin while inverted
    { t: 1.78, throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.3,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center left stick
    { t: 4.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip, pitch snap
    { t: 4.9,  throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.05, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.25, throttle: 0.26, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll back to upright
    { t: 5.4,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 5.65, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    { t: 5.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 6.2,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 7.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
