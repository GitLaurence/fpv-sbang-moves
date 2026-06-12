export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Pro-level combo — full forward pitch flip habang sabay na full yaw spin papuntang kabilang direksyon, lumilikha ng dalawang magkaibang rotation axes sa parehong oras. Acrobatic at mabilis-paikot na hitsura, kaya napangalanan sa estilo ni Jackie Chan.',
  tips: [
    'Mag-master muna ng Matty Flip at Inverted Yaw Spin nang hiwalay bago pagsamahin',
    'Magsimula nang sabay ang full pitch forward at full opposite-direction yaw',
    'Panatilihing steady ang throttle sa gitna ng combo — ang mga rotation ang dapat mag-iba, hindi ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Flip+Yaw' },
    { t: 0.95, label: 'Inv Spin' },
    { t: 1.7, label: 'Unwind' },
    { t: 2.4, label: 'Settle' },
    { t: 2.7, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin both rotations together — pitch forward + opposite yaw
    { t: 0.3,  throttle: 0.75, yaw: -0.70, pitch:  0.90, roll:  0.00 },
    { t: 0.6,  throttle: 0.85, yaw: -1.00, pitch:  1.00, roll:  0.00 },
    // Inverted with full opposite yaw spin sustained
    { t: 0.95, throttle: 0.88, yaw: -1.00, pitch:  1.00, roll:  0.00 },
    { t: 1.35, throttle: 0.85, yaw: -1.00, pitch:  0.80, roll:  0.00 },
    // Unwind — ease both rotations together
    { t: 1.7,  throttle: 0.80, yaw: -0.85, pitch:  0.55, roll:  0.00 },
    { t: 2.05, throttle: 0.74, yaw: -0.50, pitch:  0.30, roll:  0.00 },
    // Settle — finish unwinding to level
    { t: 2.4,  throttle: 0.68, yaw: -0.15, pitch:  0.10, roll:  0.00 },
    // Exit — back to level flight
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
