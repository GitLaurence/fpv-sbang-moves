export default {
  id: 'front-flip-540',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward pitch flip, pero sa sandaling inverted, i-chop ang throttle at i-center ang pitch para sa "floaty" delay (zero-G feel). Pagkatapos ng delay, ituloy ang pitch forward para makumpleto ang 1.5 na pag-ikot (540°) bago bumalik sa level.',
  tips: [
    'Ang delay sa inverted ay ang pinaka-importante — full throttle chop at centered sticks para sa zero-G float',
    'Huwag masyadong matagal ang delay — kalkulahin ayon sa altitude, kung hindi mahuhulog nang sobra',
    'Ituloy ang parehong direksyon ng pitch pagkatapos ng delay para makumpleto ang 540° (hindi mag-reverse)',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Pitch Fwd' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.0, label: 'Delay' },
    { t: 2.0, label: 'Continue' },
    { t: 2.9, label: 'Pull Out' },
    { t: 3.5, label: 'Recovery' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward — begin first rotation
    { t: 0.4,  throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.65, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — chop throttle and center pitch for floaty delay
    { t: 1.0,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Continue pitching forward — second rotation toward 540°
    { t: 2.0,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.50, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Ease out of rotation at 540° — back toward level
    { t: 2.9,  throttle: 0.70, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 3.2,  throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 4.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
