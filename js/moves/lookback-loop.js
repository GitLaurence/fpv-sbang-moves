export default {
  id: 'lookback-loop',
  name: 'Lookback & Loop',
  level: 'advanced',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    '0QAK68uip8E',
  youtubeStart: 0,
  description: 'Snap yaw 180° para tumingin sa likod (lookback), tapos agad na full power loop sa reverse direction. Dalawang magkaibang skill ang pinagsama: yaw authority at power loop control.',
  tips: [
    'Ang yaw snap ay dapat mabilis at full input — huwag maging maingat, snap lang nang agad',
    'I-center ang yaw bago mag-simula ng loop — hindi dapat may residual yaw habang nag-lo-loop',
    'Mag-maintain ng sapat na forward momentum para sa clean loop — huwag mag-loop nang hovering',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Yaw Snap' },
    { t: 0.85, label: 'Center' },
    { t: 1.05, label: 'Loop Start' },
    { t: 1.5, label: 'Climbing' },
    { t: 2.0, label: 'Inverted' },
    { t: 2.6, label: 'Descending' },
    { t: 3.2, label: 'Pull Out' },
  ],
  keyframes: [
    // Entry — forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch: 0.00, roll: 0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch: 0.00, roll: 0.00 },
    // Full yaw snap left (180° lookback)
    { t: 0.4,  throttle: 0.65, yaw: -1.00, pitch: 0.00, roll: 0.00 },
    { t: 0.65, throttle: 0.65, yaw: -1.00, pitch: 0.00, roll: 0.00 },
    // Center yaw — now facing backward
    { t: 0.85, throttle: 0.65, yaw:  0.00, pitch: 0.00, roll: 0.00 },
    // Start power loop — throttle up + pitch forward
    { t: 1.05, throttle: 0.85, yaw:  0.00, pitch: 1.00, roll: 0.00 },
    // Climbing phase — maintain full throttle and pitch
    { t: 1.4,  throttle: 1.00, yaw:  0.00, pitch: 1.00, roll: 0.00 },
    { t: 1.75, throttle: 0.95, yaw:  0.00, pitch: 1.00, roll: 0.00 },
    // Inverted at top of loop
    { t: 2.0,  throttle: 0.85, yaw:  0.00, pitch: 0.88, roll: 0.00 },
    // Descending arc — ease pitch slightly
    { t: 2.35, throttle: 0.78, yaw:  0.00, pitch: 0.70, roll: 0.00 },
    { t: 2.65, throttle: 0.72, yaw:  0.00, pitch: 0.45, roll: 0.00 },
    // Pull out — nose level, reduce pitch
    { t: 2.95, throttle: 0.70, yaw:  0.00, pitch: 0.18, roll: 0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch: 0.00, roll: 0.00 },
    { t: 3.5,  throttle: 0.63, yaw:  0.00, pitch: 0.00, roll: 0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch: 0.00, roll: 0.00 },
  ],
};
