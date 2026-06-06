export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature move ni Headmazta — aggressive dive pababa, pagkatapos sa pinaka-huling sandali ay SNAP throttle punch + hard pitch back para "mag-bounce" paataas. Kinakailangan ng tiwala at tamang timing sa mababang altitude.',
  tips: [
    'Mas mababa ang bounce point = mas dramatic, ngunit mas mabilis ang reaction time na kailangan',
    'Ang "snap" sa bounce ay kailangang simultaneous — throttle at pitch sa iisang oras',
    'Mag-practice muna sa mas mataas na altitude bago gawin sa ground level',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Dive' },
    { t: 1.5, label: 'Falling' },
    { t: 2.2, label: 'BOUNCE' },
    { t: 2.8, label: 'Climb' },
    { t: 3.6, label: 'Level' },
  ],
  keyframes: [
    // Approach — carry speed
    { t: 0.0,  throttle: 0.75, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.3,  throttle: 0.75, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Begin dive — pitch forward + chop throttle
    { t: 0.5,  throttle: 0.30, yaw: 0.00, pitch:  0.70, roll: 0.00 },
    { t: 0.75, throttle: 0.12, yaw: 0.00, pitch:  0.95, roll: 0.00 },
    { t: 1.0,  throttle: 0.08, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    // Full dive — near-zero throttle
    { t: 1.3,  throttle: 0.06, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 1.8,  throttle: 0.06, yaw: 0.00, pitch:  0.80, roll: 0.00 },
    { t: 2.1,  throttle: 0.06, yaw: 0.00, pitch:  0.50, roll: 0.00 },
    // BOUNCE — simultaneous full throttle punch + hard pitch-back snap
    { t: 2.2,  throttle: 1.00, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    { t: 2.4,  throttle: 1.00, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    // Climbing hard
    { t: 2.7,  throttle: 0.95, yaw: 0.00, pitch: -0.75, roll: 0.00 },
    { t: 3.0,  throttle: 0.85, yaw: 0.00, pitch: -0.40, roll: 0.00 },
    // Leveling out
    { t: 3.4,  throttle: 0.72, yaw: 0.00, pitch: -0.10, roll: 0.00 },
    { t: 3.8,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 4.5,  throttle: 0.67, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
