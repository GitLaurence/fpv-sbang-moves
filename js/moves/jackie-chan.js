export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na sunod-sunod na combo ng flip, roll, at yaw flick — parang martial-arts na sequence sa ere kung saan bawat segment ay may sariling commit at "dead stop" bago ang susunod. Hinihingi nito ang matatag na pundasyon sa Aileron Roll at Matty Flip.',
  tips: [
    'Hatiin ang combo sa magkakahiwalay na "beats" — flip, tapos roll, tapos yaw — bawat isa may sariling dead stop',
    'Mag-master muna ng Aileron Roll at Matty Flip nang hiwalay bago pagsamahin sa combo na ito',
    'Panatilihing pantay ang ritmo ng bawat segment — ang consistent na tempo ang gumagawa ng "Jackie Chan" feel',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Flip' },
    { t: 0.95, label: 'Inverted' },
    { t: 1.3,  label: 'Flip Out' },
    { t: 1.55, label: 'Stop' },
    { t: 1.85, label: 'Roll' },
    { t: 2.55, label: 'Roll Out' },
    { t: 2.8,  label: 'Stop' },
    { t: 3.1,  label: 'Yaw Snap' },
    { t: 3.9,  label: 'Settle' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BEAT 1 — full forward-pitch flip (loop)
    { t: 0.35, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.95, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.66, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    // Dead stop — both sticks back to center between beats
    { t: 1.55, throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BEAT 2 — full 360° aileron roll
    { t: 1.85, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.2,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.55, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop again
    { t: 2.8,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BEAT 3 — sharp yaw flick accent to close out the combo
    { t: 3.1,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.65, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    // Settle / exit — back to cruise
    { t: 3.9,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
