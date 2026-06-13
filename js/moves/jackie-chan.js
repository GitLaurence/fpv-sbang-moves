export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Combo move — mag-roll papuntang inverted, tapos flat yaw spin habang inverted, at mag-pull palabas. Mataas ang required na skill dahil tatlong axes ang sabay-sabay na ginagalaw.',
  tips: [
    'Mag-master muna ng roll-to-inverted at yaw spin nang hiwalay bago pagsamahin',
    'Panatilihing steady ang throttle habang naka-inverted para hindi bumagsak',
    'Ang pull-out timing ang magdideterminang sa exit heading',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Inv' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.2, label: 'Yaw Spin' },
    { t: 2.6, label: 'Pull Out' },
    { t: 3.4, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to inverted
    { t: 0.4,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.9,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Fully inverted — center roll stick
    { t: 1.0,  throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flat yaw spin while inverted
    { t: 1.2,  throttle: 0.45, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.45, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.45, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.45, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Pull out — center yaw, pitch back arcs nose through to upright
    { t: 2.6,  throttle: 0.48, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.60, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    // Exit — level out, ramp throttle back to cruise
    { t: 3.4,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
