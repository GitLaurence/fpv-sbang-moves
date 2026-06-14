export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Sunod-sunod na throttle chop at catch — hayaan bumagsak ang quad nang kaunti, "i-bounce" pataas, tapos ulitin. Dalawang bounce bago mag-level out, parang tumatalbog sa hangin.',
  tips: [
    'Maikli at biglaan ang bawat chop — huwag tagalan, dapat parang "tap" lang ng throttle',
    'Pareho ang lakas ng dalawang bounce — consistent ang rhythm para mukhang sinasadya',
    'Centered ang pitch/roll/yaw sa buong move — ang throttle lang ang gumagalaw',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Bounce 1' },
    { t: 1.4, label: 'Bounce 2' },
    { t: 2.4, label: 'Level Out' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — steady hover/cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — quick chop down then punch back up
    { t: 0.4,  throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.12, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.85, throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.05, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 2 — repeat with the same rhythm
    { t: 1.4,  throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.12, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.85, throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.05, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Level out — settle back to cruise throttle
    { t: 2.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
