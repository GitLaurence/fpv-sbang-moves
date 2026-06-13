export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may "delay" — mag-pause habang inverted bago ipasok ang roll na magdadagdag ng extra 180° (total 540°). Mas dramatic kaysa sa plain front flip dahil sa hold sa gitna.',
  tips: [
    'Mag-pause habang inverted bago ipasok ang roll — ito ang "delay" na nagbibigay drama sa trick',
    'I-maintain ang throttle (~65-70%) habang naka-inverted para hindi bumagsak ang altitude',
    'Mag-master muna ng regular front flip bago idagdag ang delay at roll',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip Start' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.3, label: 'Delay' },
    { t: 1.9, label: 'Roll Add' },
    { t: 2.5, label: 'Flip Out' },
    { t: 3.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip start — full pitch snap forward, throttle cut
    { t: 0.4,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — center pitch, raise throttle to hold altitude
    { t: 0.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Delay — hold inverted, sticks centered
    { t: 1.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll add — snap roll to add the extra 180°
    { t: 1.9,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.15, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Flip out — continue pitch to complete the rotation
    { t: 2.5,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.75, throttle: 0.55, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Recovery — upright, punch throttle to catch altitude loss
    { t: 3.0,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
