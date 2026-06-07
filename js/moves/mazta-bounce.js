export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'beginner',
  difficulty: 2,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Sunod-sunod na throttle bounce — i-cut ang throttle para bumagsak nang bahagya, tapos i-catch agad ng punch, paulit-ulit sa magkaparehong ritmo. Lahat ng ibang stick ay naka-center; ang throttle lang ang gumagalaw.',
  tips: [
    'Panatilihing pantay ang ritmo ng bawat bounce — parang dumi-dribble ng bola, hindi random',
    'Maliit lang ang drop sa bawat bounce — ang layunin ay control, hindi taas',
    'I-center ang yaw/pitch/roll sa buong move — ang throttle lang ang dapat gumagalaw',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Bounce 1' },
    { t: 1.5, label: 'Bounce 2' },
    { t: 2.5, label: 'Bounce 3' },
    { t: 3.5, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — steady hover/slow flight
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — drop then catch
    { t: 0.5,  throttle: 0.18, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.72, throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.95, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 2 — drop then catch, same rhythm
    { t: 1.5,  throttle: 0.18, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.72, throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.95, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 3 — drop then catch, same rhythm
    { t: 2.5,  throttle: 0.18, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.72, throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.95, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to steady hover
    { t: 3.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
