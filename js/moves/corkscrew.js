export default {
  id: 'corkscrew',
  name: 'Corkscrew',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    'ti8pGuEvwbM',
  youtubeStart: 0,
  description: 'Spiral flight path — pinagsama ang sustained roll at pitch para lumikha ng helix na trajectory. Ang drone ay nakikita na paalon-alon na umiikot sa paligid ng isang imaginary axis habang sumusulong. Isa sa pinaka-cinematic na FPV moves.',
  tips: [
    'Ang roll at pitch ay dapat sabay at sustained — ang isa lang ay magiging loop lang o roll lang',
    'Panatilihing consistent ang throttle sa buong spiral para mapanatili ang radius at altitude',
    'Magsimula sa mabagal at maluwag na spiral — mas madaling kontrolin kaysa tight na spiral',
    'Ang exit ay kasinghalaga ng entry — i-release ang inputs nang maayos para lumabas ng malinis',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Spiral In' },
    { t: 1.2, label: '1st Loop' },
    { t: 2.3, label: '2nd Loop' },
    { t: 3.5, label: '3rd Loop' },
    { t: 4.2, label: 'Exit' },
  ],
  keyframes: [
    // High-speed approach — carry momentum
    { t: 0.0,  throttle: 0.82, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin corkscrew — combine full roll + sustained pitch back
    { t: 0.5,  throttle: 0.95, yaw:  0.00, pitch: -0.60, roll:  1.00 },
    { t: 0.85, throttle: 0.95, yaw:  0.00, pitch: -0.65, roll:  1.00 },
    // Through first loop — maintain spiral inputs
    { t: 1.2,  throttle: 0.90, yaw:  0.00, pitch: -0.65, roll:  1.00 },
    { t: 1.6,  throttle: 0.85, yaw:  0.00, pitch: -0.65, roll:  1.00 },
    // Inverted phase — chop throttle, hold pitch and roll
    { t: 1.95, throttle: 0.30, yaw:  0.00, pitch: -0.65, roll:  1.00 },
    { t: 2.25, throttle: 0.25, yaw:  0.00, pitch: -0.65, roll:  1.00 },
    // Second loop — ramp throttle back up through bottom
    { t: 2.55, throttle: 0.70, yaw:  0.00, pitch: -0.65, roll:  1.00 },
    { t: 2.9,  throttle: 0.90, yaw:  0.00, pitch: -0.65, roll:  1.00 },
    // Third loop inverted section
    { t: 3.2,  throttle: 0.28, yaw:  0.00, pitch: -0.62, roll:  1.00 },
    { t: 3.5,  throttle: 0.25, yaw:  0.00, pitch: -0.62, roll:  1.00 },
    // Begin exit — ease roll and pitch gradually
    { t: 3.75, throttle: 0.68, yaw:  0.00, pitch: -0.50, roll:  0.70 },
    { t: 4.0,  throttle: 0.72, yaw:  0.00, pitch: -0.28, roll:  0.35 },
    { t: 4.3,  throttle: 0.68, yaw:  0.00, pitch: -0.08, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
