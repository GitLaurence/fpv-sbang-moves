export default {
  id: 'front-flip',
  name: 'Front Flip',
  level: 'beginner',
  difficulty: 2,
  durationSec: 2.5,
  youtubeId:    'YPjSWXFgHEQ',
  youtubeStart: 0,
  description: 'Buong 360° forward flip habang patuloy sa parehong posisyon — full pitch forward, mag-loop pasulong, tapos bumalik sa level. Pundasyon ng lahat ng flip/loop tricks.',
  tips: [
    'Full pitch forward, walang roll o yaw — purong single-axis rotation',
    'Maglagay ng konting throttle habang inverted para hindi bumagsak ang altitude',
    'Mag-ease ng pitch papunta sa exit para hindi overshoot pabalik sa level',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.3,  label: 'Pitch Fwd' },
    { t: 0.75, label: 'Inverted' },
    { t: 1.25, label: 'Continue' },
    { t: 1.75, label: 'Recovery' },
    { t: 2.5,  label: 'Exit' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Push pitch full forward — begin the loop
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted at the top — small throttle bump to hold altitude
    { t: 0.75, throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.62, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Continue rotation — ease pitch as the nose comes around
    { t: 1.25, throttle: 0.65, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Back to level
    { t: 1.75, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.61, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
