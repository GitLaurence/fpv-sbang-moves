export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip papuntang inverted, mag-"delay" doon habang umiikot ng kalahating yaw spin, tapos ituloy ang flip pabalik sa upright — kabuuang 540° ng rotation mula sa tatlong sunod-sunod na 180° na galaw.',
  tips: [
    'Huminto muna nang ganap kapag inverted bago simulan ang yaw spin — dito nagmumula ang "delay"',
    'Itaas ang throttle habang inverted at nag-yyaw — mas mataas ang kailangan kaysa upright para manatiling level',
    'Ituloy lang ang parehong pitch direction sa pangalawang flip — huwag mag-reverse, dito nagiging 540° ang galaw',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.45, label: 'Flip 1' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.2, label: 'Delay' },
    { t: 1.4, label: 'Yaw Spin' },
    { t: 2.7, label: 'Stop Yaw' },
    { t: 3.0, label: 'Flip 2' },
    { t: 3.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level approach
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 1 — first 180°, pitch snap forward, throttle cut
    { t: 0.45, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — re-establish throttle, center pitch
    { t: 0.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DELAY — dead stop while inverted, hold the pose
    { t: 1.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.35, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW SPIN — second 180°, full yaw while inverted, elevated throttle
    { t: 1.5,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.45, throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center, brief hold
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP 2 — final 180°, continue same pitch direction back to upright
    { t: 3.0,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.25, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Catch — punch throttle to arrest the drop, level out upright
    { t: 3.5,  throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 4.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
