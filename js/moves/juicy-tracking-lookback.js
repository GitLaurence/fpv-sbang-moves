export default {
  id: 'juicy-tracking-lookback',
  name: 'Juicy Tracking-Lookback',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.2,
  youtubeId:    'Ugy7drDWFbs',
  youtubeStart: 0,
  description: 'Juicy Flick na pinagsama sa tracking lookback — habang naka-pause inverted sa gitna ng flick, mag-yaw papunta sa likod para bumalik ang camera sa pinagmulang subject, tapos ituloy ang roll exit. Photogenic na combo — pinagsasama ang snap ng juicy flick sa cinematic value ng lookback.',
  tips: [
    'Ang yaw input sa lookback pause ay dapat malinaw — 0.5-0.7 papunta sa likod, hindi buong 360°',
    'Panatilihing matatag ang throttle habang naka-yaw para hindi bumagsak ang altitude sa gitna ng combo',
    'I-time ang lookback yaw sa pinaka-mataas na punto ng flick para pinaka-malinaw ang view pabalik',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Blip' },
    { t: 0.55, label: 'Pitch Snap' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.3,  label: 'Lookback Yaw' },
    { t: 2.2,  label: 'Yaw Out' },
    { t: 2.5,  label: 'Roll Out' },
    { t: 3.2,  label: 'Upright' },
    { t: 3.6,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip — brief punch for entry energy
    { t: 0.35, throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch snap — aggressive forward pitch to flip to inverted, throttle cut
    { t: 0.55, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — begin the lookback yaw hold
    { t: 1.0,  throttle: 0.27, yaw:  0.55, pitch:  0.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.28, yaw:  0.65, pitch:  0.00, roll:  0.00 },
    // LOOKBACK — sustained yaw, camera tracks back toward the origin point
    { t: 1.7,  throttle: 0.30, yaw:  0.65, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.30, yaw:  0.60, pitch:  0.00, roll:  0.00 },
    // Ease yaw back to center
    { t: 2.2,  throttle: 0.32, yaw:  0.20, pitch:  0.00, roll:  0.00 },
    { t: 2.35, throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll to return upright
    { t: 2.5,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.8,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.05, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Upright — throttle punch for a rainbow-arc exit
    { t: 3.2,  throttle: 0.75, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Exit — return to cruise
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 3.9,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
