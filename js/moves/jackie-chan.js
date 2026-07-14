export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.6,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: '"Drone Kung Fu" — sunod-sunod na mabilis na axis flick ("kicks") sa yaw, roll, at pitch na bumabalik agad sa center bago ang susunod. Parang martial arts flurry sa hangin.',
  tips: [
    'Bumalik nang tuluyan sa center ang bawat "kick" bago simulan ang susunod — walang paghalo',
    'Palitan ang axis sa bawat kick (yaw, roll, pitch) para makuha ang flurry na look',
    'Panatilihing steady ang throttle sa buong flurry — ang mga attitude axes lang ang nag-sa-snap',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Yaw Kick' },
    { t: 0.9, label: 'Roll Kick' },
    { t: 1.4, label: 'Pitch Kick' },
    { t: 1.9, label: 'Yaw Kick 2' },
    { t: 2.4, label: 'Recover' },
    { t: 3.0, label: 'Exit' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Kick 1 — yaw snap right
    { t: 0.4,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 0.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Kick 2 — roll snap right
    { t: 0.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Kick 3 — pitch snap back
    { t: 1.4,  throttle: 0.65, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Kick 4 — yaw snap left (opposite direction)
    { t: 1.9,  throttle: 0.65, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover
    { t: 2.4,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
