export default {
  id: 'barani',
  name: 'Barani',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Front flip na may half-twist — sabay na full forward pitch at roll input para mag-corkscrew ang quad papuntang harap. Mas mahirap kaysa sa plain front flip dahil dalawang axis ang kasabay na umiikot.',
  tips: [
    'Sabay na input ang pitch forward at roll — pareho full deflection sa parehong oras',
    'Bahagyang i-chop ang throttle sa inverted apex para hindi tumaas nang sobra',
    'I-ease pabalik ang pitch at roll sabay-sabay para sa malinis na recovery',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip+Twist' },
    { t: 1.2, label: 'Inverted' },
    { t: 2.0, label: 'Recover' },
    { t: 2.6, label: 'Level' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Front flip pitch + roll twist begin together
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.60 },
    { t: 0.7,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.70 },
    // Inverted apex — slight throttle chop, rotation continues
    { t: 1.2,  throttle: 0.30, yaw:  0.00, pitch:  0.80, roll:  0.50 },
    { t: 1.6,  throttle: 0.35, yaw:  0.00, pitch:  0.40, roll:  0.30 },
    // Recovering — ease pitch and roll back to center, throttle restored
    { t: 2.0,  throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  0.10 },
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Level
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
