export default {
  id: 'matty-flip',
  name: 'Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.2,
  description: 'Nose-down flip papunta sa inverted, tapos mag-roll pabalik sa upright. Signature move ni Matty Burton — mukhang malaki ang effect pero kaya ng lahat.',
  tips: [
    'Mag-pitch forward nang mabilis at decisively — huwag mag-hesitate sa input',
    'Kapag inverted ka na at naka-point pababa, agad na mag-roll ng 180°',
    'I-time ang throttle sa exit para hindi ka masyadong bumaba pagkatapos ng flip',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.8, label: 'Inverted' },
    { t: 1.1, label: 'Roll Out' },
    { t: 1.8, label: 'Upright' },
    { t: 2.4, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Aggressive pitch forward
    { t: 0.3,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.40, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Inverted / nose down — neutralise pitch
    { t: 0.85, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll 180° to get upright
    { t: 1.1,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.45, throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.7,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Upright — level out
    { t: 1.85, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — small back-stick to catch altitude loss
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 2.7,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
