export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.4,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Pitch forward papuntang inverted, tapos "delay" — dead stick muna habang inverted bago ituloy ang pitch para makumpleto ang 540° (1.5 loop) na rotation pabalik sa upright.',
  tips: [
    'Ang delay ay literal na pause habang fully inverted — huwag agad ituloy ang pitch',
    'Panatilihing steady ang throttle habang nasa delay para hindi bumagsak',
    'Pagkatapos ng delay, ituloy ang parehong direksyon ng pitch — hindi reverse — para makumpleto ang 540°',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.2,  label: 'Delay' },
    { t: 1.9,  label: 'Continue' },
    { t: 2.5,  label: 'Pull Out' },
    { t: 3.0,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH FWD — snap pitch forward to begin the front flip (180°)
    { t: 0.35, throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.65, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — first 180° complete, fully upside down
    { t: 0.9,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DELAY — dead stick, hold inverted, brief float
    { t: 1.2,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CONTINUE — resume forward pitch for the remaining 360° (total 540°)
    { t: 1.9,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PULL OUT — ease pitch back to level on the upright pass
    { t: 2.5,  throttle: 0.72, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 2.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
