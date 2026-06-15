export default {
  id: 'front-flip',
  name: 'Front Flip',
  level: 'beginner',
  difficulty: 2,
  durationSec: 2.2,
  youtubeId:    'YPjSWXFgHEQ',
  youtubeStart: 0,
  description: 'Buong 360° forward pitch flip — patuloy na full pitch-forward input habang bahagyang binabawasan ang throttle sa inverted na bahagi, tapos i-recover pabalik sa level.',
  tips: [
    'Panatilihin ang pitch stick sa full forward hanggang makumpleto ang buong flip',
    'Bahagyang BAWAS ng throttle habang inverted para hindi tumaas nang sobra',
    'I-center ang pitch stick agad pagkatapos ng 360° para makabalik sa level flight',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.25, label: 'Pitch In' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.6,  label: 'Pitch Out' },
    { t: 1.9,  label: 'Level' },
  ],
  keyframes: [
    // Entry — steady cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Push full pitch forward to begin flip, ease throttle slightly
    { t: 0.25, throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — bottom of throttle dip, pitch continues
    { t: 1.0,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Ramp throttle back up as rotation completes
    { t: 1.6,  throttle: 0.62, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Finish rotation, ease stick to center
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 1.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
