export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 6.4,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Dalawang Split-S na sunod-sunod sa magkabilang direksyon — parang "rewind" ang tingin, dahil bumabalik ka sa parehong heading kung saan ka nagsimula. Bawat half kailangan ng sariling roll-then-pull timing.',
  tips: [
    'Pareho ang technique ng bawat half — CUT throttle sa roll, sustained pull pagkatapos',
    'Mag-level muna saglit sa pagitan ng dalawang Split-S bago ulit mag-roll',
    'Bantayan ang altitude — dalawang pababang half-loop kaya kailangan ng mas mataas na entry',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll 1' },
    { t: 1.0,  label: 'Inverted 1' },
    { t: 1.25, label: 'Pull 1' },
    { t: 2.7,  label: 'Mid Level' },
    { t: 3.4,  label: 'Roll 2' },
    { t: 4.0,  label: 'Inverted 2' },
    { t: 4.25, label: 'Pull 2' },
    { t: 5.7,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — carry speed and altitude (extra height needed for two pulls)
    { t: 0.0,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // First Split-S — half-roll to inverted, CUT throttle
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.88, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    // Fully inverted
    { t: 1.0,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // First pull — sustained pitch back through bottom half-loop
    { t: 1.25, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.48, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.1,  throttle: 0.62, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    // Brief level moment — now flying opposite of entry heading
    { t: 2.5,  throttle: 0.75, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 2.7,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Second Split-S — mirrored, half-roll to inverted again
    { t: 3.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.65, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.88, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    // Fully inverted
    { t: 4.0,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Second pull — back through, returning to original heading
    { t: 4.25, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.7,  throttle: 0.48, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 5.1,  throttle: 0.62, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    // Exit — back to original heading and level flight
    { t: 5.5,  throttle: 0.75, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 5.8,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
