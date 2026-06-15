export default {
  id: 'barani',
  name: 'Barani',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Front flip na pinagsasabay ng roll — diagonal na combo rotation kaya iba ang exit angle kumpara sa straight flip o straight roll. Kailangan ng tamang timing ng pitch at roll para mag-blend nang maayos ang dalawang axis.',
  tips: [
    'Sabay-sabay ang pitch at roll input — hindi sunod-sunod, kundi naka-blend mula sa simula',
    'Mag-cut ng throttle habang nag-iikot para mabilis ang rotation at hindi lumiit ang radius',
    'Mag-throttle punch sa exit para mabawi ang altitude na nawala sa rotation',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.45, label: 'Combo Start' },
    { t: 0.85, label: 'Diagonal Inv' },
    { t: 1.3, label: 'Roll Complete' },
    { t: 1.65, label: 'Exit Punch' },
    { t: 2.2, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Combo start — pitch forward and roll begin together, throttle cut
    { t: 0.45, throttle: 0.30, yaw:  0.00, pitch:  0.85, roll:  0.65 },
    { t: 0.65, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.85 },
    // Diagonal inverted point — both axes near max through the midpoint
    { t: 0.85, throttle: 0.27, yaw:  0.00, pitch:  0.70, roll:  1.00 },
    { t: 1.05, throttle: 0.30, yaw:  0.00, pitch:  0.35, roll:  1.00 },
    // Roll completes while pitch eases out
    { t: 1.3,  throttle: 0.38, yaw:  0.00, pitch:  0.05, roll:  0.55 },
    { t: 1.5,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.15 },
    // Exit punch — throttle to regain altitude on the new heading
    { t: 1.65, throttle: 0.78, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 1.9,  throttle: 0.74, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Recovery to cruise
    { t: 2.2,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
