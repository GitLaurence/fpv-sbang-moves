export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Power loop na may full roll sa gitna — kombinasyon ng pitch loop at roll na sabay-sabay, gumagawa ng corkscrew effect sa hangin. Kailangan ng matatag na throttle control habang nag-iikot sa dalawang axis.',
  tips: [
    'Magsimula ng normal power loop — pitch back na may throttle punch papuntang itaas',
    'Idagdag ang roll input habang papunta sa vertical, hindi sa simula pa lang',
    'I-time ang throttle modulation — bawasan habang inverted, dagdagan habang pull-through',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pitch Up' },
    { t: 1.0, label: 'Vertical' },
    { t: 1.6, label: 'Roll Begin' },
    { t: 2.3, label: 'Inverted Roll' },
    { t: 3.0, label: 'Roll Complete' },
    { t: 3.6, label: 'Pull Through' },
    { t: 4.2, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch up into the loop — throttle increase
    { t: 0.4,  throttle: 0.85, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 0.7,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Vertical climb — begin roll input
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch: -0.80, roll:  0.50 },
    { t: 1.3,  throttle: 0.85, yaw:  0.00, pitch: -0.60, roll:  1.00 },
    // Roll continues through the inverted top of the loop
    { t: 1.6,  throttle: 0.60, yaw:  0.00, pitch: -0.30, roll:  1.00 },
    { t: 2.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.3,  throttle: 0.55, yaw:  0.00, pitch:  0.20, roll:  1.00 },
    // Roll completing while pitch continues the loop downward
    { t: 2.7,  throttle: 0.60, yaw:  0.00, pitch:  0.50, roll:  0.50 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Pull through to level
    { t: 3.6,  throttle: 0.70, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 3.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 4.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
