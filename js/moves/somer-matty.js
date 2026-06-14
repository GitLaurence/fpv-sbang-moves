export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pagsasama ng somersault (backward loop) at Matty Flip (forward throttle punch sa inverted) — dalawang magkaibang rotation na pinagdugtong sa isang flow. Kailangan ng matalas na throttle control sa transition sa pagitan ng dalawa.',
  tips: [
    'Tapusin muna ang backward somersault rotation bago pumasok sa Matty Flip — huwag mag-rush',
    'Ang transition sa pagitan ng dalawa ay dapat may konting throttle cut para "mag-reset" ang orientation',
    'Ang Matty Flip punch ay dapat full throttle, sabay ng forward pitch — huwag kalahati lang',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Somersault' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.3, label: 'Reset' },
    { t: 1.55, label: 'Matty Punch' },
    { t: 2.2, label: 'Pull Out' },
    { t: 2.7, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — pitch back full, throttle eases for backward loop
    { t: 0.35, throttle: 0.55, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.65, throttle: 0.50, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Continuing backward rotation toward inverted
    { t: 0.85, throttle: 0.45, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // INVERTED — brief settle, sticks easing toward center
    { t: 1.0,  throttle: 0.40, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    // RESET — throttle cut, center sticks to break the rotation
    { t: 1.3,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY PUNCH — full throttle + forward pitch snap from inverted
    { t: 1.55, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.78, throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Continuing forward rotation, throttle still high
    { t: 2.0,  throttle: 0.85, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // PULL OUT — ease pitch and throttle toward level
    { t: 2.2,  throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.7,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
