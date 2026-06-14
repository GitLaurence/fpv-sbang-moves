export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.6,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na throttle chop at punch habang naka-pitch forward — parang "bouncing" na bola na tumatalon papunta sa harap. Kailangan ng tight na rhythm sa throttle at pitch.',
  tips: [
    'Maging consistent ang bawat bounce — parehong lakas ng chop at punch sa bawat ikot',
    'Manatili sa parehong pitch angle sa buong combo para straight ang flight path',
    'Mag-warm up muna sa Stall bago subukan ang Mazta Bounce — parehong throttle control na ginagamit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Bounce 1 Chop' },
    { t: 0.8, label: 'Bounce 1 Punch' },
    { t: 1.4, label: 'Bounce 2 Chop' },
    { t: 1.7, label: 'Bounce 2 Punch' },
    { t: 2.3, label: 'Bounce 3 Chop' },
    { t: 2.6, label: 'Bounce 3 Punch' },
    { t: 3.2, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight with slight pitch
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Bounce 1 — chop then punch
    { t: 0.5,  throttle: 0.15, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 0.8,  throttle: 0.85, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 1.1,  throttle: 0.50, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Bounce 2 — chop then punch
    { t: 1.4,  throttle: 0.15, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 1.7,  throttle: 0.85, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 2.0,  throttle: 0.50, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Bounce 3 — chop then punch
    { t: 2.3,  throttle: 0.15, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 2.6,  throttle: 0.85, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 2.9,  throttle: 0.55, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    // Exit — level out
    { t: 3.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
