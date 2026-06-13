export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pagsasanib ng Somersault (backflip — pitch back na may throttle cut) at Matty Flip (forward pitch through inverted na may throttle punch). Dalawang flip na magkasalungat ang direksyon, sunod-sunod — kailangan ng tumpak na throttle timing sa pagitan ng dalawa.',
  tips: [
    'Throttle cut habang pitch back para sa somersault — huwag punuin ang throttle pabalik',
    'Magpahinga ng saglit sa level flight bago ang Matty Flip — huwag direktang sumunod',
    'Punch throttle nang malakas habang inverted sa Matty Flip half para makumpleto ang rotation',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Pitch Back' },
    { t: 0.9, label: 'Somer Inv' },
    { t: 1.35, label: 'Level Pause' },
    { t: 1.6, label: 'Pitch Fwd' },
    { t: 2.2, label: 'Matty Punch' },
    { t: 2.7, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — full pitch back, throttle cut to flip backward
    { t: 0.3,  throttle: 0.30, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.28, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted through the somersault — begin recovering
    { t: 0.9,  throttle: 0.30, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.15, throttle: 0.55, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    // Brief level pause between the two flips
    { t: 1.35, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY FLIP — pitch forward toward inverted
    { t: 1.6,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle while inverted to complete the flip
    { t: 2.2,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.45, throttle: 0.85, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Exit — level out and settle
    { t: 2.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
