export default {
  id: 'juicy-cartwheel',
  name: 'Juicy Cartwheel',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'uvIvAzPRXiU',
  youtubeStart: 0,
  description: 'Isang Juicy Flick na may kasamang roll component — ang drone ay "nagka-cartwheel" sa hangin sa pamamagitan ng kombinasyon ng pitch snap at roll. Mas complex kaysa sa simpleng Juicy Flick dahil kailangan ng simultaneous na dalawang axis ng input at mas maingat na throttle management sa exit.',
  tips: [
    'Ang pitch at roll ay sabay-sabay — isang combined motion, hindi dalawang hiwalay na input',
    'Throttle punch sa inverted phase para mapanatili ang altitude ng kartwheel',
    'Ang exit ay mas mahirap — koordinadong roll at pitch return sa parehong oras',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Blip' },
    { t: 0.7, label: 'Cartwheel' },
    { t: 1.45, label: 'Inverted' },
    { t: 2.0, label: 'Roll Out' },
    { t: 2.8, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip
    { t: 0.5,  throttle: 0.88, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    // Snap pitch + roll simultaneously — the cartwheel motion
    { t: 0.7,  throttle: 0.28, yaw: 0.00, pitch:  0.90, roll:  0.80 },
    { t: 0.95, throttle: 0.25, yaw: 0.00, pitch:  1.00, roll:  0.90 },
    // Mid-cartwheel — approaching inverted/sideways
    { t: 1.2,  throttle: 0.30, yaw: 0.00, pitch:  0.60, roll:  0.80 },
    // Inverted — throttle punch to hold altitude
    { t: 1.45, throttle: 0.65, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    // Roll back to upright
    { t: 2.0,  throttle: 0.42, yaw: 0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.25, throttle: 0.38, yaw: 0.00, pitch:  0.00, roll:  0.90 },
    { t: 2.5,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll:  0.20 },
    // Recovery upright
    { t: 2.8,  throttle: 0.70, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.67, yaw: 0.00, pitch:  0.00, roll:  0.00 },
  ],
};
