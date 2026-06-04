export default {
  id: 'yaw-spin',
  name: '360° Yaw Spin',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 3.5,
  youtubeId:    'xB8kZMV1HGY',
  youtubeStart: 0,
  description: 'Buong 360° flat spin gamit ang yaw — ang drone ay paikot-ikot habang napapanatili ang altitude at forward momentum. Pangunahing trick para matuto ng yaw authority at throttle management.',
  tips: [
    'Mag-maintain ng constant throttle sa buong spin — ang altitude ay dapat hindi magbago',
    'Mag-ease ng pitch pasulong bago at pagkatapos ng spin para mapanatili ang forward momentum',
    'Full yaw input para sa mabilis at malinis na spin — huwag partial',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Begin Yaw' },
    { t: 1.0, label: '¼ Spin' },
    { t: 1.5, label: '½ Spin' },
    { t: 2.0, label: '¾ Spin' },
    { t: 2.5, label: 'Complete' },
    { t: 3.0, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Begin full yaw spin — small pitch back to reduce forward drift
    { t: 0.5,  throttle: 0.65, yaw:  1.00, pitch: -0.08, roll:  0.00 },
    { t: 0.85, throttle: 0.65, yaw:  1.00, pitch: -0.08, roll:  0.00 },
    // Through the spin — maintain yaw and altitude
    { t: 1.2,  throttle: 0.66, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    { t: 1.55, throttle: 0.65, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    { t: 1.9,  throttle: 0.66, yaw:  1.00, pitch: -0.08, roll:  0.00 },
    { t: 2.2,  throttle: 0.65, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    // Completing the 360° — ease yaw out
    { t: 2.5,  throttle: 0.65, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Exit — resume forward flight
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
  ],
};
