export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature combo ni Headmazta: serye ng mabibilis na throttle "bounces" na may pitch flicks — parang tumatalbog ang drone sa hangin — tapos nagtatapos sa full forward flip. Kailangan ng tight rhythm at consistent timing sa bawat bounce.',
  tips: [
    'Pantay ang timing ng bawat bounce — consistent rhythm mula una hanggang huli',
    'Maikli at matalas ang throttle punches — hindi sustained, kundi sharp blips',
    'Mag-master muna ng Juicy Flick bago subukan ang buong bounce sequence',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Bounce 1' },
    { t: 1.0, label: 'Bounce 2' },
    { t: 1.6, label: 'Bounce 3' },
    { t: 2.2, label: 'Settle' },
    { t: 2.6, label: 'Flip Pitch' },
    { t: 3.2, label: 'Flip Inv' },
    { t: 3.6, label: 'Pull Out' },
    { t: 4.5, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — sharp throttle punch with a pitch-up flick
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 0.55, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 2 — same sharp rhythm
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 1.15, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 3 — same sharp rhythm
    { t: 1.6,  throttle: 1.00, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 1.75, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle — brief pause before finishing flip
    { t: 2.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Finishing flip — pitch snap forward to inverted, punch through
    { t: 2.6,  throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 2.85, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.2,  throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Pull out to level
    { t: 3.5,  throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 4.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
