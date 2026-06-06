export default {
  id: 'half-matty',
  name: 'Half Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.5,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Tinatawag din na "Reverse Split-S" — pitch forward para maabot ang inverted (kalahati ng Matty Flip), pagkatapos pull back para sa pababang half-loop. Nagbabago ng altitude ngunit hindi ng direksyon. Mas dynamic kaysa sa regular Split-S dahil ginagamit ang forward pitch kaysa roll para maabot ang inverted.',
  tips: [
    'CUT throttle sa forward pitch phase — huwag mag-punch habang papunta sa inverted',
    'Agad na mag-pull pagkatapos ng inverted — huwag patagalin ang inverted position',
    'Mag-ramp ng throttle sa exit phase para mabawi ang altitude loss',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.5,  label: 'Fwd Pitch' },
    { t: 0.95, label: 'Inverted' },
    { t: 1.15, label: 'Pull' },
    { t: 2.4,  label: 'Exit' },
  ],
  keyframes: [
    // Approach — moderate forward flight
    { t: 0.0,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.3,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Pitch forward hard + cut throttle to flip to inverted
    { t: 0.5,  throttle: 0.30, yaw: 0.00, pitch:  0.85, roll: 0.00 },
    { t: 0.72, throttle: 0.28, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    // Inverted — center pitch, minimal throttle
    { t: 0.95, throttle: 0.35, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 1.08, throttle: 0.38, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Pull back — sustained pitch through lower half-loop (Split-S exit)
    { t: 1.15, throttle: 0.40, yaw: 0.00, pitch: -0.90, roll: 0.00 },
    { t: 1.5,  throttle: 0.50, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    { t: 1.9,  throttle: 0.62, yaw: 0.00, pitch: -0.85, roll: 0.00 },
    { t: 2.2,  throttle: 0.70, yaw: 0.00, pitch: -0.45, roll: 0.00 },
    // Exit — level out in same direction as entry, lower altitude
    { t: 2.5,  throttle: 0.70, yaw: 0.00, pitch: -0.08, roll: 0.00 },
    { t: 2.8,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 3.5,  throttle: 0.66, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
