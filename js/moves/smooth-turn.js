export default {
  id: 'smooth-turn',
  name: 'Smooth Turn',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.6,
  youtubeId:    'lyo5ffYpOIE',
  youtubeStart: 0,
  description: 'Coordinated na pag-ikot gamit ang roll at yaw nang sabay — hindi purong yaw lang (na nagdudulot ng "flat" at hindi natural na pag-ikot). Pundasyon ng lahat ng smooth freestyle lines, kailangang matutunan bago ang mas advanced na moves.',
  tips: [
    'Ilagay ang roll bago pa umikot ang yaw — ang roll ang unang input, sinusundan lang ng yaw',
    'Gamitin lang ang kalahati ng deflection para sa isang mahinahong, kontroladong turn',
    'Panatilihing pare-pareho ang throttle sa buong turn — huwag hayaang bumaba ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Bank' },
    { t: 0.9, label: 'Turn' },
    { t: 1.8, label: 'Level Out' },
    { t: 2.3, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Bank into the turn — roll first, small lead before yaw joins
    { t: 0.4,  throttle: 0.63, yaw:  0.00, pitch:  0.10, roll:  0.45 },
    { t: 0.65, throttle: 0.64, yaw:  0.25, pitch:  0.10, roll:  0.45 },
    // Coordinated turn — roll and yaw held together
    { t: 0.9,  throttle: 0.65, yaw:  0.35, pitch:  0.10, roll:  0.45 },
    { t: 1.3,  throttle: 0.65, yaw:  0.35, pitch:  0.10, roll:  0.45 },
    { t: 1.6,  throttle: 0.65, yaw:  0.30, pitch:  0.10, roll:  0.40 },
    // Level out — roll and yaw ease together
    { t: 1.8,  throttle: 0.63, yaw:  0.12, pitch:  0.08, roll:  0.15 },
    { t: 2.05, throttle: 0.62, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Exit — resume level flight
    { t: 2.3,  throttle: 0.62, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
