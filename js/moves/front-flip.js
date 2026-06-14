export default {
  id: 'front-flip',
  name: 'Front Flip',
  level: 'beginner',
  difficulty: 2,
  durationSec: 3.0,
  youtubeId:    'YPjSWXFgHEQ',
  youtubeStart: 0,
  description: 'Buong 360° forward flip gamit ang pitch stick. Itulak ang pitch pasulong nang buo, hayaan ang momentum na kumpletuhin ang rotation, tapos i-level pagkatapos. Pundasyon ng lahat ng flip-based tricks.',
  tips: [
    'Itulak ang pitch stick pasulong nang buo at hawakan — hindi jab, kundi sustained na input',
    'Bahagyang ibaba ang throttle habang nag-iikot para hindi tumaas ang altitude',
    'I-level ang pitch stick kapag halos kumpleto na ang 360° — huwag hintayin ang exact na sandali',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Pitch Fwd' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.6, label: 'Complete' },
    { t: 2.0, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward full — begin the flip, ease throttle to limit climb
    { t: 0.4,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — momentum carries the rotation
    { t: 1.0,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Completing the 360° — ease pitch as horizon returns
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to level cruise
    { t: 2.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
