export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng dalawang forward pitch flips — una, isang Somersault (buong loop sa parehong puwesto), tapos diretsong tuloy sa isang Matty Flip na may throttle punch para tumulak pasulong habang inverted.',
  tips: [
    'Itago muna ang throttle sa Somersault para manatili sa parehong puwesto',
    'Walang dead stop sa pagitan — diretso mula Somersault papunta Matty Flip',
    'Ang punch sa pangalawang inverted ang magbibigay ng forward momentum sa exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Somersault' },
    { t: 0.9, label: 'Inverted 1' },
    { t: 1.5, label: 'Loop Close' },
    { t: 1.9, label: 'Matty Flip' },
    { t: 2.3, label: 'Punch' },
    { t: 2.8, label: 'Pull Out' },
    { t: 3.5, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — full forward pitch loop in place, low throttle to hold position
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted point of the loop
    { t: 0.9,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Closing the loop back to level — brief dead stop
    { t: 1.5,  throttle: 0.62, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY FLIP — pitch forward again, building toward inverted
    { t: 1.9,  throttle: 0.72, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 2.1,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH at inverted — full throttle to translate forward
    { t: 2.3,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.5,  throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Pull out toward level
    { t: 2.8,  throttle: 0.78, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 3.1,  throttle: 0.68, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 3.5,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
