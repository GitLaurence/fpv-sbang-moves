export default {
  id: 'barani',
  name: 'Barani',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Diagonal na flip-twist — sabay na pitch at roll input papuntang isang sulok, hindi purong forward flip o purong roll. Isang mabilis, magkasabay na rotation sa dalawang axis na nagreresulta sa diagonal na "barani" motion, hiram sa terminong gymnastics.',
  tips: [
    'I-push nang sabay ang pitch at roll stick papuntang parehong direksyon — sabay dapat, hindi sunod-sunod',
    'Panatilihing pantay ang ratio ng pitch at roll input para makuha ang tamang 45° diagonal axis',
    'Mag-throttle burst sa gitna ng rotation dahil dalawang axis ang gumagalaw nang sabay — mas mabilis mawala ang lift',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Diagonal Snap' },
    { t: 1.15, label: 'Cross Point' },
    { t: 1.9, label: 'Roll Out' },
    { t: 2.4, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal snap — pitch and roll committed together
    { t: 0.35, throttle: 0.55, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    { t: 0.65, throttle: 0.50, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    // Passing the diagonal cross-point — throttle burst to hold altitude
    { t: 1.15, throttle: 0.78, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    { t: 1.5,  throttle: 0.68, yaw:  0.00, pitch:  0.70, roll:  0.70 },
    // Roll/pitch easing out as rotation completes
    { t: 1.9,  throttle: 0.65, yaw:  0.00, pitch:  0.25, roll:  0.25 },
    { t: 2.15, throttle: 0.63, yaw:  0.00, pitch:  0.05, roll:  0.05 },
    // Recovery
    { t: 2.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
