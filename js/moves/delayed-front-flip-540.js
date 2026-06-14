export default {
  id: 'delayed-front-flip-540',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may dagdag na yaw input para gumawa ng 540° na rotation (isa at kalahating ikot) sa halip na 360°. Habang inverted, "delayed" — i-hold ang position bago tapusin ang dagdag na pag-ikot.',
  tips: [
    'Magsimula tulad ng normal na Matty Flip — pitch forward papunta sa inverted',
    'Habang inverted, i-hold ang position at dagdagan ang yaw input para sa extra 180°',
    'Huwag mag-rush sa "delay" — ang clean hold habang inverted ang gumagawa ng move na tila controlled',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.6, label: 'Pitch Fwd' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.5, label: 'Delay' },
    { t: 1.9, label: 'Extra Yaw' },
    { t: 2.4, label: 'Pull Out' },
    { t: 3.0, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward into the front flip, slight yaw begins
    { t: 0.4,  throttle: 0.72, yaw:  0.20, pitch:  0.75, roll:  0.00 },
    { t: 0.6,  throttle: 0.80, yaw:  0.35, pitch:  1.00, roll:  0.00 },
    // Inverted — throttle punch through the top
    { t: 1.0,  throttle: 1.00, yaw:  0.50, pitch:  1.00, roll:  0.00 },
    // DELAY — hold inverted, throttle chopped, yaw carries the extra rotation
    { t: 1.5,  throttle: 0.30, yaw:  0.85, pitch:  0.35, roll:  0.00 },
    { t: 1.7,  throttle: 0.28, yaw:  0.90, pitch:  0.25, roll:  0.00 },
    // Extra yaw completes the additional 180° toward 540° total
    { t: 1.9,  throttle: 0.45, yaw:  0.70, pitch:  0.45, roll:  0.00 },
    { t: 2.15, throttle: 0.60, yaw:  0.30, pitch:  0.30, roll:  0.00 },
    // Pull out to level
    { t: 2.4,  throttle: 0.70, yaw:  0.10, pitch:  0.10, roll:  0.00 },
    { t: 2.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
