export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na combo — full roll na direktang sinusundan ng forward flip, walang dead stop sa pagitan. Tuluy-tuloy ang dalawang rotation pabalik sa parehong heading. Pinangalanan sa bilis at flow ng mga spin, gaya ng galaw ni Jackie Chan.',
  tips: [
    'I-chain agad ang flip pagkatapos ng roll — walang pause sa pagitan, tuluy-tuloy ang momentum',
    'Throttle punch sa gitna ng flip para hindi bumagsak masyado pagkatapos ng dalawang rotation',
    'Mag-master muna ng hiwalay na full roll at front flip bago pagsamahin sa combo na ito',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Snap Roll' },
    { t: 0.75, label: 'Flip Fwd' },
    { t: 1.2,  label: 'Punch' },
    { t: 1.6,  label: 'Recover' },
    { t: 2.3,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll — full 360°, slight throttle cut
    { t: 0.3,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.55, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.20 },
    // Chain straight into forward flip — pitch full forward
    { t: 0.75, throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted midpoint — throttle punch to catch the second rotation
    { t: 1.2,  throttle: 0.85, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.4,  throttle: 0.78, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Recover to level
    { t: 1.6,  throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle to cruise
    { t: 2.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
