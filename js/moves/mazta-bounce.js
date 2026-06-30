export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'I-dive papababa ang drone, chop throttle malapit sa lupa, tapos pull para mag-"bounce" pabalik sa itaas — parang bola na tumalbog. Signature proximity trick ni headmazta na kailangan ng tamang timing at neryo.',
  tips: [
    'Ang dive angle ay critical — 45-60° ang ideal; mas malalim = mas dramatic ang bounce',
    'I-chop ang throttle at mag-pull nang sabay sa pinakamalapit na punto sa lupa',
    'Mag-practice sa mataas na altitude muna bago subukan ang totoong proximity bounce',
  ],
  phases: [
    { t: 0.0, label: 'Level' },
    { t: 0.5, label: 'Dive' },
    { t: 1.5, label: 'Chop' },
    { t: 1.8, label: 'Pull' },
    { t: 2.5, label: 'Climb' },
    { t: 3.0, label: 'Bounce 2' },
    { t: 4.0, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin dive — push pitch forward
    { t: 0.5,  throttle: 0.70, yaw:  0.00, pitch:  0.65, roll:  0.00 },
    { t: 0.8,  throttle: 0.65, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // Diving — throttle slightly reduced
    { t: 1.1,  throttle: 0.55, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 1.4,  throttle: 0.40, yaw:  0.00, pitch:  0.65, roll:  0.00 },
    // CHOP & PULL — near ground, throttle cut, sharp pitch back
    { t: 1.55, throttle: 0.08, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.08, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // BOUNCE UP — throttle punch, ease pitch
    { t: 1.85, throttle: 0.75, yaw:  0.00, pitch: -0.75, roll:  0.00 },
    { t: 2.1,  throttle: 0.78, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    // Climbing back up
    { t: 2.4,  throttle: 0.72, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 2.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Second dive — repeat bounce (smaller arc)
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 3.3,  throttle: 0.35, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 3.5,  throttle: 0.08, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.65, throttle: 0.72, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Recovery
    { t: 3.88, throttle: 0.68, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 4.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
