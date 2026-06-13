export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na "bounce" — chop throttle habang pitch forward para dive, tapos throttle punch kasabay ng pitch back para mag-arc pataas. Tulad ng bumabatak na bola, paulit-ulit ang rhythm bago settle.',
  tips: [
    'I-sync ang throttle chop sa pitch forward — sabay ang dalawa para sa malinis na dive',
    'Ang bawat "catch" ay full throttle punch + pitch back — saka unti-unting bumabawas ang intensity',
    'Mag-practice ng 2-3 bounces lang muna bago dagdagan ang bilang',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Dip 1' },
    { t: 1.1, label: 'Bounce 1' },
    { t: 1.7, label: 'Dip 2' },
    { t: 2.3, label: 'Bounce 2' },
    { t: 2.9, label: 'Dip 3' },
    { t: 3.5, label: 'Recover' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dip 1 — chop throttle + pitch forward to dive
    { t: 0.5,  throttle: 0.25, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 0.75, throttle: 0.20, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // Bounce 1 — throttle punch + pitch back to arc up
    { t: 1.1,  throttle: 1.00, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 1.35, throttle: 0.85, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    // Dip 2 — repeat, same intensity
    { t: 1.7,  throttle: 0.25, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 1.95, throttle: 0.20, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // Bounce 2
    { t: 2.3,  throttle: 1.00, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 2.55, throttle: 0.85, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    // Dip 3 — smaller, tapering off
    { t: 2.9,  throttle: 0.35, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 3.1,  throttle: 0.45, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // Recover — settle to level cruise
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
