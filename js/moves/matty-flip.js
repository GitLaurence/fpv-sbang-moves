export default {
  id: 'matty-flip',
  name: 'Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Forward pitch flip sa ibabaw ng isang bagay — patuloy na pitch forward, tapos PUNCH throttle habang inverted para lumipas nang baligtad sa ilalim. Ginawa ni MattyStuntz (Matt Sherwood).',
  tips: [
    'PUSH pitch forward (hindi backward) — ang Matty Flip ay forward flip, hindi backflip',
    'Huwag hintayin ang fully inverted bago mag-throttle punch — magsimula habang papunta sa inverted',
    'Ang exit ay sa parehong direksyon — buong 360° ang loop, hindi 180°',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.0, label: 'Punch' },
    { t: 1.6, label: 'Pull Out' },
    { t: 2.0, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — moderate speed and altitude
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PUSH pitch forward aggressively — begin forward flip over/through object
    { t: 0.35, throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 0.6,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Continue pitching — approaching inverted
    { t: 0.85, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — full throttle punch to shoot forward/through under the object
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Past inverted, continuing forward pitch toward level
    { t: 1.4,  throttle: 0.82, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Pull out to level — ease throttle
    { t: 1.65, throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 2.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
