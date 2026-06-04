export default {
  id: 'power-loop',
  name: 'Power Loop',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.5,
  youtubeId:    'Fz2ujoePXdo',
  youtubeStart: 0,
  description: 'Buong 360° vertical loop. Mag-approach nang mabilis, PULL pitch stick pabalik (nose up) para mag-arc pataas at paikot. CHOP throttle sa tuktok (inverted), agad na punch sa ibaba.',
  tips: [
    'Mag-enter nang mabilis — 80-100% throttle bago mag-pitch back',
    'Sa tuktok (inverted), CHOP throttle papalapit sa zero kapag nakita mo ang horizon sa goggles',
    'Hold full pitch back (pull) sa buong loop — huwag bitawan ang pitch stick',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Pitch Back' },
    { t: 1.5, label: 'Vertical' },
    { t: 2.2, label: 'Top/Chop' },
    { t: 3.1, label: 'Pull Thru' },
    { t: 4.0, label: 'Exit' },
  ],
  keyframes: [
    // High-speed approach — ramp to full throttle before pulling
    { t: 0.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.92, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PULL pitch back — nose up, full throttle to power through the loop
    { t: 0.5,  throttle: 1.00, yaw:  0.00, pitch: -0.88, roll:  0.00 },
    { t: 0.9,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Climbing to vertical — hold full pull + full throttle
    { t: 1.3,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Approaching the top — horizon appears, begin throttle chop
    { t: 2.0,  throttle: 0.40, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // INVERTED (top of loop) — chop throttle near-zero, keep pulling
    { t: 2.2,  throttle: 0.06, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.45, throttle: 0.05, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Nose pointing down — ramp throttle back up
    { t: 2.7,  throttle: 0.30, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.72, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Pulling through the bottom — punch throttle
    { t: 3.3,  throttle: 0.88, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    // Exit — ease pitch to level
    { t: 3.8,  throttle: 0.72, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 4.2,  throttle: 0.67, yaw:  0.00, pitch: -0.05, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
