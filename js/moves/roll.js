export default {
  id: 'roll',
  name: 'Aileron Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll gamit ang roll stick lang — ang drone ay umiikot sa kanyang sariling axis habang patuloy ang forward flight. Foundation ng halos lahat ng acro maneuvers.',
  tips: [
    'Full roll deflection sa isang direksyon — panatilihin hanggang makumpleto ang 360°',
    'Konting throttle compensation habang inverted (gitna ng roll) para hindi bumagsak',
    'I-practice sa parehong direksyon (kaliwa at kanan) hanggang pareho ang bilis',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Begin Roll' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.7, label: 'Complete' },
    { t: 2.0, label: 'Exit' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin full roll
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.65, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — slight throttle bump to hold altitude
    { t: 1.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.35, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Completing rotation back to upright
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level flight
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
