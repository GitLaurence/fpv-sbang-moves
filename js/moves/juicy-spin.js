export default {
  id: 'juicy-spin',
  name: 'Juicy Spin',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  description: 'Flat na yaw spin na may tamang throttle management. Kailangan ng mabilis at maayos na pag-spin habang napapanatiling level ang drone.',
  tips: [
    'I-center ang throttle sa mid-range bago mag-spin para manatiling flat ang trajectory',
    'Gamitin ang pitch para i-compensate ang drift habang nag-yi-yaw — maliit na correction lang',
    'Mas mabilis ang yaw spin, mas maganda — mag-practice ng full yaw deflection nang walang humpak',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Spin Start' },
    { t: 1.0, label: 'Full Spin' },
    { t: 3.5, label: 'Wind Down' },
    { t: 4.0, label: 'Stop' },
  ],
  keyframes: [
    // Entry — level and stable
    { t: 0.0,  throttle: 0.56, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.56, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Ramp into full yaw
    { t: 0.4,  throttle: 0.55, yaw:  0.55, pitch:  0.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.55, yaw:  0.90, pitch:  0.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.54, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Full spin — slight pitch correction to counter drift
    { t: 1.4,  throttle: 0.55, yaw:  1.00, pitch:  0.08, roll:  0.00 },
    { t: 1.8,  throttle: 0.54, yaw:  1.00, pitch: -0.06, roll:  0.00 },
    { t: 2.2,  throttle: 0.56, yaw:  1.00, pitch:  0.07, roll:  0.00 },
    { t: 2.6,  throttle: 0.54, yaw:  1.00, pitch: -0.05, roll:  0.00 },
    { t: 3.0,  throttle: 0.55, yaw:  1.00, pitch:  0.06, roll:  0.00 },
    // Wind down — gradually reduce yaw input
    { t: 3.5,  throttle: 0.55, yaw:  0.70, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.56, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    // Stop and stabilise
    { t: 4.0,  throttle: 0.56, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.57, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
