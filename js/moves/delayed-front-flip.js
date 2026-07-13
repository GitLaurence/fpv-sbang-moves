export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.8,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may dramatic na "dead stop" habang inverted bago tapusin ang extra 180° — kaya 540° sa halip na plain 360°. Ang delay sa inverted position ang nagbibigay ng stylish na hitsura sa trick.',
  tips: [
    'Pitch forward papuntang inverted, tapos itigil — huwag agad ipagpatuloy ang flip',
    'Habang naka-delay sa inverted, panatilihing steady ang throttle para hindi bumagsak',
    'Pagkatapos ng delay, ipagpatuloy ang pitch input nang buo hanggang sa makumpleto ang 540°',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.0, label: 'Delay' },
    { t: 1.8, label: 'Continue' },
    { t: 2.3, label: 'Extra 180' },
    { t: 2.9, label: 'Pull Out' },
    { t: 3.3, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward toward inverted
    { t: 0.35, throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 0.6,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted — chop throttle to arrest rotation
    { t: 0.9,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — hold inverted, sustained throttle so it doesn't drop
    { t: 1.0,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Continue rotation — punch through remaining flip plus the extra 180°
    { t: 2.0,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.3,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.85, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Pull out to level
    { t: 2.9,  throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 3.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
