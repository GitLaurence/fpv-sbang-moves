export default {
  id: 'power-loop',
  name: 'Power Loop',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.5,
  description: 'Buong 360° vertical loop. Ang susi: full throttle sa entry, CHOP halos zero sa tuktok (inverted), agad na punch pabalik sa ibaba. Hold full pitch forward sa buong loop.',
  tips: [
    'Mag-enter nang mabilis — 80-100% throttle bago mag-pitch forward',
    'Sa tuktok (inverted), CHOP throttle papalapit sa zero — huwag mag-atubili dito',
    'Hold full forward pitch sa buong loop — ang pinaka-common na pagkakamali ay mag-release',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Pitch Fwd' },
    { t: 1.5, label: 'Vertical' },
    { t: 2.2, label: 'Top/Chop' },
    { t: 3.1, label: 'Pull Thru' },
    { t: 4.0, label: 'Exit' },
  ],
  keyframes: [
    // High-speed approach — already at full throttle before pitching
    { t: 0.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.92, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward aggressively — hold full pitch through entire loop
    { t: 0.5,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 0.9,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Climbing to vertical — maintain full throttle + full forward pitch
    { t: 1.3,  throttle: 0.95, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching the top — begin throttle reduction
    { t: 2.0,  throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED (top of loop) — chop throttle near-zero, continue holding pitch forward
    { t: 2.2,  throttle: 0.06, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.45, throttle: 0.05, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Nose pointing down — ramp throttle back up aggressively
    { t: 2.7,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.72, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Pulling through the bottom — throttle punch
    { t: 3.3,  throttle: 0.88, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Exit — ease pitch back to level
    { t: 3.8,  throttle: 0.72, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 4.2,  throttle: 0.67, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
