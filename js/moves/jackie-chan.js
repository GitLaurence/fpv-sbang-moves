export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Dramatic na combo mula kay Headmazta: throttle punch → front flip papunta sa inverted → yaw spin habang inverted → flip pabalik sa upright. Ang bawat phase ay may sariling energy signature — explosive sa entry, controlled sa spin, at snappy sa exit.',
  tips: [
    'Ang front flip (push pitch) ay kailangang mabilis at decisive — huwag mag-atubili sa push',
    'Mag-re-establish ng throttle bago magsimula ng yaw spin inverted — kailangan ng altitude para hindi mawala',
    'Ang exit flip ay kabaligtaran ng entry — pull pitch (hindi push) para lumabas nang maayos',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Flip Inv' },
    { t: 1.3, label: 'Inverted' },
    { t: 1.6, label: 'Yaw Spin' },
    { t: 3.5, label: 'Stop Yaw' },
    { t: 3.8, label: 'Flip Up' },
    { t: 4.4, label: 'Recovery' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 0.62, throttle: 1.00, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Front flip to inverted — push pitch forward, chop throttle
    { t: 0.8,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.05, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — re-establish throttle before yaw spin
    { t: 1.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Yaw spin inverted — elevated throttle to hold altitude while inverted
    { t: 1.65, throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center sticks
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright — pull pitch back, chop throttle
    { t: 3.9,  throttle: 0.28, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.15, throttle: 0.25, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Recovery — punch throttle to catch altitude loss
    { t: 4.4,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.75, throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
