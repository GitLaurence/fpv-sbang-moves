export default {
  id: 'lookback',
  name: 'Lookback',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 3.0,
  youtubeId:    '0QAK68uip8E',
  youtubeStart: 0,
  description: 'Biglaang 180° yaw habang lumilipad — ang drone ay tumutuwid at mabilis na lumiliko para "makita" ang pinagmulang direksyon. Isang iconic FPV move na nagpapakita ng kontrol at estilo.',
  tips: [
    'Bahagyang i-cut ang throttle sa yaw turn para mas makontrol ang altitude',
    'Full yaw input para sa mabilis at malinis na lookback — huwag mag-atubili',
    'Mag-coordinate ng kaunting pitch para manatiling level sa buong turn',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Yaw Turn' },
    { t: 1.2, label: 'Looking Back' },
    { t: 1.6, label: 'Settle' },
    { t: 2.0, label: 'Exit' },
  ],
  keyframes: [
    // Forward flight approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Begin yaw turn — cut throttle slightly, full yaw input
    { t: 0.5,  throttle: 0.55, yaw: -1.00, pitch: -0.08, roll:  0.00 },
    { t: 0.8,  throttle: 0.55, yaw: -1.00, pitch: -0.05, roll:  0.00 },
    { t: 1.1,  throttle: 0.58, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    // 180° achieved — facing back, ease yaw out
    { t: 1.3,  throttle: 0.65, yaw: -0.25, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle — briefly looking back at origin
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — resume flight in new direction
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
  ],
};
