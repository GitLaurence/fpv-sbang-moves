export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.4,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang magkasunod na forward flip na walang hinto sa pagitan — una ang malinis na somersault, direktang sundan ng Matty Flip throttle punch sa pangalawang pag-ikot. Kailangan ng masusing throttle management para mapanatili ang altitude sa dalawang sunud-sunod na flip.',
  tips: [
    'Walang puwang sa pagitan ng dalawang flip — tuluy-tuloy na dumadaloy ang isa papunta sa isa pa',
    'Mahinahon at malinis ang unang flip (somersault); ang pangalawa (Matty) ay may sharp throttle punch habang baligtad',
    'I-master nang hiwalay ang bawat flip muna — ang altitude management sa likod-likurang pag-ikot ang pinakamahirap na bahagi',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Somersault' },
    { t: 1.0, label: 'Chain' },
    { t: 1.4, label: 'Matty Pitch' },
    { t: 1.95, label: 'Punch' },
    { t: 2.6, label: 'Pull Out' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — clean forward flip, moderate throttle hold
    { t: 0.35, throttle: 0.58, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.85, throttle: 0.55, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    // CHAIN — no recovery pause, roll straight into the second flip
    { t: 1.0,  throttle: 0.50, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // MATTY PITCH — push pitch forward again into the second rotation
    { t: 1.4,  throttle: 0.55, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.7,  throttle: 0.60, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — Matty Flip signature: full throttle while inverted to power through
    { t: 1.95, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.15, throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Pull out — ease toward level
    { t: 2.4,  throttle: 0.80, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    { t: 2.6,  throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
