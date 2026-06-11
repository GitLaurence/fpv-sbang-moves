export default {
  id: 'inverted-yaw-spin',
  name: 'Inverted Yaw Spin',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 5.5,
  youtubeId:    'UpNEeSRyPbQ',
  youtubeStart: 0,
  description: 'Mag-flip sa inverted, mag-spin ng isang buong 360° gamit ang yaw habang inverted, tapos mag-flip pabalik sa upright. Pinaka-photogenic na trick sa FPV — kahanga-hangang makita mula sa labas.',
  tips: [
    'Ang throttle inverted ay mas mataas kaysa upright — kailangan mo ng ~65-70% para manatiling level',
    'Center ang lahat ng sticks (maliban sa yaw at throttle) habang nag-iinverted spin',
    'Mag-exit sa tamang oryentasyon — mag-flip palabas sa direksyon na nais mong pumunta',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Flip Inv' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.3, label: 'Yaw Spin' },
    { t: 3.8, label: 'Stop Yaw' },
    { t: 4.1, label: 'Flip Up' },
    { t: 4.6, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.35, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip to inverted — pitch snap forward, throttle cut
    { t: 0.5,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.72, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — re-establish throttle, center pitch
    { t: 0.95, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.15, throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin full yaw spin — elevated throttle to hold altitude while inverted
    { t: 1.3,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Sustain spin — throttle modulates slightly
    { t: 2.2,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center left stick
    { t: 3.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright — pitch snap, throttle cut
    { t: 4.15, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.38, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — punch throttle to catch any altitude loss
    { t: 4.6,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
