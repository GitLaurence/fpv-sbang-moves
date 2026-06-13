export default {
  id: 'front-flip',
  name: 'Front Flip',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'YPjSWXFgHEQ',
  youtubeStart: 0,
  description: 'Pinakasimpleng flip — buong 360° pitch rotation papunta sa harap. I-cut ang throttle habang inverted, tapos i-punch pabalik sa upright. Foundation ng lahat ng flip-based tricks.',
  tips: [
    'Full pitch forward at i-hold hanggang makumpleto ang buong 360°',
    'Bawasan ang throttle habang inverted para hindi mawala ang altitude',
    'I-punch ang throttle pabalik sa upright para ma-recover agad',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.8, label: 'Inverted' },
    { t: 1.1, label: 'Punch' },
    { t: 1.6, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward — begin the flip
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — ease throttle to hold position
    { t: 0.8,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.48, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Punch through — finish rotation back to upright
    { t: 1.1,  throttle: 0.75, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 1.35, throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 1.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
