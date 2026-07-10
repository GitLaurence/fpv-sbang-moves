export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Dalawang magkasunod na forward pitch flip na parang doble "kick" — pinangalanan sa martial artist dahil sa rapid at snappy na successive na hitsura. Purong pitch lang, walang roll o yaw, ulit-ulit.',
  tips: [
    'Bawat "kick" ay full pitch snap flip — kumpletuhin muna ang unang flip bago simulan ang ikalawa',
    'Throttle chop sa bawat pag-ikot para "crisp" ang parehong kick, hindi malabo',
    'Pantay ang timing ng dalawang flip — huwag magmadali o magpabagal sa pagitan',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Kick 1' },
    { t: 0.75, label: 'Flip 1' },
    { t: 1.3,  label: 'Kick 2' },
    { t: 1.75, label: 'Flip 2' },
    { t: 2.3,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Kick 1 — full pitch snap forward, throttle cut
    { t: 0.3,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.5,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.55, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Brief level pause between kicks
    { t: 0.95, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Kick 2 — repeat the same snap
    { t: 1.3,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.75, throttle: 0.55, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Recover — throttle punch to catch altitude
    { t: 1.95, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
