export default {
  id: 'boomerang',
  name: 'Boomerang',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'cEqJj62f8iY',
  youtubeStart: 0,
  description: 'Lumilipad sa curved na landas habang patuloy na nakaharap sa parehong direksyon — pinagsasama ang sustained roll bank at counter-yaw para mapanatili ang heading habang paikot ang flight path.',
  tips: [
    'Mag-hold ng partial roll (hindi buong 90°) para mag-bank papasok sa curve',
    'Gamitin ang yaw papuntang kabaligtaran ng roll para hindi magbago ang direksyon ng camera',
    'Mag-maintain ng dagdag na throttle para hindi mawalan ng altitude habang paikot',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Bank' },
    { t: 1.0, label: 'Curve' },
    { t: 2.6, label: 'Curve Out' },
    { t: 3.3, label: 'Level' },
    { t: 4.0, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bank into the curve — roll and counter-yaw begin together
    { t: 0.4,  throttle: 0.68, yaw: -0.35, pitch:  0.05, roll:  0.55 },
    { t: 0.7,  throttle: 0.70, yaw: -0.40, pitch:  0.05, roll:  0.60 },
    // Sustained curved arc — bank + counter-yaw held to keep heading constant
    { t: 1.0,  throttle: 0.72, yaw: -0.45, pitch:  0.08, roll:  0.62 },
    { t: 1.6,  throttle: 0.72, yaw: -0.45, pitch:  0.08, roll:  0.62 },
    { t: 2.2,  throttle: 0.72, yaw: -0.45, pitch:  0.08, roll:  0.60 },
    { t: 2.6,  throttle: 0.70, yaw: -0.40, pitch:  0.06, roll:  0.55 },
    // Roll out level
    { t: 3.0,  throttle: 0.66, yaw: -0.15, pitch:  0.02, roll:  0.20 },
    { t: 3.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
