export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Back-to-back full snap rolls sa kabilang direksyon — roll right tapos agad roll left, parang dalawang martial-arts strike na sunod-sunod. Pagsubok sa bilis ng center-to-center stick control.',
  tips: [
    'Full deflection ang bawat snap — huwag mag-atubili sa roll input',
    'Bumalik muna sa center bago agad i-reverse ang direksyon ng roll',
    'Panatilihing matatag ang throttle — ang roll lang ang gumagawa ng trick',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Snap Right' },
    { t: 0.85, label: 'Center' },
    { t: 1.05, label: 'Snap Left' },
    { t: 1.5, label: 'Recover' },
    { t: 3.0, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SNAP — full roll right
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead-stop pass through center
    { t: 0.85, throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SNAP — immediate full roll left
    { t: 1.05, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 1.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    // Recover to level
    { t: 1.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
