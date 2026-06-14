export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward pitch flip na may "delay" sa gitna — pagkalipas ng unang 180°, i-freeze ang sticks para magpa-float habang inverted, tapos ituloy ang pitch para makumpleto ang 540° (isa at kalahating loop).',
  tips: [
    'Ang "delay" ay sadya — center lahat ng sticks at hayaan na lumutang ang drone habang inverted',
    'Bumaba ang throttle nang malaki sa delay phase — normal lang, kailangan ng espasyo para sa floaty feel',
    'Ituloy ang parehong direksyon ng pitch pagkatapos ng delay — hindi pabalik, dagdag pa ng 360°',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pitch 180°' },
    { t: 1.1, label: 'Delay' },
    { t: 1.8, label: 'Pitch 360°' },
    { t: 3.0, label: 'Recover' },
    { t: 3.5, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // First 180° — pitch forward into inverted
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — begin the DELAY, sticks centered, throttle drops to float
    { t: 1.1,  throttle: 0.20, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.45, throttle: 0.18, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // End delay — continue pitch in the SAME direction for the remaining 360°
    { t: 1.8,  throttle: 0.35, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Final 180° back to upright — ease pitch out
    { t: 3.0,  throttle: 0.70, yaw:  0.00, pitch:  0.35, roll:  0.00 },
    // Recover — punch throttle to arrest the descent from the long floaty rotation
    { t: 3.25, throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
