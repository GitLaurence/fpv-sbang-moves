export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may "hang time" — i-pitch papunta sa inverted, i-hold doon nang ilang sandali (ang "delay"), tapos ituloy ang pitch para makumpleto ang extra 180° (540° total). Mas dramatic kaysa sa regular flip dahil sa pause sa gitna.',
  tips: [
    'I-pitch forward hanggang inverted, tapos AGAD na bawasan ang throttle para "mag-hang" doon',
    'Habang naka-hang, manatiling steady ang pitch — huwag agad ituloy ang rotation',
    'Pagkatapos ng delay, ituloy ang pitch input para makumpleto ang extra kalahating ikot bago mag-recover',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pitch Fwd' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.4, label: 'Delay' },
    { t: 2.2, label: 'Continue' },
    { t: 3.0, label: 'Extra 180' },
    { t: 3.5, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward — begin first 360°
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.48, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — arrive at the hang point
    { t: 1.0,  throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — chop throttle, hold pitch steady, "hang" inverted
    { t: 1.4,  throttle: 0.22, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.8,  throttle: 0.20, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 2.2,  throttle: 0.22, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Continue pitch — resume rotation through 360°
    { t: 2.5,  throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Extra 180° — punch through the final half-rotation to 540°
    { t: 3.0,  throttle: 0.80, yaw:  0.00, pitch:  0.65, roll:  0.00 },
    { t: 3.25, throttle: 0.72, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 3.5,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
