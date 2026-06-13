export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.6,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Back-to-back flip combo — buong pitch flip papunta sa harap, agad sundan ng buong roll, walang pahinga sa pagitan. Ang dalawang rotation sa magkaibang axis ang gumagawa ng "kicking" na visual na parang martial arts move.',
  tips: [
    'Una, kumpletuhin ang buong 360° pitch flip — i-punch ang throttle habang inverted',
    'Pagkatapos mag-level, agad isunod ang buong 360° roll nang walang center pause sa pagitan',
    'Panatilihing matatag ang throttle sa buong roll para hindi mawala ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.05, label: 'Punch' },
    { t: 1.5, label: 'Level' },
    { t: 1.8, label: 'Roll' },
    { t: 2.4, label: 'Inverted Roll' },
    { t: 2.8, label: 'Roll Out' },
    { t: 3.1, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH FLIP — full pitch forward, begin first rotation
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.48, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — top of the pitch flip
    { t: 0.85, throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Punch through to complete the 360° pitch flip
    { t: 1.05, throttle: 0.78, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 1.3,  throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Level — brief settle before the roll
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL — full roll begins immediately, no pause
    { t: 1.8,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.1,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted roll — halfway through the 360°
    { t: 2.4,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — complete rotation back to upright
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.35 },
    { t: 2.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 3.1,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
