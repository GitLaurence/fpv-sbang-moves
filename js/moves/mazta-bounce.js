export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Sunod-sunod na throttle stalls at catches na lumilikha ng "bouncing" rhythm sa hangin — parang tumatalbog ang quad sa invisible na sahig. Tumutest ng throttle finesse at timing.',
  tips: [
    'Maikli lang ang bawat throttle cut — sapat lang para ramdaman ng quad ang "drop" bago mag-catch',
    'Pantay-pantay ang spacing ng bawat bounce para magmukhang rhythmic at hindi random',
    'Manatiling level ang pitch at roll sa buong move — ang throttle lang ang gumagawa ng trick',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Bounce 1' },
    { t: 1.5, label: 'Bounce 2' },
    { t: 2.6, label: 'Bounce 3' },
    { t: 3.7, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 1 — cut then catch
    { t: 0.4,  throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.65, throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.8,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.05, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 2 — cut then catch
    { t: 1.5,  throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.75, throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.15, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Bounce 3 — cut then catch
    { t: 2.6,  throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.85, throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.25, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to hover
    { t: 3.9,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
