export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may "hang time" — pitch forward papuntang inverted, tapos i-hold ang dead stick habang baligtad para sa dramatic pause, bago tapusin ang extra kalahating pag-ikot papuntang upright.',
  tips: [
    'I-cut ang throttle bago ang flip para hindi tumaas ang altitude habang umiikot',
    'Ang "delay" ay nasa dead stick habang inverted — huwag agad ipagpatuloy ang pitch',
    'Dagdagan ng kaunting pitch ang exit para makumpleto ang extra 180° (540° total)',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.6, label: 'Hang' },
    { t: 2.2, label: 'Continue' },
    { t: 2.8, label: 'Recover' },
    { t: 3.5, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP — throttle cut, full pitch forward into the rotation
    { t: 0.4,  throttle: 0.15, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.15, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Reach inverted — ease pitch back toward center
    { t: 0.9,  throttle: 0.18, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // HANG — dead stick, hold inverted for the delay
    { t: 1.0,  throttle: 0.18, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.18, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CONTINUE — resume pitch forward for the extra 180° (540° total)
    { t: 2.2,  throttle: 0.22, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.30, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Recover — catch with throttle as upright orientation returns
    { t: 2.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — resume forward flight
    { t: 3.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
