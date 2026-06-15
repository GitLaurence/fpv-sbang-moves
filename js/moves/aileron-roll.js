export default {
  id: 'aileron-roll',
  name: 'Aileron Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'QK_2QyXtT7E',
  youtubeStart: 0,
  description: 'Buong 360° roll habang patuloy ang forward flight. Ang pinakaunang trick na dapat matutunan — simpleng full roll input na walang pitch o yaw.',
  tips: [
    'Panatilihin ang throttle level — huwag mag-cut, dahil isang axis lang ang ginagalaw',
    'Full deflection ang roll stick, sustained hanggang makumpleto ang 360°',
    'Mag-practice sa mataas na altitude muna bago sa malapit sa lupa',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll' },
    { t: 1.5, label: 'Complete' },
    { t: 1.8, label: 'Level' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0, throttle: 0.65, yaw: 0.00, pitch: 0.00, roll: 0.00 },
    { t: 0.3, throttle: 0.65, yaw: 0.00, pitch: 0.00, roll: 0.00 },
    // Full roll, sustained input through the entire 360°
    { t: 0.5, throttle: 0.65, yaw: 0.00, pitch: 0.00, roll: 1.00 },
    { t: 0.9, throttle: 0.65, yaw: 0.00, pitch: 0.00, roll: 1.00 },
    { t: 1.3, throttle: 0.65, yaw: 0.00, pitch: 0.00, roll: 1.00 },
    // Complete the roll — back to upright
    { t: 1.5, throttle: 0.65, yaw: 0.00, pitch: 0.00, roll: 0.00 },
    // Level exit
    { t: 2.0, throttle: 0.65, yaw: 0.00, pitch: 0.00, roll: 0.00 },
  ],
};
