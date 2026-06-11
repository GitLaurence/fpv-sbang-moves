export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na combo ng roll snap, pitch flick, at yaw twist na sunod-sunod — mukhang parang nagtutumbling ang quad sa hangin. Kailangan ng mabilis na succession ng inputs nang walang pause.',
  tips: [
    'I-snap ang roll nang mabilis bago pa man matapos, agad nang i-flick ang pitch',
    'Walang dead stop sa pagitan ng roll at pitch flick — dapat tuloy-tuloy',
    'Tapusin ng yaw twist para idagdag ang "tumbling" na look',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Roll Snap' },
    { t: 0.85, label: 'Pitch Flick' },
    { t: 1.5, label: 'Yaw Twist' },
    { t: 2.2, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll snap — fast full roll, throttle eased
    { t: 0.35, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Pitch flick — overlaps roll completion, snap pitch forward
    { t: 0.85, throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.30 },
    { t: 1.05, throttle: 0.60, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.25, throttle: 0.55, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // Yaw twist — sharp yaw snap to finish the tumble
    { t: 1.5,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.75, throttle: 0.58, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.95, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle to level cruise
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
