export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may dagdag yaw rotation — mag-snap pitch forward papuntang inverted (180°), tapos i-"delay" doon habang nag-yaw 180°, bago ituloy ang pitch forward para makumpleto ang flip pabalik upright (total 540°).',
  tips: [
    'Una, i-snap ang pitch forward nang buo habang chop ang throttle — ito ang unang 180° ng flip',
    'Sa inverted point, i-pause ang pitch (the "delay") at mag-full yaw 180° habang pinapanatili ang throttle na sapat para hindi bumagsak',
    'Pagkatapos ng yaw delay, ituloy ang pitch forward para sa huling 180° pabalik upright, tapos i-punch ang throttle para sa recovery',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip Start' },
    { t: 0.8, label: 'Inverted' },
    { t: 1.0, label: 'Delay' },
    { t: 2.2, label: 'Yaw 180' },
    { t: 2.5, label: 'Flip Cont' },
    { t: 3.0, label: 'Upright' },
    { t: 3.4, label: 'Recover' },
    { t: 4.0, label: 'Exit' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip start — snap pitch forward, chop throttle for first 180°
    { t: 0.4,  throttle: 0.22, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted at the top — ease pitch back to center (the "delay" point)
    { t: 1.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DELAY — hold inverted while yawing 180° (the extra rotation for "540")
    { t: 1.5,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.55, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Yaw eases out, resume pitch forward for the final 180° of the flip
    { t: 2.4,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.32, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Flip complete — upright, pitch back to center
    { t: 3.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — punch throttle to arrest the descent
    { t: 3.4,  throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
