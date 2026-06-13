export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal flip combo — sabay na full pitch at roll input para mag-tumble papuntang inverted sa diagonal axis, tapos i-unwind pabalik sa level. Mukhang martial-arts flip kapag nakikita mula sa labas, kaya ang pangalan.',
  tips: [
    'I-push ang pitch at roll nang sabay at full deflection — dapat magkasabay ang dalawang input',
    'Manatiling diagonal ang rotation — kung magkahiwalay ang timing, magiging straight flip o roll lang',
    'I-unwind nang gradual ang dalawang stick pabalik sa center habang lumalapit sa level',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Diagonal Flip' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.6, label: 'Unwind' },
    { t: 2.2, label: 'Recovery' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal flip — pitch and roll both full deflection together
    { t: 0.4,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Inverted on the diagonal — sustain throttle to hold the line
    { t: 0.9,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.3,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Unwind — ease both sticks back together
    { t: 1.6,  throttle: 0.74, yaw:  0.00, pitch:  0.55, roll:  0.55 },
    { t: 1.9,  throttle: 0.68, yaw:  0.00, pitch:  0.20, roll:  0.20 },
    // Recovery — level out
    { t: 2.2,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
