export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Forward flip na pinagsama sa full yaw spin — habang pumipitch forward, sabay na umiikot ang yaw nang 360°. Mukhang isang spinning kick sa ere, kaya napangalanang "Jackie Chan".',
  tips: [
    'Simulan ang pitch flip muna, tapos idagdag ang yaw input habang papunta sa inverted',
    'Panatilihin ang yaw spin na consistent — huwag bitawan hangga\'t hindi pa kumpleto ang 360°',
    'Mag-punch ng throttle habang inverted para mapanatili ang momentum ng spin',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip+Yaw' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.4, label: 'Spin Out' },
    { t: 2.1, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch flip begins, yaw spin joins in
    { t: 0.4,  throttle: 0.72, yaw:  1.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.80, yaw:  1.00, pitch:  1.00, roll:  0.00 },
    // Inverted — throttle punch carries the spin through
    { t: 0.9,  throttle: 0.92, yaw:  1.00, pitch:  1.00, roll:  0.00 },
    { t: 1.15, throttle: 0.88, yaw:  1.00, pitch:  0.85, roll:  0.00 },
    // Spin out — yaw completing the 360°, pitch easing toward level
    { t: 1.4,  throttle: 0.80, yaw:  1.00, pitch:  0.50, roll:  0.00 },
    { t: 1.75, throttle: 0.72, yaw:  0.60, pitch:  0.15, roll:  0.00 },
    // Recovery — centered, settle to cruise
    { t: 2.1,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
