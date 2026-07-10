export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.0,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang combo na may dagdag na buong yaw spin habang naka-inverted sa gitna — parang "tornado" ang epekto dahil paikot bago mag-Split-S pababa. Pinaka-technical na bersyon ng Sbang family.',
  tips: [
    'Panatilihing constant ang throttle habang umiikot ang yaw inverted — hindi ito dead stop, dapat may motion',
    'Bilangin ang buong 360° bago mag-Split-S pull — huwag mag-eksit nang maaga',
    'Kailangan ng mas mataas na altitude margin dahil mahaba ang combo bago makabalik sa level',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Boost' },
    { t: 0.8,  label: 'Roll Inv' },
    { t: 1.2,  label: 'Tornado' },
    { t: 3.4,  label: 'Stop Yaw' },
    { t: 3.7,  label: 'Pull S' },
    { t: 4.8,  label: 'Recover' },
    { t: 5.0,  label: 'Juicy' },
    { t: 5.45, label: 'Roll Out' },
    { t: 6.0,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — moderate forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, slight pitch back for nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.22, roll:  0.00 },
    { t: 0.62, throttle: 1.00, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // TORNADO — full yaw spin while inverted, elevated throttle holds altitude
    { t: 1.2,  throttle: 0.66, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — ease out of the spin
    { t: 3.4,  throttle: 0.60, yaw:  0.30, pitch:  0.00, roll:  0.00 },
    { t: 3.55, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S PULL — arc through the bottom half-loop
    { t: 3.7,  throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.1,  throttle: 0.55, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 4.5,  throttle: 0.70, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Recover level
    { t: 4.8,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap to inverted
    { t: 5.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.15, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.32, throttle: 0.26, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 5.45, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 5.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 5.75, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 6.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
