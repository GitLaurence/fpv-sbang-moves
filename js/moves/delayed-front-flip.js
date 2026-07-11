export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.8,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may dramatic na pause habang halos inverted, tapos ipagpapatuloy ang pitch rotation para makumpleto ang extra 180° — 540° sa halip na normal na 360°. Kailangan ng disenteng throttle control sa delay para hindi mabagsak.',
  tips: [
    'Ease ang throttle papunta sa delay — huwag biglaang cut, hayaang mag-float habang halos inverted',
    'Panatilihin ang pause na matagal at sinasadya bago ituloy ang rotation — dito nakikita ang "delayed"',
    'Punch throttle habang nagpapatuloy sa huling 180° para makumpleto ang 540° nang malinis',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.2,  label: 'Delay' },
    { t: 2.0,  label: 'Continue' },
    { t: 2.6,  label: 'Complete 540°' },
    { t: 3.2,  label: 'Recovery' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Push pitch forward hard — start the flip
    { t: 0.35, throttle: 0.72, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted — ease throttle way down for the pause
    { t: 0.9,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — hold near-inverted, low throttle, minimal further rotation
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 1.6,  throttle: 0.26, yaw:  0.00, pitch:  0.92, roll:  0.00 },
    // Resume rotation — punch through the extra 180° for the full 540°
    { t: 2.0,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.6,  throttle: 1.00, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // Pull out to level
    { t: 2.9,  throttle: 0.82, yaw:  0.00, pitch:  0.25, roll:  0.00 },
    { t: 3.2,  throttle: 0.68, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Recovery
    { t: 3.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
