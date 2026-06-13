export default {
  id: 'juicy-cartwheel',
  name: 'Juicy Cartwheel',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'uvIvAzPRXiU',
  youtubeStart: 0,
  description: 'Sabay na full roll at full yaw — ang drone ay "nag-cartwheel" sa hangin, parang umiikot sa dalawang axis nang sabay-sabay. Mas "juicy" at dynamic ang tingnan kaysa sa plain roll o yaw spin.',
  tips: [
    'I-mix ang full roll at full yaw nang sabay-sabay — hindi sunod-sunod',
    'I-modulate ang throttle para mapanatili ang altitude habang umiikot sa dalawang axis',
    'Mag-start sa malawak na input bago paliitin — mas madali ang malaking cartwheel',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Spin Start' },
    { t: 1.0, label: 'Cartwheel' },
    { t: 2.8, label: 'Spin Out' },
    { t: 3.4, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Spin start — roll and yaw inputs ramp in together
    { t: 0.4,  throttle: 0.68, yaw:  0.60, pitch:  0.00, roll:  0.60 },
    { t: 0.7,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    // Sustained cartwheel — full roll + full yaw, throttle modulates for altitude
    { t: 1.0,  throttle: 0.72, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 1.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 2.0,  throttle: 0.72, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 2.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    // Spin out — center both sticks
    { t: 2.8,  throttle: 0.66, yaw:  0.50, pitch:  0.00, roll:  0.50 },
    { t: 3.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level
    { t: 3.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
