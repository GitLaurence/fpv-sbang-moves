export default {
  id: 'roll',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 2,
  durationSec: 2.2,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° aileron roll sa isang axis lamang. Constant full roll input mula simula hanggang katapusan, may slight throttle boost habang inverted para mapanatili ang altitude. Foundation para sa mas advanced na rolling moves.',
  tips: [
    'Panatilihin ang full roll input — huwag bitawan hangga\'t hindi pa nakukumpleto ang 360°',
    'Magdagdag ng kaunting throttle habang inverted para hindi bumagsak',
    'Magsanay muna ng slow rolls bago mag-full speed roll',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll In' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.5, label: 'Roll Out' },
    { t: 2.0, label: 'Level' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll in — full constant roll input
    { t: 0.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.56, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — slight throttle boost to hold altitude
    { t: 0.9,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.2,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Continue rotation back toward upright
    { t: 1.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.8,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    // Level out
    { t: 2.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
