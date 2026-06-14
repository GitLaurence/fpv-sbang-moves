export default {
  id: 'corkscrew',
  name: 'Corkscrew',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ti8pGuEvwbM',
  youtubeStart: 0,
  description: 'Freestyle version ng corkscrew — patuloy na full roll habang nagpapasulong ang drone na may sustained forward pitch, na lumilikha ng spiral na "tubo" sa hangin.',
  tips: [
    'Panatilihin ang forward pitch na steady — hindi ito loop, kaya hindi dapat tumaas o bumaba nang sobra',
    'Hawakan ang roll stick sa full deflection nang matagal para sa tuloy-tuloy na spin, hindi paulit-ulit na snap',
    'Mag-taper ng throttle nang bahagya sa gitna ng spiral para hindi tumaas ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll In' },
    { t: 0.8, label: 'Spiral' },
    { t: 3.0, label: 'Roll Out' },
    { t: 3.5, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight, build speed
    { t: 0.0,  throttle: 0.70, yaw: 0.00, pitch: 0.35, roll: 0.00 },
    { t: 0.2,  throttle: 0.72, yaw: 0.00, pitch: 0.35, roll: 0.00 },
    // Roll in — start full roll while maintaining forward pitch
    { t: 0.4,  throttle: 0.72, yaw: 0.00, pitch: 0.38, roll: 1.00 },
    { t: 0.6,  throttle: 0.70, yaw: 0.00, pitch: 0.40, roll: 1.00 },
    // Spiral — sustained full roll + forward pitch, slight throttle taper
    { t: 0.8,  throttle: 0.68, yaw: 0.00, pitch: 0.40, roll: 1.00 },
    { t: 1.4,  throttle: 0.64, yaw: 0.00, pitch: 0.40, roll: 1.00 },
    { t: 2.0,  throttle: 0.64, yaw: 0.00, pitch: 0.40, roll: 1.00 },
    { t: 2.6,  throttle: 0.66, yaw: 0.00, pitch: 0.38, roll: 1.00 },
    // Roll out — ease roll back to level
    { t: 3.0,  throttle: 0.68, yaw: 0.00, pitch: 0.30, roll: 0.55 },
    { t: 3.25, throttle: 0.68, yaw: 0.00, pitch: 0.15, roll: 0.20 },
    // Exit — level cruise
    { t: 3.5,  throttle: 0.65, yaw: 0.00, pitch: 0.00, roll: 0.00 },
    { t: 4.0,  throttle: 0.64, yaw: 0.00, pitch: 0.00, roll: 0.00 },
  ],
};
