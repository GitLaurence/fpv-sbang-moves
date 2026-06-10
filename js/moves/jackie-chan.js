export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 1.8,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal na tumble — sabay na full pitch at full roll input para gumawa ng isang mabilis na "tumbling" rotation sa dalawang axis nang sabay. Mukhang acrobatic flip gaya ng kay Jackie Chan.',
  tips: [
    'Sabay na full deflection ang pitch at roll — pareho silang dapat mag-snap nang magkasabay',
    'Bahagyang bawasan ang throttle habang umiikot para hindi tumaas ang altitude',
    'I-time ang pag-center ng sticks para tama ang exit heading pagkatapos ng buong rotation',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Tumble In' },
    { t: 1.2, label: 'Tumble' },
    { t: 1.4, label: 'Recover' },
    { t: 1.8, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal tumble — full pitch + full roll together
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.9,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Easing out as the tumble completes
    { t: 1.2,  throttle: 0.60, yaw:  0.00, pitch:  0.50, roll:  0.50 },
    { t: 1.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 1.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
