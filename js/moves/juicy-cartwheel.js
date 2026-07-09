export default {
  id: 'juicy-cartwheel',
  name: 'Juicy Cartwheel',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 2.8,
  youtubeId:    'uvIvAzPRXiU',
  youtubeStart: 0,
  description: 'Floaty at exaggerated na sideways roll — halong pitch at roll para sa stylized na "cartwheel" na lateral translation. Mas mabagal at "juicy" ang pakiramdam kumpara sa regular na roll, may kaunting throttle blip habang paikot.',
  tips: [
    'Bawasan ang throttle bahagya habang nagsisimula ang roll para sa floaty na pakiramdam',
    'Magdagdag ng maliit na throttle blip sa gitna ng cartwheel para mapanatili ang altitude nang hindi nawawala ang float',
    'I-unwind ang roll nang dahan-dahan sa exit — huwag biglaan para manatiling smooth ang buong maneuver',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Cartwheel In' },
    { t: 1.1, label: 'Float' },
    { t: 1.8, label: 'Roll Out' },
    { t: 2.45, label: 'Level' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Cartwheel in — throttle eases, roll commits, slight forward pitch for float
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  1.00 },
    { t: 0.75, throttle: 0.58, yaw:  0.00, pitch:  0.15, roll:  1.00 },
    // Float — throttle blip passing the low point to hold altitude
    { t: 1.1,  throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  1.00 },
    { t: 1.45, throttle: 0.58, yaw:  0.00, pitch:  0.15, roll:  1.00 },
    // Roll out — ease roll and pitch back, still floaty
    { t: 1.8,  throttle: 0.60, yaw:  0.00, pitch:  0.10, roll:  0.65 },
    { t: 2.15, throttle: 0.60, yaw:  0.00, pitch:  0.05, roll:  0.15 },
    // Level
    { t: 2.45, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
