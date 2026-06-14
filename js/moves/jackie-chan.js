export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na backward eject patungong inverted, sundan ng buong 360° na snap roll habang baligtad, tapos flip pabalik sa upright. Acrobatic at mabilis — kaya tinawag na "Jackie Chan" dahil sa galaw na parang martial-arts flip.',
  tips: [
    'Mag-eject palikod (pitch back) nang mabilis — huwag mag-atubili sa unang input',
    'Pag-inverted, agad mag-snap roll ng buong 360° bago mag-recover',
    'Tumigil ang roll exactly sa inverted bago mag-flip pabalik pataas',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Eject' },
    { t: 0.65, label: 'Inverted' },
    { t: 0.85, label: 'Snap Roll' },
    { t: 1.85, label: 'Roll Stop' },
    { t: 2.15, label: 'Flip Up' },
    { t: 2.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // EJECT — sharp pitch back, throttle chop
    { t: 0.3,  throttle: 0.30, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.5,  throttle: 0.28, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted — center pitch, raise throttle to hold
    { t: 0.65, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SNAP ROLL — full 360° roll while inverted
    { t: 0.85, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.75, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll stops — back to inverted, center roll
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP UP — pitch snap forward back to upright, throttle punch
    { t: 2.15, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.35, throttle: 0.78, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 2.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 2.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
