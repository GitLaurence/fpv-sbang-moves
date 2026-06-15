export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal flip-roll combo — sabay na pitch at roll input na nagreresulta sa diagonal rotation, parang martial-arts spin. Mas mataas na entry speed kailangan para makompleto ang dual-axis rotation.',
  tips: [
    'Sabayan ang pitch at roll input — hindi sunod-sunod, kundi sama-sama',
    'Magdagdag ng konting throttle punch sa gitna ng combo para mapanatili ang momentum',
    'I-center ang lahat ng sticks bago ang exit para huminto sa tamang heading',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Combo In' },
    { t: 1.2, label: 'Diagonal Flip' },
    { t: 2.0, label: 'Combo Out' },
    { t: 2.6, label: 'Recover' },
  ],
  keyframes: [
    // Entry — carry speed into the combo
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Combo In — pitch and roll pushed together
    { t: 0.4,  throttle: 0.75, yaw:  0.00, pitch:  0.80, roll:  0.80 },
    { t: 0.8,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Diagonal Flip — full dual-axis rotation, throttle punch for momentum
    { t: 1.2,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.6,  throttle: 0.85, yaw:  0.00, pitch:  0.60, roll:  0.60 },
    // Combo Out — easing both axes back to center
    { t: 2.0,  throttle: 0.70, yaw:  0.00, pitch:  0.20, roll:  0.20 },
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle on new heading
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
