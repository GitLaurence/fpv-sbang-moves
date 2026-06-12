export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward pitch flip na hinihold habang inverted (ang "delay"), tapos ituloy ang dagdag na 180° para makumpleto ang 540° — isa at kalahating buong loop sa isang continuous na move.',
  tips: [
    'Sa delay phase, ibalik ang pitch sa center at gamitin lang ang throttle para mag-"hover" habang inverted',
    'Huwag matagalan ang hold — sapat lang para makita ng camera ang ground habang patiwarik',
    'Ang ikalawang 360° ay dapat mas mabilis kaysa una para makompleto ang 540° sa loob ng move'
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.4, label: 'Delay' },
    { t: 1.9, label: 'Continue' },
    { t: 2.5, label: 'Inverted 2' },
    { t: 2.8, label: 'Pull Out' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward into the flip — first 180°
    { t: 0.3,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — hold inverted, sticks back to center, gentle throttle to hover
    { t: 1.1,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Continue rotation — another full 360° (total 540°)
    { t: 1.9,  throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Throttle punch through the second inverted pass
    { t: 2.5,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Pull out to level
    { t: 2.8,  throttle: 0.80, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 3.0,  throttle: 0.68, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
