export default {
  id: 'coin-drop',
  name: 'Coin Drop',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.2,
  youtubeId:    'D5eDgwlrYi8',
  youtubeStart: 0,
  description: 'Inverted throttle-chop na "bumabagsak" na parang barya na paikot-ikot — roll inverted, chop throttle habang bahagyang paikot ang yaw sa pagbagsak, tapos catch bago pa tuluyang bumaba. Sbang-family trick na nangangailangan ng tapang sa throttle chop.',
  tips: [
    'I-chop ang throttle habang inverted at may bahagyang yaw drift — parang gulong ng barya na bumabagsak',
    'Huwag matakot sa altitude loss — kailangan ng sapat na bagsak bago mag-catch',
    'Ang catch ay dapat kasabay ng pag-roll pabalik sa upright para malinis ang recovery',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Inv' },
    { t: 0.8, label: 'Chop' },
    { t: 1.1, label: 'Coin Drop' },
    { t: 2.4, label: 'Catch' },
    { t: 2.9, label: 'Roll Out' },
    { t: 3.5, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to inverted
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // CHOP — throttle cut while inverted, slight yaw drift begins the "spin"
    { t: 0.8,  throttle: 0.04, yaw:  0.35, pitch:  0.00, roll:  0.00 },
    // COIN DROP — falling inverted with a lazy yaw spin, like a dropped coin
    { t: 1.1,  throttle: 0.04, yaw:  0.45, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.04, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.04, yaw:  0.45, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.04, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    // CATCH — throttle punch arrests the fall, yaw eases out
    { t: 2.4,  throttle: 0.70, yaw:  0.15, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out to upright
    { t: 2.9,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.15, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.45 },
    // Recover
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.85, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
