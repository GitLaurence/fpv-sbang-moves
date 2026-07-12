export default {
  id: 'vanny-roll',
  name: 'Vanny Roll',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.2,
  youtubeId:    'PpTKsZgn6h8',
  youtubeStart: 0,
  description: 'Ginawa ni Captain Vanover: forward flight, biglaang 180° yaw spin, tapos habang papaatras na ang drone, smooth na 360° roll, at isa pang 180° yaw spin sa parehong direksyon para tapusin. Tuloy-tuloy na daloy ng yaw-roll-yaw, walang obstacle na kailangan.',
  tips: [
    'Panatilihing tuloy-tuloy ang daloy — walang dead stop sa pagitan ng tatlong inputs',
    'Ang 360° roll ay dapat mangyari habang papaatras — timing ang pinakamahirap na parte',
    'Parehong direksyon ang dalawang yaw spin — hindi kabaligtaran',
  ],
  phases: [
    { t: 0.0, label: 'Forward' },
    { t: 0.5, label: 'Yaw Spin 1' },
    { t: 1.3, label: 'Backward' },
    { t: 1.7, label: '360 Roll' },
    { t: 2.7, label: 'Yaw Spin 2' },
    { t: 3.5, label: 'Exit' },
  ],
  keyframes: [
    // Forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // First 180° yaw spin
    { t: 0.5,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 0.85, throttle: 0.50, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.48, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    // Now moving backward — begin the 360° roll
    { t: 1.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.1,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.45, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.7,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.15 },
    // Second 180° yaw spin, same direction, to exit
    { t: 2.95, throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.25, pitch:  0.00, roll:  0.00 },
    { t: 3.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
