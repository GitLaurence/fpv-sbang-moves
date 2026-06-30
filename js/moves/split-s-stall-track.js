export default {
  id: 'split-s-stall-track',
  name: 'Split-S to Stall Track',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 5.0,
  youtubeId:    'N1YRL3P7wVA',
  youtubeStart: 0,
  description: 'Split-S para baguhin ang direksyon, pagkatapos ay i-cut ang throttle para mag-stall at mag-hover nang onting sandali bago mag-recover at mag-track. Pinagsama ang direction change at throttle management sa isang sequence.',
  tips: [
    'I-complete ang Split-S nang maayos bago mag-cut ng throttle — huwag maaga ang stall',
    'Ang stall ay maikli lang — 1 segundo o mas kaunti, tapos agad na catch para hindi masyadong mababa',
    'Pagkatapos ng catch, mag-forward tracking — gamitin ang bagong direksyon na nakuha mula sa Split-S',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.25, label: 'Pull' },
    { t: 2.5,  label: 'Exit' },
    { t: 2.8,  label: 'Stall Cut' },
    { t: 3.3,  label: 'Stall' },
    { t: 3.8,  label: 'Catch' },
    { t: 4.3,  label: 'Track' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted
    { t: 0.4,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.88, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    // Fully inverted — center roll
    { t: 1.0,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull through — sustained pitch back
    { t: 1.25, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.50, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.1,  throttle: 0.64, yaw:  0.00, pitch: -0.68, roll:  0.00 },
    // Exit — level out after Split-S
    { t: 2.4,  throttle: 0.72, yaw:  0.00, pitch: -0.18, roll:  0.00 },
    { t: 2.62, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // STALL CUT — immediate throttle chop
    { t: 2.8,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Free stall — all sticks centered, falling
    { t: 3.3,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CATCH — throttle punch to arrest descent
    { t: 3.8,  throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.15, throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Tracking — forward flight in new direction
    { t: 4.35, throttle: 0.68, yaw:  0.00, pitch:  0.18, roll:  0.00 },
    { t: 4.65, throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 5.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
