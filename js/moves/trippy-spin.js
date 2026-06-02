export default {
  id: 'trippy-spin',
  name: 'Trippy Spin',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  description: 'Diagonal na corkscrew roll — sabay na nag-ro-roll at nag-yi-yaw. Medyo nakakalula sa pilot pero napaka-ganda sa footage kapag ginawa nang maayos.',
  tips: [
    'Sabay na i-input ang roll at yaw nang pantay na deflection — neither dominates',
    'I-maintain ang throttle para hindi masyadong mag-dive habang nag-co-corkscrew',
    'Mas mabilis ang combined inputs, mas tight ang corkscrew helix',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Corkscrew' },
    { t: 1.2, label: 'Full Spin' },
    { t: 4.0, label: 'Wind Down' },
    { t: 4.5, label: 'Exit' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Ramp into corkscrew — roll and yaw together
    { t: 0.5,  throttle: 0.61, yaw:  0.50, pitch:  0.00, roll:  0.60 },
    { t: 0.8,  throttle: 0.60, yaw:  0.80, pitch:  0.00, roll:  0.90 },
    { t: 1.2,  throttle: 0.60, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    // Sustain full corkscrew — tiny throttle blips feel natural
    { t: 1.6,  throttle: 0.62, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 2.0,  throttle: 0.58, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 2.4,  throttle: 0.61, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 2.8,  throttle: 0.59, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 3.2,  throttle: 0.62, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 3.6,  throttle: 0.60, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    // Wind down — reduce both channels together
    { t: 4.0,  throttle: 0.61, yaw:  0.60, pitch:  0.00, roll:  0.60 },
    { t: 4.3,  throttle: 0.62, yaw:  0.25, pitch:  0.00, roll:  0.25 },
    // Exit — level
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
