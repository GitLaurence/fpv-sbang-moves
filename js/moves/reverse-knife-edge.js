export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: 'Tulad ng Knife Edge pero baligtad ang direksyon ng roll at yaw — 90° roll papunta sa kabilang gilid, at kabaligtaran ang yaw correction para mapanatili ang heading. Magandang pares sa regular Knife Edge para sa magkabilang-gilid na transition.',
  tips: [
    'Mag-roll ng -90° (kabaligtad ng regular Knife Edge)',
    'Ang yaw correction ay kabaligtad din ng direksyon kumpara sa regular Knife Edge',
    'Gamitin pareho ang dalawang Knife Edge para sa fluid na S-curve transition sa pagitan ng obstacles',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll -90°' },
    { t: 0.9, label: 'Hold' },
    { t: 2.8, label: 'Roll Back' },
    { t: 3.4, label: 'Level' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to -90°
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -0.75 },
    { t: 0.7,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll: -0.55 },
    // Knife edge hold — opposite yaw to maintain heading, slight pitch correction
    { t: 0.9,  throttle: 0.80, yaw: -0.30, pitch:  0.05, roll:  0.00 },
    { t: 1.3,  throttle: 0.82, yaw: -0.32, pitch:  0.05, roll:  0.00 },
    { t: 1.7,  throttle: 0.80, yaw: -0.28, pitch:  0.03, roll:  0.00 },
    { t: 2.1,  throttle: 0.82, yaw: -0.30, pitch:  0.05, roll:  0.00 },
    { t: 2.5,  throttle: 0.80, yaw: -0.30, pitch:  0.03, roll:  0.00 },
    // Roll back to upright
    { t: 2.8,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    { t: 3.1,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Level
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
