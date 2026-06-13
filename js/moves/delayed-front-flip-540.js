export default {
  id: 'delayed-front-flip-540',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward flip papuntang inverted, tapos "dead stop" — habang inverted, gawin ang 540° (isa at kalahating) na yaw spin bago ipagpatuloy ang flip pabalik sa level. Ang "delay" sa gitna ng flip ang pinaka-mahirap na bahagi.',
  tips: [
    'Pitch forward muna para mapunta sa inverted, tapos dead stop — bumalik ang stick sa center',
    'Habang inverted, hold ang yaw input para sa 540° spin — huwag magmadali, bilangin ang rotation',
    'Pagkatapos ng yaw spin, ituloy lang ang pitch input para makumpleto ang flip pabalik sa level',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Pitch Fwd' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.05, label: 'Dead Stop' },
    { t: 1.3,  label: '540 Yaw' },
    { t: 2.55, label: 'Yaw Stop' },
    { t: 2.75, label: 'Pitch Recover' },
    { t: 3.6,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward to flip toward inverted
    { t: 0.4,  throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.65, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — flip momentum carries through
    { t: 0.9,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DEAD STOP — pitch back to center while inverted
    { t: 1.05, throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DELAY — 540° yaw spin while inverted
    { t: 1.3,  throttle: 0.45, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.45, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.45, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Yaw spin complete — center the stick
    { t: 2.55, throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch to complete the flip back to upright
    { t: 2.75, throttle: 0.55, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 3.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
