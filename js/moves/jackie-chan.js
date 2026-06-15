export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.6,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na kombinasyon ng flip at roll na sunod-sunod — parang martial arts combo sa hangin. Bawat input ay snap at decisive, walang gradual na transition.',
  tips: [
    'Bawat flip/roll ay dapat full snap input — center bago ang susunod na axis',
    'Panatilihin ang throttle na stable sa pagitan ng mga snap para hindi mawala ang altitude',
    'Mag-master muna ng hiwalay na flip at roll bago pagsamahin sa combo na ito',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip' },
    { t: 1.1, label: 'Recover' },
    { t: 1.6, label: 'Roll' },
    { t: 2.3, label: 'Recover' },
    { t: 2.8, label: 'Flip 2' },
    { t: 3.5, label: 'Roll Out' },
    { t: 4.2, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.25, throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // FLIP — snap forward pitch flip, chop throttle
    { t: 0.4,  throttle: 0.30, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 0.7,  throttle: 0.28, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    // Dead stop — center sticks
    { t: 1.1,  throttle: 0.40, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 1.3,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // ROLL — snap full roll
    { t: 1.6,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 1.00 },
    { t: 1.95, throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 1.00 },
    // Dead stop — center again
    { t: 2.3,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 2.5,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // FLIP 2 — snap backward pitch flip
    { t: 2.8,  throttle: 0.32, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    { t: 3.1,  throttle: 0.32, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    // Roll out to upright
    { t: 3.5,  throttle: 0.55, yaw: 0.00, pitch:  0.00, roll: 0.65 },
    { t: 3.8,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 0.30 },
    // Settle — level out
    { t: 4.2,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 4.6,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
