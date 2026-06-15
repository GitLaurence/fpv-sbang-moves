export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 2,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Isang malinis na buong 360° axial roll — full deflection ang roll stick mula simula hanggang dulo, habang pinapanatili ang heading at altitude. Pundasyon ng lahat ng advanced rolling combos.',
  tips: [
    'Full deflection ang roll stick — mabilis at consistent ang ikot, walang pag-atras',
    'Bawasan ng konti ang throttle habang inverted (tuktok ng roll) para hindi tumaas ang altitude',
    'Panatilihing steady ang pitch — walang dagdag input maliban sa roll mismo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.2, label: 'Roll Start' },
    { t: 0.6, label: 'Inverted' },
    { t: 1.0, label: 'Roll Out' },
    { t: 1.35, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll start — full roll input
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.45, throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — slight throttle cut to avoid ballooning
    { t: 0.6,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.8,  throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — throttle building back, roll easing to center
    { t: 1.0,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 1.35, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 1.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
