export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.5,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Split-S na may kasamang "Rewind" — pagkatapos ng Split-S pull, i-reverse ang pitch direction para mag-arc pabalik sa orihinal na heading. Ang ribbon-like na flight path ay maganda sa FPV footage.',
  tips: [
    'Hayaan ang Split-S na makumpleto bago mag-initiate ng rewind — huwag pabilisin ang exit',
    'Ang rewind pitch ay kabaligtad — i-push ng pitch pasulong agad pagkatapos ng split-s exit',
    'Mag-maintain ng throttle sa buong maneuver — kailangan ang momentum para sa clean rewind arc',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Inv' },
    { t: 1.0, label: 'Pull S' },
    { t: 2.2, label: 'Exit S' },
    { t: 2.6, label: 'Rewind' },
    { t: 3.8, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted — CUT throttle, full roll snap
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.80 },
    // Fully inverted — center roll
    { t: 0.92, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull — sustained pitch back
    { t: 1.1,  throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.55, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 1.95, throttle: 0.68, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Exiting split-s — now flying opposite heading
    { t: 2.25, throttle: 0.72, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 2.45, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND — immediate forward pitch to arc back to original heading
    { t: 2.6,  throttle: 0.78, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 2.95, throttle: 0.88, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.80, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    // Arc back to level
    { t: 3.55, throttle: 0.68, yaw:  0.00, pitch:  0.25, roll:  0.00 },
    // Recovery
    { t: 3.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
