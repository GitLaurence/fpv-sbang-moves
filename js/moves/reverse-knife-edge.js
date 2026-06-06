export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: 'Katulad ng Knife Edge ngunit i-roll sa KALIWANG direksyon (−90°). Ang ibang gilid ng drone ang nakaharap sa lupa. Pareho ang kahirapan ngunit nangangailangan ng espesyal na muscle memory para sa kabaligtarang yaw correction — parehong direksyon ay kailangan ng bawat pilot.',
  tips: [
    'Roll sa kaliwa (−90°) hindi sa kanan — pabaligtarin ang roll input mula sa regular Knife Edge',
    'Gamitin ang NEGATIBONG yaw (kaliwa) para sa heading control at level maintenance',
    'Mag-train ng parehong direksyon nang hiwalay para sa symmetric na freestyle skills',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll −90°' },
    { t: 0.9, label: 'Hold' },
    { t: 2.8, label: 'Roll Back' },
    { t: 3.4, label: 'Level' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll LEFT to −90° (reverse direction from standard Knife Edge)
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -0.75 },
    { t: 0.7,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll: -0.55 },
    // Reverse knife edge hold — negative yaw to maintain heading
    { t: 0.9,  throttle: 0.80, yaw: -0.30, pitch: -0.05, roll:  0.00 },
    { t: 1.3,  throttle: 0.82, yaw: -0.32, pitch: -0.05, roll:  0.00 },
    { t: 1.7,  throttle: 0.80, yaw: -0.28, pitch: -0.03, roll:  0.00 },
    { t: 2.1,  throttle: 0.82, yaw: -0.30, pitch: -0.05, roll:  0.00 },
    { t: 2.5,  throttle: 0.80, yaw: -0.30, pitch: -0.03, roll:  0.00 },
    // Roll back to upright (roll right to correct)
    { t: 2.8,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    { t: 3.1,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Level
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
