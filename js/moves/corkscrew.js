export default {
  id: 'corkscrew',
  name: 'Corkscrew',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.2,
  youtubeId:    'ti8pGuEvwbM',
  youtubeStart: 0,
  description: 'Sustained full roll habang patuloy na pasulong ang pitch — parang spiral o "screw" na dumudulas sa hangin sa halip na paikot lang sa isang lugar. Iba ito sa regular na roll dahil hindi ito static, may forward momentum ang buong maneuver.',
  tips: [
    'Panatilihing pantay ang forward pitch sa buong roll — huwag ito ihinto kahit inverted na',
    'Ang roll rate ay dapat mas mabagal at kontrolado kumpara sa isang snap roll — ramdam ang spiral',
    'Mag-throttle burst nang bahagya sa bawat inverted pass para hindi tuluyang bumagsak',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Roll In' },
    { t: 1.0, label: 'Spiral' },
    { t: 2.2, label: 'Roll Out' },
    { t: 2.7, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — carry forward speed
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // Roll in — sustained forward pitch begins the spiral
    { t: 0.35, throttle: 0.70, yaw:  0.00, pitch:  0.30, roll:  1.00 },
    { t: 0.65, throttle: 0.72, yaw:  0.00, pitch:  0.30, roll:  1.00 },
    // Spiral — continuous roll + forward pitch, throttle burst passing inverted
    { t: 1.0,  throttle: 0.85, yaw:  0.00, pitch:  0.30, roll:  1.00 },
    { t: 1.35, throttle: 0.75, yaw:  0.00, pitch:  0.30, roll:  1.00 },
    { t: 1.7,  throttle: 0.85, yaw:  0.00, pitch:  0.30, roll:  1.00 },
    { t: 2.0,  throttle: 0.75, yaw:  0.00, pitch:  0.25, roll:  1.00 },
    // Roll out — ease roll and pitch back to level
    { t: 2.2,  throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.45 },
    { t: 2.45, throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.05 },
    // Recovery
    { t: 2.7,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
