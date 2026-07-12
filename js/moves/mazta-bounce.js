export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na "bounce" sa pagitan ng dalawang ibabaw — throttle cut na may pitch flip papalapit sa isang gilid, saglit na float, tapos mirrored pitch flip papuntang kabilang gilid, chained nang sunud-sunod tulad ng rewind trick.',
  tips: [
    'Ang bawat bounce ay throttle cut + pitch flip — hindi roll, puro pitch at throttle timing',
    'Panatilihing magkapareho ang bilis ng bawat bounce para sa consistent rhythm',
    'Mag-float nang saglit sa pagitan ng bounces — huwag agad mag-flip papunta sa susunod',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Bounce 1' },
    { t: 1.3, label: 'Float' },
    { t: 2.0, label: 'Bounce 2' },
    { t: 2.8, label: 'Float' },
    { t: 3.5, label: 'Exit' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — throttle cut + pitch flip forward
    { t: 0.5,  throttle: 0.15, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 0.75, throttle: 0.20, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.40, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Float between bounces
    { t: 1.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 2 — mirrored pitch flip toward the opposite surface
    { t: 2.0,  throttle: 0.15, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    { t: 2.25, throttle: 0.20, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.40, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Float
    { t: 2.8,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit
    { t: 3.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
