export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward pitch flip na may "delay" — pumausa habang inverted bago ituloy ang extra 180° para makumpleto ang 540° kabuuang rotation.',
  tips: [
    'Pitch forward agad-agad papuntang inverted — huwag mag-atubili sa unang flip',
    'Habang inverted, i-pause ang pitch input — ito ang "delay" na nagbibigay ng dramatic na hold',
    'Ituloy ang pitch forward para sa karagdagang 180° at i-recover pabalik sa upright',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.8, label: 'Inverted' },
    { t: 1.1, label: 'Delay' },
    { t: 1.5, label: '+180°' },
    { t: 2.0, label: 'Recover' },
  ],
  keyframes: [
    // Approach — cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PUSH pitch forward — first 360° begins
    { t: 0.3,  throttle: 0.78, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.55, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — chop throttle
    { t: 0.8,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — hold inverted, pitch eases off, rotation pauses
    { t: 1.1,  throttle: 0.30, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 1.3,  throttle: 0.30, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Continue pitching forward — extra 180° to complete 540°
    { t: 1.5,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.78, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    // Recover — pull out to level
    { t: 2.0,  throttle: 0.85, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 2.2,  throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 2.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
