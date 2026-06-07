export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Forward flip na may yaw snap sa pinaka-inverted na punto — pitch forward papunta sa inverted, snap ng yaw sa rurok, tapos pitch-back palabas. Ang resulta ay parang "pirouette kick" sa ere.',
  tips: [
    'Ang yaw snap ay dapat eksaktong nasa pinaka-inverted na posisyon — ang timing ay susi',
    'Mabilis at decisive ang yaw — kalahating segundo lang ang target para sa yaw segment',
    'Mahalaga ang throttle management para hindi mawalan ng altitude sa buong maneuver',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.88, label: 'Inverted' },
    { t: 1.0, label: 'Yaw Snap' },
    { t: 1.45, label: 'Pitch Back' },
    { t: 2.0, label: 'Recovery' },
  ],
  keyframes: [
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Aggressive pitch forward to begin front flip
    { t: 0.30, throttle: 0.72, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 0.55, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.80, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED + YAW snap at the peak — the signature element
    { t: 0.92, throttle: 0.90, yaw:  1.00, pitch:  0.80, roll:  0.00 },
    { t: 1.10, throttle: 0.88, yaw:  1.00, pitch:  0.45, roll:  0.00 },
    { t: 1.28, throttle: 0.80, yaw:  0.20, pitch:  0.15, roll:  0.00 },
    // Pitch back — nose arcing back down to level
    { t: 1.45, throttle: 0.72, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 1.65, throttle: 0.70, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
