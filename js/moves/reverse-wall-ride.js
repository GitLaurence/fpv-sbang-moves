export default {
  id: 'reverse-wall-ride',
  name: 'Reverse Wall Ride',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '2koGdcQ1XOU',
  youtubeStart: 0,
  description: 'Mag-bank papunta sa pader, tapos i-reverse ang pitch para "magpaakyat" pabalik habang patuloy na nakatutok ang camera sa pader. Kailangan ng tuloy-tuloy na yaw correction para hindi tumama.',
  tips: [
    'I-bank muna nang husto papunta sa pader bago mag-pitch backward — huwag sabay',
    'Maliit lang ang yaw input — ginagamit ito para i-track ang pader, hindi para paikutin ang drone',
    'Manatili sa parehong altitude — ang throttle ay nagco-compensate sa banked lift',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Bank' },
    { t: 0.7, label: 'Reverse' },
    { t: 1.0, label: 'Wall Ride' },
    { t: 2.8, label: 'Yaw Out' },
    { t: 3.4, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level forward flight toward the wall
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bank toward the wall — roll in, throttle up slightly to hold altitude
    { t: 0.3,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    { t: 0.5,  throttle: 0.70, yaw:  0.10, pitch: -0.10, roll:  0.75 },
    // Reverse pitch — bleed off forward speed, begin flying tail-first along the wall
    { t: 0.7,  throttle: 0.68, yaw:  0.20, pitch: -0.55, roll:  0.75 },
    { t: 0.9,  throttle: 0.66, yaw:  0.25, pitch: -0.60, roll:  0.75 },
    // Wall ride — sustained bank + reverse pitch + small yaw to track the wall
    { t: 1.0,  throttle: 0.65, yaw:  0.30, pitch: -0.55, roll:  0.75 },
    { t: 1.5,  throttle: 0.67, yaw:  0.30, pitch: -0.55, roll:  0.75 },
    { t: 2.0,  throttle: 0.65, yaw:  0.30, pitch: -0.55, roll:  0.75 },
    { t: 2.5,  throttle: 0.67, yaw:  0.30, pitch: -0.55, roll:  0.75 },
    // Yaw out — release pitch and yaw, begin rolling back to level
    { t: 2.8,  throttle: 0.65, yaw:  0.10, pitch: -0.20, roll:  0.55 },
    { t: 3.1,  throttle: 0.64, yaw:  0.00, pitch:  0.05, roll:  0.25 },
    // Recovery — level out back to cruise
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
