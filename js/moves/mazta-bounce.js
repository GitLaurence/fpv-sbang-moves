export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na pitch bounce — parang tumatalbog ang drone pataas at pababa sa pagitan ng "sahig" at "kisame". Ang bawat bounce ay throttle punch na may katapat na pitch para baligtarin ang direksyon.',
  tips: [
    'Magsimula ng maliit ang bounce, dagdagan lang ang amplitude paunti-unti',
    'I-time ang throttle punch sa pinakamababang punto ng bawat bounce',
    'Panatilihing pareho ang ritmo ng bawat pag-ikot para mukhang mechanical at clean',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Bounce 1' },
    { t: 1.5, label: 'Bounce 2' },
    { t: 2.5, label: 'Bounce 3' },
    { t: 3.5, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — pitch down (toward "floor"), throttle dips then punches back up
    { t: 0.5,  throttle: 0.40, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.75, throttle: 0.95, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.55, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Bounce 2 — pitch up (toward "ceiling"), throttle cuts then re-punches
    { t: 1.5,  throttle: 0.35, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.75, throttle: 0.90, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.45, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    // Bounce 3 — repeat the floor bounce, slightly damped
    { t: 2.5,  throttle: 0.42, yaw:  0.00, pitch: -0.65, roll:  0.00 },
    { t: 2.75, throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.55, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    // Recovery — damp out to level cruise
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
