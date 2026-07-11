export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Multi-axis combo — pitch flip pasulong na may snap roll "kick" habang inverted, kaya iba ito sa payak na Matty Flip. Kailangan ng magandang timing sa pagitan ng dalawang axis para hindi mag-tumble.',
  tips: [
    'Simulan tulad ng normal na forward flip — pitch pasulong hanggang malapit nang inverted',
    'I-snap ang roll habang inverted — mabilis at buo, hindi partial',
    'Hayaang mag-unwind ang roll bago tuluyang bumaba ang pitch papunta sa level',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.8, label: 'Snap Roll' },
    { t: 1.3, label: 'Unwind' },
    { t: 1.8, label: 'Recover' },
    { t: 2.4, label: 'Exit' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin pitch flip
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 0.55, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.20 },
    // Snap roll "kick" while inverted — the signature Jackie Chan flick
    { t: 0.8,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.05, throttle: 0.90, yaw:  0.00, pitch:  0.85, roll:  1.00 },
    // Roll unwinds while pitch continues to complete the flip
    { t: 1.3,  throttle: 0.95, yaw:  0.00, pitch:  0.55, roll:  0.40 },
    { t: 1.55, throttle: 0.85, yaw:  0.00, pitch:  0.25, roll:  0.00 },
    // Recovery
    { t: 1.8,  throttle: 0.72, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
