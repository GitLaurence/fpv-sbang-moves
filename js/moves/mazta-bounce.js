export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Rhythmic na throttle bounce — paulit-ulit na chop at catch ng throttle habang patuloy ang forward momentum, kaya parang "bumabayo" o tumatalbog ang drone sa hangin. Magandang exercise para sa throttle timing at rhythm.',
  tips: [
    'Pareho ang timing ng bawat bounce — chop, catch, settle, ulitin sa parehong rhythm',
    'Manatili ang slight forward pitch sa buong move para hindi mawala ang momentum',
    'Mas malaki ang throttle swing = mas dramatic ang bounce, pero kontrolado dapat ang catch',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Bounce 1' },
    { t: 1.3, label: 'Bounce 2' },
    { t: 2.1, label: 'Bounce 3' },
    { t: 3.0, label: 'Exit' },
  ],
  keyframes: [
    // Entry — cruise with slight forward pitch
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Bounce 1 — chop then catch
    { t: 0.5,  throttle: 0.15, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 0.75, throttle: 0.85, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 1.0,  throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Bounce 2 — repeat
    { t: 1.3,  throttle: 0.15, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 1.55, throttle: 0.85, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 1.8,  throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Bounce 3 — repeat
    { t: 2.1,  throttle: 0.15, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.35, throttle: 0.85, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.6,  throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Exit — settle back to cruise
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
