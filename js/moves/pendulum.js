export default {
  id: 'pendulum',
  name: 'Pendulum',
  level: 'advanced',
  difficulty: 4,
  durationSec: 6.0,
  youtubeId:    'l7F1a68G9r8',
  youtubeStart: 0,
  description: 'Umiindayog na pitch oscillation pabalik-balik tulad ng pendulum — bawat indayog ay mas mataas kaysa nauna, hanggang sa maging inverted sa pinakatuktok bago humupa pabalik sa level. Kailangan ng tamang timing ng throttle sa bawat swing.',
  tips: [
    'Bawat swing ay mas malaki kaysa nauna — gradual na pagdagdag ng pitch input, hindi biglaan',
    'I-chop ang throttle nang bahagya sa pinakatuktok ng huling swing kung saan inverted',
    'Mag-modulate ng throttle sa bawat pagbabalik — mas mataas habang pababa, mas mababa habang pataas',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.6, label: 'Swing 1' },
    { t: 1.8, label: 'Swing 2' },
    { t: 3.4, label: 'Swing 3 (Inv)' },
    { t: 5.0, label: 'Settle' },
    { t: 5.6, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level hover
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Swing 1 — small forward dip then back up
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 0.6,  throttle: 0.55, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 0.9,  throttle: 0.50, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Swing 2 — bigger forward dip, bigger backward rise
    { t: 1.2,  throttle: 0.62, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    { t: 1.5,  throttle: 0.58, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    { t: 1.8,  throttle: 0.50, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Swing 3 — full forward dip, then full pitch up into inverted at the top
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 2.6,  throttle: 0.55, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 3.0,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted at the peak of the swing — brief throttle chop
    { t: 3.4,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Falling back through — throttle catches the descent
    { t: 3.7,  throttle: 0.55, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 4.1,  throttle: 0.65, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Settling — oscillation decays back to level
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 5.0,  throttle: 0.61, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level hover
    { t: 5.6,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
