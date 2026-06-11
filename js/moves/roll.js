export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll papuntang isang direksyon — i-maintain ang throttle habang umiikot, may slight boost sa inverted point para hindi bumagsak. Foundation para sa lahat ng rolling maneuvers.',
  tips: [
    'Full roll input lang — huwag partial, dapat constant rate ang pag-ikot',
    'Maliit na throttle boost habang inverted para mabawi ang lift na nawala',
    'Bumalik agad sa center ang roll stick pagkatapos ng 360°',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Roll In' },
    { t: 0.7, label: 'Inverted' },
    { t: 1.1, label: 'Roll Out' },
    { t: 1.5, label: 'Level' },
  ],
  keyframes: [
    // Level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll in — full deflection
    { t: 0.3,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.65 },
    { t: 0.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — slight throttle boost to hold altitude
    { t: 0.7,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — back to upright
    { t: 1.1,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.45 },
    { t: 1.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 1.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
