export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.2,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng Stall at Matty Flip: i-cut ang throttle para mag-freefall (somersault setup), tapos habang bumabagsak, push pitch forward papunta sa Matty Flip punch para makaipon ng momentum pabalik sa level flight.',
  tips: [
    'Sundin ang Stall sequence muna — full throttle cut, hayaan bumagsak ng 1+ segundo',
    'Habang nahuhulog, simulan ang forward pitch — gamitin ang gravity para tumulin ang flip',
    'Ang throttle punch ay mas malakas kaysa solo Matty Flip dahil mas mataas ang fall speed',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Cut' },
    { t: 0.8, label: 'Stall' },
    { t: 2.0, label: 'Pitch Fwd' },
    { t: 2.6, label: 'Inverted' },
    { t: 2.8, label: 'Punch' },
    { t: 3.4, label: 'Pull Out' },
    { t: 3.9, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — moderate cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CHOP throttle — instant zero, begin stall
    { t: 0.4,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Free-fall — sticks centered, gathering downward speed
    { t: 0.9,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH FORWARD — start the Matty Flip rotation while still falling
    { t: 2.0,  throttle: 0.10, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 2.3,  throttle: 0.18, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted, momentum building from the fall
    { t: 2.6,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle to power through under, harder than a solo Matty Flip
    { t: 2.8,  throttle: 1.00, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 3.0,  throttle: 1.00, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    // Continue rotation toward level
    { t: 3.2,  throttle: 0.85, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // Pull out to level — ease throttle
    { t: 3.4,  throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.9,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
