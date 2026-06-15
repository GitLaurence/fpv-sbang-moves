export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 2.6,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Snappy combo: full roll sa isang direksyon, dead stop, sharp yaw kick, tapos full roll papuntang kabilang direksyon. Parang martial-arts "kick" ang dating — bawat input ay biglaan at decisive.',
  tips: [
    'Full deflection lang sa bawat roll — walang partial input',
    'Ang yaw kick sa gitna ay mabilis na snap, hindi hawak — bumalik agad sa center',
    'Magkasalungat ang direksyon ng dalawang roll — kanan tapos kaliwa (o vice versa)',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll R' },
    { t: 0.9, label: 'Dead Stop' },
    { t: 1.0, label: 'Yaw Kick' },
    { t: 1.4, label: 'Roll L' },
    { t: 1.9, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll right — snap full roll, slight throttle chop
    { t: 0.4,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — center roll
    { t: 0.9,  throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Yaw kick — sharp snap, immediate center
    { t: 1.0,  throttle: 0.50, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.15, throttle: 0.48, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll left — opposite full roll
    { t: 1.4,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 1.65, throttle: 0.42, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    // Recover to upright
    { t: 1.9,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
