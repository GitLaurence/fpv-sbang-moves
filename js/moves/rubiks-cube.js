export default {
  id: 'rubiks-cube',
  name: "Rubik's Cube",
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'y5ZnxXhxNiM',
  youtubeStart: 0,
  description: 'Sabay na full roll + full yaw spin — ang drone ay tumutumba sa maraming axis nang sabay-sabay, na parang Rubik\'s Cube na umiikot sa ere. Kailangan ng precise na timing at mabilis na input switching.',
  tips: [
    'Sabay ang roll at yaw input — pareho full deflection sa parehong oras',
    'Ang throttle ay dapat consistent sa buong rotation — huwag mag-cut o mag-punch',
    'Mag-practice sa mataas na altitude muna — maraming room for error ang kailangan',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Initiate' },
    { t: 1.0, label: 'Cube 1' },
    { t: 2.0, label: 'Cube 2' },
    { t: 3.0, label: 'Exit Rot' },
    { t: 3.8, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip for energy, then initiate simultaneous roll + yaw
    { t: 0.5,  throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Full roll + full yaw — the "cube" rotation begins
    { t: 0.7,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.52, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    // Sustain the multi-axis rotation — maintain both inputs
    { t: 1.4,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 1.8,  throttle: 0.52, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    // Second full rotation
    { t: 2.2,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 2.6,  throttle: 0.52, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    // Begin exit — release yaw first, then roll
    { t: 3.0,  throttle: 0.55, yaw:  0.50, pitch:  0.00, roll:  0.80 },
    { t: 3.2,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Level out
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
