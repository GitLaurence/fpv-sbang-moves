export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na sequence ng mga flips, rolls, at yaw snaps na nagmumukha tulad ng martial arts combo ni Jackie Chan — snappy, explosive, at madaling makita sa video. Yaw snap → forward flip → full roll → pitch snap to inverted → roll out → yaw accent. Bawat input ay kailangang mabilis at accurate.',
  tips: [
    'Ang bawat input ay kailangang mabilis at malinis — walang matagal na transitions sa pagitan',
    'Mag-master ng bawat bahagi ng combo (yaw snap, flip, roll, pitch snap) nang hiwalay bago i-chain',
    'Ang timing ng yaw snap sa simula ay nagse-set ng tempo ng buong combo — mabilis ito dapat',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Yaw Snap' },
    { t: 1.2, label: 'Fwd Flip' },
    { t: 2.0, label: 'Roll' },
    { t: 2.8, label: 'Pitch Snap' },
    { t: 3.5, label: 'Roll Out' },
    { t: 4.2, label: 'Yaw Acc' },
  ],
  keyframes: [
    // Entry — carry speed
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW SNAP — quick 90° yaw punch
    { t: 0.5,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 0.72, throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FORWARD FLIP — pitch snap + throttle cut
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.45, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.65, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FULL ROLL — quick 360° right roll
    { t: 2.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.45, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH SNAP to inverted — blip then snap
    { t: 2.8,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.95, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.15, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL OUT — 180° roll back to upright
    { t: 3.3,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.55, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.45 },
    // Recover
    { t: 3.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW ACCENT — final snap to close the combo
    { t: 4.2,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 4.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 4.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
