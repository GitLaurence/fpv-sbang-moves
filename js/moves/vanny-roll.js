export default {
  id: 'vanny-roll',
  name: 'Vanny Roll',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'PpTKsZgn6h8',
  youtubeStart: 0,
  description: 'Nimbentuhan ni Captain Vanover — isang buong 360° roll na pinagsama sa yaw input para lumikha ng kakaibang helical/corkscrew na visual. Hindi ito simpleng roll; ang kombinasyon ng roll at yaw ang nagbibigay ng distinctive na hitsura at may throttle management sa inverted phase.',
  tips: [
    'Ang yaw input ay kailangang simultaneous sa roll — huwag hiwalay ang mga ito',
    'CHOP throttle sa inverted phase ng roll — parehong technique sa power loop',
    'Ang dami ng yaw mix ay nag-dedetermine ng gaano ka-helical ang roll — mag-experiment',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Roll+Yaw' },
    { t: 1.2, label: '¼ Roll' },
    { t: 1.8, label: 'Inverted' },
    { t: 2.5, label: '¾ Roll' },
    { t: 3.2, label: 'Complete' },
    { t: 3.6, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin roll + yaw combination
    { t: 0.5,  throttle: 0.68, yaw:  0.45, pitch:  0.00, roll:  0.85 },
    { t: 0.85, throttle: 0.68, yaw:  0.50, pitch:  0.00, roll:  0.90 },
    // ¼ roll — approaching knife edge
    { t: 1.2,  throttle: 0.70, yaw:  0.45, pitch:  0.00, roll:  0.90 },
    // Inverted phase — chop throttle
    { t: 1.7,  throttle: 0.18, yaw:  0.50, pitch:  0.00, roll:  0.90 },
    { t: 2.0,  throttle: 0.15, yaw:  0.45, pitch:  0.00, roll:  0.90 },
    // Through ¾ — ramp throttle back
    { t: 2.4,  throttle: 0.65, yaw:  0.45, pitch:  0.00, roll:  0.90 },
    // Approaching upright — ease inputs
    { t: 2.8,  throttle: 0.65, yaw:  0.30, pitch:  0.00, roll:  0.60 },
    { t: 3.1,  throttle: 0.65, yaw:  0.10, pitch:  0.00, roll:  0.20 },
    // Complete — back to level
    { t: 3.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
