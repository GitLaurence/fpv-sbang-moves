export default {
  id: 'barani',
  name: 'Barani',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Forward flip na may kasamang half-roll (180°) — kombinasyon ng pitch flip at roll na nag-e-exit sa kabaligtarang heading pero patuloy na upright. Mas mahirap kaysa Matty Flip dahil dalawang axis ang sabay na ginagalaw.',
  tips: [
    'I-mix ang pitch flip at roll input nang sabay sa simula ng flip',
    'I-time ang throttle punch sa kalagitnaan ng flip para hindi bumaba ang altitude',
    'Mag-exit na level at upright — ang heading ay 180° na iba sa entry',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip + Roll' },
    { t: 1.1, label: 'Inverted Twist' },
    { t: 1.6, label: 'Recover' },
    { t: 2.3, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip + roll — pitch forward and roll together, throttle cut
    { t: 0.4,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.75, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Inverted twist — momentary center as the half-roll completes
    { t: 1.1,  throttle: 0.35, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Recovery — punch throttle to catch altitude, center sticks
    { t: 1.6,  throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level, opposite heading
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
