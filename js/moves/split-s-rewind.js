export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Split-S na may kasamang rewind — half-roll to inverted, pitch-back pull sa ilalim ng arc, tapos agad na half-roll pabalik sa upright na sumasalungat sa direksyon ng dating roll. Nagbibigay ng "bounce" na epekto.',
  tips: [
    'Ang rewind roll ay dapat agad pagkatapos ng Split-S exit — walang pahinga sa pagitan',
    'Gamitin ang kabaligtarang roll direction para sa rewind para maging natural ang galaw',
    'Kailangan ng sapat na throttle sa buong maneuver para hindi mawalan ng altitude',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Half Roll' },
    { t: 0.7, label: 'Inverted' },
    { t: 0.9, label: 'Pull-S' },
    { t: 1.55, label: 'Exit' },
    { t: 1.8, label: 'Rewind Roll' },
    { t: 2.4, label: 'Recovery' },
  ],
  keyframes: [
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted
    { t: 0.3,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.52, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — brief pause
    { t: 0.68, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.82, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S pull — pitch back through bottom arc
    { t: 0.92, throttle: 0.42, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.15, throttle: 0.65, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 1.38, throttle: 0.72, yaw:  0.00, pitch: -0.35, roll:  0.00 },
    // Exit — level flight, brief hold
    { t: 1.55, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.70, throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND — snap half-roll opposite direction
    { t: 1.80, throttle: 0.56, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.05, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    // Pitch pull to arc back up, completing the rewind
    { t: 2.20, throttle: 0.44, yaw:  0.00, pitch: -0.65, roll:  0.00 },
    { t: 2.42, throttle: 0.60, yaw:  0.00, pitch: -0.18, roll:  0.00 },
    { t: 2.62, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
