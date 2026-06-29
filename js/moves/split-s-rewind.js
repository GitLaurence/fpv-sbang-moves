export default {
  id: 'split-s-rewind',
  name: 'Split-S Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    '1K6DLayjxJ8',
  youtubeStart: 0,
  description: 'Split-S na may immediate "rewind" — mag-Split-S pababa, tapos agad na mag-pitch snap pataas para bumalik sa dating altitude. Parang nag-bounce ang drone sa ere — pababa tapos agad pataas.',
  tips: [
    'Ang rewind ay dapat immediate — pagkatapos ng Split-S recovery, agad na pitch forward snap',
    'Kailangan ng aggressive throttle management — cut sa Split-S, punch sa rewind',
    'Ang timing ng rewind pitch ay critical — masyadong maaga ay hindi malinis, masyadong huli ay mawawala ang momentum',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll' },
    { t: 0.9, label: 'Pull' },
    { t: 1.8, label: 'Exit S' },
    { t: 2.2, label: 'Rewind' },
    { t: 3.2, label: 'Level' },
    { t: 3.8, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — carry speed
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted — cut throttle
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.80 },
    // Inverted — center roll
    { t: 0.85, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull through — Split-S arc
    { t: 1.0,  throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.50, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    // Brief level — Split-S complete
    { t: 1.9,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND — immediate pitch forward snap, throttle punch
    { t: 2.1,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.25, throttle: 0.95, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.5,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.90, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    // Easing out of rewind
    { t: 3.1,  throttle: 0.75, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Level out
    { t: 3.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
