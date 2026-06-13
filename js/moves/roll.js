export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    '9tO6nreM4aw',
  youtubeStart: 0,
  description: 'Full 360° roll — snap ang roll stick papunta sa isang gilid at hawakan hanggang makumpleto ang isang buong pag-ikot, tapos bumalik agad sa center. Foundational trick bago matuto ng mas advanced flips.',
  tips: [
    'Full deflection ang roll input — huwag partial, dapat buong stick travel',
    'Konting throttle add habang inverted (kalahati ng roll) para hindi bumaba ang altitude',
    'Bumalik agad sa center pagkatapos ng 360° — huwag i-overshoot',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Roll In' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.4, label: 'Roll Out' },
    { t: 2.0, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap full roll input
    { t: 0.3,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — brief throttle bump to hold altitude
    { t: 0.9,  throttle: 0.74, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.15, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Continuing rotation back to upright
    { t: 1.4,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.60 },
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.10 },
    // Recovery — settle to level cruise
    { t: 1.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
