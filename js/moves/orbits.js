export default {
  id: 'orbits',
  name: 'Orbits',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.5,
  youtubeId:    'XJDBezfCwyY',
  youtubeStart: 0,
  description: 'Mag-circle sa paligid ng isang subject habang naka-bank — sustained roll at yaw na pareho ang halaga para sa consistent na radius. Classic na cinematic shot para sa freestyle videos.',
  tips: [
    'Pantay ang roll at yaw input — ang ratio nito ang nagdidikta ng radius ng orbit',
    'Dagdagan ang throttle habang naka-bank dahil mababawasan ang vertical lift',
    'I-adjust ang pitch para baguhin ang distansya sa subject — mas malaking pitch back, mas malawak ang orbit',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Bank In' },
    { t: 1.5, label: 'Orbit' },
    { t: 2.7, label: 'Orbit' },
    { t: 3.6, label: 'Roll Out' },
    { t: 4.0, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bank in — combined roll and yaw to begin circling, slight pitch back to set radius
    { t: 0.4,  throttle: 0.68, yaw:  0.35, pitch: -0.05, roll:  0.45 },
    { t: 0.9,  throttle: 0.70, yaw:  0.35, pitch: -0.08, roll:  0.45 },
    // Sustained orbit — hold roll/yaw ratio constant
    { t: 1.5,  throttle: 0.70, yaw:  0.35, pitch: -0.05, roll:  0.45 },
    { t: 2.1,  throttle: 0.69, yaw:  0.35, pitch: -0.08, roll:  0.45 },
    { t: 2.7,  throttle: 0.70, yaw:  0.35, pitch: -0.05, roll:  0.45 },
    { t: 3.3,  throttle: 0.69, yaw:  0.35, pitch: -0.05, roll:  0.45 },
    // Roll out — ease everything back to level
    { t: 3.6,  throttle: 0.65, yaw:  0.10, pitch:  0.00, roll:  0.15 },
    { t: 3.85, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — resume level cruise
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
