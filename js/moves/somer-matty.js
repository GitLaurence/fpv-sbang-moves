export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Backward somersault (pabalik na full loop) na agad sinundan ng Matty Flip (pasulong na full loop) — dalawang magkasalungat na 360° rotation sa iisang smooth na combo. Ang seamless na transisyon sa pagitan ng dalawang loop ang pinaka-mahirap at pinaka-magandang bahagi ng maneuver.',
  tips: [
    'Kailangan ng mataas na entry speed — ang dalawang loops ay kumukuha ng maraming altitude at bilis',
    'Ang transisyon sa pagitan ng somersault at Matty Flip ay dapat seamless — walang pause sa gitna',
    'Throttle management: mataas sa backward loop, punch naman sa Matty Flip inverted phase',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Somer Back' },
    { t: 1.5, label: 'Thru Top' },
    { t: 2.2, label: 'Back Level' },
    { t: 2.7, label: 'Matty Fwd' },
    { t: 3.5, label: 'Inverted' },
    { t: 3.8, label: 'Punch' },
    { t: 4.5, label: 'Exit' },
  ],
  keyframes: [
    // High-speed entry
    { t: 0.0,  throttle: 0.80, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.3,  throttle: 0.88, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // SOMERSAULT — pitch back hard + full throttle (backward power loop)
    { t: 0.5,  throttle: 1.00, yaw: 0.00, pitch: -0.90, roll: 0.00 },
    { t: 0.85, throttle: 1.00, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    { t: 1.2,  throttle: 0.95, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    // Top of backward loop (inverted) — ease throttle
    { t: 1.5,  throttle: 0.35, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    // Nose pointing down, arcing back toward upright
    { t: 1.85, throttle: 0.70, yaw: 0.00, pitch: -0.75, roll: 0.00 },
    { t: 2.15, throttle: 0.72, yaw: 0.00, pitch: -0.30, roll: 0.00 },
    // Brief upright transition — immediately pitch forward into MATTY FLIP
    { t: 2.4,  throttle: 0.70, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // MATTY FLIP — push pitch forward aggressively
    { t: 2.7,  throttle: 0.72, yaw: 0.00, pitch:  0.80, roll: 0.00 },
    { t: 2.95, throttle: 0.78, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 3.2,  throttle: 0.82, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    // INVERTED — full throttle punch
    { t: 3.45, throttle: 1.00, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 3.7,  throttle: 1.00, yaw: 0.00, pitch:  0.90, roll: 0.00 },
    // Continuing forward, approaching level
    { t: 3.95, throttle: 0.82, yaw: 0.00, pitch:  0.55, roll: 0.00 },
    { t: 4.2,  throttle: 0.70, yaw: 0.00, pitch:  0.15, roll: 0.00 },
    // Exit
    { t: 4.5,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 5.0,  throttle: 0.63, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 5.5,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
