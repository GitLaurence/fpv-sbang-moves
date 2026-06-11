export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na pagkakasunod-sunod ng forward flip pagkatapos ng snap roll — parang martial arts kick na rotation. Dalawang axis ang ginagamit nang magkasunod, kaya kailangan ng mabilis na "stick discipline" para hindi malito ang orientation.',
  tips: [
    'Una, gawin ang flip (pitch) hanggang inverted bago pa man simulan ang roll',
    'Mag-snap roll lang pagkatapos lumampas sa inverted — huwag pagsabayin ang dalawang axis',
    'Centerin agad ang lahat ng sticks pagkatapos ng roll para hindi mag-overshoot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Flip' },
    { t: 0.7, label: 'Inverted' },
    { t: 0.9, label: 'Snap Roll' },
    { t: 1.3, label: 'Roll Out' },
    { t: 1.7, label: 'Recover' },
    { t: 2.2, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip — pitch snap to inverted, throttle cut
    { t: 0.3,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — re-establish throttle, center pitch
    { t: 0.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll — full roll input, throttle dips
    { t: 0.9,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.1,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out toward upright
    { t: 1.3,  throttle: 0.50, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 1.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover and settle
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
