export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.4,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Full 360° forward pitch flip, tapos — sa halip na agad bumalik sa normal — dinagdagan ng "delayed" 180° roll bago tumuloy. Ang resulta ay 540° na kumbinasyon ng dalawang axes, mas technical kaysa sa simpleng front flip.',
  tips: [
    'Tapusin muna nang buo ang 360° pitch flip bago ipasok ang roll — huwag pagsabayin',
    'Ang "delay" — maikling sandali na center ang lahat ng sticks — ang nagbibigay ng pangalan dito',
    'Ang 180° roll ay dapat full input din — hindi partial, para makumpleto ang 540°',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Pitch Flip' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.2, label: 'Continue Pitch' },
    { t: 1.6, label: 'Delay' },
    { t: 1.8, label: 'Roll 180' },
    { t: 2.4, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Full 360° forward pitch flip
    { t: 0.3,  throttle: 0.74, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.75, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 1.4,  throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Delay — brief pause with all sticks centered
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Delayed 180° roll
    { t: 1.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.1,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Recovery — settle to cruise
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.9,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
