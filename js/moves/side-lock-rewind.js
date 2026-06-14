export default {
  id: 'side-lock-rewind',
  name: 'Side Lock Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'Pp1Yowe2M-g',
  youtubeStart: 0,
  description: 'I-roll papunta sa knife-edge (90°), gamitin ang yaw para "lumipad pasulong" habang nakatagilid, tapos i-reverse ang yaw para bumalik sa orihinal na landas — parang "rewind" ang biyahe pabalik.',
  tips: [
    'I-hold ang roll sa eksaktong 90° (knife-edge) — sobra o kulang ay mawawala ang tracking',
    'Ang yaw na ginagamit habang naka-side lock ay parang pitch sa normal flight — ito ang nagbibigay ng forward motion',
    'I-reverse ang yaw input nang dahan-dahan para makamit ang clean rewind pabalik sa entry point',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll 90°' },
    { t: 0.9, label: 'Side Lock' },
    { t: 2.0, label: 'Rewind' },
    { t: 3.2, label: 'Roll Out' },
    { t: 3.7, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to knife-edge — quarter roll, throttle eases as orientation changes
    { t: 0.4,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Side lock established — hold roll, begin yaw to drive forward motion
    { t: 0.9,  throttle: 0.60, yaw:  0.55, pitch:  0.00, roll:  1.00 },
    { t: 1.3,  throttle: 0.62, yaw:  0.60, pitch:  0.00, roll:  1.00 },
    { t: 1.7,  throttle: 0.60, yaw:  0.58, pitch:  0.00, roll:  1.00 },
    // REWIND — yaw reverses to retrace the path backward, roll held
    { t: 2.0,  throttle: 0.60, yaw: -0.60, pitch:  0.00, roll:  1.00 },
    { t: 2.5,  throttle: 0.62, yaw: -0.62, pitch:  0.00, roll:  1.00 },
    { t: 2.9,  throttle: 0.60, yaw: -0.55, pitch:  0.00, roll:  1.00 },
    // Roll out — ease yaw to neutral, unwind the roll back to upright
    { t: 3.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 3.45, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle to cruise
    { t: 3.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
