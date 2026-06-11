export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Matarik na pagbaba patungo sa lupa, tapos isang biglaang "bounce" — sabay na throttle punch at matalim na pitch pull para parang tumalbog pataas. Kailangan ng tamang timing para hindi tumama sa lupa.',
  tips: [
    'I-commit sa dive — kailangan ng sapat na bilis bago mag-bounce',
    'Ang bounce ay sabay na throttle punch at matalim na pitch pull, hindi sunod-sunod',
    'Mag-recover agad pagkatapos ng bounce — huwag hayaang ma-overshoot ang pitch pataas',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Dive' },
    { t: 1.3, label: 'Approach' },
    { t: 1.6, label: 'Bounce' },
    { t: 2.1, label: 'Rebound' },
    { t: 2.8, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE — nose down, throttle back
    { t: 0.4,  throttle: 0.40, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.9,  throttle: 0.35, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Approach ground — hold dive
    { t: 1.3,  throttle: 0.30, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // BOUNCE — throttle punch + sharp pitch pull
    { t: 1.6,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.95, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    // Rebound — climbing out, easing pitch
    { t: 2.1,  throttle: 0.80, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 2.4,  throttle: 0.70, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Recover — level flight
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
