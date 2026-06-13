export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 2.8,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na back-flip na agad na sinusundan ng snap roll bago pa man matapos ang flip — dalawang rotation na pinagsamang halos sabay, parang martial arts combo. Ang bilis ng transition ang gumagawa ng "Jackie Chan" effect.',
  tips: [
    'Simulan ang roll bago pa man kumpleto ang flip — overlap, hindi sequential',
    'Panatilihing mataas ang throttle sa gitna ng combo para hindi mahulog',
    'Kontrolin ang yaw para manatiling diretso ang exit heading kahit double rotation',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Flip' },
    { t: 0.7,  label: 'Overlap Roll' },
    { t: 1.3,  label: 'Combo Peak' },
    { t: 1.8,  label: 'Roll Out' },
    { t: 2.3,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP — snap pitch back to start the back-flip
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.50, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // OVERLAP ROLL — while still pitching, snap in full roll for the combo
    { t: 0.7,  throttle: 0.48, yaw:  0.00, pitch: -0.85, roll:  1.00 },
    { t: 0.95, throttle: 0.45, yaw:  0.00, pitch: -0.55, roll:  1.00 },
    // COMBO PEAK — both rotations carrying through together
    { t: 1.3,  throttle: 0.50, yaw:  0.00, pitch: -0.20, roll:  1.00 },
    { t: 1.55, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.60 },
    // ROLL OUT — finish roll rotation, level pitch
    { t: 1.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.10 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
