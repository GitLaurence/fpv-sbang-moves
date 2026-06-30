export default {
  id: 'juicy-flick-rewind-iys',
  name: 'Juicy Flick Rewind + IYS',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.0,
  youtubeId:    'bwDXG8olfcM',
  youtubeStart: 0,
  description: 'Triple combo: Juicy Flick → Rewind (bumalik sa inverted) → Inverted Yaw Spin. Ang bawat bahagi ay may "dead stop" sa pagitan — walang blending, lahat ay snappy at decided.',
  tips: [
    'Ang "Rewind" pagkatapos ng Juicy Flick ay hindi kaagad — mag-recover muna nang bahagya bago mag-roll back in',
    'Ang IYS ay dapat simulan pagkatapos ng mabilis na rewind-to-inverted — huwag mag-linger sa upright',
    'Kailangan ng malaking altitude — ang buong combo ay kumukuha ng 15-20m ng airspace',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Blip' },
    { t: 0.5,  label: 'Flick' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.2,  label: 'Roll Out' },
    { t: 1.8,  label: 'Rewind' },
    { t: 2.4,  label: 'IYS Start' },
    { t: 3.4,  label: 'IYS Done' },
    { t: 3.9,  label: 'Roll Out' },
    { t: 4.6,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip
    { t: 0.3,  throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch snap to inverted — Juicy Flick phase 1
    { t: 0.5,  throttle: 0.26, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.24, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — pause
    { t: 1.0,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out to upright (Juicy Flick exit)
    { t: 1.2,  throttle: 0.35, yaw: -0.18, pitch:  0.00, roll:  1.00 },
    { t: 1.48, throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.65, throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.25 },
    // Brief upright pause before rewind
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND — snap roll back to inverted
    { t: 2.1,  throttle: 0.35, yaw:  0.18, pitch:  0.00, roll: -1.00 },
    { t: 2.35, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.52, throttle: 0.26, yaw:  0.00, pitch:  0.00, roll: -0.20 },
    // Fully inverted again — center roll
    { t: 2.65, throttle: 0.26, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // IYS — 360° yaw while inverted
    { t: 2.8,  throttle: 0.27, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.15, throttle: 0.27, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.27, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Completing IYS — ease yaw
    { t: 3.75, throttle: 0.27, yaw:  0.35, pitch:  0.00, roll:  0.00 },
    { t: 3.88, throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out from inverted to upright
    { t: 4.0,  throttle: 0.38, yaw: -0.18, pitch:  0.00, roll:  1.00 },
    { t: 4.28, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.85 },
    { t: 4.48, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 4.8,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
