export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.6,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward pitch flip na may dramatic "hang time" sa inverted apex bago ipagpatuloy ang rotation — extra style point kumpara sa regular Matty Flip. Ang pagka-hold sa inverted ang gumagawa ng "delayed" effect.',
  tips: [
    'Pitch forward palabas, pero PAUSE sa inverted point — bawasan ang throttle para mag-hang',
    'Habang naka-hang, manatili ang sticks malapit sa center para hindi tumuloy agad ang rotation',
    'Pagkatapos ng hang, ipagpatuloy ang pitch forward at i-roll palabas para makumpleto ang extra 180°',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.0,  label: 'Hang' },
    { t: 1.8,  label: 'Continue' },
    { t: 2.4,  label: 'Roll Out' },
    { t: 3.0,  label: 'Recovery' },
  ],
  keyframes: [
    // Approach — moderate speed and altitude
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward into the flip
    { t: 0.35, throttle: 0.70, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.72, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Reaching inverted apex
    { t: 0.85, throttle: 0.55, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // HANG — cut throttle, sticks near center, drone floats inverted
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 1.4,  throttle: 0.28, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 1.8,  throttle: 0.30, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Continue pitch to complete the forward rotation
    { t: 2.0,  throttle: 0.55, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 2.2,  throttle: 0.70, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Roll out the extra 180° for the full 540°
    { t: 2.4,  throttle: 0.75, yaw:  0.00, pitch:  0.20, roll:  1.00 },
    { t: 2.65, throttle: 0.72, yaw:  0.00, pitch:  0.05, roll:  0.50 },
    // Recovery — settle back to cruise
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
