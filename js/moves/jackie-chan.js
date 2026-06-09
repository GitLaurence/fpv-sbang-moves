export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Explosive na pitch-back snap kasabay ng full yaw flick — ang drone ay kumikilos tulad ng "flying kick" ni Jackie Chan. Throttle punch → pitch back snap + yaw → dead stop → roll recovery. Mabilis, snappy, at dramatic ang dating.',
  tips: [
    'Ang pitch back at yaw ay halos sabay — ang yaw ang nagbibigay ng "spin" na dating FPV',
    'PUNCH throttle bago ang snap — kailangan ng energy para lumabas ang galaw nang tama',
    'Mag-practice ng Juicy Flick muna — ang Jackie Chan ay pitch-back version nito may yaw',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.4,  label: 'Punch' },
    { t: 0.6,  label: 'Snap+Yaw' },
    { t: 1.0,  label: 'Dead Stop' },
    { t: 1.4,  label: 'Roll Out' },
    { t: 2.0,  label: 'Recovery' },
  ],
  keyframes: [
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // THROTTLE PUNCH — energy burst
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SNAP: pitch BACK + full YAW simultaneously — the "flying kick"
    { t: 0.6,  throttle: 0.28, yaw:  1.00, pitch: -1.00, roll:  0.00 },
    { t: 0.85, throttle: 0.22, yaw:  0.80, pitch: -0.75, roll:  0.00 },
    // Dead stop — inverted/vertical, all sticks center
    { t: 1.0,  throttle: 0.20, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.20, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° ROLL OUT — snap back to upright
    { t: 1.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.65, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.70 },
    { t: 1.85, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.20 },
    // Upright — catch + slight forward pitch for exit speed
    { t: 2.0,  throttle: 0.70, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 2.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
