export default {
  id: 'juicy-cartwheel',
  name: 'Juicy Cartwheel',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'uvIvAzPRXiU',
  youtubeStart: 0,
  description: 'Juicy Flick papuntang inverted, tapos sunod-sunod na yaw spin habang patiwarik para sa "cartwheel" effect, bago mag-roll out pabalik sa upright. Pinagsamang flick at spin na nangangailangan ng tamang timing.',
  tips: [
    'Mag-master muna ng Juicy Flick nang hiwalay bago idagdag ang yaw spin',
    'Panatilihin ang throttle na mababa habang patiwarik para hindi tumaas masyado',
    'Ang roll out sa dulo ay dapat malinis at full — huwag bitin ang roll input',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Flick' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.0, label: 'Cartwheel' },
    { t: 2.7, label: 'Roll Out' },
    { t: 3.3, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap to inverted
    { t: 0.5,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.65, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted dead stop — sticks centered
    { t: 0.85, throttle: 0.26, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CARTWHEEL — sustained yaw spin while inverted
    { t: 1.0,  throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.32, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.34, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Center out — pause before roll out
    { t: 2.5,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL OUT — full roll back to upright
    { t: 2.7,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.0,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 3.15, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to level flight
    { t: 3.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
