export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Sunod-sunod na throttle chop at punch habang tuloy-tuloy ang forward flight — para bang "bumabaybay" ang quad sa hangin. Bawat bounce ay may sariling rhythm: cut, dip, catch, climb.',
  tips: [
    'Gawing consistent ang rhythm ng bawat bounce — parehong duration ang chop at ang catch',
    'Huwag galawin ang pitch/roll habang nagbo-bounce — throttle lang ang gumagalaw',
    'Mas malaking throttle swing, mas malalim at mas dramatic ang bounce',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Dip 1' },
    { t: 0.9, label: 'Bounce 1' },
    { t: 1.6, label: 'Dip 2' },
    { t: 2.1, label: 'Bounce 2' },
    { t: 2.8, label: 'Dip 3' },
    { t: 3.3, label: 'Bounce 3' },
    { t: 3.7, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIP 1 — chop throttle, let it sink
    { t: 0.4,  throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.65, throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — punch to catch and rebound
    { t: 0.9,  throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIP 2
    { t: 1.6,  throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.85, throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 2
    { t: 2.1,  throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.35, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIP 3
    { t: 2.8,  throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.05, throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 3
    { t: 3.3,  throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
