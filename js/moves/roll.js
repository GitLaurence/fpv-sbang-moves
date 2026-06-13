export default {
  id: 'roll',
  name: 'Aileron Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll habang pinapanatili ang heading at altitude. Pundasyon ng lahat ng roll-based na moves — ang layunin ay smooth at consistent ang bilis ng pag-ikot mula simula hanggang dulo.',
  tips: [
    'Konting throttle cut sa simula ng roll para hindi tumaas ang ilong',
    'Idagdag ang throttle habang inverted para hindi bumagsak ang altitude',
    'Pantay ang bilis ng roll input — huwag bibilisan o babagalan sa gitna',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Start' },
    { t: 0.6, label: 'Inverted' },
    { t: 1.1, label: 'Roll Out' },
    { t: 1.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll start — slight throttle cut, snap full roll input
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.45, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — add throttle to hold altitude through the top of the rotation
    { t: 0.6,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.8,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — completing rotation back to upright, ease roll input out
    { t: 1.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.35 },
    { t: 1.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — back to level cruise
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
