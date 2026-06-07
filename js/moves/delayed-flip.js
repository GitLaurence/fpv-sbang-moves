export default {
  id: 'delayed-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Isa at kalahating ikot (540°) sa pitch axis na may "delay" sa gitna — i-snap ang unang flip, mag-FREEFALL pause habang baligtad (lahat ng stick nasa center), tapos tapusin ang natitirang 180° gamit ang pangalawang snap. Ang pause ang nagbibigay ng stylish na "freeze" sa hangin.',
  tips: [
    'I-snap ang unang pitch input nang buo at biglaan — full deflection, hindi gradual',
    'Sa "delay," i-CENTER lahat ng sticks at hayaang malaya bumagsak ang quad gaya ng stall',
    'I-time nang tama ang pangalawang snap — masyadong maaga o huli ay sisira sa 540° na anggulo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip 1' },
    { t: 0.9, label: 'Delay' },
    { t: 1.7, label: 'Flip 2' },
    { t: 2.3, label: 'Level' },
    { t: 3.0, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — building speed
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 1 — full pitch snap forward, throttle chop, first 360°
    { t: 0.4,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — dead-stick freefall pause mid-rotation (the signature freeze)
    { t: 0.9,  throttle: 0.18, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.16, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.55, throttle: 0.16, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 2 — second snap completes the remaining 180° (total 540°)
    { t: 1.7,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.95, throttle: 0.34, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Exit rotation — ease pitch out, restore throttle to level
    { t: 2.2,  throttle: 0.52, yaw:  0.00, pitch:  0.25, roll:  0.00 },
    { t: 2.5,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 2.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
