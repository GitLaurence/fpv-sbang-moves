export default {
  id: 'alley-oop',
  name: 'Alley-Oop',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.2,
  youtubeId:    '0GACKQ9ED4Y',
  youtubeStart: 0,
  description: 'Climb pataas papunta sa vertical, mag-flip pabalik sa itaas, tapos pull through pababa — parang power loop pero nagsisimula sa isang matarik na akyat sa lugar. Magandang transition move papasok sa mas malalaking combo.',
  tips: [
    'I-establish ang steep climb bago mag-flip — huwag mag-roll/pitch hangga\'t hindi stable ang pag-akyat',
    'CHOP ang throttle sa pinakatuktok bago mag-flip para hindi sumobra ang altitude',
    'Pitch pull-through pababa ay dapat sustained, hindi biglaan, para malinis ang arc pabalik sa level',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Climb' },
    { t: 1.4, label: 'Chop' },
    { t: 1.7, label: 'Flip' },
    { t: 2.3, label: 'Inverted' },
    { t: 3.1, label: 'Pull Thru' },
    { t: 4.2, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level flight, building speed
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Climb — pitch up to near-vertical, throttle high
    { t: 0.4,  throttle: 0.95, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.9,  throttle: 0.95, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 1.4,  throttle: 0.90, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    // Chop throttle near the top — slows the climb
    { t: 1.55, throttle: 0.20, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    // Flip — continue pitch to roll over the top, inverted
    { t: 1.7,  throttle: 0.15, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.15, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted at the apex — brief hold
    { t: 2.3,  throttle: 0.30, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.40, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Pull through — sustained pitch carries nose down and around
    { t: 2.8,  throttle: 0.60, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.1,  throttle: 0.75, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    // Easing back to level
    { t: 3.5,  throttle: 0.70, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 3.9,  throttle: 0.66, yaw:  0.00, pitch: -0.05, roll:  0.00 },
    // Exit — level cruise, same heading as entry
    { t: 4.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
