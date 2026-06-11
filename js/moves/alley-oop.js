export default {
  id: 'alley-oop',
  name: 'Alley-Oop',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    '0GACKQ9ED4Y',
  youtubeStart: 0,
  description: 'Dive pababa papalapit sa isang obstacle, tapos PUNCH throttle sa pinakailalim para mag-arc paitaas at mag-loop sa ibabaw nito — chop throttle sa inverted top, tapos pull through pababa.',
  tips: [
    'Mag-dive nang may sapat na bilis bago mag-punch — kailangan ng momentum',
    'I-time ang full throttle punch sa pinakamababang punto, kasabay ng pitch back',
    'Chop throttle sa inverted top — parehong principle ng power loop',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Dive' },
    { t: 1.0, label: 'Punch' },
    { t: 1.6, label: 'Climb' },
    { t: 2.2, label: 'Inverted' },
    { t: 2.8, label: 'Pull Thru' },
    { t: 3.5, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level cruise toward the obstacle
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive — pitch forward, ease throttle to gain speed downward
    { t: 0.4,  throttle: 0.45, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 0.7,  throttle: 0.40, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // PUNCH — full throttle + hard pitch back to start the upward arc
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 1.3,  throttle: 1.00, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    // Climbing through the loop
    { t: 1.6,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.90, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted at the top — chop throttle
    { t: 2.2,  throttle: 0.30, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.10, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Pull through — ramp throttle, ease pitch toward level
    { t: 2.8,  throttle: 0.45, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    { t: 3.1,  throttle: 0.68, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    // Exit — level flight
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
