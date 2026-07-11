export default {
  id: 'wall-ride',
  name: 'Wall Ride',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'JJ9W8wpwsxA',
  youtubeStart: 0,
  description: 'Bank nang malapit sa 90° laban sa isang building o pader, tapos i-slide ang quad sa tabi nito gamit ang pitch, habang panatilihin ang distansya gamit ang roll at yaw. Kailangan ng matatag na throttle para hindi bumagsak.',
  tips: [
    'Bank agad nang matatag papunta sa pader — huwag mag-atubili sa entry',
    'Itaas ang throttle habang naka-bank para makabawi sa nawawalang vertical lift',
    'Maliliit na roll/yaw correction lang habang naka-ride para hindi tumama o lumayo masyado sa pader',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Bank to Wall' },
    { t: 0.9, label: 'Ride' },
    { t: 3.2, label: 'Peel Off' },
    { t: 3.8, label: 'Level' },
  ],
  keyframes: [
    // Approach — level flight parallel to the wall's direction
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Bank hard toward the wall
    { t: 0.4,  throttle: 0.70, yaw:  0.05, pitch:  0.10, roll:  0.85 },
    { t: 0.65, throttle: 0.78, yaw:  0.05, pitch:  0.15, roll:  0.95 },
    // Locked in the ride — near-vertical bank, throttle up to hold altitude, pitch slides along the wall
    { t: 0.9,  throttle: 0.85, yaw:  0.10, pitch:  0.20, roll:  1.00 },
    { t: 1.6,  throttle: 0.85, yaw:  0.08, pitch:  0.18, roll:  1.00 },
    { t: 2.3,  throttle: 0.84, yaw:  0.10, pitch:  0.20, roll:  1.00 },
    { t: 2.9,  throttle: 0.85, yaw:  0.08, pitch:  0.18, roll:  1.00 },
    // Peel off — roll back to level
    { t: 3.2,  throttle: 0.78, yaw:  0.05, pitch:  0.12, roll:  0.60 },
    { t: 3.5,  throttle: 0.70, yaw:  0.02, pitch:  0.08, roll:  0.20 },
    // Level
    { t: 3.8,  throttle: 0.64, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
