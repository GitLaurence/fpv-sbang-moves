export default {
  id: 'aileron-roll',
  name: 'Aileron Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll gamit ang roll stick lang — pinananatili ang heading at altitude habang umiikot ang drone sa axis nito. Ang pundasyon ng lahat ng roll-based na tricks.',
  tips: [
    'Smooth at constant ang roll input — huwag bigla, huwag mag-pause sa gitna',
    'Panatilihing steady ang throttle sa buong roll para mapanatili ang altitude',
    'I-center ang roll stick eksaktong sa 360° — practice muna sa slow speed',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll' },
    { t: 1.2, label: 'Inverted' },
    { t: 1.9, label: 'Roll Out' },
    { t: 2.5, label: 'Level' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Full roll input — smooth and constant
    { t: 0.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.9,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Continue through inverted — hold full roll
    { t: 1.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.6,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Complete 360° — center stick as level is reached
    { t: 1.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
