export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.5,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Mag-Split-S pababa, tapos mag-"rewind" — power loop pataas na babalik sa parehong landas at heading, na parang nire-rewind ang video. Kailangan ng malinaw na visualization ng arc para magkatugma ang dalawang kalahating loop.',
  tips: [
    'Gawin muna ang normal na Split-S — roll papunta sa inverted, tapos pull pababa',
    'Sa ilalim, agad mag-full throttle at pitch back para mag-loop pataas pabalik sa simula',
    'I-roll palabas sa parehong direksyon ng unang roll para tumama ang orihinal na heading',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Roll Inv' },
    { t: 1.2, label: 'Pull Down' },
    { t: 2.3, label: 'Bottom' },
    { t: 2.6, label: 'Rewind Pull' },
    { t: 4.3, label: 'Roll Out' },
    { t: 4.9, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted — cut throttle, full roll snap
    { t: 0.5,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.8,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through — sustained pitch back arcs down through the bottom
    { t: 1.2,  throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.50, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Bottom — momentarily level, opposite heading from entry
    { t: 2.3,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND — full throttle + pitch back, looping back up the same arc
    { t: 2.6,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.0,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Approaching inverted top of the rewind — chop throttle
    { t: 3.7,  throttle: 0.40, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.95, throttle: 0.06, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Past inverted — begin rolling back to the original heading
    { t: 4.3,  throttle: 0.30, yaw:  0.00, pitch: -0.40, roll:  1.00 },
    { t: 4.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Exit — level, original heading restored
    { t: 4.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
