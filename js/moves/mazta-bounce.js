export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature move ni Headmazta — mabilis na pagbaba (dive) malapit sa lupa, tapos biglaang pitch-up snap na may throttle punch para "tumalbog" pataas. Kailangan ng tumpak na timing at confidence sa altitude management.',
  tips: [
    'Magdala ng sapat na altitude bago mag-dive — kailangan ng buffer para sa "bounce"',
    'I-time ang throttle punch at pitch reversal nang sabay para sa malakas na bounce effect',
    'Mag-practice muna sa mataas na altitude bago subukan malapit sa lupa o obstacle',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Dive' },
    { t: 1.0, label: 'Approach' },
    { t: 1.3, label: 'Bounce' },
    { t: 1.7, label: 'Climb' },
    { t: 2.4, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive — cut throttle, pitch forward/down
    { t: 0.3,  throttle: 0.30, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.28, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    // Approach — sustained dive toward the ground
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.75, roll:  0.00 },
    // BOUNCE — snap pitch reversal with throttle punch
    { t: 1.3,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.45, throttle: 1.00, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    // Climb out
    { t: 1.7,  throttle: 0.85, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 2.0,  throttle: 0.72, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Recovery — level cruise
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
