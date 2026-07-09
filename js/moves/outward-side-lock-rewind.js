export default {
  id: 'outward-side-lock-rewind',
  name: 'Outward Side Lock Rewind',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.4,
  youtubeId:    'VzwQobYtErk',
  youtubeStart: 0,
  description: 'Variant ng Side Lock Rewind kung saan ang arc ay lumalabas palayo sa flight line sa halip na tumutungo pabalik dito — nagdaragdag ng roll input sa side-lock hold. Mas mahigpit ang stick coordination na kailangan kumpara sa regular na version.',
  tips: [
    'Idagdag ang roll papalabas habang naka-side-lock — ito ang nagpapaarko palayo sa linya',
    'Panatilihing magkasabay ang yaw at roll sa buong outward hold — hindi dapat magkahiwalay ang timing',
    'I-unwind ang roll bago tuluyang mag-commit sa rewind pitch para manatiling malinis ang arc',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Yaw+Roll Out' },
    { t: 1.3, label: 'Outward Hold' },
    { t: 2.1, label: 'Rewind' },
    { t: 3.15, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level approach
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Yaw lock + roll outward — arcs away from the flight line
    { t: 0.5,  throttle: 0.70, yaw:  0.90, pitch:  0.35, roll:  0.25 },
    { t: 0.9,  throttle: 0.75, yaw:  0.90, pitch:  0.40, roll:  0.30 },
    // Outward hold — sustained yaw, pitch and roll
    { t: 1.3,  throttle: 0.76, yaw:  0.90, pitch:  0.40, roll:  0.30 },
    { t: 1.75, throttle: 0.76, yaw:  0.90, pitch:  0.40, roll:  0.28 },
    // Begin rewind — unwind roll, ease yaw
    { t: 2.1,  throttle: 0.72, yaw:  0.45, pitch: -0.15, roll:  0.10 },
    { t: 2.5,  throttle: 0.82, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 2.9,  throttle: 0.74, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Recovery
    { t: 3.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
