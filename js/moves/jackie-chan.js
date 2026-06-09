export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Acrobatic combo na inspired sa estilo ni Jackie Chan — quick stall → pitch snap to inverted → mabilis na yaw flick → roll recovery → final punch. Ang bawat elemento ay mabilis at "theatrical" — parang martial arts na galaw sa hangin.',
  tips: [
    'Ang stall entry ay dapat maikli — ilang frames lang bago ang pitch snap, para hindi masyadong bumaba',
    'Ang yaw flick ay PARTIAL lamang (hindi buong 360°) — iyon ang "Jackie Chan kick" na elemento ng trick',
    'Ang final recovery punch ay dapat malakas at decisive — buong throttle para dramatic ang exit',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Stall' },
    { t: 0.8,  label: 'Snap Inv' },
    { t: 1.2,  label: 'Yaw Flick' },
    { t: 2.0,  label: 'Stop Yaw' },
    { t: 2.2,  label: 'Roll Out' },
    { t: 2.8,  label: 'Punch' },
    { t: 3.5,  label: 'Settle' },
  ],
  keyframes: [
    // Entry — cruise speed forward
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // STALL — sudden throttle chop, brief free-fall moment
    { t: 0.4,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.62, throttle: 0.04, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // SNAP to inverted — pitch snap forward while still "hanging" from stall
    { t: 0.78, throttle: 0.22, yaw:  0.00, pitch:  1.00, roll: 0.00 },
    { t: 0.95, throttle: 0.20, yaw:  0.00, pitch:  1.00, roll: 0.00 },
    // Fully inverted — center pitch, establish inverted throttle
    { t: 1.1,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 1.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // YAW FLICK — sharp partial yaw spin (the "Jackie Chan kick")
    { t: 1.25, throttle: 0.67, yaw:  1.00, pitch:  0.00, roll: 0.00 },
    { t: 1.55, throttle: 0.68, yaw:  1.00, pitch:  0.00, roll: 0.00 },
    { t: 1.85, throttle: 0.67, yaw:  1.00, pitch:  0.00, roll: 0.00 },
    // Stop yaw — snap center
    { t: 2.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 2.18, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    // ROLL OUT — 180° roll back to upright
    { t: 2.28, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll: 1.00 },
    { t: 2.52, throttle: 0.42, yaw:  0.00, pitch:  0.00, roll: 1.00 },
    { t: 2.7,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll: 0.25 },
    // PUNCH — full throttle recovery burst
    { t: 2.85, throttle: 1.00, yaw:  0.00, pitch: -0.20, roll: 0.00 },
    { t: 3.1,  throttle: 0.82, yaw:  0.00, pitch: -0.10, roll: 0.00 },
    // Settle to cruise
    { t: 3.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 4.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 5.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll: 0.00 },
  ],
};
