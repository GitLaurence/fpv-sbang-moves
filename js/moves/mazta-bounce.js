export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 2.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Throttle chop para mag-drop ang drone, tapos throttle punch para "bumalik" pataas — parang bumabawi pagkatapos ng saglit na free-fall. Puro throttle modulation na may konting pitch para sa natural na arc.',
  tips: [
    'Mabilis ang throttle chop — parang biglang pagkawala ng lift',
    'Timing ang susi — i-punch ang throttle bago tumama sa ground o obstacle',
    'Magdagdag ng konting pitch forward habang nag-drop para magmukhang natural ang bounce arc',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Chop' },
    { t: 1.0, label: 'Drop' },
    { t: 1.3, label: 'Bounce' },
    { t: 2.0, label: 'Recover' },
  ],
  keyframes: [
    // Approach — steady cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Chop — sudden throttle cut, slight nose forward
    { t: 0.5,  throttle: 0.10, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // Drop — free-fall continues
    { t: 1.0,  throttle: 0.05, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Bounce — punch throttle to arrest the drop and climb back
    { t: 1.3,  throttle: 1.00, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 1.6,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle back to cruise
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
