export default {
  id: 'eject-lookback-iys',
  name: 'Eject Lookback Roll + IYS',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.0,
  youtubeId:    'XcGlJZFV7_U',
  youtubeStart: 0,
  description: 'Quad combo: Eject (throttle punch + pitch snap) → Lookback (yaw snap pabalik) → Roll (snap 180°) → IYS (inverted yaw spin). Bawat bahagi ay hiwalay at malinaw — ito ang pinaka-complex na chain ng moves.',
  tips: [
    'Ang "eject" ay parang Juicy Flick ngunit may mas matagal na inverted pause para sa lookback',
    'Mag-yaw snap habang stably inverted — huwag mag-yaw habang nag-ro-roll pa',
    'Ang IYS ay ang huling move — kailangan ng sapat na altitude para sa buong combo',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Eject' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.2,  label: 'Lookback' },
    { t: 1.8,  label: 'Hold' },
    { t: 2.1,  label: 'Roll' },
    { t: 2.7,  label: 'Inv Again' },
    { t: 3.0,  label: 'IYS' },
    { t: 4.0,  label: 'IYS Done' },
    { t: 4.4,  label: 'Roll Out' },
  ],
  keyframes: [
    // Entry — forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // EJECT — throttle blip then pitch snap to inverted
    { t: 0.4,  throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.58, throttle: 0.26, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.78, throttle: 0.24, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — center pitch, stable hover
    { t: 0.95, throttle: 0.26, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.26, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // LOOKBACK — full yaw snap 180°
    { t: 1.22, throttle: 0.27, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.48, throttle: 0.27, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    // Center yaw — still inverted
    { t: 1.65, throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Hold inverted briefly
    { t: 1.82, throttle: 0.26, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL — snap 180° roll to upright
    { t: 2.0,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.25, throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.42, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.28 },
    // Upright briefly
    { t: 2.58, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to inverted for IYS
    { t: 2.72, throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.9,  throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.80 },
    // Fully inverted — IYS entry
    { t: 3.02, throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // IYS — 360° yaw spin while inverted
    { t: 3.15, throttle: 0.27, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.27, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.85, throttle: 0.27, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Complete IYS — ease yaw
    { t: 4.05, throttle: 0.27, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    { t: 4.18, throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out to upright
    { t: 4.32, throttle: 0.38, yaw: -0.18, pitch:  0.00, roll:  1.00 },
    { t: 4.58, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.88 },
    { t: 4.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 5.1,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
