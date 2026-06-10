export default {
  id: 'slingshot',
  name: 'Slingshot',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    'Z5cfPV4aPvM',
  youtubeStart: 0,
  description: 'Mag-pitch back nang husto para parang hinihila pabalik ang quad — i-hold ang braking, tapos i-release kasabay ng full throttle punch papasok pasulong. Parang tirador — mas mahabang "stretch", mas malakas ang shot.',
  tips: [
    'Hatakin ang pitch back nang malakas at i-hold — huwag biglain ang release',
    'Kasabay ng pag-release ng pitch, i-punch ang throttle papuntang full',
    'Mag-aim sa target bago pa mag-release — sa "shot" mismo, bilis na ang dapat asikasuhin',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Back' },
    { t: 0.7, label: 'Hold/Stretch' },
    { t: 1.2, label: 'Release' },
    { t: 1.6, label: 'Shot' },
    { t: 2.4, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — cruise toward target
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH BACK — hard brake, nose up
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.5,  throttle: 0.50, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // HOLD/STRETCH — keep braking, throttle eases to hold position
    { t: 0.7,  throttle: 0.48, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.48, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // RELEASE — snap pitch to center, throttle starts climbing
    { t: 1.2,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SHOT — full throttle punch forward through the gap
    { t: 1.6,  throttle: 1.00, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 1.9,  throttle: 1.00, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Recovery — ease back to cruise
    { t: 2.2,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
