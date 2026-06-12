export default {
  id: 'front-flip-540',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.4,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward flip na may dagdag na half rotation (540° sa kabuuan, hindi lang 360°) — pagkatapos ng unang pag-ikot, "i-delay" muna ang inverted bago ipagpatuloy ang pitch para makumpleto ang extra 180°.',
  tips: [
    'Mag-master muna ng regular Matty Flip (360°) bago subukan ang 540°',
    'Sa "delay" phase, panatilihing steady ang pitch at throttle habang inverted — huwag agad pull out',
    'Kailangan ng mas malaking altitude margin dahil mas matagal ang rotation',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.0, label: 'Punch' },
    { t: 1.5, label: 'Delay' },
    { t: 2.2, label: 'Continue' },
    { t: 2.8, label: 'Pull Out' },
  ],
  keyframes: [
    // Approach — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward — begin the flip
    { t: 0.3,  throttle: 0.74, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.6,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // First inverted point — ~180°
    { t: 0.9,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — throttle through the rotation
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Delay — hold full pitch and high throttle through ~360°, no early pull
    { t: 1.5,  throttle: 0.92, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.85, throttle: 0.88, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Continue rotation toward the extra 180° (total 540°)
    { t: 2.2,  throttle: 0.83, yaw:  0.00, pitch:  0.75, roll:  0.00 },
    // Pull out — ease pitch toward level
    { t: 2.5,  throttle: 0.76, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 2.8,  throttle: 0.68, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.1,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
