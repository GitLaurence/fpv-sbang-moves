export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na sunod-sunod na roll, pitch flip, at yaw spin — parang martial arts combo. Pangalan mula sa snappy at explosive na pakiramdam ng bawat transition.',
  tips: [
    'Bawat element (roll, flip, yaw spin) ay dapat full snap input tapos agad bumalik sa center',
    'Pansinin ang throttle management sa pagitan ng mga elemento para hindi mawalan ng altitude',
    'Mag-practice ng roll, pitch flip, at yaw spin nang hiwalay bago pagsamahin sa combo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Flip' },
    { t: 1.3, label: 'Pitch Flip' },
    { t: 2.1, label: 'Yaw Snap' },
    { t: 3.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Full 360° roll flip
    { t: 0.4,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.8,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Forward pitch flip
    { t: 1.3,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Quick flat yaw spin snap
    { t: 2.1,  throttle: 0.60, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.62, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
