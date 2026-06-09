export default {
  id: 'half-matty-flip',
  name: 'Half Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Unang kalahati ng Matty Flip (push pitch forward papunta sa inverted), tapos mag-switch sa Split-S pull para lumabas sa kabaligtarang direksyon. Katulad ng Split-S pero ang entry ay pitch forward — hindi half-roll.',
  tips: [
    'PUSH pitch forward (hindi backward) para sa entry — katulad ng Matty Flip, hindi Split-S',
    'I-cut ang throttle sa pitch-forward phase at i-ramp pabalik habang nag-pull out',
    'Ang transition mula forward pitch papunta sa pull (pitch back) sa inverted ay dapat tuloy-tuloy at maayos',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.1,  label: 'Pull Out' },
    { t: 2.1,  label: 'Exit' },
  ],
  keyframes: [
    // Approach — moderate speed and altitude
    { t: 0.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.25, throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Push pitch forward aggressively, cut throttle
    { t: 0.35, throttle: 0.48, yaw: 0.00, pitch:  0.80, roll: 0.00 },
    { t: 0.6,  throttle: 0.32, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 0.85, throttle: 0.30, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    // Fully inverted — center pitch, brief pause
    { t: 0.95, throttle: 0.32, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Switch to pull (pitch back) for Split-S exit arc
    { t: 1.1,  throttle: 0.38, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    { t: 1.45, throttle: 0.50, yaw: 0.00, pitch: -0.95, roll: 0.00 },
    { t: 1.8,  throttle: 0.65, yaw: 0.00, pitch: -0.55, roll: 0.00 },
    // Approaching level — ramp throttle, exiting opposite heading
    { t: 2.1,  throttle: 0.72, yaw: 0.00, pitch: -0.15, roll: 0.00 },
    { t: 2.4,  throttle: 0.67, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 3.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
