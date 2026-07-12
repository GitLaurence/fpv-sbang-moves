export default {
  id: 'dive-building',
  name: 'Dive A Building',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.5,
  youtubeId:    'xCgcLMnap1g',
  youtubeStart: 0,
  description: 'Pagbagsak nang tuwid pababa sa gilid ng gusali — bawasan ang throttle papalapit, itulak nang husto ang pitch forward para sa matarik na dive, pataasin muli ang throttle habang patungong ibaba, tapos hilahin pabalik ang pitch para lumevel malapit sa ilalim.',
  tips: [
    'Bawasan ang throttle bago pa man mag-dive — hayaang bumagal muna bago itulak ang pitch',
    'Huwag ibalik agad ang throttle — hintaying matatag muna ang matarik na anggulo',
    'Ang pull-out ay dapat matatag at maaga — huli lang ang timing, tiyak na crash sa ibaba',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Cut Throttle' },
    { t: 0.9, label: 'Dive' },
    { t: 2.0, label: 'Throttle Up' },
    { t: 2.7, label: 'Pull Out' },
    { t: 3.2, label: 'Level' },
  ],
  keyframes: [
    // Approach — level cruise toward the building
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.4,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Cut throttle to bleed speed before the dive
    { t: 0.5,  throttle: 0.25, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 0.75, throttle: 0.20, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Firm pitch forward — steep near-vertical dive down the face
    { t: 0.9,  throttle: 0.22, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 1.3,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Throttle back up mid-dive, nose still pointed down
    { t: 2.0,  throttle: 0.70, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 2.35, throttle: 0.78, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    // Firm pull-out near the bottom
    { t: 2.7,  throttle: 0.85, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    { t: 2.95, throttle: 0.75, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    // Level exit
    { t: 3.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
