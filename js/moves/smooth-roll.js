export default {
  id: 'smooth-roll',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 3.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Mahinahon at controlled na 360° roll — gradual ang entry at exit, may throttle compensation sa knife-edge at inverted points para mapanatili ang altitude. Mas mahirap kontrolin kaysa snap roll dahil mas matagal ang bawat phase.',
  tips: [
    'I-ease ang roll input nang gradual — huwag bigla, dahan-dahan papunta sa full deflection',
    'Dagdagan ang throttle habang naka-knife-edge at inverted para hindi bumaba ang altitude',
    'I-ease din pabalik ang roll papunta sa exit — dapat parehong smooth ang entry at exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Roll In' },
    { t: 1.3, label: 'Knife Edge' },
    { t: 1.9, label: 'Inverted' },
    { t: 2.5, label: 'Roll Out' },
    { t: 3.1, label: 'Level' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Ease into the roll — gradual ramp, not a snap
    { t: 0.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.45 },
    { t: 0.9,  throttle: 0.73, yaw:  0.00, pitch:  0.00, roll:  0.75 },
    // Knife edge — boost throttle to hold altitude on edge
    { t: 1.3,  throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — throttle still elevated through the top of the roll
    { t: 1.9,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Continue rotation past inverted, throttle starts easing
    { t: 2.2,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.80 },
    // Ease roll back out toward level
    { t: 2.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.45 },
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.15 },
    // Level — settle to cruise
    { t: 3.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
