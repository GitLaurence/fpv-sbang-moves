export default {
  id: 'reverse-knife-edge',
  name: 'Reverse Knife Edge',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'BkdoJlJRVsw',
  youtubeStart: 0,
  description: 'Katulad ng Knife Edge — 90° roll na pinananatili sa axis — pero ginagawa habang umaatras (tail-first) ang drone. Mas mahirap dahil baligtad ang reference points at kailangan ng dagdag na pitch para mapanatili ang reverse momentum.',
  tips: [
    'I-roll muna sa 90° gaya ng regular Knife Edge bago idagdag ang reverse pitch component',
    'Gamitin ang slight backward pitch para hindi mawala ang paatras na momentum habang naka-hold',
    'Mag-focus sa horizon line bilang reference — madaling malito ang orientation kapag baligtad ang biyahe',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll 90°' },
    { t: 0.8, label: 'Reverse Hold' },
    { t: 2.4, label: 'Roll Back' },
    { t: 3.0, label: 'Level' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to 90°
    { t: 0.4,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.78 },
    { t: 0.65, throttle: 0.74, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    // Reverse knife edge hold — yaw for heading, slight backward pitch for reverse drift
    { t: 0.8,  throttle: 0.84, yaw:  0.32, pitch: -0.16, roll:  0.00 },
    { t: 1.2,  throttle: 0.86, yaw:  0.34, pitch: -0.18, roll:  0.00 },
    { t: 1.6,  throttle: 0.84, yaw:  0.30, pitch: -0.15, roll:  0.00 },
    { t: 2.0,  throttle: 0.86, yaw:  0.32, pitch: -0.18, roll:  0.00 },
    // Roll back to upright
    { t: 2.4,  throttle: 0.74, yaw:  0.00, pitch:  0.00, roll: -0.68 },
    { t: 2.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll: -0.38 },
    // Level — settle back to cruise
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
