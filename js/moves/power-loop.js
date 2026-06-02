export default {
  id: 'power-loop',
  name: 'Power Loop',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.5,
  description: 'Buong vertical loop sa ibabaw ng isang bagay. Kailangan ng tamang throttle management sa buong loop para manatiling circular ang hugis.',
  tips: [
    'Mag-punch ng throttle sa simula para may sapat na speed papunta sa itaas',
    'Sa tuktok, bawasan ang throttle at i-maintain ang pull para circular ang loop',
    'Huwag mag-over-pull sa exit o mabilis kang mabababa at mawalan ng control',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Punch' },
    { t: 1.0, label: 'Pull' },
    { t: 2.2, label: 'Top' },
    { t: 3.2, label: 'Descend' },
    { t: 4.0, label: 'Exit' },
  ],
  keyframes: [
    // Approach at moderate speed
    { t: 0.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle punch
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.8,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin pull — smooth entry into vertical
    { t: 1.0,  throttle: 0.90, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.5,  throttle: 0.85, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 1.9,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Top of loop — reduce throttle, drone going vertical
    { t: 2.2,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.45, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    // Descend — picking up speed again
    { t: 3.0,  throttle: 0.55, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.75, roll:  0.00 },
    // Exit — level out
    { t: 4.0,  throttle: 0.68, yaw:  0.00, pitch:  0.25, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
