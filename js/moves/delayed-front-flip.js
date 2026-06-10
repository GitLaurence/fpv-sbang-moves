export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward pitch flip papunta sa inverted, mag-"delay" / hold habang nakabaligtad, tapos mag-540° roll palabas — isa\'t kalahating buong roll. Ang dramatic na pause ang nagbibigay ng "delayed" na pakiramdam bago ang extended roll exit.',
  tips: [
    'Ang "delay" ay sadyang pag-hold ng inverted attitude bago mag-roll — ito ang nagbibigay ng dramatic na pause',
    'Ang 540° roll ay halos 1.5x na mas matagal kaysa normal na full roll — panatilihing sustained ang input',
    'Mag-master muna ng regular front flip at 360° roll nang hiwalay bago subukan ang combong ito',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Flip Fwd' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.6,  label: 'Delay' },
    { t: 2.0,  label: '540 Roll' },
    { t: 3.6,  label: 'Roll Out' },
    { t: 4.0,  label: 'Recovery' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward — begin front flip
    { t: 0.35, throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — center pitch
    { t: 0.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DELAY — hold inverted, level, slightly elevated throttle
    { t: 1.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 540° roll — sustained full roll input for 1.5 rotations
    { t: 2.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.6,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.2,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — center stick, now upright
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
