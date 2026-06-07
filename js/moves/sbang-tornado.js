export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Pro-level Sbang variant — boost, roll-to-inverted dead stop, tapos buong inverted yaw spin ("tornado") bago mag-flick pabalik sa upright. Pinagsasama ang signature na "dead stop, snap input" aesthetic ng Sbang at ang spin control ng Inverted Yaw Spin.',
  tips: [
    'Tulad ng Sbang, mahalaga ang malinaw na "dead stop" sa pagitan ng bawat phase — huwag i-blend ang mga input',
    'I-elevate ang throttle habang nasa tornado spin (inverted) — mas mataas ito kaysa sa upright cruise',
    'Ang flick out ay kailangan ng buong commitment — full roll input na may sabay na throttle punch para sa snap exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.5, label: 'Tornado' },
    { t: 4.0, label: 'Stop Spin' },
    { t: 4.4, label: 'Flick Out' },
    { t: 5.0, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.34, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — inverted, both sticks back to center
    { t: 1.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.35, throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — full inverted yaw spin, elevated throttle to hold altitude
    { t: 1.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop spin — center yaw, brief settle inverted
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLICK OUT — snap roll back to upright with a throttle punch
    { t: 4.4,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 4.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.45 },
    { t: 4.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 5.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
