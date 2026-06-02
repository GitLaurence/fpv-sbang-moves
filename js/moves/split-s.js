export default {
  id: 'split-s',
  name: 'Split-S',
  level: 'beginner',
  difficulty: 2,
  durationSec: 3.5,
  description: 'Nag-ro-roll ng inverted tapos nagpu-pull sa pababang half loop. Magaling para sa pagbabago ng direksyon nang hindi masyadong nababawasan ang altitude.',
  tips: [
    'Unahin ang roll, hindi ang pitch — maging fully inverted muna bago mag-pull',
    'Magdala ng speed sa entry o magiging mabagal ang exit',
    'Ang timing ng pull ang magtatakda ng exit altitude — late pull = mas malalim na dive',
  ],
  // Phases shown as labels on the scrubber
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll' },
    { t: 1.1,  label: 'Inverted' },
    { t: 1.3,  label: 'Pull' },
    { t: 2.8,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — carry speed straight
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll input — quick snap to inverted
    { t: 0.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.95, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Inverted — level off briefly
    { t: 1.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull — full back-stick
    { t: 1.3,  throttle: 0.42, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.45, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.4,  throttle: 0.55, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Exit — release and level
    { t: 2.8,  throttle: 0.62, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
