export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: '"Drone Kung Fu" — dalawang magkasunod na tumble combo: forward flip papuntang roll, tapos backflip papuntang reverse roll. Patuloy na galaw ng quad sa magkaibang axes, parang tumbling acrobatics.',
  tips: [
    'Bawat tumble ay flip muna (pitch) bago ilipat sa roll — huwag pagsabayin agad sa simula',
    'Mag-throttle cut sa bawat flip phase, tapos i-restore habang papasok sa roll para hindi bumagsak',
    'Mag-practice ng bawat tumble nang hiwalay (flip-to-roll, backflip-to-roll) bago pagsamahin',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip Fwd' },
    { t: 0.85, label: 'Roll 1' },
    { t: 1.6, label: 'Settle' },
    { t: 2.0, label: 'Flip Back' },
    { t: 2.45, label: 'Roll 2' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Tumble 1 — pitch flip forward, throttle cut
    { t: 0.4,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Transition into roll while still pitched — tumbling motion
    { t: 0.85, throttle: 0.55, yaw:  0.00, pitch:  0.30, roll:  1.00 },
    { t: 1.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.35, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Settle after first tumble
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Tumble 2 — pitch flip backward, throttle cut
    { t: 2.0,  throttle: 0.30, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.25, throttle: 0.28, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Transition into reverse roll while still pitched
    { t: 2.45, throttle: 0.55, yaw:  0.00, pitch: -0.30, roll: -1.00 },
    { t: 2.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    // Recovery — settle level
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
