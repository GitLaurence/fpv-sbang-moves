export default {
  id: 'dive-bomb',
  name: 'Dive Bomb',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'xCgcLMnap1g',
  youtubeStart: 0,
  description: 'Bumaba nang steep papunta sa isang building o obstacle — i-cut ang throttle, i-push ang pitch pasulong papunta sa halos vertical na dive, tapos i-pull pabalik sa ibaba bago tumama sa lupa. Kailangan ng disiplina sa timing ng pull.',
  tips: [
    'I-chop ang throttle habang pinipindot ang pitch pasulong — huwag sabayan ng throttle ang unang push',
    'Panatilihin ang matinding dive angle hanggang malapit na sa ibaba — huwag maagang mag-level',
    'I-cut muli ang throttle bago mag-pull para mas mabilis at mas matalim ang recovery',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Dive Entry' },
    { t: 1.3, label: 'Vertical Dive' },
    { t: 2.6, label: 'Pull Bottom' },
    { t: 3.4, label: 'Level Out' },
  ],
  keyframes: [
    // Approach — cruise toward the building/obstacle
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive entry — chop throttle, full pitch forward
    { t: 0.5,  throttle: 0.15, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.20, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Vertical dive — hold steep angle, light throttle to manage speed
    { t: 1.3,  throttle: 0.25, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 1.8,  throttle: 0.22, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 2.3,  throttle: 0.20, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Second chop right before the pull — sharpens the recovery
    { t: 2.6,  throttle: 0.10, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Pull bottom — firm sustained pitch back to arrest the dive
    { t: 2.85, throttle: 0.55, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 3.15, throttle: 0.78, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Level out
    { t: 3.4,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
