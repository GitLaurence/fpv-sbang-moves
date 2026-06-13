export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal flip — sabay na full pitch at full roll input para mag-corkscrew ang drone sa isang diagonal axis, parang spinning kick. Mas mahirap kontrolin kaysa sa plain flip o roll dahil dalawang axis ang umiikot nang sabay.',
  tips: [
    'Sabay na i-snap ang pitch at roll papunta sa parehong oras — pareho full deflection',
    'Throttle punch sa gitna ng rotation (parehong axis ay inverted) para mapanatili ang altitude',
    'Bumalik ang dalawang stick sa center nang sabay-sabay sa exit — huwag magkahiwalay',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Snap In' },
    { t: 1.1, label: 'Diagonal Inv' },
    { t: 1.9, label: 'Snap Out' },
    { t: 3.0, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap both pitch and roll to full — begin diagonal corkscrew
    { t: 0.3,  throttle: 0.66, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Diagonal-inverted — throttle punch to hold altitude through the midpoint
    { t: 1.1,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.45, throttle: 0.74, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Continuing rotation back toward level
    { t: 1.9,  throttle: 0.68, yaw:  0.00, pitch:  0.55, roll:  0.55 },
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.10 },
    // Recovery — both sticks return to center together
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
