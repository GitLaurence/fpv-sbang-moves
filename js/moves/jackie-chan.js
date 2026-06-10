export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.4,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na "dodge" — flat roll papuntang isang gilid, hawak nang bahagya, tapos snap pabalik sa kabilang direksyon. Roll + counter-yaw para patag ang galaw, parang umiiwas sa hadlang.',
  tips: [
    'Gamitin ang flat roll (roll + counter-yaw) para patag ang dodge, hindi paikot',
    'Mabilis ang unang dodge papuntang gilid, tapos agad na snap pabalik sa kabilang direksyon',
    'Panatilihin ang throttle stable — horizontal ang galaw, hindi vertical',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Dodge L' },
    { t: 0.9, label: 'Hold' },
    { t: 1.5, label: 'Dodge R' },
    { t: 2.3, label: 'Counter' },
    { t: 2.9, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dodge left — roll + opposite yaw to keep the slide flat
    { t: 0.3,  throttle: 0.68, yaw: -0.55, pitch:  0.00, roll: -1.00 },
    { t: 0.6,  throttle: 0.70, yaw: -0.55, pitch:  0.00, roll: -1.00 },
    // Hold the dodge briefly
    { t: 0.9,  throttle: 0.70, yaw: -0.50, pitch:  0.00, roll: -0.95 },
    { t: 1.2,  throttle: 0.70, yaw: -0.50, pitch:  0.00, roll: -0.95 },
    // Dodge right — snap reverse roll + yaw
    { t: 1.5,  throttle: 0.70, yaw:  0.55, pitch:  0.00, roll:  1.00 },
    { t: 1.8,  throttle: 0.70, yaw:  0.55, pitch:  0.00, roll:  1.00 },
    // Counter — ease back through center
    { t: 2.3,  throttle: 0.68, yaw:  0.20, pitch:  0.00, roll:  0.30 },
    { t: 2.6,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
