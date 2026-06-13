export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Power loop na may dagdag na full roll sa apex — kombinasyon ng vertical loop at aileron roll na ginawa nang sabay-sabay. Mukhang acrobatic flip mula sa labas, kaya pinangalanan sa martial arts star.',
  tips: [
    'Master muna ang power loop at roll nang hiwalay bago pagsamahin sa isang move',
    'Itago ang roll input para sa apex ng loop — dito pinakamadali ang pag-rotate',
    'Panatilihin ang throttle na mataas habang pataas para hindi mawalan ng momentum',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pull Up' },
    { t: 1.4, label: 'Apex Roll' },
    { t: 2.4, label: 'Roll Out' },
    { t: 3.2, label: 'Pull Down' },
    { t: 4.0, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pull up into the loop — full throttle, nose up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.95, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 1.4,  throttle: 0.85, yaw:  0.00, pitch: -0.60, roll:  0.00 },
    // Apex — add full roll while still pitching through the top
    { t: 1.7,  throttle: 0.75, yaw:  0.00, pitch: -0.40, roll:  1.00 },
    { t: 2.0,  throttle: 0.70, yaw:  0.00, pitch: -0.20, roll:  1.00 },
    { t: 2.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out as the loop continues over the top
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.40 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // Pull down through the back half of the loop
    { t: 3.2,  throttle: 0.58, yaw:  0.00, pitch:  0.35, roll:  0.00 },
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // Recovery — level out
    { t: 3.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
