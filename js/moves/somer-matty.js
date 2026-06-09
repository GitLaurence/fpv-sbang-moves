export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pinagsama ng Sommersault at Matty Flip — buong forward rotation (somersault) na diretso sa Matty Flip exit. Dalawang trick sa iisang fluid motion: sustained 360° forward pitch flip na may throttle punch sa ibaba para sa dramatic inverted exit at roll-out.',
  tips: [
    'Ang somer bahagi ay sustained na pitch push para sa buong 360° rotation — huwag bitawan ang input sa gitna',
    'Ang throttle punch sa ibaba ng somersault ay ang transition sa Matty Flip phase — timing ang susi',
    'Master ang Matty Flip at full power-loop pitch technique nang hiwalay bago pagsamahin',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.1, label: 'Somer Punch' },
    { t: 1.7, label: 'Full Rotation' },
    { t: 2.0, label: 'Matty Phase' },
    { t: 2.3, label: 'Inverted 2' },
    { t: 2.6, label: 'Roll Out' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMMERSAULT — full pitch push, sustained throttle through 360° arc
    { t: 0.4,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.88, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // First inverted — throttle punch to shoot through (somer → matty transition)
    { t: 1.05, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.3,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Through full rotation — sustained pitch
    { t: 1.55, throttle: 0.88, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.8,  throttle: 0.75, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // Second inverted (Matty phase) — brief inverted hold before roll-out
    { t: 2.0,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.18, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll to exit upright
    { t: 2.3,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.55, throttle: 0.48, yaw:  0.00, pitch:  0.00, roll:  0.65 },
    { t: 2.72, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.9,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
