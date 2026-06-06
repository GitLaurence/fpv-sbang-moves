export default {
  id: 'juicy-spin',
  name: 'Juicy Flick',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'qvVVhV-37-A',
  youtubeStart: 0,
  description: 'Throttle blip → mabilis na pitch snap papunta sa inverted → maikling "look-back" na pahinga → 180° roll pabalik sa upright. Ang "juicy" ay ang snappy, whip-like na pakiramdam ng galaw.',
  tips: [
    'Ang throttle blip at pitch snap ay halos sabay — maliit na pause lang sa pagitan',
    'Maghintay ng buong 180° (fully inverted) bago mag-roll out — baka maging Matty Flip kung maaga',
    'Mag-mix ng kaunting opposite yaw habang nag-ro-roll para manatiling nakatuon ang camera',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Blip' },
    { t: 0.55, label: 'Pitch Snap' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.25, label: 'Roll Out' },
    { t: 1.8,  label: 'Upright' },
    { t: 2.3,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip — brief punch for entry energy
    { t: 0.35, throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch snap — aggressive forward pitch to flip to inverted, throttle cut
    { t: 0.55, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — sticks to center — "look-back" pause
    { t: 1.0,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.15, throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll to return upright (with small counter-yaw for camera alignment)
    { t: 1.25, throttle: 0.35, yaw: -0.20, pitch:  0.00, roll:  1.00 },
    { t: 1.55, throttle: 0.40, yaw: -0.12, pitch:  0.00, roll:  1.00 },
    { t: 1.75, throttle: 0.48, yaw:  0.00, pitch:  0.00, roll:  0.28 },
    // Upright — throttle punch + forward pitch for rainbow-arc exit
    { t: 1.9,  throttle: 0.72, yaw:  0.00, pitch:  0.32, roll:  0.00 },
    // Exit — return to cruise
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
