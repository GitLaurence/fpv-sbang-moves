export default {
  id: 'inverted-yaw-spin-rewind',
  name: 'Inverted Yaw Spin Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.5,
  youtubeId:    'T7uEolLo_9c',
  youtubeStart: 0,
  description: 'Katulad ng Inverted Yaw Spin pero ang exit ay "rewind" — ang flip pabalik sa upright ay pitch BACK (hindi forward), kaya lumalabas ka sa KABALIGTARANG direksyon. Mas interesting para sa cinematics kaysa regular IYS dahil nagbabago ng heading.',
  tips: [
    'Ang rewind exit (pitch back mula sa inverted) ay katulad ng Split-S pull-through — parehong input',
    'Mas maraming altitude ang mawawala sa rewind exit kaysa forward flip exit — mag-dagdag ng taas bago gawin',
    'I-stop ang yaw bago ang exit at mag-pause ng kaunti para mas malinis ang transition sa rewind',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Flip Inv' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.3, label: 'Yaw Spin' },
    { t: 3.8, label: 'Stop Yaw' },
    { t: 4.1, label: 'Rewind' },
    { t: 4.7, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.35, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // Flip to inverted — pitch snap forward, throttle cut
    { t: 0.5,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll: 0.00 },
    { t: 0.72, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll: 0.00 },
    // Fully inverted — re-establish throttle, center pitch
    { t: 0.95, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 1.15, throttle: 0.67, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // Full yaw spin — elevated throttle to hold altitude while inverted
    { t: 1.3,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll: 0.00 },
    { t: 1.8,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll: 0.00 },
    { t: 2.2,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll: 0.00 },
    { t: 2.7,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll: 0.00 },
    { t: 3.2,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll: 0.00 },
    { t: 3.6,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll: 0.00 },
    // Stop yaw — center sticks
    { t: 3.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 4.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // REWIND exit — pitch BACK (not forward) to arc through the bottom back to upright
    { t: 4.15, throttle: 0.35, yaw:  0.00, pitch: -1.00, roll: 0.00 },
    { t: 4.42, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll: 0.00 },
    // Upright — throttle punch to catch altitude loss from pull-through arc
    { t: 4.72, throttle: 0.78, yaw:  0.00, pitch: -0.18, roll: 0.00 },
    { t: 4.98, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 5.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll: 0.00 },
  ],
};
