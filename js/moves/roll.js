export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° aileron roll — patuloy na full roll input habang bahagyang binabawasan ang throttle sa inverted na bahagi para mapanatili ang altitude.',
  tips: [
    'Panatilihin ang roll stick sa full deflection hanggang makumpleto ang buong rotation',
    'Bahagyang BAWAS ng throttle habang inverted — maiiwasan ang biglaang pagtaas',
    'I-center ang stick agad pagkatapos ng 360° — huwag labis',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.25, label: 'Roll In' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.5,  label: 'Roll Out' },
    { t: 1.8,  label: 'Level' },
  ],
  keyframes: [
    // Entry — steady cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin full roll, ease throttle slightly
    { t: 0.25, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — bottom of throttle dip, roll continues
    { t: 0.9,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Ramp throttle back up as rotation completes
    { t: 1.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Finish rotation, ease stick to center
    { t: 1.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
