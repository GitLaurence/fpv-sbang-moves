export default {
  id: 'delayed-540-front-flip',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.8,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward pitch flip na may sadyang "delay" — pahinto sa gitna ng rotation bago ituloy ang karagdagang 180° (kaya 540° kabuuan sa halip na regular na 360°). Kailangan ng eksaktong throttle timing sa dead point ng delay.',
  tips: [
    'Ang "delay" ay sadyang paghinto — huwag magmadali dumaan dito',
    'Ang karagdagang 180° ay kailangan ng bagong pitch push, hindi lang momentum',
    'Kritikal ang throttle management — masyadong maaga ang punch, matatapos agad sa 360° lang',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.9,  label: 'Approach Inv' },
    { t: 1.15, label: 'Delay' },
    { t: 1.5,  label: 'Extra Push' },
    { t: 2.1,  label: '540 Complete' },
    { t: 2.6,  label: 'Pull Out' },
    { t: 3.2,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward — begin the flip
    { t: 0.35, throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.90, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — throttle chop, pitch nearly released, rotation deliberately slows/pauses
    { t: 1.15, throttle: 0.42, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 1.4,  throttle: 0.40, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // EXTRA PUSH — fresh pitch input resumes rotation toward the extra 180°
    { t: 1.5,  throttle: 0.55, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 1.8,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // 540° COMPLETE — throttle punch to close out the extra half-rotation
    { t: 2.1,  throttle: 0.95, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.35, throttle: 0.80, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Pull out to level
    { t: 2.6,  throttle: 0.72, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
