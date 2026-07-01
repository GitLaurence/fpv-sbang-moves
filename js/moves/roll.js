export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.2,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Full 360° na aileron roll — ang pundasyon ng lahat ng freestyle moves. Kailangan ng full commitment sa roll stick at maliit na throttle burst habang inverted para hindi bumagsak ang altitude.',
  tips: [
    'I-commit ang full roll deflection — ang "chicken out" sa gitna ng roll ang sanhi ng half-roll',
    'Magdagdag ng maliit na throttle burst habang dumadaan sa inverted para mapanatili ang altitude',
    'Manatiling steady ang pitch — ang purong roll lang ang dapat gumagalaw',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Start' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.5, label: 'Roll Out' },
    { t: 1.9, label: 'Level' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Full commit roll input
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Passing inverted — throttle burst to hold altitude
    { t: 0.9,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.1,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Continue roll back to upright
    { t: 1.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    { t: 1.8,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.05 },
    // Level out
    { t: 1.9,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
