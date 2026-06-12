export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 2.6,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Double snap-roll "kick" combo — mabilis na roll pakanan, dead stop, tapos biglang kabaligtaran na roll pakaliwa na may yaw kick. Parang martial-arts kick ang bilis ng reversal.',
  tips: [
    'Full snap ang unang roll — huwag i-ease, dapat instant ang punta sa max roll',
    'Ang dead stop sa gitna ay maikli lang — huwag tumagal, dapat parang "bounce" pabalik',
    'Idagdag ang yaw kick kasabay ng pangalawang roll para sa "sipa" na sensation',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll R' },
    { t: 0.65, label: 'Dead Stop' },
    { t: 0.85, label: 'Kick L' },
    { t: 1.3, label: 'Roll Out' },
    { t: 1.7, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll right — full deflection, quick chop on throttle
    { t: 0.3,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.5,  throttle: 0.48, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — brief snap back to center, inverted
    { t: 0.65, throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // KICK — reverse snap roll with yaw kick mixed in
    { t: 0.85, throttle: 0.55, yaw: -0.60, pitch:  0.00, roll: -1.00 },
    { t: 1.05, throttle: 0.58, yaw: -0.30, pitch:  0.00, roll: -1.00 },
    // Roll out back to upright
    { t: 1.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll: -0.50 },
    { t: 1.5,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 1.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
