export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 2.6,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Dalawang mabilis na "kick" na roll snap habang dumadaan sa isang obstacle — parang dalawang sipa ni Jackie Chan. Bawat snap ay buong roll na agad babalik sa level bago ang susunod.',
  tips: [
    'Bawat roll snap ay buong 360° — mabilis at malakas, hindi kalahati lang',
    'Maikling pause sa level flight sa pagitan ng dalawang kick para malinaw ang bawat isa',
    'Panatilihin ang throttle stable sa buong move — ang roll lang ang gumagalaw',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Kick 1' },
    { t: 0.75, label: 'Level' },
    { t: 1.0, label: 'Kick 2' },
    { t: 1.45, label: 'Level' },
    { t: 1.8, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // KICK 1 — fast full roll snap
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Back to level — brief pause
    { t: 0.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // KICK 2 — second fast full roll snap
    { t: 1.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Back to level
    { t: 1.35, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 1.9,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
