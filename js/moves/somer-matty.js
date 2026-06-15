export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.8,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Dalawang sunod-sunod na forward pitch rotation — una ay smooth na somersault, tapos agad na Matty Flip kasama ang throttle PUNCH habang inverted. Kailangan ng maingat na throttle management sa pagitan ng dalawang rotation.',
  tips: [
    'Ang somersault ay smooth at steady — huwag bigla, panatilihin ang sustained pitch input',
    'Maikling level moment lang sa pagitan ng dalawang rotation — huwag tumigil nang matagal',
    'Sa ikalawang rotation (Matty), PUNCH ang throttle habang inverted para sa snappy na exit',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Somer' },
    { t: 0.95, label: 'Inverted 1' },
    { t: 1.8,  label: 'Link' },
    { t: 1.95, label: 'Matty' },
    { t: 2.5,  label: 'Punch' },
    { t: 3.1,  label: 'Pull Out' },
  ],
  keyframes: [
    // Entry — steady cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault — smooth full pitch forward
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.95, throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.62, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Finish first rotation
    { t: 1.65, throttle: 0.65, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // LINK — brief level moment between rotations
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Matty Flip — push pitch forward again
    { t: 1.95, throttle: 0.72, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // PUNCH — full throttle while inverted
    { t: 2.5,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.7,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Pull out — ease throttle and pitch toward level
    { t: 2.9,  throttle: 0.80, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 3.1,  throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 3.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
