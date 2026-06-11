export default {
  id: 'front-flip',
  name: 'Tracking Front Flip',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 2.5,
  youtubeId:    'th4Y8HVnG4Q',
  youtubeStart: 0,
  description: 'Forward pitch flip habang nag-tratrack ng subject sa frame — full pitch forward para mag-360° flip pasulong, may konting yaw input para hindi mawala ang subject sa camera.',
  tips: [
    'Full pitch forward, hawakan hanggang makumpleto ang buong 360°',
    'Maliit na yaw input lang sa kabuuan ng flip para sundan ang subject',
    'Itaas ng kaunti ang throttle habang papunta sa inverted para hindi bumagsak',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.4, label: 'Pull Thru' },
    { t: 1.9, label: 'Recover' },
  ],
  keyframes: [
    // Approach — level flight, framing the subject
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward — begin the flip with slight yaw to keep tracking
    { t: 0.3,  throttle: 0.70, yaw:  0.15, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.76, yaw:  0.20, pitch:  1.00, roll:  0.00 },
    // Inverted — continue pitch, hold yaw track
    { t: 0.9,  throttle: 0.80, yaw:  0.20, pitch:  1.00, roll:  0.00 },
    { t: 1.15, throttle: 0.78, yaw:  0.15, pitch:  0.95, roll:  0.00 },
    // Pull through — ease pitch toward level
    { t: 1.4,  throttle: 0.72, yaw:  0.10, pitch:  0.45, roll:  0.00 },
    { t: 1.65, throttle: 0.66, yaw:  0.05, pitch:  0.10, roll:  0.00 },
    // Recover — back to level, yaw centered
    { t: 1.9,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
