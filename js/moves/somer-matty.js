export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.8,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pinagsamang forward loop (somersault) at Matty Flip sa iisang tuloy-tuloy na galaw — dalawang magkasunod na forward pitch rotation, may throttle punch lamang sa pangalawa. Kailangan ng eksaktong throttle control sa unang pag-ikot para hindi mawalan ng altitude bago pa man ang Matty Flip.',
  tips: [
    'Ang unang loop (somersault) ay dapat steady throttle lang — huwag mag-punch, ipon lang ng rotation',
    'Sa pangalawang pag-ikot (Matty Flip bahagi) lang dapat mag-punch ng throttle habang inverted',
    'Mag-master muna nang hiwalay ang plain forward loop at Matty Flip bago pagsamahin sa combo',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Somer Start' },
    { t: 1.1,  label: 'Somer Inv' },
    { t: 1.75, label: 'Somer Complete' },
    { t: 1.9,  label: 'Matty Pitch' },
    { t: 2.5,  label: 'Matty Punch' },
    { t: 3.2,  label: 'Pull Out' },
    { t: 3.5,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault — start forward pitch, steady throttle to carry the rotation (no punch yet)
    { t: 0.3,  throttle: 0.68, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Somersault inverted apex — steady, no punch
    { t: 1.1,  throttle: 0.68, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Continue rotation back toward upright — completing the somersault (360°)
    { t: 1.4,  throttle: 0.65, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.75, throttle: 0.65, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // Brief level moment before immediately chaining into the Matty Flip
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Matty Flip — pitch forward again, building toward inverted
    { t: 1.9,  throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 2.15, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — full throttle PUNCH, the defining Matty Flip moment
    { t: 2.5,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.7,  throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Pull out to level
    { t: 3.0,  throttle: 0.78, yaw:  0.00, pitch:  0.35, roll:  0.00 },
    { t: 3.2,  throttle: 0.68, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Recovery
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
