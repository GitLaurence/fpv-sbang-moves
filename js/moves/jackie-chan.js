export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.6,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: '"Drone kung-fu" combo — forward flip pitch tapos kaagad na full roll, may dead stop sa gitna ng dalawa. Ang snap-snap na rhythm ng combo ang gumagawa ng "chop-chop" effect, gaya ng martial arts strikes.',
  tips: [
    'Mag-dead stop sa center sa pagitan ng flip at roll — huwag i-blend, dapat distinct ang dalawang "chops"',
    'Mag-punch ng throttle pagkatapos ng flip para hindi mawalan ng altitude bago ang roll',
    'Pareho dapat ang bilis ng dalawang inputs — ang timing ang gumagawa ng "kung-fu" na pakiramdam',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip' },
    { t: 0.9, label: 'Dead Stop' },
    { t: 1.1, label: 'Roll' },
    { t: 1.6, label: 'Dead Stop' },
    { t: 1.8, label: 'Punch' },
    { t: 2.4, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP — snap pitch forward, throttle dips through the rotation
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Dead stop — both sticks back to center, brief beat between strikes
    { t: 0.9,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL — snap full roll, second "strike" of the combo
    { t: 1.1,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.35, throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — center roll, settle upright
    { t: 1.6,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PUNCH — throttle blip to recover any lost altitude
    { t: 1.8,  throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.05, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
