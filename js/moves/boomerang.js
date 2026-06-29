export default {
  id: 'boomerang',
  name: 'Boomerang',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'cEqJj62f8iY',
  youtubeStart: 0,
  description: 'Curved arc maneuver — lumipad pataas sa isang arko habang nag-yyaw, parang boomerang na bumabalik sa pinagmulan. Ang drone ay lumilipad sa curved path habang nakaharap sa parehong direksyon.',
  tips: [
    'Ang pitch back at yaw ay sabay na input — ang pitch ang nagpapataas, ang yaw ang nagpapaliko',
    'Huwag mag-full yaw — kaunting yaw lang (30-40%) para sa malinis na arko',
    'I-ramp ang throttle pataas sa tuktok ng arko at pababa sa exit',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Arc Start' },
    { t: 1.2, label: 'Climbing' },
    { t: 2.0, label: 'Apex' },
    { t: 2.8, label: 'Descend' },
    { t: 3.4, label: 'Exit' },
  ],
  keyframes: [
    // Approach — moderate speed forward
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin the arc — pitch back + yaw to curve the flight path
    { t: 0.5,  throttle: 0.82, yaw:  0.35, pitch: -0.60, roll:  0.00 },
    { t: 0.8,  throttle: 0.90, yaw:  0.38, pitch: -0.75, roll:  0.00 },
    // Climbing through the arc — maintain both inputs
    { t: 1.2,  throttle: 0.95, yaw:  0.40, pitch: -0.85, roll:  0.00 },
    { t: 1.6,  throttle: 0.92, yaw:  0.40, pitch: -0.80, roll:  0.00 },
    // Apex of the arc — throttle manages altitude at the top
    { t: 2.0,  throttle: 0.78, yaw:  0.38, pitch: -0.65, roll:  0.00 },
    // Descending arc — ease pitch, maintain yaw for full curve
    { t: 2.4,  throttle: 0.65, yaw:  0.35, pitch: -0.40, roll:  0.00 },
    { t: 2.8,  throttle: 0.60, yaw:  0.20, pitch: -0.15, roll:  0.00 },
    // Exit — release yaw, level out
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
