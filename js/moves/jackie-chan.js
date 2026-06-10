export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Pitch flip papuntang inverted, sundan ng full roll habang inverted, tapos pitch flip pabalik sa upright. Tatlong rotation na pinagsama sa isang mabilis na sunod-sunod na combo.',
  tips: [
    'Mag-cut ng throttle sa unang flip — itutuloy lang ito ng momentum papuntang inverted',
    'Sa sandaling inverted, i-level muna ang sticks bago ipasok ang full roll',
    'Pagkatapos ng roll (babalik sa inverted), bigyan agad ng pitch flip pabalik at throttle punch para mag-recover',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Flip Inv' },
    { t: 0.75, label: 'Inverted' },
    { t: 0.9, label: 'Snap Roll' },
    { t: 1.5, label: 'Re-Inverted' },
    { t: 1.8, label: 'Flip Out' },
    { t: 2.2, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip forward to inverted — throttle cut, full pitch
    { t: 0.3,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.27, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — re-establish throttle, center sticks
    { t: 0.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll while inverted — full 360° roll, exits back inverted
    { t: 0.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.15, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Hold inverted briefly
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back to upright — throttle cut, full pitch
    { t: 1.8,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.05, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Punch throttle to catch any altitude loss
    { t: 2.2,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.85, throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
