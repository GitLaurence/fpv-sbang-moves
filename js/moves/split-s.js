export default {
  id: 'split-s',
  name: 'Split-S',
  level: 'beginner',
  difficulty: 2,
  durationSec: 3.5,
  youtubeId:    'N1YRL3P7wVA',
  youtubeStart: 0,
  description: 'Half-roll papunta sa inverted, tapos mag-pull para sa pababang half-loop. Nagbabago ng direksyon habang bumababa ng altitude — kailangan ng 15-20m clearance.',
  tips: [
    'CUT ang throttle sa roll phase (30%) — mapipigilan ang pag-climb habang nag-iinverted',
    'Sustained na pull pagkatapos ng invert — hindi jab, kundi patuloy na input',
    'I-ramp ang throttle pabalik habang lumalabas — 70-80% sa exit para hindi masyadong bumaba',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.25, label: 'Pull' },
    { t: 2.7,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted — CUT throttle to ~35%, full roll snap
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.88, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    // Fully inverted — center roll stick
    { t: 1.0,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull — sustained pitch back arcs nose through bottom of the S
    { t: 1.25, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.48, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.1,  throttle: 0.62, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    // Approaching level — ramp throttle to 75% to arrest descent on exit
    { t: 2.5,  throttle: 0.75, yaw:  0.00, pitch: -0.22, roll:  0.00 },
    // Exit — now flying opposite heading
    { t: 2.8,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
