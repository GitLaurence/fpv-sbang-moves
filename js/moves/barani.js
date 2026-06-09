export default {
  id: 'barani',
  name: 'Barani',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Forward flip na sinasamahan ng 180° yaw twist — ang drone ay sumasalto pasulong habang bumabaling ng kalahating pabilog. Pinagsama ang pitch at yaw para sa isang fluid, twisting aerial maneuver na nagbabago ng heading sa bawat pagkakataon.',
  tips: [
    'Ang pitch at yaw inputs ay sabay — simulan ang yaw kasabay ng pitch push, hindi pagkatapos',
    'Ang dami ng yaw ay nagde-determine ng pag-ikot — half yaw = 90° turn, full = 180° heading change',
    'Pagsanay ng forward flip at yaw spin nang hiwalay bago pagsamahin sa Barani',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Pitch+Yaw' },
    { t: 0.9, label: 'Through Flip' },
    { t: 1.5, label: 'Inv+Yaw' },
    { t: 2.2, label: 'Complete' },
    { t: 2.8, label: 'Recovery' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Simultaneous pitch forward + yaw — begin Barani combination
    { t: 0.4,  throttle: 0.30, yaw:  1.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.28, yaw:  1.00, pitch:  1.00, roll:  0.00 },
    // Through forward flip — continuing both pitch and yaw
    { t: 1.0,  throttle: 0.26, yaw:  0.90, pitch:  1.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.25, yaw:  0.80, pitch:  0.90, roll:  0.00 },
    // Past inverted — yaw almost complete (180°), pitch continuing
    { t: 1.6,  throttle: 0.30, yaw:  0.40, pitch:  0.70, roll:  0.00 },
    { t: 1.9,  throttle: 0.45, yaw:  0.10, pitch:  0.35, roll:  0.00 },
    // Completing — center both inputs
    { t: 2.1,  throttle: 0.58, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — now flying modified heading after Barani
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
