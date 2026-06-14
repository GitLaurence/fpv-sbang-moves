export default {
  id: 'half-matty-flip',
  name: 'Half Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Kalahati ng Matty Flip — pitch forward papuntang inverted, pero sa halip na tapusin ang buong loop, mag-roll out papuntang upright. Tinatawag din na "Reverse Split-S" dahil baligtad ang flow ng karaniwang Split-S.',
  tips: [
    'Pitch forward lang hanggang inverted — huwag tapusin ang buong 360° loop',
    'Mag-hold muna nang maikli habang inverted bago mag-roll out',
    'Full roll input papuntang exit direction para sa malinis na recovery',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.3, label: 'Hold Inv' },
    { t: 1.6, label: 'Roll Out' },
    { t: 2.2, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward — half of a Matty Flip, heading toward inverted
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Reach inverted — center pitch, ease throttle
    { t: 0.9,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Hold inverted briefly
    { t: 1.3,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out — full roll back to upright
    { t: 1.6,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.9,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 2.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 2.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
