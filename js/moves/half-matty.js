export default {
  id: 'half-matty',
  name: 'Half Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Pitch forward snap papunta sa inverted (tulad ng simula ng Matty Flip) — ngunit HUWAG ituloy ang buong loop. Mag-hold ng sandali sa inverted, tapos 180° roll pabalik sa upright. Tinatawag ding "Reverse Split-S".',
  tips: [
    'Ang pitch forward snap ay dapat mabilis at decisive — hindi gradual na pull',
    'I-hold ang inverted ng kaunti bago mag-roll — mas malinaw ang move kapag may pause',
    'Mag-practice ng Matty Flip muna — ang Half Matty ay ang unang kalahati nito',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.4,  label: 'Pitch Snap' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.3,  label: 'Roll Out' },
    { t: 1.9,  label: 'Upright' },
    { t: 2.3,  label: 'Exit' },
  ],
  keyframes: [
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip for entry energy
    { t: 0.35, throttle: 0.82, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH FORWARD SNAP — snap nose forward to inverted, cut throttle
    { t: 0.5,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — sticks to center, brief hold
    { t: 0.9,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.26, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° ROLL OUT — snap roll back to upright
    { t: 1.3,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.55, throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  0.80 },
    { t: 1.75, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.20 },
    // Upright — catch throttle, forward pitch for exit
    { t: 1.95, throttle: 0.68, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // Exit
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
