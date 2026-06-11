export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.6,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng backflip (somersault) na diretsong sumusunod sa Matty Flip (forward flip) — bigla na lang nag-rereverse ang pitch direction sa hangin, may throttle punch sa bawat inverted moment.',
  tips: [
    'Full pitch back muna para sa somersault — huwag kalahati lang',
    'Sa sandaling lumampas sa inverted, agad i-reverse sa full pitch forward para sa Matty Flip — walang pause',
    'Mag-throttle punch sa bawat inverted point para mapanatili ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Somer Pitch' },
    { t: 0.9, label: 'Inverted 1' },
    { t: 1.3, label: 'Reverse' },
    { t: 1.8, label: 'Inverted 2' },
    { t: 2.4, label: 'Pull Out' },
    { t: 2.9, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault — full pitch back into backflip
    { t: 0.35, throttle: 0.72, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.78, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted 1 — throttle punch to carry through
    { t: 0.9,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.1,  throttle: 1.00, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    // Reverse — snap pitch from back to forward, no pause
    { t: 1.3,  throttle: 0.85, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 1.55, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted 2 — Matty Flip portion, throttle punch again
    { t: 1.8,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.0,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Pull out to level
    { t: 2.4,  throttle: 0.78, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 2.65, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
