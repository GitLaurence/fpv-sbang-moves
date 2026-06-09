export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature move ni headmazta (Mazta): mabilis na throttle cut + pitch-back snap para "i-freeze" ang quad → explosive throttle blast pataas → pitch-forward dive → dramatic pull-out sa ibaba. Ang trajectory ay parang bounce ball sa himpapawid — timing at precision ang lahat.',
  tips: [
    'Ang "dead stop" sa stall phase ay pinakamahalaga — dapat halos ma-freeze ang drone bago ang blast',
    'Ang throttle blast pagkatapos ng stall ay FULL power — huwag mag-hesitate, kailangan ng lakas',
    'Ang pull-out sa dulo ay dapat malapit sa lupa para mas dramatic ang dating ng Mazta Bounce',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.4,  label: 'Cut+Snap' },
    { t: 0.8,  label: 'Dead Stop' },
    { t: 1.1,  label: 'Blast Up' },
    { t: 1.6,  label: 'Top' },
    { t: 1.85, label: 'Pitch Fwd' },
    { t: 2.3,  label: 'Dive' },
    { t: 2.9,  label: 'Pull Out' },
    { t: 3.4,  label: 'Exit' },
  ],
  keyframes: [
    { t: 0.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // THROTTLE CUT + PITCH BACK — snap stall
    { t: 0.4,  throttle: 0.08, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.04, yaw:  0.00, pitch: -0.75, roll:  0.00 },
    // DEAD STOP — stall, all sticks center
    { t: 0.8,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.95, throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BLAST — explosive full throttle + nose-up for vertical launch
    { t: 1.1,  throttle: 1.00, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 1.3,  throttle: 1.00, yaw:  0.00, pitch: -0.35, roll:  0.00 },
    // TOP — ease throttle, nose to level
    { t: 1.58, throttle: 0.48, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH FORWARD — nose over into dive, cut throttle
    { t: 1.85, throttle: 0.22, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.18, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    // DIVE — nose-down, low throttle
    { t: 2.4,  throttle: 0.16, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // PULL OUT — aggressive pitch back + throttle to arrest dive
    { t: 2.75, throttle: 0.65, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.05, throttle: 0.78, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    // Exit
    { t: 3.35, throttle: 0.70, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 3.65, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
