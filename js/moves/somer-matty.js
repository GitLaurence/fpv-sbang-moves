export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.2,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pinagsamang forward flip (Matty Flip) at full barrel roll — habang papaikot sa pitch axis, sumasabay ang roll input para lumabas ang drone na parang gumugulong sa hangin. Mas mataas ang dulas kumpara sa plain Matty Flip.',
  tips: [
    'Simulan tulad ng Matty Flip — pitch forward hanggang malapit sa inverted',
    'Pagdating sa inverted, idagdag ang roll input habang paunti-unting bumababa ang pitch',
    'I-time ang exit para parehong umabot sa zero ang pitch at roll nang sabay',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.8, label: 'Inverted' },
    { t: 1.0, label: 'Roll In' },
    { t: 1.6, label: 'Roll Out' },
    { t: 2.2, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward toward inverted
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.55, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — full throttle punch
    { t: 0.8,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Roll in — blend roll while pitch eases off
    { t: 1.0,  throttle: 0.90, yaw:  0.00, pitch:  0.50, roll:  0.80 },
    { t: 1.3,  throttle: 0.75, yaw:  0.00, pitch:  0.20, roll:  1.00 },
    // Roll out — ease back to upright
    { t: 1.6,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
