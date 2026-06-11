export default {
  id: 'eject-lookback',
  name: 'Eject Lookback',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.0,
  youtubeId:    'XcGlJZFV7_U',
  youtubeStart: 0,
  description: 'I-cut ang throttle habang mariing pinupull ang pitch pababa — para "ma-eject" ang nose pataas-pabalik. Sundan ng full roll para makita ang pinanggalingan (lookback), tapos mag-inverted yaw spin bago mag-flip pabalik upright.',
  tips: [
    'Ang "eject" ay sabay na throttle chop at hard pitch pull — biglaan, hindi gradual',
    'Ang lookback roll ay full deflection — dapat makita ng camera ang likod habang umiikot',
    'Mag-stabilize muna bago simulan ang inverted yaw spin — huwag agad mag-yaw habang galaw pa ang roll',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Eject' },
    { t: 0.9, label: 'Lookback' },
    { t: 1.4, label: 'Inverted' },
    { t: 1.7, label: 'Yaw Spin' },
    { t: 3.85, label: 'Stop Spin' },
    { t: 4.1, label: 'Flip Up' },
    { t: 4.5, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // EJECT — hard throttle cut + sharp pitch pull, nose snaps up and back
    { t: 0.4,  throttle: 0.10, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.15, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // LOOKBACK ROLL — full roll while easing pitch, camera swings to look back
    { t: 0.9,  throttle: 0.30, yaw:  0.00, pitch: -0.30, roll:  1.00 },
    { t: 1.15, throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // INVERTED — settle, sticks back to center
    { t: 1.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // INVERTED YAW SPIN — elevated throttle to hold altitude
    { t: 1.7,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.7,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center left stick
    { t: 3.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.98, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright — pitch snap, throttle cut
    { t: 4.1,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.32, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Recovery — punch throttle, settle to cruise
    { t: 4.5,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
