export default {
  id: 'barani',
  name: 'Barani',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Forward flip na may sabay na full roll — corkscrew na pag-ikot sa pitch at roll axis nang sabay-sabay. Mas mabilis at mas "tight" kaysa sa hiwalay na flip o roll.',
  tips: [
    'PUSH pitch forward AT roll nang sabay — magkasamang input ang dalawang stick',
    'Magdagdag ng throttle habang inverted para hindi malaki ang altitude loss',
    'I-time ang pag-center ng sticks para tama ang exit heading',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip+Roll' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.3, label: 'Continue' },
    { t: 1.9, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Combined pitch + roll input — corkscrew flip begins
    { t: 0.4,  throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.65, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Inverted — throttle punch to carry through
    { t: 0.85, throttle: 0.88, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.05, throttle: 0.85, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    // Continue rotation, easing both axes toward center
    { t: 1.3,  throttle: 0.78, yaw:  0.00, pitch:  0.55, roll:  0.50 },
    { t: 1.6,  throttle: 0.70, yaw:  0.00, pitch:  0.20, roll:  0.18 },
    // Recovery — centered, settle to cruise
    { t: 1.9,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
