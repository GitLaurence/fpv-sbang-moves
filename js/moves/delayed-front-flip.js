export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na "na-delay" sa kalahati ng landing — pagkatapos ng unang 360°, i-center ang lahat ng sticks at i-cut ang throttle para mag-"dead stick" pause habang patuloy na umiikot sa momentum, tapos itulak ulit ang pitch para kumpletuhin ang dagdag na 180° (total 540°).',
  tips: [
    'Itulak ang pitch full forward para sa unang 360° rotation, tulad ng regular front flip',
    'Sa sandaling makumpleto ang unang ikot, i-center ang lahat ng sticks at i-cut ang throttle — ang "delay"',
    'Itulak ulit ang pitch forward para tapusin ang dagdag 180°, tapos punch throttle para mag-recover',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Flip 360°' },
    { t: 1.3, label: 'Delay' },
    { t: 1.9, label: 'Flip +180°' },
    { t: 2.7, label: 'Catch' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // First 360° — full pitch forward, ease throttle to start the rotation
    { t: 0.5,  throttle: 0.20, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.85, throttle: 0.08, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // First rotation completes — momentum carries back near level
    { t: 1.15, throttle: 0.05, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // DELAY — dead-stick: all sticks centered, throttle near zero, continues to drift/rotate on momentum
    { t: 1.3,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.85, throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Second flip input — pitch forward again for the extra 180° (total 540°)
    { t: 1.9,  throttle: 0.10, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.18, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Completing rotation — ramp throttle to arrest the fall
    { t: 2.5,  throttle: 0.55, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // CATCH — punch throttle as horizon levels out
    { t: 2.7,  throttle: 0.90, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    { t: 2.95, throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 3.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
