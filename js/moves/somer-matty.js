export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.8,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng dalawang flips sa magkasalungat na direksyon — backward loop (somersault) kaagad na sinusundan ng forward Matty Flip. Pareho sa pitch axis pero baligtad ang direksyon, lumilikha ng "S" shape sa flight path.',
  tips: [
    'Mag-master muna ng Matty Flip nang hiwalay bago idagdag ang somersault entry',
    'Bigyan ng sapat na altitude — dalawang full rotations ang gagawin',
    'Mag-throttle punch sa parehong invert points — sa somersault at sa matty flip',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Somer Pitch' },
    { t: 0.9, label: 'Somer Inv' },
    { t: 1.3, label: 'Transition' },
    { t: 1.6, label: 'Matty Pitch' },
    { t: 2.2, label: 'Punch' },
    { t: 2.75, label: 'Pull Out' },
    { t: 3.25, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault — pitch back into a backward loop
    { t: 0.3,  throttle: 0.78, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 0.55, throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Somersault inverted — top of the backward loop
    { t: 0.9,  throttle: 0.85, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Recovering from somersault, easing pitch toward level
    { t: 1.15, throttle: 0.78, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Transition — brief level moment between the two flips
    { t: 1.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Matty Flip — pitch forward into a forward loop
    { t: 1.6,  throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.85, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Matty inverted
    { t: 2.2,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle through the inverted point
    { t: 2.45, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Pull out — ease pitch toward level
    { t: 2.75, throttle: 0.85, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 3.0,  throttle: 0.72, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.25, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
