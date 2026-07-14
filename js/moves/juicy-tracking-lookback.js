export default {
  id: 'juicy-tracking-lookback',
  name: 'Juicy Tracking-Lookback',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'Ugy7drDWFbs',
  youtubeStart: 0,
  description: 'Juicy Flick na pinagsama sa tracking lookback — pagkatapos mag-flick papuntang inverted, mag-hover-track habang baligtad gamit ang dahan-dahang yaw para subaybayan ang subjek, bago mag-roll pabalik. Mas mahaba ang inverted hold kaysa regular Juicy Flick.',
  tips: [
    'Mas matagal ang inverted hold dito kaysa regular na Juicy Flick — dito nangyayari ang tracking',
    'Dahan-dahan ang yaw habang naka-inverted para subaybayan ang subjek — huwag mag-snap',
    'Mag-roll out lang pagkatapos makumpleto ang buong tracking pan',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Blip' },
    { t: 0.55, label: 'Pitch Snap' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.4,  label: 'Track Yaw' },
    { t: 2.6,  label: 'Track End' },
    { t: 2.9,  label: 'Roll Out' },
    { t: 3.5,  label: 'Upright' },
    { t: 4.0,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip — brief punch for entry energy
    { t: 0.35, throttle: 0.86, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch snap — flip to inverted, throttle cut
    { t: 0.55, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — settle before tracking
    { t: 1.0,  throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TRACKING YAW — slow sustained yaw while inverted, holding altitude
    { t: 1.4,  throttle: 0.34, yaw:  0.45, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.36, yaw:  0.45, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.35, yaw:  0.45, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.32, yaw:  0.15, pitch:  0.00, roll:  0.00 },
    // Roll out back to upright
    { t: 2.9,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.15, throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.35, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 3.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit
    { t: 3.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
