export default {
  id: 'barani',
  name: 'Barani',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Forward pitch flip na may dagdag na yaw twist habang inverted — ang resulta ay isang diagonal na rotation, lalabas sa ibang anggulo kumpara sa entry heading. Mas mahirap kaysa simpleng flip dahil dalawang axis ang sabay na ginagalaw.',
  tips: [
    'Magsimula sa forward pitch flip tulad ng karaniwan, pero magdagdag ng yaw input bago pa man ma-reach ang inverted point',
    'Ang yaw twist ay dapat sabay sa pitch — hindi sunod-sunod, kundi magkasamang input',
    'Tanggapin na magbabago ang exit heading — mag-adjust ng landing approach base sa anggulo ng twist',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pitch Fwd' },
    { t: 1.0, label: 'Twist Inv' },
    { t: 1.5, label: 'Exit Twist' },
    { t: 2.0, label: 'Recovery' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PUSH pitch forward — start of the front flip
    { t: 0.4,  throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.74, yaw:  0.30, pitch:  1.00, roll:  0.00 },
    // Approaching inverted — add yaw twist alongside the flip
    { t: 0.85, throttle: 0.80, yaw:  0.65, pitch:  0.90, roll:  0.00 },
    // Inverted twist point — both pitch and yaw still active
    { t: 1.0,  throttle: 0.85, yaw:  0.80, pitch:  0.80, roll:  0.00 },
    { t: 1.2,  throttle: 0.78, yaw:  0.60, pitch:  0.55, roll:  0.00 },
    // Exit twist — easing both inputs out toward the new heading
    { t: 1.5,  throttle: 0.70, yaw:  0.25, pitch:  0.15, roll:  0.00 },
    { t: 1.75, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle level on the twisted heading
    { t: 2.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
