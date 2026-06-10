export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Combo trick: mag-roll papuntang inverted, mag-yaw spin habang nakabaligtad, tapos mag-flip pabalik sa upright. Ang pagkakaiba ng entry (roll) at exit (flip) ang nagbibigay ng signature na "Jackie Chan" na hitsura.',
  tips: [
    'Roll papasok, flip palabas — ang asymmetry ng entry at exit ang bumubuo sa visual signature ng trick na ito',
    'Mag-pause nang konti pagkatapos ng yaw spin bago mag-flip palabas para magkaroon ng malinaw na visual beat',
    'Mag-master muna nang hiwalay ang "roll to inverted" at "flip to upright" bago pagsamahin sa isang combo',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll Inv' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.0,  label: 'Yaw Spin' },
    { t: 2.6,  label: 'Stop Yaw' },
    { t: 2.9,  label: 'Flip Up' },
    { t: 3.35, label: 'Recovery' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.4,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Fully inverted — center roll, re-establish throttle
    { t: 0.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin yaw spin while inverted — elevated throttle to hold altitude
    { t: 1.0,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center left stick, brief pause inverted
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch flip back to upright — snap pitch, throttle cut
    { t: 2.9,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.15, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — punch throttle to catch any altitude loss
    { t: 3.35, throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
