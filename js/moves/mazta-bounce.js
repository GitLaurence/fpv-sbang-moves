export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Controlled dive pababa, tapos mabilis na "bounce" gamit ang throttle punch + pitch reversal para parang tumalbog ang drone, tapos rewind pataas sa apex. Kailangan ng malaking clearance pababa.',
  tips: [
    'Mag-dive muna sa controlled rate — kontrolin ang descent bago ang bounce',
    'Ang bounce ay mabilis na throttle punch kasabay ng pitch reversal — hindi gradual, kundi snap',
    'I-practice nang mataas ang altitude — madaling mawala ang control sa dive kung masyadong mabilis',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Dive' },
    { t: 1.0, label: 'Bottom' },
    { t: 1.2, label: 'Bounce' },
    { t: 1.7, label: 'Rewind Up' },
    { t: 2.4, label: 'Apex' },
    { t: 2.8, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive — pitch forward, throttle reduced
    { t: 0.3,  throttle: 0.40, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 0.7,  throttle: 0.38, yaw:  0.00, pitch:  0.65, roll:  0.00 },
    // Bottom — approaching the ground
    { t: 1.0,  throttle: 0.35, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // Bounce — throttle punch + pitch reversal snap
    { t: 1.2,  throttle: 1.00, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    { t: 1.4,  throttle: 0.95, yaw:  0.00, pitch: -0.75, roll:  0.00 },
    // Rewind up — ease toward level
    { t: 1.7,  throttle: 0.80, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 2.0,  throttle: 0.70, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Apex — leveling out
    { t: 2.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
