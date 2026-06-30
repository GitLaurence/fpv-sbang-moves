export default {
  id: 'juicy-tracking-lookback',
  name: 'Juicy Tracking-Lookback',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'Ugy7drDWFbs',
  youtubeStart: 0,
  description: 'Juicy Flick para pumunta sa inverted, tapos sa halip na mag-roll out agad, mag-yaw snap 180° habang inverted (lookback). Kinukuha ang attention ng subject bago lumabas. Snappy at cinematic.',
  tips: [
    'Ang yaw snap ay dapat gawin HABANG fully inverted — huwag maaga o huli',
    'Mag-maintain ng stable inverted hover habang nag-yi-yaw — throttle hold at 25-30%',
    'Pagkatapos ng yaw snap, mag-roll out nang maayos — i-match ang roll direction sa iyong exit heading',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Blip' },
    { t: 0.5,  label: 'Pitch Snap' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.3,  label: 'Yaw Snap' },
    { t: 1.8,  label: 'Hold' },
    { t: 2.1,  label: 'Roll Out' },
    { t: 2.7,  label: 'Upright' },
  ],
  keyframes: [
    // Entry — level forward tracking flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // Throttle blip
    { t: 0.3,  throttle: 0.88, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // Pitch snap to inverted — throttle cut
    { t: 0.5,  throttle: 0.26, yaw:  0.00, pitch:  1.00, roll: 0.00 },
    { t: 0.75, throttle: 0.24, yaw:  0.00, pitch:  1.00, roll: 0.00 },
    // Fully inverted — center pitch, maintain low throttle
    { t: 1.0,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 1.15, throttle: 0.26, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // Yaw snap 180° while inverted (lookback)
    { t: 1.3,  throttle: 0.27, yaw: -1.00, pitch:  0.00, roll: 0.00 },
    { t: 1.55, throttle: 0.27, yaw: -1.00, pitch:  0.00, roll: 0.00 },
    // Center yaw — now looking back, still inverted
    { t: 1.72, throttle: 0.27, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // Brief hold inverted — cinematic pause
    { t: 1.9,  throttle: 0.26, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // Roll out to upright (with slight counter-yaw for camera alignment)
    { t: 2.1,  throttle: 0.36, yaw: -0.18, pitch:  0.00, roll: 1.00 },
    { t: 2.38, throttle: 0.44, yaw:  0.00, pitch:  0.00, roll: 1.00 },
    { t: 2.58, throttle: 0.58, yaw:  0.00, pitch:  0.00, roll: 0.22 },
    // Upright — throttle up, forward pitch for exit
    { t: 2.75, throttle: 0.70, yaw:  0.00, pitch:  0.22, roll: 0.00 },
    // Recovery
    { t: 3.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 3.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll: 0.00 },
  ],
};
