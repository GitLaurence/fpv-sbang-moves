export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na pag-bounce — CUT throttle para dive pababa, tapos PUNCH throttle pataas, parang tumatalbog. Magaling para matuto ng throttle control sa malapit sa lupa o kisame.',
  tips: [
    'Sharp ang cut ng throttle sa bawat dive — huwag gradual, parang inalis ang suporta',
    'I-punch ang throttle pataas bago tumama sa pinakababa para makapag-bounce',
    'Gamitin ang maliit na pitch input sa bawat bounce para mapanatili ang isang lugar (parang nakatayo sa ere)',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Bounce 1 Dive' },
    { t: 1.0, label: 'Bounce 1 Punch' },
    { t: 1.5, label: 'Bounce 2 Dive' },
    { t: 2.0, label: 'Bounce 2 Punch' },
    { t: 2.5, label: 'Bounce 3 Dive' },
    { t: 3.0, label: 'Bounce 3 Punch' },
    { t: 3.5, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level hover-ish cruise
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — cut throttle to dive
    { t: 0.5,  throttle: 0.25, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 0.8,  throttle: 0.25, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Punch back up
    { t: 1.0,  throttle: 0.95, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 1.3,  throttle: 0.95, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Bounce 2 — repeat
    { t: 1.5,  throttle: 0.25, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 1.8,  throttle: 0.25, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 2.0,  throttle: 0.95, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 2.3,  throttle: 0.95, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Bounce 3 — repeat
    { t: 2.5,  throttle: 0.25, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 2.8,  throttle: 0.25, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 3.0,  throttle: 0.95, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Exit — settle back to level cruise
    { t: 3.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
