export default {
  id: 'juicy-tracking-lookback',
  name: 'Juicy Tracking-Lookback',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    'Ugy7drDWFbs',
  youtubeStart: 0,
  description: 'Juicy Flick papuntang inverted, tapos mag-yaw rotation habang nakatutok ang camera sa subject sa likuran — "tina-track" ang subject habang umiikot, bago mag-roll palabas pabalik sa upright.',
  tips: [
    'I-time ang flick papalapit sa subject — dito magiging mas dramatic ang lookback kapag mag-iikot',
    'Modulate ang yaw rate para manatiling nakatutok sa subject — hindi ito constant na full-deflection spin',
    'Magdagdag ng kaunting throttle habang inverted at umiikot para mapanatili ang altitude bago mag-roll out',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Boost' },
    { t: 0.85, label: 'Juicy Flick' },
    { t: 1.35, label: 'Inverted' },
    { t: 1.6, label: 'Lookback Yaw' },
    { t: 3.5, label: 'Stop Yaw' },
    { t: 3.9, label: 'Roll Out' },
    { t: 4.4, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight, tracking toward the subject
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — punch throttle to carry speed into the flick
    { t: 0.5,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — pitch snap to inverted, throttle cut
    { t: 0.85, throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.05, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — re-balance throttle, center pitch
    { t: 1.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dead stop before the lookback
    { t: 1.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // LOOKBACK YAW — rotate to track the subject behind, sustained yaw
    { t: 1.6,  throttle: 0.68, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.70, yaw: -0.85, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.68, yaw: -0.90, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.70, yaw: -0.85, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center, brief hold inverted
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL OUT — half roll back to upright, throttle cut through the roll
    { t: 3.9,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 4.1,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 4.25, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Catch — punch throttle to arrest descent, settle level
    { t: 4.45, throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
