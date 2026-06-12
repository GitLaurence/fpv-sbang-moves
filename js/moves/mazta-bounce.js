export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Mabilis na dive pababa sumusunod ng matalas na throttle punch na "bumabato" pataas papasok sa isang backflip. Ang dramatic na contrast sa pagitan ng throttle cut at full punch ang gumagawa ng signature na "bounce" effect.',
  tips: [
    'Cut ang throttle papunta sa dive — hayaang bumilis ang bagsak bago ang bounce',
    'Sa pinakailalim, i-punch ang full throttle habang sabay na pull pitch back para sa bounce',
    'Mag-chop ulit ng throttle habang inverted sa flip, tapos i-recover pataas',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Dive' },
    { t: 1.0, label: 'Bottom' },
    { t: 1.3, label: 'Bounce' },
    { t: 1.9, label: 'Flip' },
    { t: 2.6, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive — cut throttle, push nose down
    { t: 0.4,  throttle: 0.30, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 0.8,  throttle: 0.25, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // Bottom of dive — start leveling out
    { t: 1.0,  throttle: 0.25, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // BOUNCE — full throttle punch + pitch back snap into a backflip
    { t: 1.3,  throttle: 1.00, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 1.6,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Flip continues — chop throttle while inverted
    { t: 1.9,  throttle: 0.40, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.45, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    // Recover — back to level
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
