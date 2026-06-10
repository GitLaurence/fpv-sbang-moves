export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na throttle cut at punch — parang tumatalbog ang drone pataas-pababa nang dalawang beses bago mag-settle. Kailangan ng tamang timing para magmukhang fluid ang bounce, hindi robotic.',
  tips: [
    'Full cut throttle sa bawat bounce down — instant zero, hindi gradual',
    'Pareho dapat ang taas ng dalawang bounce para magmukhang consistent ang rhythm',
    'I-time ang throttle punch base sa bilis ng pagbagsak — mas mabilis bumagsak, mas maaga ang punch',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Bounce 1 Down' },
    { t: 0.85, label: 'Bounce 1 Up' },
    { t: 1.5,  label: 'Bounce 2 Down' },
    { t: 1.95, label: 'Bounce 2 Up' },
    { t: 2.4,  label: 'Settle' },
  ],
  keyframes: [
    // Entry — hover
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — chop throttle, free-fall
    { t: 0.4,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.65, throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Catch — punch throttle to bounce back up
    { t: 0.85, throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.05, throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Ease down for second bounce
    { t: 1.25, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 2 — chop throttle again
    { t: 1.5,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.75, throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Catch again
    { t: 1.95, throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.15, throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle back to hover
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
