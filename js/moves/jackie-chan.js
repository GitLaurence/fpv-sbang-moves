export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilisang front flip na direktang sinusundan ng snap roll bago pa makabalik sa upright — parang martial-arts spin kick. Kailangan ng tamang timing para mag-blend ang dalawang rotation nang walang pause.',
  tips: [
    'Simulan ang roll snap habang nasa apex pa ng flip — huwag hintayin matapos ang buong flip',
    'I-punch ang throttle sa gitna ng combo para mabawi ang altitude na nawala sa flip',
    'Mag-center ng lahat ng sticks nang sabay sa pag-level para malinis ang exit',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Flip Fwd' },
    { t: 0.8,  label: 'Roll Snap' },
    { t: 1.3,  label: 'Roll Out' },
    { t: 1.7,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Front flip — pitch snap forward, throttle cut
    { t: 0.35, throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Apex of flip — blend in full roll snap, punch throttle
    { t: 0.8,  throttle: 0.85, yaw:  0.00, pitch:  0.50, roll:  1.00 },
    { t: 1.05, throttle: 0.78, yaw:  0.00, pitch:  0.10, roll:  1.00 },
    // Roll completing — pitch centers, roll easing out
    { t: 1.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.45 },
    { t: 1.5,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 1.9,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
