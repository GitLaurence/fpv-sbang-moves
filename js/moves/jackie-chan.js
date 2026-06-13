export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Sunud-sunod na full rotations — roll, flip, tapos roll ulit sa kabilang direksyon, sarado ng yaw snap. Parang kung-fu combo: walang malaking pahinga sa pagitan ng bawat galaw.',
  tips: [
    'Bilisan ang transition sa pagitan ng bawat rotation — parang sunud-sunod na suntok, hindi hiwalay na tricks',
    'I-maintain ang throttle sa katamtamang level sa pagitan ng mga spins para hindi mawala ang altitude',
    'I-master muna ang bawat rotation nang hiwalay (roll, flip, roll) bago ipasok sa buong chain',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll 1' },
    { t: 1.0, label: 'Recover' },
    { t: 1.3, label: 'Flip' },
    { t: 1.9, label: 'Recover' },
    { t: 2.2, label: 'Roll 2' },
    { t: 2.8, label: 'Recover' },
    { t: 3.2, label: 'Yaw Snap' },
    { t: 3.8, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll 1 — full snap roll, throttle cut
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.88, throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — re-establish throttle
    { t: 1.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip — full pitch snap, throttle cut
    { t: 1.3,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.55, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.78, throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — re-establish throttle
    { t: 1.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll 2 — full snap roll, opposite direction
    { t: 2.2,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.45, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.68, throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — re-establish throttle
    { t: 2.8,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Yaw snap — sharp finish flourish
    { t: 3.2,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
