export default {
  id: 'half-matty-flip',
  name: 'Half Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 2.6,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Kalahati ng Matty Flip — magkasabay (overlap) ang roll at pitch-back papunta sa inverted, tapos deretsong pull palabas sa kabilang direksyon. Kilala rin bilang "Reverse Split-S" dahil magkatulad ang exit sa Split-S pero magkaiba ang stick technique papasok.',
  tips: [
    'I-overlap ang roll at pitch input — huwag hintayin munang matapos ang buong roll bago mag-pitch pull',
    'Cut throttle sa mababang antas bago pumasok sa roll para hindi masyadong tumaas ang drone',
    'Mas mababa ang exit altitude kumpara sa entry — mas mabilis ang transition kaysa regular na Split-S',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Roll+Pitch' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.25, label: 'Pull Through' },
    { t: 2.15, label: 'Exit' },
    { t: 2.4,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Cut throttle, begin roll+pitch overlap — roll leads
    { t: 0.35, throttle: 0.20, yaw:  0.00, pitch: -0.20, roll:  0.70 },
    { t: 0.55, throttle: 0.20, yaw:  0.00, pitch: -0.55, roll:  1.00 },
    // Roll completing to inverted while pitch pull continues (overlap tail)
    { t: 0.75, throttle: 0.24, yaw:  0.00, pitch: -0.85, roll:  0.90 },
    { t: 0.9,  throttle: 0.26, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Sustained pull through the bottom half-loop
    { t: 1.25, throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.48, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 1.9,  throttle: 0.62, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Exit — opposite heading, lower altitude
    { t: 2.15, throttle: 0.72, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 2.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
