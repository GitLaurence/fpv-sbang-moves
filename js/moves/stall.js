export default {
  id: 'stall',
  name: 'Stall',
  level: 'beginner',
  difficulty: 1,
  durationSec: 3.5,
  youtubeId:    '_6sEh0KIC_o',
  youtubeStart: 0,
  description: 'I-cut ang throttle nang buo para "i-freeze" ang quad sa ere — hayaan itong bumagsak nang ilang segundo, tapos "i-catch" ng throttle punch. Pinakamahalagang trick para matuto ng throttle control.',
  tips: [
    'Cut throttle nang sudden at buo — huwag gradual, dapat instant zero',
    'Hayaan lang bumagsak ng 1-2 segundo bago mag-catch — lalong maganda ang mas matagal',
    'Ang throttle punch sa catch ay depende sa taas ng bagsak — mas mataas na bagsak, mas malakas ang punch',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Cut' },
    { t: 0.8, label: 'Stall' },
    { t: 2.2, label: 'Catch' },
    { t: 2.8, label: 'Recovery' },
  ],
  keyframes: [
    // Hover/slow flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CHOP throttle — instant zero
    { t: 0.4,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Free-fall — all sticks centered, throttle near zero
    { t: 0.9,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CATCH — ramp throttle back up to arrest the drop
    { t: 2.2,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to hover
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
