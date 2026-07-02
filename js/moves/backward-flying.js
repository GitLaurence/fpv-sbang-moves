export default {
  id: 'backward-flying',
  name: 'Backward Flying',
  level: 'beginner',
  difficulty: 2,
  durationSec: 3.5,
  youtubeId:    'esueDHARopM',
  youtubeStart: 0,
  description: 'Patuloy na pag-hawak ng pitch pabalik para lumipad nang paatras habang nakaharap pa rin pasulong ang camera. Magandang pagsasanay para sa fine pitch control at spatial awareness bago matuto ng mas mahihirap na trick.',
  tips: [
    'Bahagyang i-pull lang ang pitch pabalik — huwag sobra, dahan-dahan lang ang pag-fly backward',
    'I-maintain ang throttle para hindi bumaba ang altitude habang paatras',
    'Gamitin ang mga bagay sa background para masukat ang bilis ng paatras na paggalaw',
  ],
  phases: [
    { t: 0.0, label: 'Hover' },
    { t: 0.5, label: 'Pitch Back' },
    { t: 1.4, label: 'Hold' },
    { t: 3.0, label: 'Return' },
    { t: 3.5, label: 'Level' },
  ],
  keyframes: [
    // Hover — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Ease pitch back to begin backward translation
    { t: 0.5,  throttle: 0.63, yaw:  0.00, pitch: -0.35, roll:  0.00 },
    { t: 0.9,  throttle: 0.65, yaw:  0.00, pitch: -0.45, roll:  0.00 },
    // Sustained backward flight — hold steady
    { t: 1.4,  throttle: 0.65, yaw:  0.00, pitch: -0.45, roll:  0.00 },
    { t: 1.9,  throttle: 0.65, yaw:  0.00, pitch: -0.42, roll:  0.00 },
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch: -0.45, roll:  0.00 },
    { t: 2.6,  throttle: 0.64, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    // Return to level forward hover
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    { t: 3.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
