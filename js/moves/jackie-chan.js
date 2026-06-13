export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal flip — sabay na full pitch at roll input para sa isang acrobatic na "corkscrew" rotation. Mas kumplikado kaysa sa plain roll dahil dalawang axis ang sabay na umiikot.',
  tips: [
    'Sabay na ipasok ang pitch at roll stick papuntang isang corner — diagonal full deflection',
    'PUNCH throttle habang inverted para hindi bumagsak nang sobra sa gitna ng rotation',
    'Itago ang diagonal input hanggang matapos ang buong rotation bago bumalik sa center',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Diagonal In' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.1, label: 'Punch' },
    { t: 1.8, label: 'Roll Out' },
    { t: 2.3, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — moderate cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal input — pitch and roll deflect together
    { t: 0.35, throttle: 0.68, yaw:  0.00, pitch:  0.70, roll:  0.70 },
    { t: 0.6,  throttle: 0.72, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.85, throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Inverted, mid-corkscrew
    { t: 1.0,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // PUNCH throttle to carry through the rotation
    { t: 1.1,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.35, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Continue diagonal rotation, easing toward upright
    { t: 1.6,  throttle: 0.85, yaw:  0.00, pitch:  0.80, roll:  0.80 },
    // Roll out — ease both axes back to center together
    { t: 1.8,  throttle: 0.72, yaw:  0.00, pitch:  0.40, roll:  0.40 },
    { t: 2.0,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 2.4,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
