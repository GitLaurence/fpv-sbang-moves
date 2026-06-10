export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.2,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pinagsamang dalawang full forward loop sa pitch axis na may throttle punch sa pagitan — mas advanced na bersyon ng Matty Flip dahil dalawang ikot ang ginagawa bago mag-level out.',
  tips: [
    'Tapusin muna ang unang full pitch-forward loop bago mag-punch papunta sa pangalawa',
    'Throttle punch sa simula ng bawat ikot para mapanatili ang radius',
    'I-stop ang pitch sa eksaktong tamang oras pagkatapos ng pangalawang loop para level out',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Loop 1' },
    { t: 1.0, label: 'Inverted 1' },
    { t: 1.3, label: 'Punch' },
    { t: 1.9, label: 'Loop 2' },
    { t: 2.6, label: 'Inverted 2' },
    { t: 2.9, label: 'Punch 2' },
    { t: 3.5, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // First loop — pitch forward, building speed
    { t: 0.3,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted at top of loop 1
    { t: 1.0,  throttle: 0.95, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle carries through into second loop
    { t: 1.3,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.6,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Second loop continues
    { t: 1.9,  throttle: 0.90, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted at top of loop 2
    { t: 2.6,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH 2 — throttle to pull out of the final rotation
    { t: 2.9,  throttle: 0.95, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 3.15, throttle: 0.85, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // Level out
    { t: 3.5,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
