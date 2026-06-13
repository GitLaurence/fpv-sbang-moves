export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'beginner',
  difficulty: 2,
  durationSec: 3.2,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Rhythmic na "bounce" sa altitude — quick throttle cut pagkatapos ng punch, paulit-ulit, kasabay ng banayad na pitch para may forward drift. Magandang warm-up para sa throttle control at timing.',
  tips: [
    'Throttle PUNCH papunta sa CUT — parang "tap" lang, hindi sustained',
    'Pantay ang timing ng dalawang bounce — mag-count sa isip habang nagsasanay',
    'Konting pitch forward sa pagitan ng bounces para hindi tumigil ang momentum',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Punch 1' },
    { t: 0.7, label: 'Cut 1' },
    { t: 1.3, label: 'Punch 2' },
    { t: 1.7, label: 'Cut 2' },
    { t: 2.3, label: 'Settle' },
    { t: 3.2, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — quick throttle punch up
    { t: 0.3,  throttle: 0.95, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 0.45, throttle: 0.95, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Cut hard — drone falls back down
    { t: 0.7,  throttle: 0.15, yaw:  0.00, pitch: -0.05, roll:  0.00 },
    { t: 0.95, throttle: 0.20, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Brief recovery before bounce 2
    { t: 1.15, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 2 — repeat the punch
    { t: 1.3,  throttle: 0.95, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 1.45, throttle: 0.95, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Cut again
    { t: 1.7,  throttle: 0.15, yaw:  0.00, pitch: -0.05, roll:  0.00 },
    { t: 1.95, throttle: 0.20, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle back to level cruise
    { t: 2.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
