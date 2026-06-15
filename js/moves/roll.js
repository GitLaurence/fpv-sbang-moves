export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll — ang pinaka-basic na acro move. Umiikot ang drone sa roll axis habang pinapanatili ang heading, at tumataas nang bahagya ang throttle habang inverted para hindi bumaba ang altitude.',
  tips: [
    'Constant roll rate — full deflection mula umpisa hanggang katapusan, walang hesitation sa gitna',
    'Taasan ang throttle habang inverted para mabawi ang lift na nawawala sa pagbaligtad',
    'I-level ang sticks pagkatapos ng exactly 360° — huwag overshoot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll In' },
    { t: 1.1, label: 'Inverted' },
    { t: 1.8, label: 'Roll Out' },
    { t: 2.2, label: 'Level' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll in — full deflection
    { t: 0.4,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.75, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — bump throttle to maintain altitude
    { t: 1.1,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.45, throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — continue to complete 360°
    { t: 1.8,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Level — sticks center
    { t: 2.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
