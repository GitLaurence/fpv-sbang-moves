export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.2,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang magkasunod na forward pitch rotation nang walang release sa gitna — parang somersault na direktang nagpapatuloy papunta sa Matty Flip. Kailangan ng dalawang magkahiwalay na throttle punch sa bawat inverted point.',
  tips: [
    'Panatilihing naka-pin ang pitch forward sa pagitan ng dalawang rotation — huwag bibitawan',
    'I-time ang throttle punch sa BAWAT inverted point, hindi lang sa una',
    'Lumabas lang pagkatapos makumpleto ang PANGALAWANG rotation papuntang level',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Pitch 1' },
    { t: 0.75, label: 'Inv 1' },
    { t: 0.9,  label: 'Punch 1' },
    { t: 1.5,  label: 'Pitch 2' },
    { t: 1.9,  label: 'Inv 2' },
    { t: 2.05, label: 'Punch 2' },
    { t: 2.6,  label: 'Pull Out' },
    { t: 3.0,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // First rotation — pitch forward into flip
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 0.55, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH 1 — throttle punch at first inverted point
    { t: 0.9,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.95, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 1.3,  throttle: 0.80, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Feed directly into second rotation — pitch never releases to level
    { t: 1.5,  throttle: 0.78, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.7,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.88, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH 2 — throttle punch at second inverted point
    { t: 2.05, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.25, throttle: 0.95, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Pull out to level
    { t: 2.6,  throttle: 0.75, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
