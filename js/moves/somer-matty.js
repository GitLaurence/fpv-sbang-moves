export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.6,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Matty Flip na may dagdag full roll — forward pitch flip habang umiikot din ng roll sa parehong rotation, dual-axis na version ng Matty Flip. Kailangan ng mas mataas na entry speed para makompleto ang combo bago bumagsak.',
  tips: [
    'Master muna ang regular Matty Flip bago subukan ang SomerMatty',
    'Idagdag ang roll input pagkatapos ng paunang pitch forward, hindi sabay sa simula',
    'Mas mataas na entry speed — kailangan ng extra momentum para sa dual-axis rotation',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Roll In' },
    { t: 1.4, label: 'Inverted Spin' },
    { t: 2.0, label: 'Punch' },
    { t: 2.7, label: 'Pull Out' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — higher entry speed than a standard Matty Flip
    { t: 0.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PUSH pitch forward — begin the forward flip
    { t: 0.35, throttle: 0.78, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Roll In — add full roll input on top of the pitch rotation
    { t: 0.9,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Inverted Spin — dual-axis rotation through the top
    { t: 1.4,  throttle: 0.90, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Punch — full throttle to drive through and complete the rotation
    { t: 2.0,  throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    { t: 2.3,  throttle: 0.90, yaw:  0.00, pitch:  0.55, roll:  0.50 },
    // Pull Out — ease both axes back to level
    { t: 2.7,  throttle: 0.75, yaw:  0.00, pitch:  0.15, roll:  0.15 },
    { t: 2.95, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
