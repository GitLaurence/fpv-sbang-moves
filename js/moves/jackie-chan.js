export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Combo trick — mabilis na full roll, dead-stop sa center, tapos agad na forward flip na may throttle punch. Ang biglaang pagpapalit ng axis (roll → pitch) ang gumagawa nitong "acrobatic", parang sunod-sunod na stunt.',
  tips: [
    'I-snap ang roll nang mabilis at buo — ang bilis nito ang dahilan kung bakit "flow" ang itsura ng combo',
    'Mag-dead-stop muna sa center bago mag-flip — kailangan ng malinaw na break sa pagitan ng dalawang axis',
    'Mag-punch ng throttle sa simula ng flip — ito ang nagbibigay ng "snap" na pakiramdam sa buong combo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Snap Roll' },
    { t: 0.9, label: 'Center' },
    { t: 1.1, label: 'Flip' },
    { t: 1.7, label: 'Recover' },
    { t: 2.3, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll — quick full 360°, slight throttle hold
    { t: 0.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.75, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Center — dead stop before changing axis
    { t: 0.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip — forward pitch snap, throttle cut then punch through
    { t: 1.1,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.35, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.55, throttle: 0.78, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Recovery — pull out to level
    { t: 1.75, throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle to cruise
    { t: 2.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
