export default {
  id: 'reverse-split-s',
  name: 'Reverse Split-S (Half Matty Flip)',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.2,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Kabaligtarang pagkasunod-sunod ng Split-S — pitch forward muna papuntang inverted (parang unang kalahati ng Matty Flip), tapos roll para makabalik upright sa kabaligtarang direksyon. Pareho ng resulta sa Split-S — 180° change of direction — pero ibang feel ng input.',
  tips: [
    'PUSH pitch forward muna hanggang fully inverted — huwag mag-roll agad',
    'Habang inverted, full roll input para bumalik upright sa bagong direksyon',
    'Mas mataas ang exit kumpara sa regular Split-S — kaya mas maingat sa altitude management',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Pitch Fwd' },
    { t: 0.95, label: 'Inverted' },
    { t: 1.15, label: 'Roll Out' },
    { t: 2.7,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — carry speed
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PUSH pitch forward — half flip toward inverted
    { t: 0.4,  throttle: 0.72, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted — ease pitch to center
    { t: 0.95, throttle: 0.40, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // INVERTED — center sticks briefly before roll-out
    { t: 1.1,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out to upright — full roll, now flying opposite heading
    { t: 1.15, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.45, throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.75, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Settle level
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
