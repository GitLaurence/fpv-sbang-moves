export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip (pitch forward) na may "delay" — ihinto ang rotation habang inverted, mag-yaw spin muna bago ituloy ang flip pabalik sa upright. Ang resulta ay 540° na total rotation (360° pitch flip + 180° yaw delay).',
  tips: [
    'Pitch forward full deflection para makapasok sa flip, pero i-pause sa inverted point',
    'Habang inverted, mag-full yaw input para sa 180° rotation bago ituloy ang pitch',
    'I-resume ang pitch forward pagkatapos ng yaw delay para makumpleto ang flip pabalik sa upright',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.8, label: 'Inverted' },
    { t: 1.0, label: 'Yaw Delay' },
    { t: 1.9, label: 'Resume Flip' },
    { t: 2.35, label: 'Pull Out' },
    { t: 3.0, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward into the flip
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — dead stop pitch, hold the pause
    { t: 0.8,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW DELAY — 180° yaw spin while inverted, pitch held centered
    { t: 1.0,  throttle: 0.32, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.45, throttle: 0.34, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Resume pitch forward to complete the flip back to upright
    { t: 2.1,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.35, throttle: 0.75, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Pull out level
    { t: 2.6,  throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle to cruise
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
