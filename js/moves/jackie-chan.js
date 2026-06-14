export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Front flip papunta sa inverted, sundan ng flat 360° yaw spin habang patiwarik, tapos mag-roll pabalik sa upright. Kumbinasyon ng tatlong axes sa isang tuloy-tuloy na galaw — kailangan ng mature na throttle management.',
  tips: [
    'Sharp pitch-forward flip — itigil ang pitch input habang inverted bago simulan ang spin',
    'Mag-maintain ng steady throttle sa buong yaw spin para hindi mawala ang altitude na patiwarik',
    'Pagkatapos ng full spin, mag-roll palabas papuntang upright — i-ramp pataas ang throttle sa exit',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Flip' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.4,  label: 'Yaw Spin' },
    { t: 2.8,  label: 'Spin Complete' },
    { t: 3.2,  label: 'Roll Out' },
    { t: 4.0,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Front flip — sharp pitch forward into inverted
    { t: 0.4,  throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.38, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — center sticks, brief pause before the spin
    { t: 1.0,  throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.15, throttle: 0.44, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flat yaw spin while inverted — full yaw, steady throttle
    { t: 1.4,  throttle: 0.50, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    { t: 1.8,  throttle: 0.50, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    { t: 2.2,  throttle: 0.50, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    { t: 2.6,  throttle: 0.50, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    // Spin complete — ease yaw out
    { t: 2.8,  throttle: 0.48, yaw:  0.35, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.46, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out — half-roll back to upright
    { t: 3.2,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.55, throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  1.00 },
    { t: 3.75, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Exit — resume forward flight
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
