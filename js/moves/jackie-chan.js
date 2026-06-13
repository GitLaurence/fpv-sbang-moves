export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na double snap roll sa magkabilang direksyon na sinusundan ng yaw kick — "kung fu" style na combo na puro biglaang reversal. Bawat input ay dapat sharp at decisive, walang gradual na transition.',
  tips: [
    'Snap roll papuntang isang direksyon, dead stop bago agad i-reverse papuntang kabaligtaran',
    'Ang yaw kick sa dulo ay dapat mabilis at malinis — parang "punch" na pagtatapos',
    'Panatilihing steady ang throttle habang nag-roll — ang focus ay sa roll/yaw timing, hindi sa altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Right' },
    { t: 0.7, label: 'Dead Stop' },
    { t: 0.95, label: 'Roll Left' },
    { t: 1.35, label: 'Yaw Kick' },
    { t: 1.7, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SNAP ROLL right — full deflection, quick full rotation
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP — sticks back to center, brief pause
    { t: 0.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.82, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SNAP ROLL left — full reversal, opposite direction
    { t: 0.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 1.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    // Dead stop again before the yaw kick
    { t: 1.35, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW KICK — sharp snap finish
    { t: 1.5,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 1.9,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
