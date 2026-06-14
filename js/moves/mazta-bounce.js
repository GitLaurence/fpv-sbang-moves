export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Sunod-sunod na throttle punch-and-chop na gumagawa ng "bouncing" motion — parang tumatalbog ang drone palayo sa lupa o gilid ng isang structure. Pinong pitch correction sa bawat bounce para hindi mag-drift.',
  tips: [
    'Full throttle punch tapos AGAD na chop pababa — ang bilis ng transition ang gumagawa ng "bounce" look',
    'Gamitin ang maliit na pitch input sa bawat bounce para mapanatili ang posisyon',
    'Mag-time ng consistent na rhythm sa tatlong bounces bago mag-exit pataas',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Bounce 1' },
    { t: 1.5, label: 'Bounce 2' },
    { t: 2.5, label: 'Bounce 3' },
    { t: 3.5, label: 'Rebound' },
    { t: 4.0, label: 'Exit' },
  ],
  keyframes: [
    // Entry — approach hover
    { t: 0.0,  throttle: 0.60, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.3,  throttle: 0.60, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Bounce 1 — punch up then chop down
    { t: 0.5,  throttle: 1.00, yaw: 0.00, pitch: -0.15, roll: 0.00 },
    { t: 0.7,  throttle: 0.20, yaw: 0.00, pitch:  0.10, roll: 0.00 },
    { t: 0.95, throttle: 0.25, yaw: 0.00, pitch:  0.05, roll: 0.00 },
    // Bounce 2
    { t: 1.5,  throttle: 1.00, yaw: 0.00, pitch: -0.15, roll: 0.00 },
    { t: 1.7,  throttle: 0.20, yaw: 0.00, pitch:  0.10, roll: 0.00 },
    { t: 1.95, throttle: 0.25, yaw: 0.00, pitch:  0.05, roll: 0.00 },
    // Bounce 3
    { t: 2.5,  throttle: 1.00, yaw: 0.00, pitch: -0.15, roll: 0.00 },
    { t: 2.7,  throttle: 0.20, yaw: 0.00, pitch:  0.10, roll: 0.00 },
    { t: 2.95, throttle: 0.25, yaw: 0.00, pitch:  0.05, roll: 0.00 },
    // Rebound — bigger final punch to climb away
    { t: 3.5,  throttle: 1.00, yaw: 0.00, pitch: -0.30, roll: 0.00 },
    { t: 3.8,  throttle: 0.85, yaw: 0.00, pitch: -0.10, roll: 0.00 },
    { t: 4.0,  throttle: 0.70, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 4.5,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
