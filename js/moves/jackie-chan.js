export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Corkscrew power loop — sabay na pitch back at full roll na sustained sa buong loop, kaya umiikot ang quad habang umaarko paitaas at pababa. Mas mahirap i-coordinate kaysa regular power loop dahil patuloy na umiikot ang orientation.',
  tips: [
    'Pareho ang pitch at roll input — full deflection sa magkabilang stick nang sabay, walang pagpapahinga',
    'I-time ang throttle chop sa eksaktong oras na inverted ang quad sa taas ng loop',
    'I-release ang roll input bago i-release ang pitch sa exit, para hindi ka mawalan ng oryentasyon',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Corkscrew In' },
    { t: 1.6, label: 'Top/Chop' },
    { t: 2.6, label: 'Pull Thru' },
    { t: 3.4, label: 'Exit' },
  ],
  keyframes: [
    // High-speed approach
    { t: 0.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.92, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Corkscrew in — simultaneous full pitch back and full roll
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  1.00 },
    { t: 0.8,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  1.00 },
    // Through the climb — both inputs sustained
    { t: 1.2,  throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  1.00 },
    { t: 1.5,  throttle: 0.55, yaw:  0.00, pitch: -1.00, roll:  1.00 },
    // INVERTED at the top — chop throttle
    { t: 1.65, throttle: 0.06, yaw:  0.00, pitch: -1.00, roll:  1.00 },
    { t: 1.9,  throttle: 0.05, yaw:  0.00, pitch: -1.00, roll:  1.00 },
    // Coming back around, nose pointing down — ramp throttle, ease roll first
    { t: 2.2,  throttle: 0.32, yaw:  0.00, pitch: -1.00, roll:  0.55 },
    { t: 2.5,  throttle: 0.70, yaw:  0.00, pitch: -0.95, roll:  0.15 },
    // Pulling through bottom — roll fully released, pitch still back
    { t: 2.8,  throttle: 0.88, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    // Exit — ease pitch to level
    { t: 3.3,  throttle: 0.72, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 3.7,  throttle: 0.66, yaw:  0.00, pitch: -0.04, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
