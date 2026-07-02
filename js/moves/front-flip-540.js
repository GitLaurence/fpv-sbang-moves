export default {
  id: 'front-flip-540',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.2,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may dagdag na 180° (kabuuang 540°) na may "delay" sa gitna — mag-pause habang halos inverted bago ituloy ang dagdag na rotation. Kailangan ng eksaktong throttle timing para hindi mawalan ng masyadong altitude habang naka-delay.',
  tips: [
    'I-cut ang throttle papasok sa flip, tapos i-HOLD ang center stick habang inverted para sa "delay" — huwag agad ituloy ang rotation',
    'Pagkatapos ng delay, ituloy ang pitch input para makumpleto ang dagdag na 180° (kabuuang 540°)',
    'Ang punch sa catch ay mas malakas dahil mas mahabang bagsak kaysa sa normal na front flip',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Pitch Up' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.3, label: 'Delay' },
    { t: 1.9, label: 'Continue' },
    { t: 2.6, label: 'Complete' },
    { t: 3.1, label: 'Catch' },
    { t: 3.6, label: 'Recovery' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch flip begins
    { t: 0.35, throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted
    { t: 0.9,  throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — hold near-neutral stick while inverted, brief free-fall pause
    { t: 1.3,  throttle: 0.20, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 1.6,  throttle: 0.18, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Continue rotation for the extra 180° (total 540°)
    { t: 1.9,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.55, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // CATCH — throttle punch to arrest the extended drop
    { t: 3.1,  throttle: 0.95, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 3.35, throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.6,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
