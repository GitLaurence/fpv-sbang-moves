export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.2,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip papunta sa inverted, tapos "i-delay" — mag-yaw spin habang inverted para sa extra 180° (kaya 540° total), tapos "rewind" pabalik gamit ang reverse pitch snap para bumalik agad sa upright.',
  tips: [
    'Pitch forward para sa unang flip — parang Matty Flip ang umpisa',
    'Habang inverted, full yaw spin ang gumagawa ng "delay" — patatagin ang throttle para hindi bumagsak',
    'Ang rewind ay reverse pitch direction — kabaligtaran ng entry flip, kaya mabilis na bumalik sa upright',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.1, label: 'Delay Yaw' },
    { t: 2.7, label: 'Stop Yaw' },
    { t: 2.85, label: 'Rewind' },
    { t: 3.3, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward flip to inverted, throttle cut
    { t: 0.35, throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — re-establish hover throttle
    { t: 0.9,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DELAY — full yaw spin while inverted, extra 180° for the 540° total
    { t: 1.1,  throttle: 0.66, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.1,  throttle: 0.66, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.68, yaw:  0.45, pitch:  0.00, roll:  0.00 },
    // Stop yaw, center
    { t: 2.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND — rapid reverse pitch snap, flips back to upright quickly
    { t: 2.85, throttle: 0.30, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 3.05, throttle: 0.28, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Recover upright — throttle punch
    { t: 3.3,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.9,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
