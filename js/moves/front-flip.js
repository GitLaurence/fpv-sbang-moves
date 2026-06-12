export default {
  id: 'front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.8,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward pitch flip na may dagdag na 180° — 540° ang kabuuang rotation. May "delay" sa inverted position bago kumpletuhin ang dagdag na kalahating loop, kaiba sa regular 360° Matty Flip.',
  tips: [
    'PUSH pitch forward tuloy-tuloy hanggang sa unang 360° tapos i-hold ang inverted',
    'Sa "delay" — bahagyang bawasan ang pitch habang inverted bago ipasok ang dagdag 180°',
    'Mag-master muna ng regular Matty Flip (360°) bago subukan ang dagdag na rotation',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.95, label: 'Inverted' },
    { t: 1.3, label: 'Delay' },
    { t: 1.9, label: 'Extra 180°' },
    { t: 2.6, label: 'Pull Out' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — moderate speed and altitude
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PUSH pitch forward — first 360° of rotation
    { t: 0.3,  throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.55, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.8,  throttle: 0.92, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — first 360° reached
    { t: 0.95, throttle: 0.95, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — hold inverted, ease pitch toward neutral briefly
    { t: 1.3,  throttle: 0.45, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    { t: 1.6,  throttle: 0.42, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // EXTRA 180° — resume pitch to complete the 540°
    { t: 1.9,  throttle: 0.60, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 2.2,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Pull out toward level
    { t: 2.6,  throttle: 0.72, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
