export default {
  id: 'juicy-cartwheel',
  name: 'Juicy Cartwheel',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'uvIvAzPRXiU',
  youtubeStart: 0,
  description: 'Juicy Flick na pinagsama sa roll — sa sandaling fully inverted, mag-snap ng full roll sa gitna ng flick para "magcartwheel" ang quad sa ere bago bumalik sa upright. Mas mahirap i-time kaysa sa regular Juicy Flick.',
  tips: [
    'Maghintay na fully inverted muna bago mag-roll input — kung maaga, hindi magiging cartwheel',
    'Ang roll snap ay dapat full at mabilis — kasabay ng slight throttle blip para mapanatili ang altitude',
    'Mag-mix ng kaunting pitch habang nag-ro-roll para hindi tuloy-tuloy ang drift sa isang direksyon',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Blip' },
    { t: 0.55, label: 'Pitch Snap' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.2,  label: 'Cartwheel' },
    { t: 1.8,  label: 'Roll Out' },
    { t: 2.4,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip — brief punch for entry energy
    { t: 0.35, throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch snap — flip to inverted, throttle cut
    { t: 0.55, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — brief center pause
    { t: 1.0,  throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CARTWHEEL — full roll snap with throttle blip and mixed pitch
    { t: 1.2,  throttle: 0.55, yaw:  0.00, pitch:  0.30, roll:  1.00 },
    { t: 1.45, throttle: 0.58, yaw:  0.00, pitch: -0.25, roll:  1.00 },
    { t: 1.7,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — back to inverted then upright
    { t: 1.85, throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 2.0,  throttle: 0.60, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // Exit — return to cruise
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
