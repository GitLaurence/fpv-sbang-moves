export default {
  id: 'coin-drop',
  name: 'Coin Drop',
  level: 'advanced',
  difficulty: 3,
  durationSec: 4.5,
  youtubeId:    'fT2SgTkLFGI',
  youtubeStart: 0,
  description: 'Mag-invert, tapos i-cut ang throttle habang mag-slow roll nang paulit-ulit — parang isang barya na tumatalbog-tumatalbog habang bumabagsak. I-catch ng throttle punch bago tumama sa lupa.',
  tips: [
    'I-cut ang throttle papunta halos zero pagkatapos mag-invert — mas malalim kaysa regular na Stall',
    'Panatilihin ang mabagal, steady na roll rate habang bumabagsak — hindi mabilis na spin',
    'I-time ang throttle punch sa catch base sa taas ng bagsak — mas mataas, mas malakas ang kailangan',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.4,  label: 'Invert' },
    { t: 0.9,  label: 'Cut' },
    { t: 1.3,  label: 'Tumble' },
    { t: 2.8,  label: 'Fall' },
    { t: 3.3,  label: 'Catch' },
    { t: 3.9,  label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level hover/slow flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to inverted
    { t: 0.4,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.85, throttle: 0.10, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CUT throttle near-zero — begin free-fall
    { t: 1.0,  throttle: 0.03, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Tumble — slow, continuous roll like a flipping coin while falling
    { t: 1.3,  throttle: 0.02, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 1.8,  throttle: 0.02, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 2.3,  throttle: 0.02, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 2.8,  throttle: 0.02, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // CATCH — ramp throttle back to arrest the drop, center roll
    { t: 3.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.15 },
    { t: 3.5,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to hover
    { t: 3.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
