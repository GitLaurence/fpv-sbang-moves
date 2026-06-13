export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: '"Drone Kung Fu" combo — snap roll papuntang inverted, dead stop, tapos isang yaw "kick" habang inverted bago mag Split-S pull-through pabalik sa upright. Bawat input ay dapat tumpak at malinis, kasing precise ng martial arts strike.',
  tips: [
    'Snap roll papuntang inverted at agad bumalik sa center stick — huwag i-drag ang roll',
    'Ang yaw "kick" habang inverted ay mabilis at full deflection, parang sipa — hindi gradual',
    'Mag-master muna ng Split-S pull-through nang hiwalay bago idagdag ang yaw kick',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Inv' },
    { t: 0.8, label: 'Inverted' },
    { t: 1.1, label: 'Yaw Kick' },
    { t: 1.6, label: 'Pull' },
    { t: 2.3, label: 'Level Out' },
    { t: 3.0, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll to inverted
    { t: 0.3,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.55, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — inverted, sticks centered
    { t: 0.8,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW KICK — sharp full yaw snap while inverted
    { t: 1.1,  throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.35, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through back to upright
    { t: 1.6,  throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.95, throttle: 0.55, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 2.3,  throttle: 0.70, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    // Level out
    { t: 2.6,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle to cruise
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
