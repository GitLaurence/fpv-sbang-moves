export default {
  id: 'reverse-split-s',
  name: 'Reverse Split-S',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.5,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Kabaligtaran ng Split-S — sa halip na mag-roll papuntang inverted at mag-pull pababa, nag-push (pitch forward) papuntang inverted sa itaas, tapos mag-roll pabalik sa upright. Resulta: kabaligtarang direksyon na may NADAGDAG na altitude, hindi nawawala.',
  tips: [
    'Itaas ang throttle nang bahagya habang nagpu-push papuntang inverted para hindi mabawasan ang altitude',
    'Mag-roll pabalik sa upright agad pagkatapos maabot ang inverted apex — huwag hintaying bumagsak',
    'Gamitin para i-set up ang direksyon ng susunod na move — palaging tumataas ang exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pitch Push' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.3, label: 'Roll Out' },
    { t: 1.9, label: 'Exit' },
  ],
  keyframes: [
    // Entry — carry speed forward
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH PUSH — nose forward into the half-loop, ease throttle up to hold altitude
    { t: 0.4,  throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.45, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    // INVERTED — top of the half-loop, opposite heading
    { t: 1.0,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL OUT — full roll back to upright
    { t: 1.3,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Exit — upright, climbing in the opposite direction
    { t: 1.9,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
