export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Advanced combo na pinagsama ang dalawang Juicy Flick na may Split-S sa gitna — Double Juicy na may direction change. Ang bawat Flick ay dapat snappy at decided; ang Split-S sa gitna ang nagbibigay ng "drama" sa pagitan.',
  tips: [
    'Ang dalawang Juicy Flick ay magkaibang "feel" — ang una ay pabilis, ang pangalawa ay palusot',
    'Ang Split-S sa gitna ay dapat clean at hindi rushed — hayaan na mag-complete bago mag-second flick',
    'Kailangan ng sapat na altitude para may clearance sa buong double-flick combo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Blip 1' },
    { t: 0.5, label: 'Flick 1' },
    { t: 1.0, label: 'Roll 1' },
    { t: 1.5, label: 'Split-S' },
    { t: 2.5, label: 'Level' },
    { t: 2.7, label: 'Blip 2' },
    { t: 2.9, label: 'Flick 2' },
    { t: 3.5, label: 'Roll 2' },
    { t: 4.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip 1
    { t: 0.3,  throttle: 0.90, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch snap 1 — to inverted
    { t: 0.5,  throttle: 0.26, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.72, throttle: 0.24, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — center pitch
    { t: 0.9,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll 1 — 180° roll back to upright
    { t: 1.0,  throttle: 0.35, yaw: -0.15, pitch:  0.00, roll:  1.00 },
    { t: 1.25, throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.42, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    // Upright briefly then immediately roll to inverted for Split-S
    { t: 1.55, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.78, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.80 },
    // Fully inverted for Split-S
    { t: 1.92, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull — pitch back through bottom half-loop
    { t: 2.05, throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.35, throttle: 0.55, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    { t: 2.55, throttle: 0.70, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Level recovery
    { t: 2.72, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip 2 + Flick 2
    { t: 2.85, throttle: 0.90, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.26, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.18, throttle: 0.24, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll 2 — back to upright
    { t: 3.3,  throttle: 0.38, yaw: -0.15, pitch:  0.00, roll:  1.00 },
    { t: 3.55, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    { t: 3.72, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Final recovery
    { t: 4.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
