export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 2.6,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Throttle cut habang nag-dive pababa, tapos sharp throttle punch para "bumounce" pataas — ulitin nang isang beses pa para sa rhythm. Parang batong tumatalbog sa tubig ang dating ng quad.',
  tips: [
    'Cut throttle nang mabilis sa simula ng dive — hayaan ang grav­ity na gumawa ng trabaho',
    'Ang punch pataas ay dapat sharp at maikli, hindi sustained — para sa "bounce" na pakiramdam',
    'Pantay ang dalawang bounce — parehong height drop at parehong throttle punch',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Dive 1' },
    { t: 0.7,  label: 'Bounce 1' },
    { t: 1.2,  label: 'Dive 2' },
    { t: 1.6,  label: 'Bounce 2' },
    { t: 2.1,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive 1 — throttle cut, slight nose-down to drop
    { t: 0.3,  throttle: 0.15, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 0.55, throttle: 0.18, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // Bounce 1 — sharp throttle punch, nose-up to spring back
    { t: 0.7,  throttle: 1.00, yaw:  0.00, pitch: -0.35, roll:  0.00 },
    { t: 0.9,  throttle: 0.85, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 1.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive 2 — repeat the drop
    { t: 1.2,  throttle: 0.15, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 1.45, throttle: 0.18, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // Bounce 2 — repeat the punch
    { t: 1.6,  throttle: 1.00, yaw:  0.00, pitch: -0.35, roll:  0.00 },
    { t: 1.8,  throttle: 0.85, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 1.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
