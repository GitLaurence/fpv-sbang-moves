export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature move ni Headmazta — magkakasunod na throttle "bounces" na parang tumatalbog ang quad sa hangin gaya ng bola sa pagitan ng sahig at kisame. Bawat bounce ay throttle chop pababa sundan ng matalas na punch pataas, paulit-ulit nang may rhythmic na timing na unti-unting lumiliit.',
  tips: [
    'Bawat bounce ay dapat parehong haba ng "drop" at "catch" — consistent ang ritmo',
    'Ang lahat ng ibang stick ay nasa center sa buong sequence — throttle lang ang gumagalaw',
    'Magsimula sa malalaking bounce, paliitin nang paliitin papunta sa dulo para sa natural na "settling" effect',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Bounce 1' },
    { t: 1.7, label: 'Bounce 2' },
    { t: 2.9, label: 'Bounce 3' },
    { t: 3.9, label: 'Bounce 4' },
    { t: 4.7, label: 'Settle' },
  ],
  keyframes: [
    // Hover entry
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — biggest drop, biggest catch
    { t: 0.5,  throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.75, throttle: 0.12, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.92, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 2 — slightly smaller
    { t: 1.7,  throttle: 0.22, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.95, throttle: 0.18, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.45, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 3 — smaller still
    { t: 2.9,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.1,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.55, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 4 — smallest, settling toward hover
    { t: 3.9,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.1,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.35, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.55, throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle into hover
    { t: 4.9,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
