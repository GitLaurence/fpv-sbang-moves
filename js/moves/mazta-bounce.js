export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: "Signature trick ni headmazta — mabilis na throttle-chop dive na sinusundan ng aggressive na throttle punch sa pinakamababang punto para 'i-bounce' ang quad pabalik pataas. Ang timing ng bounce ay susi sa aesthetic.",
  tips: [
    'Mag-commit sa throttle chop — mas mabilis ang dive, mas dramatic ang bounce',
    'Ang throttle punch sa ibaba ay dapat mas malakas kaysa sa normal hover',
    'Maaaring dagdagan ng pitch snap sa bounce point para sa extra style',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Chop' },
    { t: 0.6, label: 'Dive' },
    { t: 1.4, label: 'Bounce' },
    { t: 1.8, label: 'Pull Up' },
    { t: 2.5, label: 'Recovery' },
  ],
  keyframes: [
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.30, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CHOP + pitch forward — sudden dive
    { t: 0.40, throttle: 0.08, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 0.60, throttle: 0.05, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.85, throttle: 0.05, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 1.10, throttle: 0.05, yaw:  0.00, pitch:  0.65, roll:  0.00 },
    { t: 1.30, throttle: 0.05, yaw:  0.00, pitch:  0.28, roll:  0.00 },
    // BOUNCE — aggressive throttle punch + pitch back
    { t: 1.40, throttle: 1.00, yaw:  0.00, pitch: -0.82, roll:  0.00 },
    { t: 1.60, throttle: 1.00, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 1.80, throttle: 0.90, yaw:  0.00, pitch: -0.58, roll:  0.00 },
    { t: 2.00, throttle: 0.80, yaw:  0.00, pitch: -0.22, roll:  0.00 },
    { t: 2.20, throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.50, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.00, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.50, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.00, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
