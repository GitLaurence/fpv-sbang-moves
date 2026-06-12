export default {
  id: 'juicy-lookback',
  name: 'Juicy Tracking-Lookback',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'Ugy7drDWFbs',
  youtubeStart: 0,
  description: 'Mag-yaw 180° habang patuloy na tumataas ang quad para "i-track" ang object na nasa likod, tapos sundan ng juicy flick pabalik sa orihinal na heading. Pagsasama ng yaw authority at flick timing.',
  tips: [
    'Smooth at controlled ang 180° yaw — hindi snap, dahan-dahang i-track ang target',
    'Panatilihing tumataas ang altitude habang nag-yaw para hindi mawalan ng tracking',
    'Ang exit flick ay full snap — bigla mag-pitch pabalik sa forward heading',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Yaw 90°' },
    { t: 1.2, label: 'Yaw 180°' },
    { t: 1.8, label: 'Track Hold' },
    { t: 2.8, label: 'Flick' },
    { t: 3.4, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin 180° yaw tracking — climb while turning
    { t: 0.4,  throttle: 0.75, yaw:  0.85, pitch: -0.20, roll:  0.00 },
    { t: 0.8,  throttle: 0.78, yaw:  0.85, pitch: -0.18, roll:  0.00 },
    { t: 1.2,  throttle: 0.78, yaw:  0.80, pitch: -0.15, roll:  0.00 },
    // Complete 180° — ease yaw out, hold tracking view
    { t: 1.5,  throttle: 0.72, yaw:  0.30, pitch: -0.10, roll:  0.00 },
    { t: 1.8,  throttle: 0.70, yaw:  0.00, pitch: -0.08, roll:  0.00 },
    { t: 2.4,  throttle: 0.70, yaw:  0.00, pitch: -0.08, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap back to forward heading
    { t: 2.8,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.95, throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.15, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover to level
    { t: 3.4,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
