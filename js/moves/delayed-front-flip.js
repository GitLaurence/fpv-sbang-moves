export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward pitch flip na may kasamang 540° na yaw — ang "delayed" ay tumutukoy sa sandaling pahinga (dead stop sa ere) bago simulan ang flip. Kailangan ng dalawang magkasamang axis (pitch + yaw) nang sabay-sabay.',
  tips: [
    'Ang "delay" ay literal — full stop sa ere bago ang flip, para mas dramatic ang galaw',
    'Sabay ang pitch forward at yaw — hindi sunod-sunod kundi simultaneous para sa 540° na ikot',
    'Mas maikling delay = mas natural; mas matagal na delay = mas dramatic pero mas mahirap i-recover ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Pause' },
    { t: 0.9, label: '540 Flip' },
    { t: 1.5, label: 'Inverted' },
    { t: 2.0, label: 'Pull Out' },
    { t: 2.6, label: 'Recovery' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DELAY — sudden throttle blip then cut (the "dead stop" pause)
    { t: 0.5,  throttle: 0.85, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 0.65, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.82, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 540° FLIP — simultaneous pitch forward + full yaw rotation
    { t: 0.9,  throttle: 0.30, yaw:  1.00, pitch:  1.00, roll:  0.00 },
    { t: 1.15, throttle: 0.25, yaw:  1.00, pitch:  1.00, roll:  0.00 },
    // Through inverted — continue both inputs
    { t: 1.4,  throttle: 0.28, yaw:  1.00, pitch:  1.00, roll:  0.00 },
    // Completing 540° — ease yaw as pitch continues through
    { t: 1.7,  throttle: 0.35, yaw:  0.50, pitch:  0.85, roll:  0.00 },
    { t: 1.9,  throttle: 0.45, yaw:  0.10, pitch:  0.55, roll:  0.00 },
    // Pulling back to level — throttle ramp
    { t: 2.1,  throttle: 0.65, yaw:  0.00, pitch:  0.18, roll:  0.00 },
    { t: 2.35, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 2.7,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
