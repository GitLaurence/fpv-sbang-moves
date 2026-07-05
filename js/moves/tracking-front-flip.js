export default {
  id: 'tracking-front-flip',
  name: 'Tracking Front Flip',
  level: 'beginner',
  difficulty: 2,
  durationSec: 3.2,
  youtubeId:    'th4Y8HVnG4Q',
  youtubeStart: 0,
  description: 'Forward flip habang nagpapanatili ng sustained yaw para "ma-track" ang isang subject sa gitna ng frame sa buong rotation. Parehong pitch control ng regular flip, may dagdag na yaw discipline.',
  tips: [
    'I-hold ang sustained yaw sa buong flip — hindi ito snap, kundi steady turn habang umiikot',
    'Piliin ang subject bago pa mag-flip para malinaw ang tina-track na punto',
    'Mag-add ng throttle habang inverted, tulad ng regular forward flip',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch + Track' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.4, label: 'Past Top' },
    { t: 1.9, label: 'Pull Out' },
    { t: 2.3, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — carry speed, subject off to one side
    { t: 0.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.2,  throttle: 0.70, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Push pitch forward + sustained yaw to keep subject tracked
    { t: 0.3,  throttle: 0.78, yaw: 0.35, pitch:  1.00, roll: 0.00 },
    { t: 0.6,  throttle: 0.82, yaw: 0.35, pitch:  1.00, roll: 0.00 },
    // Climbing / inverted — add throttle, keep tracking yaw steady
    { t: 0.9,  throttle: 0.90, yaw: 0.35, pitch:  1.00, roll: 0.00 },
    { t: 1.2,  throttle: 0.82, yaw: 0.35, pitch:  1.00, roll: 0.00 },
    { t: 1.5,  throttle: 0.72, yaw: 0.30, pitch:  0.70, roll: 0.00 },
    // Nose pointing down — ease pitch and yaw together
    { t: 1.8,  throttle: 0.65, yaw: 0.15, pitch:  0.20, roll: 0.00 },
    // Recovery — level flight, subject still centered
    { t: 2.1,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 2.6,  throttle: 0.63, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 3.2,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
