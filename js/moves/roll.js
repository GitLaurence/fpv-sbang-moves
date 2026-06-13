export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° na aileron roll — panatilihin lang ang full roll input habang umiikot ang quad, tapos i-center sa tamang oras para tumigil sa level attitude.',
  tips: [
    'Panatilihing steady at full ang roll input — huwag i-pulse o i-bitin',
    'Konting throttle compensation habang naka-inverted sa gitna ng roll',
    'I-center ang roll stick nang tama sa oras para hindi labis ang ikot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll' },
    { t: 1.2, label: 'Center' },
    { t: 1.6, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Full roll input held through the rotation
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.9,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Center roll stick — rotation complete, back to level
    { t: 1.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
