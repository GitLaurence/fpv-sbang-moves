export default {
  id: 'flip-roll-iys-combo',
  name: '540° Flip + Roll + IYS',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.5,
  youtubeId:    'l3Y8brXYYQw',
  youtubeStart: 0,
  description: 'Triple-combo: 540° pitch flip (isa\'t kalahating rotation, natatapos sa inverted) → full roll habang inverted → Inverted Yaw Spin → flip pabalik sa upright. Lahat magkasunod na walang malaking pause — kailangan ng malaking airspace at commitment.',
  tips: [
    'Ang 540° flip ay mas matagal humawak sa pitch kaysa regular na flip — huwag i-release nang maaga',
    'Pagkatapos ng 540, dapat inverted ka na — dito diretso ang roll, walang dagdag na pag-align',
    'Ang IYS ay simulan agad pagkatapos ng roll — bawal ang malaking pause sa gitna ng combo',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Flip 540°' },
    { t: 1.1,  label: 'Inverted' },
    { t: 1.3,  label: 'Roll' },
    { t: 2.0,  label: 'Roll Done' },
    { t: 2.2,  label: 'IYS Start' },
    { t: 3.9,  label: 'IYS Done' },
    { t: 4.2,  label: 'Flip Up' },
    { t: 4.65, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 540° flip — held longer than a standard 360 flip
    { t: 0.3,  throttle: 0.32, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.88, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Now inverted (1.5 rotations complete) — center pitch, re-establish throttle
    { t: 1.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll — full roll while inverted
    { t: 1.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.65, throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // IYS — full yaw spin while inverted
    { t: 2.2,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.75, throttle: 0.68, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    { t: 3.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright
    { t: 4.2,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.42, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — punch throttle to catch altitude loss
    { t: 4.65, throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
