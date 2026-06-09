export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Split-S na sinundan ng pabalik na arc — kumpleto ang half-loop pababa, tapos "i-rewind" ang buong sequence pabalik sa orihinal na heading. Dalawang Split-S sa magkabaligtarang direksyon na tuloy-tuloy.',
  tips: [
    'Ang rewind half ay pitch forward (positive) — kabaligtaran ng unang Split-S pull',
    'I-time ang roll pabalik pagkatapos ng rewind arc — dapat maayos ang heading sa exit',
    'Ang transition sa pagitan ng dalawang arc ay dapat seamless — walang hesitation sa center',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll Inv' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.2,  label: 'Pull' },
    { t: 2.1,  label: 'Pause' },
    { t: 2.45, label: 'Rewind' },
    { t: 3.3,  label: 'Back Inv' },
    { t: 3.65, label: 'Roll Out' },
    { t: 4.1,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — carry speed
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted — chop throttle
    { t: 0.4,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.68, throttle: 0.31, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.88, throttle: 0.31, yaw:  0.00, pitch:  0.00, roll:  0.22 },
    { t: 1.0,  throttle: 0.31, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull — pitch back arcs nose down
    { t: 1.2,  throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.50, yaw:  0.00, pitch: -0.92, roll:  0.00 },
    { t: 1.95, throttle: 0.68, yaw:  0.00, pitch: -0.38, roll:  0.00 },
    // Exit upright, opposite heading — brief pause
    { t: 2.15, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.38, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND — push pitch forward to arc back up through the return half-loop
    { t: 2.5,  throttle: 0.36, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.85, throttle: 0.44, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 3.15, throttle: 0.30, yaw:  0.00, pitch:  0.48, roll:  0.00 },
    { t: 3.3,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Back at inverted — roll to upright (opposite roll direction to entry)
    { t: 3.45, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 3.68, throttle: 0.48, yaw:  0.00, pitch:  0.00, roll: -0.75 },
    { t: 3.85, throttle: 0.58, yaw:  0.00, pitch:  0.00, roll: -0.18 },
    // Exit — original heading restored
    { t: 4.05, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
