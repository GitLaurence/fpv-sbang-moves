export default {
  id: 'sideways-rewind',
  name: 'Sideways Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.8,
  youtubeId:    'JRv6e2CGwMA',
  youtubeStart: 0,
  description: 'Roll papuntang 90° knife edge, tapos pitch back nang husto para lumipad nang "paatras" sa parehong linya — mukhang naka-rewind ang playback. Roll pabalik sa upright sa exit.',
  tips: [
    'I-roll lang ng exactly 90° — kailangan steady ang knife edge bago mag-rewind',
    'Gamitin ang yaw para mapanatili ang heading habang nag-rewind',
    'Pababagalin ang pitch input pabalik sa neutral bago i-roll out — huwag biglain',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Roll 90°' },
    { t: 0.9, label: 'Knife Edge' },
    { t: 1.4, label: 'Rewind' },
    { t: 2.6, label: 'Ease Out' },
    { t: 3.1, label: 'Roll Out' },
    { t: 3.5, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to 90° knife edge
    { t: 0.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.75 },
    { t: 0.7,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    // Knife-edge hold — yaw to maintain heading
    { t: 0.9,  throttle: 0.82, yaw:  0.25, pitch:  0.05, roll:  0.00 },
    { t: 1.2,  throttle: 0.82, yaw:  0.25, pitch:  0.05, roll:  0.00 },
    // REWIND — hard pitch back to fly backward along the same line
    { t: 1.4,  throttle: 0.55, yaw:  0.20, pitch: -0.85, roll:  0.00 },
    { t: 1.9,  throttle: 0.50, yaw:  0.20, pitch: -1.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.50, yaw:  0.20, pitch: -1.00, roll:  0.00 },
    // Ease pitch back to neutral before roll out
    { t: 2.9,  throttle: 0.60, yaw:  0.10, pitch: -0.30, roll:  0.00 },
    // Roll back to upright
    { t: 3.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -0.70 },
    { t: 3.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -0.35 },
    // Exit — level cruise
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
