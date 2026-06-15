export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Combo ng dalawang flips: Somersault (backflip) papuntang Matty Flip (forward flip) — bumaliktad pataas, mag-recover, tapos bumaliktad pababa pasulong. Pinagsasama ang dalawang direksyon ng pitch flip sa isang sequence.',
  tips: [
    'Hayaang makumpleto muna ang somersault bago simulan ang matty flip — huwag pagsabayin',
    'Panatilihing matatag ang throttle sa recovery window sa pagitan ng dalawang flips',
    'Ang punch sa Matty Flip ay dapat mabilis at decisive habang inverted',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Somer Pitch' },
    { t: 1.0, label: 'Somer Inv' },
    { t: 1.5, label: 'Recover' },
    { t: 1.8, label: 'Matty Pitch' },
    { t: 2.4, label: 'Matty Inv' },
    { t: 2.6, label: 'Punch' },
    { t: 3.2, label: 'Pull Out' },
    { t: 4.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — pitch back into a backflip, ease throttle
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 0.65, throttle: 0.32, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Top of backflip — inverted
    { t: 0.95, throttle: 0.45, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    // Recover to level before second flip
    { t: 1.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY FLIP — pitch forward into a forward flip
    { t: 1.8,  throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 2.05, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — punch throttle to shoot through
    { t: 2.4,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.6,  throttle: 1.00, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Pull out to level
    { t: 2.95, throttle: 0.70, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
