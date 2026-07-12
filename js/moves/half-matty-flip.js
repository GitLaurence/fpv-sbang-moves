export default {
  id: 'half-matty-flip',
  name: 'Half Matty Flip',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 2.5,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Reverse Split-S variant: ibaba ang throttle, mag-180° roll patungong inverted habang nagsisimula nang mag-pitch pull — nagtatapat ang roll at pitch sa halip na sunud-sunod, para sa mabilis, mababang-altitude na kalahating loop papunta sa kabaligtarang direksyon.',
  tips: [
    'Magsimula ng pitch pull bago pa man matapos ang roll — ang overlap ang susi sa clean rep',
    'Mababa ang throttle sa simula (~20%) para hindi masyadong lumaki ang loop',
    'Mas mababang altitude ang exit kumpara sa entry — dahil dito ito tinatawag na "half" flip',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll+Pitch' },
    { t: 0.9, label: 'Inverted Pull' },
    { t: 1.6, label: 'Exit Upright' },
    { t: 2.0, label: 'Recover' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle cut, begin roll to inverted
    { t: 0.3,  throttle: 0.20, yaw:  0.00, pitch:  0.00, roll:  0.85 },
    { t: 0.55, throttle: 0.22, yaw:  0.00, pitch: -0.35, roll:  1.00 },
    // Overlap: roll completing while pitch pull increases
    { t: 0.75, throttle: 0.28, yaw:  0.00, pitch: -0.75, roll:  0.60 },
    { t: 0.9,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.15 },
    // Pitch pull through the bottom half of the loop
    { t: 1.2,  throttle: 0.50, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    { t: 1.45, throttle: 0.60, yaw:  0.00, pitch: -0.35, roll:  0.00 },
    // Exit upright, opposite heading, lower altitude
    { t: 1.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
