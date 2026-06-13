export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pinagsamang somersault (full backward pitch loop) at Matty Flip — agad mag-throttle punch + pitch forward habang inverted galing sa somersault para tuluy-tuloy na maging forward flip. Mahirap i-time ang throttle dahil dalawang loop ito sa isang continuous motion.',
  tips: [
    'Pitch backward full para sa somersault — maintain ang input habang umiikot',
    'Sa sandaling inverted galing somersault, agad lumipat sa pitch forward + throttle punch (Matty Flip) — walang patid',
    'Throttle management ang susi — masyadong maaga o late ang punch ay sisira sa linya',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Somersault' },
    { t: 1.1, label: 'Inverted' },
    { t: 1.3, label: 'Matty Punch' },
    { t: 2.0, label: 'Pull Out' },
    { t: 2.5, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault — full backward pitch loop
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.50, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.9,  throttle: 0.48, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted — transition point, ease pitch toward center before the flip
    { t: 1.1,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Matty Punch — full throttle + pitch forward while inverted
    { t: 1.3,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.5,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.75, throttle: 0.85, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Pull out to level
    { t: 2.0,  throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 2.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — settle to cruise
    { t: 2.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
