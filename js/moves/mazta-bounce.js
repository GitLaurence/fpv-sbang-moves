export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 2.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature move ni Headmazta: mag-dive papunta sa isang bagay, chop ang throttle malapit sa ground, tapos punch + pitch up para "tumalbog" pabalik paitaas. Parang bola na tumatalbog sa lupa.',
  tips: [
    'Huwag mawala ang momentum bago ang bounce — kailangan ng patuloy na dive bago ang chop',
    'Sabay ang throttle punch at pitch-up snap — dito nagmumula ang "bounce" na effect',
    'Mag-practice sa mataas na altitude muna bago subukan malapit sa lupa',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Dive' },
    { t: 0.6, label: 'Chop' },
    { t: 0.9, label: 'Bounce' },
    { t: 1.6, label: 'Climb Out' },
    { t: 2.0, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise toward the target
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive — pitch forward toward the object
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  0.65, roll:  0.00 },
    { t: 0.5,  throttle: 0.48, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    // Chop — throttle cut just before impact point
    { t: 0.6,  throttle: 0.15, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 0.75, throttle: 0.12, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // BOUNCE — punch throttle + snap pitch up together
    { t: 0.9,  throttle: 1.00, yaw:  0.00, pitch: -0.75, roll:  0.00 },
    { t: 1.1,  throttle: 0.95, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Climb out — ease pitch and throttle back toward level
    { t: 1.35, throttle: 0.78, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 1.6,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 1.85, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
