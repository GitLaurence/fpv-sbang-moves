export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Complex combo: Throttle punch → pitch snap to inverted → inverted hang with yaw → snap roll exit. Ang "Jackie Chan" ay naka-reference sa stunts na parang imposible pero malinis na malinis ang execution.',
  tips: [
    'Ang inverted hang ay ang pinaka-importanteng bahagi — kailangan ng stable throttle habang inverted',
    'Huwag magmadali sa yaw accent habang inverted — hayaan ang camera na mag-settle muna',
    'Ang exit roll ay dapat crisp at mabilis — buong 180° snap, hindi gradual',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Punch' },
    { t: 0.7, label: 'Flip Inv' },
    { t: 1.2, label: 'Inv Hang' },
    { t: 2.0, label: 'Yaw Acc' },
    { t: 2.8, label: 'Roll Out' },
    { t: 3.5, label: 'Dive' },
    { t: 4.2, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle punch — launch upward
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 0.55, throttle: 1.00, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Pitch snap to inverted — aggressive forward pitch
    { t: 0.7,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — center pitch, establish hover throttle
    { t: 1.1,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Inverted hang — stable hold with slight yaw drift
    { t: 1.6,  throttle: 0.67, yaw:  0.10, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.65, yaw:  0.10, pitch:  0.00, roll:  0.00 },
    // Yaw accent — snap yaw while inverted
    { t: 2.1,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.65, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    // Snap roll exit — 180° to upright
    { t: 2.8,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.05, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.25, throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  0.20 },
    // Upright — now descending, pitch forward for dive exit
    { t: 3.5,  throttle: 0.55, yaw:  0.00, pitch:  0.25, roll:  0.00 },
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // Recovery — level out
    { t: 4.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
