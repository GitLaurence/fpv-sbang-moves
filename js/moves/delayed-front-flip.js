export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may extra 180° — sa kalagitnaan ng ikot, habang baligtad, mag-"delay" muna (center sticks, hold) bago ipagpatuloy ang pitch papunta sa 540° at mag-roll out.',
  tips: [
    'Full pitch forward para sa unang 360° — walang atubili, dapat tuluy-tuloy ang ikot',
    'Ang "delay" ay center sticks habang baligtad — kailangan ng confidence na hindi mag-correct agad',
    'Ang extra 180° papunta sa 540° ay parehong pitch input — i-finish gamit ang roll para bumalik sa upright',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Flip 180°' },
    { t: 1.6, label: 'Delay (Inverted)' },
    { t: 2.6, label: 'Flip 360°' },
    { t: 3.3, label: 'Flip 540°' },
    { t: 3.9, label: 'Roll Out' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward to initiate the flip — full input through first 180°
    { t: 0.5,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Delay — sticks centered, holding inverted
    { t: 1.6,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Continue pitch through 360° back to upright
    { t: 2.6,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Continue into the extra half — now at 540°, inverted again
    { t: 3.3,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out back to upright
    { t: 3.9,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 4.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
