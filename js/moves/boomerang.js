export default {
  id: 'boomerang',
  name: 'Boomerang',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.5,
  youtubeId:    'cEqJj62f8iY',
  youtubeStart: 0,
  description: 'Pitch back nang buong-buo para mag-arc ang drone pataas at pabalik sa isang malaking curved loop — parang "boomerang" ang path ng camera. Kakaiba ang pakiramdam dahil ang buong loop ay ginagawa sa pamamagitan ng pure pitch-back na input.',
  tips: [
    'Kailangan ng malakas na bilis sa entry — kulang na momentum = hindi maabot ang tuktok',
    'Huwag bitawan ang pitch-back sa buong arc — sustained na pull mula entry hanggang exit',
    'Chop throttle sa tuktok (inverted) para hindi masyado lumayo ang arc pabalik',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Pitch Back' },
    { t: 1.4, label: 'Climbing' },
    { t: 1.9, label: 'Over Top' },
    { t: 2.5, label: 'Arc Down' },
    { t: 3.2, label: 'Pull Thru' },
    { t: 3.8, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — build speed for the backward arc
    { t: 0.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH BACK — full reverse pitch + full throttle to climb the arc
    { t: 0.5,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.85, throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Climbing through the backward arc
    { t: 1.2,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.55, throttle: 0.70, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // INVERTED at top — chop throttle, sustain pitch pull
    { t: 1.9,  throttle: 0.08, yaw:  0.00, pitch: -0.92, roll:  0.00 },
    { t: 2.15, throttle: 0.05, yaw:  0.00, pitch: -0.88, roll:  0.00 },
    // Arc back toward ground — gravity assists descent
    { t: 2.45, throttle: 0.25, yaw:  0.00, pitch: -0.88, roll:  0.00 },
    // Pull through the bottom — ramp throttle to arrest the dive
    { t: 2.75, throttle: 0.68, yaw:  0.00, pitch: -0.78, roll:  0.00 },
    { t: 3.05, throttle: 0.85, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Level out — ease pitch back to zero
    { t: 3.45, throttle: 0.70, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
