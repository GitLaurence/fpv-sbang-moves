export default {
  id: 'split-s-iys-combo',
  name: 'Rapid Split-S + Inverted Yaw Spin',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.4,
  youtubeId:    'S7v9Pla4Lr8',
  youtubeStart: 0,
  description: 'Mabilis na Split-S na direktang tinutuloy papuntang Inverted Yaw Spin nang walang paghinto — dalawang high-difficulty na trick na pinag-isa sa iisang tuluy-tuloy na sequence. Kailangan ng eksaktong timing dahil hindi ka babalik sa upright sa gitna.',
  tips: [
    'Gawing mabilis ang Split-S pull — mas maikli ang oras na ito, mas malinis ang koneksyon papunta sa yaw spin',
    'Huwag mag-flip pabalik sa upright pagkatapos ng Split-S — dapat manatiling inverted papunta sa yaw spin',
    'Itaas ang throttle habang naka-inverted yaw spin para hindi bumagsak ang altitude pagkatapos ng pull',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Roll Inv' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.05, label: 'Split-S Pull' },
    { t: 1.95, label: 'Inv Hold' },
    { t: 2.3, label: 'Yaw Spin' },
    { t: 4.8, label: 'Stop Yaw' },
    { t: 5.1, label: 'Flip Up' },
    { t: 5.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — carry speed
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Rapid half-roll to inverted — throttle cut
    { t: 0.35, throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    // Fully inverted — center roll
    { t: 0.85, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull — fast sustained pitch back
    { t: 1.05, throttle: 0.40, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.55, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 1.7,  throttle: 0.62, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Level out — but stay inverted, don't flip upright, prep for yaw spin
    { t: 1.95, throttle: 0.66, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 2.1,  throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Immediately begin inverted yaw spin — elevated throttle to hold altitude
    { t: 2.3,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.3,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center
    { t: 4.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright — pitch snap, throttle cut
    { t: 4.9,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.1,  throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — punch throttle
    { t: 5.3,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.6,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
