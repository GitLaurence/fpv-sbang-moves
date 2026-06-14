export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Forward flip na sinusundan agad ng backflip pabalik sa parehong direksyon — gumagawa ng "rewind" na epekto kung saan parang bumalik ang drone sa kinaroroonan nito. Mabilis at maliit ang radius.',
  tips: [
    'Ibalik agad ang pitch sa kabilang direksyon pagkatapos ng unang flip — walang pahinga sa pagitan',
    'Panatilihing mababa ang throttle habang nagpapalit ng direksyon ang pitch para hindi lumayo ang radius',
    'I-time ang throttle punch sa exit para mabawi ang altitude na nawala sa dalawang flip',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Flip Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.2, label: 'Flip Back' },
    { t: 1.8, label: 'Recover' },
    { t: 2.3, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level flight, modest speed
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // First flip — pitch forward, cut throttle to keep radius tight
    { t: 0.35, throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted apex — brief dead stop
    { t: 0.9,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Reverse — pitch snaps the other way to "rewind" back
    { t: 1.2,  throttle: 0.32, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Continue pitch through to upright, opposite rotation
    { t: 1.8,  throttle: 0.45, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Punch throttle to recover altitude lost across both flips
    { t: 2.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle to cruise
    { t: 2.7,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
