export default {
  id: 'juicy-cartwheel',
  name: 'Juicy Cartwheel',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'uvIvAzPRXiU',
  youtubeStart: 0,
  description: 'Katulad ng Juicy Flick pero sa roll axis — throttle blip → roll snap papunta sa inverted (sideways) → maikling look-back pause → 180° pitch para bumalik sa upright. Cartwheel motion sa halip na forward flip.',
  tips: [
    'Roll ang gamitin sa entry snap, hindi pitch — dito nagkakaiba sa Juicy Flick',
    'Maghintay ng buong 180° roll bago gamitin ang pitch para bumalik pataas',
    'Panatilihing snappy ang bawat input — ang "juicy" ay laging whip-like, hindi smooth',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Blip' },
    { t: 0.55, label: 'Roll Snap' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.25, label: 'Pitch Out' },
    { t: 1.8,  label: 'Upright' },
    { t: 2.3,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip — brief punch for entry energy
    { t: 0.35, throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll snap — aggressive roll to sideways-inverted, throttle cut
    { t: 0.55, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.75, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Fully inverted (sideways) — sticks to center — look-back pause
    { t: 1.0,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.15, throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch out — 180° via pitch axis to return upright, small counter-yaw for framing
    { t: 1.25, throttle: 0.35, yaw:  0.15, pitch:  1.00, roll:  0.00 },
    { t: 1.55, throttle: 0.40, yaw:  0.10, pitch:  1.00, roll:  0.00 },
    { t: 1.75, throttle: 0.48, yaw:  0.00, pitch:  0.28, roll:  0.00 },
    // Upright — throttle punch to recover altitude
    { t: 1.9,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — return to cruise
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
