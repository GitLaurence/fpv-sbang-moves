export default {
  id: 'power-loop-obstacle',
  name: 'Power Loop Over Obstacle',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.7,
  youtubeId:    'Ip7JBqRNDzg',
  youtubeStart: 0,
  description: 'Regular na power loop pero may obstacle sa daan — kailangan ng eksaktong timing ng pull para linisan ang taas nito bago mag-chop sa itaas. Diin dito ay ang controlled, deliberate na pacing sa halip na basta full-send.',
  tips: [
    'Suriin muna ang taas ng obstacle bago mag-commit — dapat sapat ang pull para dumaan sa ibabaw nito',
    'Huwag mag-rush sa chop — hintaying makalampas muna nang husto sa obstacle bago mag-cut ng throttle',
    'Magkaroon ng margin sa altitude — mas mabuting sobra ang taas kaysa kulang',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Pull' },
    { t: 1.5, label: 'Clear Obstacle' },
    { t: 2.3, label: 'Chop' },
    { t: 3.2, label: 'Pull Thru' },
    { t: 4.1, label: 'Exit' },
  ],
  keyframes: [
    // High-speed approach toward the obstacle
    { t: 0.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.90, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull back — deliberate, controlled pitch to clear the obstacle
    { t: 0.5,  throttle: 1.00, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.9,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Climbing over the obstacle — sustained pull
    { t: 1.5,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.80, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Confirmed clear — begin throttle chop near the top
    { t: 2.3,  throttle: 0.10, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.55, throttle: 0.05, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Nose pointing down — ramp throttle back
    { t: 2.85, throttle: 0.35, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 3.1,  throttle: 0.75, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    // Pull through bottom
    { t: 3.45, throttle: 0.88, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Exit — level off
    { t: 3.85, throttle: 0.72, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 4.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
