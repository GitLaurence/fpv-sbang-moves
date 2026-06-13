export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.2,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng dalawang loops sa magkabilang direksyon: Somersault (backward loop) kaagad na sinusundan ng Matty Flip (forward loop). Walang patid ang transition sa pagitan ng dalawa.',
  tips: [
    'Somersault muna — pitch backward para sa unang loop, hayaang dumaan sa inverted bago bumalik level',
    'Maikling level moment lang sa pagitan ng dalawang loops — huwag magpatagal',
    'Matty Flip pagkatapos — pitch forward at PUNCH throttle habang inverted para sa pangalawang loop',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Somer Pitch' },
    { t: 0.85, label: 'Inverted 1' },
    { t: 1.3,  label: 'Recover 1' },
    { t: 1.6,  label: 'Matty Pitch' },
    { t: 2.3,  label: 'Punch' },
    { t: 3.0,  label: 'Pull Out' },
    { t: 4.0,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — pitch backward to start the first loop
    { t: 0.35, throttle: 0.55, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.50, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted at the top of the somersault
    { t: 0.85, throttle: 0.55, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Continue through loop, descending back toward level
    { t: 1.05, throttle: 0.65, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 1.3,  throttle: 0.70, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Brief level moment between the two loops
    { t: 1.45, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY FLIP — pitch forward to start the second loop, opposite direction
    { t: 1.6,  throttle: 0.78, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 1.85, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted at the top
    { t: 2.1,  throttle: 0.90, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH through to complete the flip
    { t: 2.3,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.85, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 2.75, throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
