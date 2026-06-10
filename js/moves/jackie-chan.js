export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na sunod-sunod na full snap rolls sa magkaibang direksyon na may "dead stop" sa pagitan — chaotic at acrobatic ang dating, kaya pinangalanang Jackie Chan.',
  tips: [
    'Bawat roll ay dapat full speed at full deflection — walang half-measures',
    'I-center muna ang stick bago ang susunod na roll para makontrol ang orientation',
    'Mag-practice muna ng single snap rolls bago subukan ang buong combo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll R' },
    { t: 0.9, label: 'Dead Stop' },
    { t: 1.1, label: 'Roll L' },
    { t: 1.6, label: 'Dead Stop' },
    { t: 1.8, label: 'Roll R2' },
    { t: 2.3, label: 'Center' },
    { t: 2.7, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll right — full deflection
    { t: 0.4,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — center stick
    { t: 0.9,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll left — full deflection, opposite direction
    { t: 1.1,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 1.35, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    // Dead stop again
    { t: 1.6,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Final flourish — quick snap roll right
    { t: 1.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.05, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Center out
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
