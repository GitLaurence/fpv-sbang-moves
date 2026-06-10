export default {
  id: 'boomerang',
  name: 'Boomerang',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'cEqJj62f8iY',
  youtubeStart: 0,
  description: 'Power loop na pinapabalik sa parehong arc — umakyat sa loop, tapos sa tuktok ay i-reverse ang pitch para bumalik sa parehong landas papuntang entry point. Kapansin-pansin ang perfect timing dahil parang "boomerang" na bumalik sa pinanggalingan.',
  tips: [
    'Full pull pataas tulad ng power loop, pero huwag tapusin ang buong loop',
    'Sa tuktok, i-reverse agad ang pitch papuntang likod-direksyon para sumunod sa parehong arc pababa',
    'Kailangan ng symmetric throttle control papunta at pabalik para magmukhang isang tuloy-tuloy na curve',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pull Up' },
    { t: 1.4, label: 'Apex' },
    { t: 1.8, label: 'Reverse' },
    { t: 2.8, label: 'Return Arc' },
    { t: 3.4, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PULL UP — full throttle, full pitch back into the loop
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.85, throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.15, throttle: 0.90, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    // APEX — inverted at the top, ease throttle, brief hold
    { t: 1.4,  throttle: 0.55, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 1.6,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REVERSE — pitch flips opposite, retracing the arc backward
    { t: 1.8,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.78, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    // RETURN ARC — coming back down through the same path
    { t: 2.8,  throttle: 0.85, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 3.1,  throttle: 0.80, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Exit — level out facing original direction
    { t: 3.4,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
