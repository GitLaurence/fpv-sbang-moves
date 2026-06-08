export default {
  id: 'flip-540',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Pinahabang bersyon ng forward flip — sa halip na 360°, may dagdag na kalahating pag-ikot (540°). Ang "delay" ay ang pansamantalang pag-center ng pitch stick habang baligtad, hahayaang lumutang muna ang quad bago ipagpatuloy ang dagdag na 180° pabalik sa upright.',
  tips: [
    'I-center muna ang pitch stick pagkatapos ng unang 360° — ito ang "delay", panandaliang paghinto ng rotation habang baligtad',
    'Panatilihin ang throttle na sapat habang naka-pause — para hindi biglang bumagsak bago matapos ang extra 180°',
    'Magsanay muna ng malinis na 360° front flip bago dagdagan ng pause at extra rotation',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Flip In' },
    { t: 0.95, label: 'Inverted' },
    { t: 1.5, label: 'Delay' },
    { t: 2.1, label: 'Extra 180°' },
    { t: 2.7, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP IN — push pitch forward, ease throttle to begin rotation
    { t: 0.35, throttle: 0.50, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 0.6,  throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — hold full pitch through the first 360°
    { t: 0.95, throttle: 0.38, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.25, throttle: 0.40, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // DELAY — center the pitch stick, let momentum carry, hold altitude
    { t: 1.5,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // EXTRA 180° — push pitch forward again to finish the 540°
    { t: 2.1,  throttle: 0.42, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.35, throttle: 0.55, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Pull out — level off, punch throttle to recover altitude
    { t: 2.6,  throttle: 0.78, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.85, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 3.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
