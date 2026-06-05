export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Power loop papunta sa lookback, tapos Matty Flip pabalik — isang tuluy-tuloy na dalawang-bahagi na combo. Pinangalanan dahil sa acrobatic, stunt-heavy na estilo. Kailangan ng mataas na bilis sa entry at maayos na timing ng dalawang flip.',
  tips: [
    'Kailangan ng mataas na bilis bago ang power loop — kulang na bilis = hindi maaabot ang tuktok',
    'Sa tuktok ng loop, pitch back agad para sa lookback — walang pause, sabay ang dalawang aksyon',
    'Ang Matty Flip exit ay dapat nasa parehong linya ng entry — parang bumabalik sa pinanggalingan',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pull Up' },
    { t: 1.2, label: 'Climbing' },
    { t: 2.0, label: 'Top/Look' },
    { t: 2.6, label: 'Dive' },
    { t: 3.4, label: 'Level' },
    { t: 3.8, label: 'Matty' },
    { t: 4.6, label: 'Punch' },
    { t: 5.2, label: 'Exit' },
  ],
  keyframes: [
    // High-speed entry
    { t: 0.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.92, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Power loop — full throttle, aggressive pitch back
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.8,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Climbing phase — hold pitch back
    { t: 1.2,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.80, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Approaching inverted top — transition to lookback pitch
    { t: 1.95, throttle: 0.30, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    // TOP + Lookback — chop throttle, pitch FORWARD to look toward origin
    { t: 2.05, throttle: 0.10, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 2.3,  throttle: 0.12, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Diving back down through the loop — nose below horizon
    { t: 2.6,  throttle: 0.55, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    { t: 3.0,  throttle: 0.80, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Level out — brief recovery before the Matty Flip
    { t: 3.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY FLIP — push pitch forward (Matty-style forward flip)
    { t: 3.8,  throttle: 0.70, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 4.05, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — full throttle punch to shoot through
    { t: 4.22, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.42, throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Past inverted — ease pitch, approaching level
    { t: 4.65, throttle: 0.78, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // Exit — level out
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
