export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na throttle cut at catch habang patuloy ang forward pitch — gumagawa ng "bouncing" na pakiramdam, parang batong tumatalbog sa tubig. Pundasyon para sa throttle rhythm at timing.',
  tips: [
    'Pareho ang tagal ng bawat cut-catch cycle — ang consistency ang gumagawa ng "bounce" na pakiramdam',
    'Maliit lang ang forward pitch sa buong move — ang bounce mismo ang pangunahing galaw',
    'Ang catch punch ay dapat sapat lang para itaas ulit ang drone, hindi labis — kontrolado ang taas ng bawat bounce',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Bounce 1' },
    { t: 0.95, label: 'Catch 1' },
    { t: 1.5, label: 'Bounce 2' },
    { t: 1.95, label: 'Catch 2' },
    { t: 2.5, label: 'Bounce 3' },
    { t: 2.95, label: 'Catch 3' },
    { t: 3.6, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight, slight forward pitch carries through whole move
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // BOUNCE 1 — chop throttle, let it dive
    { t: 0.5,  throttle: 0.08, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 0.8,  throttle: 0.08, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // CATCH 1 — punch throttle to bounce back up
    { t: 0.95, throttle: 1.00, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 1.15, throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // BOUNCE 2 — same rhythm
    { t: 1.5,  throttle: 0.08, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 1.8,  throttle: 0.08, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // CATCH 2
    { t: 1.95, throttle: 1.00, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 2.15, throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // BOUNCE 3 — same rhythm
    { t: 2.5,  throttle: 0.08, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 2.8,  throttle: 0.08, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // CATCH 3
    { t: 2.95, throttle: 1.00, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 3.15, throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Exit — settle back to cruise
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.05, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
