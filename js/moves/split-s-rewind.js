export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.5,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Split-S papababa, tapos kaagad na "i-rewind" ang galaw — pitch pataas pabalik sa tuktok (Immelmann-style) para lumabas sa orihinal na heading at altitude. Parang isang buong S-curve na nagbabalik sa sarili nito — dalawang half-loops na magkasalungat.',
  tips: [
    'Ang timing ng rewind ay kritikal — magsimula ng pag-akyat kaagad pagkatapos ma-level ang drone sa ibaba',
    'Full throttle sa Immelmann rewind — kailangan ng momentum para maabot ang tuktok',
    'Ang exit heading ay parehong direksyon ng entry — ito ang "rewind" na katangian ng trick',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Inv' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.1, label: 'Pull Down' },
    { t: 2.3, label: 'Level Out' },
    { t: 2.7, label: 'Pull Up' },
    { t: 3.8, label: 'Top Roll' },
    { t: 4.3, label: 'Exit' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted — cut throttle, snap roll
    { t: 0.4,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.85, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.20 },
    // Fully inverted
    { t: 0.98, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull through — sustained pitch back arcs nose through bottom
    { t: 1.1,  throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.50, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 1.9,  throttle: 0.62, yaw:  0.00, pitch: -0.75, roll:  0.00 },
    // Level out at bottom — brief pause to re-establish
    { t: 2.25, throttle: 0.68, yaw:  0.00, pitch: -0.18, roll:  0.00 },
    { t: 2.55, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND — Immelmann: full throttle pull up
    { t: 2.7,  throttle: 1.00, yaw:  0.00, pitch: -0.92, roll:  0.00 },
    { t: 3.0,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Approaching top — ease pitch, prep roll
    { t: 3.6,  throttle: 0.75, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    // Half roll at top — back to original heading
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 4.05, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Upright — exit same heading as entry
    { t: 4.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.15 },
    { t: 4.45, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
