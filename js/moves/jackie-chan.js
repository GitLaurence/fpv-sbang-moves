export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Rapid-fire combo ng flip → roll → flip na may matalas na "dead stop" sa pagitan ng bawat segment — parang martial-arts combo kung saan bawat galaw ay tumitigil nang biglaan bago ang susunod na suntok.',
  tips: [
    'Bawat segment ay dapat tumigil nang ganap (center sticks) bago ang susunod — ito ang nagbibigay ng "snap" na pakiramdam',
    'Panatilihing pantay ang bilis ng tatlong segment — huwag pabilisin o bagalan, dapat pareho ang ritmo',
    'Mag-ensayo ng flip at roll nang hiwalay muna bago pagsamahin sa mabilisang combo na ito',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip Inv' },
    { t: 1.0, label: 'Dead Stop' },
    { t: 1.2, label: 'Snap Roll' },
    { t: 1.7, label: 'Dead Stop' },
    { t: 1.9, label: 'Flip Up' },
    { t: 2.5, label: 'Dead Stop' },
    { t: 2.7, label: 'Yaw Strike' },
    { t: 3.3, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SEGMENT 1 — snap flip to inverted (pitch), throttle cut
    { t: 0.4,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.62, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — re-balance throttle, center pitch
    { t: 0.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DEAD STOP — full center, hold inverted
    { t: 1.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SEGMENT 2 — snap half-roll back to upright, throttle cut through the roll
    { t: 1.2,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.4,  throttle: 0.34, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.55, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DEAD STOP — full center, upright again
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SEGMENT 3 — snap front flip (nose-down), throttle cut
    { t: 1.9,  throttle: 0.28, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.12, throttle: 0.25, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Catch — punch throttle to arrest the drop, level out
    { t: 2.32, throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DEAD STOP before the finishing accent
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW STRIKE — sharp snap finish, then center
    { t: 2.7,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 3.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
