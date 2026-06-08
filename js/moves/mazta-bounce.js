export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'beginner',
  difficulty: 2,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Trademark move ni headmazta — paulit-ulit na maliliit na throttle cut-and-catch na gumagawa ng "bouncing ball" na ritmo sa ere. Hindi tulad ng Stall na isang malalim na bagsak, mas mababaw at mas mabilis ang bawat bounce. Pundasyon para sa fine throttle control.',
  tips: [
    'Panatilihing magkakapareho ang bawat bounce — sabay ang amplitude at ang timing ng tatlong pag-ikot',
    'Mas mababaw ang cut kaysa Stall — hindi kumpletong free-fall, mabilis lang na "dip"',
    'Mag-master muna ng Stall — ang Mazta Bounce ay tatlong magkakasunod na maliliit na catch sa parehong ritmo',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Bounce 1' },
    { t: 1.5, label: 'Bounce 2' },
    { t: 2.6, label: 'Bounce 3' },
    { t: 3.7, label: 'Recovery' },
  ],
  keyframes: [
    // Hover entry
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — shallow dip, then catch
    { t: 0.4,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.8,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 2 — same rhythm, repeat
    { t: 1.5,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 3 — final repeat, same rhythm
    { t: 2.6,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to hover
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
