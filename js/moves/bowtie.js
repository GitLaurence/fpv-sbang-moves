export default {
  id: 'bowtie',
  name: 'Bowtie',
  level: 'advanced',
  difficulty: 4,
  durationSec: 7.0,
  description: 'Figure-8 na may inverted na bahagi sa bawat kanto. Combination ng dalawang Split-S na magkasalungat ang direksyon — kailangan ng consistent na timing.',
  tips: [
    'Mag-isip ng dalawang Split-S — isa sa kaliwa, isa sa kanan, magkasalungat ang roll',
    'I-time ang bawat roll entry para consistent ang shape ng figure-8',
    'Ang exit ng unang half-loop ay ang entry ng pangalawa — huwag mag-pause sa gitna',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Roll R' },
    { t: 1.1, label: 'Pull 1' },
    { t: 3.0, label: 'Mid' },
    { t: 3.5, label: 'Roll L' },
    { t: 4.1, label: 'Pull 2' },
    { t: 6.2, label: 'Exit' },
  ],
  keyframes: [
    // Entry — build speed
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // First roll — right
    { t: 0.5,  throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.8,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Inverted — begin first pull
    { t: 1.1,  throttle: 0.43, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.46, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.2,  throttle: 0.54, yaw:  0.00, pitch: -0.65, roll:  0.00 },
    // Halfway through figure-8 — level briefly
    { t: 2.7,  throttle: 0.62, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Second roll — opposite direction (left)
    { t: 3.5,  throttle: 0.67, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 3.8,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -0.30 },
    // Inverted — begin second pull
    { t: 4.1,  throttle: 0.43, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.6,  throttle: 0.46, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 5.2,  throttle: 0.54, yaw:  0.00, pitch: -0.65, roll:  0.00 },
    // Second exit
    { t: 5.7,  throttle: 0.62, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 6.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 7.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
