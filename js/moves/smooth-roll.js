export default {
  id: 'smooth-roll',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 3.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll na pinapanatiling level at smooth — walang biglaang stick movement. Pundasyon ng lahat ng advanced rolling combos.',
  tips: [
    'Isang continuous, even na roll input — huwag mag-stop-start sa kalagitnaan',
    'Dagdagan ng bahagya ang throttle habang inverted para mapanatili ang altitude',
    'Mag-praktis hanggang maging perfectly circular ang flight path kung titingnan mula sa labas',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll In' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.8, label: 'Roll Out' },
    { t: 2.4, label: 'Level' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.60, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.3,  throttle: 0.60, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Smooth roll in — even, continuous build
    { t: 0.4,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 0.60 },
    { t: 0.6,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 1.00 },
    // Inverted — slight throttle add + tiny pitch correction to hold altitude
    { t: 0.9,  throttle: 0.78, yaw: 0.00, pitch: -0.05, roll: 1.00 },
    { t: 1.3,  throttle: 0.78, yaw: 0.00, pitch: -0.05, roll: 1.00 },
    // Continue through to upright
    { t: 1.6,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll: 1.00 },
    { t: 1.8,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 0.60 },
    // Roll out — even deceleration back to center
    { t: 2.0,  throttle: 0.60, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 2.4,  throttle: 0.60, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 3.0,  throttle: 0.60, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
