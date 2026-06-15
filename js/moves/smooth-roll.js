export default {
  id: 'smooth-roll',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll na may pare-pareho at controlled na bilis — walang biglaang stop o snap. Ang pundasyon ng lahat ng roll-based na moves.',
  tips: [
    'Steady at constant ang roll input — huwag bibitawan hanggang matapos ang buong 360°',
    'Maliit na pitch forward para mapanatili ang altitude habang nag-iikot',
    'I-time ang pag-center ng stick eksakto sa pagbalik sa upright para hindi mag-overshoot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Start' },
    { t: 1.25, label: 'Inverted' },
    { t: 2.2, label: 'Roll Out' },
    { t: 2.5, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    // Smooth full roll input — constant rate through the whole rotation
    { t: 0.3,  throttle: 0.65, yaw: 0.00, pitch: -0.05, roll:  0.85 },
    { t: 0.7,  throttle: 0.65, yaw: 0.00, pitch: -0.08, roll:  0.85 },
    // Inverted — roll continues steadily
    { t: 1.25, throttle: 0.63, yaw: 0.00, pitch: -0.08, roll:  0.85 },
    { t: 1.8,  throttle: 0.65, yaw: 0.00, pitch: -0.05, roll:  0.85 },
    // Roll out — ease back to center as it completes 360°
    { t: 2.2,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll:  0.30 },
    { t: 2.5,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll:  0.00 },
  ],
};
