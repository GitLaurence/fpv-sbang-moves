export default {
  id: 'roll',
  name: 'Aileron Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll na may consistent na rate — panatilihin ang heading at altitude habang umiikot. Pundasyon ng lahat ng roll-based na moves.',
  tips: [
    'Panatilihing constant ang roll input mula simula hanggang dulo — huwag biglaan ang stick',
    'I-adjust nang bahagya ang throttle papalapit sa inverted point para mapanatili ang altitude',
    'Mag-practice muna sa mabagal na rate bago subukan ang mas mabilis na roll',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll In' },
    { t: 0.7, label: 'Inverted' },
    { t: 1.1, label: 'Roll Out' },
    { t: 1.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll in — full constant roll input, slight throttle ease
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.5,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted midpoint — continue same roll rate
    { t: 0.7,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.9,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — back toward upright, throttle ramps back up
    { t: 1.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 1.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle level
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
