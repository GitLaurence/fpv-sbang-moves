export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Mag-pitch forward ng 180° para maabot ang inverted — PAUSE at mag-hover nang ilang sandali sa inverted (ang "delay") — pagkatapos pull back para sa buong 360° loop pabalik sa upright. Kabuuang 540° ng pitch rotation sa iisang smooth na maneuver.',
  tips: [
    'Ang pause sa inverted ay ang pinaka-mahalagang bahagi — visible at deliberate dapat ito',
    'Throttle punch sa inverted hover para hindi masyadong bumagsak sa delay phase',
    'Mabilis na pitch back pagkatapos ng delay — tulad ng Split-S ngunit mas aggressive',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Fwd 180°' },
    { t: 1.0, label: 'Delay' },
    { t: 1.7, label: 'Pull 360°' },
    { t: 3.5, label: 'Nearly Up' },
    { t: 4.1, label: 'Exit' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.3,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Pitch forward 180° to inverted — cut throttle
    { t: 0.5,  throttle: 0.30, yaw: 0.00, pitch:  0.90, roll: 0.00 },
    { t: 0.75, throttle: 0.28, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    // INVERTED — DELAY — throttle punch to hold altitude
    { t: 1.0,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 1.25, throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 1.55, throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Begin full 360° pull back — pitch back through the loop
    { t: 1.7,  throttle: 0.45, yaw: 0.00, pitch: -0.90, roll: 0.00 },
    { t: 2.0,  throttle: 0.42, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    { t: 2.4,  throttle: 0.45, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    // Through the bottom of the loop (nose down, arcing)
    { t: 2.8,  throttle: 0.60, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    { t: 3.2,  throttle: 0.72, yaw: 0.00, pitch: -0.95, roll: 0.00 },
    // Approaching upright — ease pitch
    { t: 3.5,  throttle: 0.75, yaw: 0.00, pitch: -0.65, roll: 0.00 },
    { t: 3.8,  throttle: 0.70, yaw: 0.00, pitch: -0.20, roll: 0.00 },
    // Exit upright
    { t: 4.1,  throttle: 0.67, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 4.5,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 5.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
