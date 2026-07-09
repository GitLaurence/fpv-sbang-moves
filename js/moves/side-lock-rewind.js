export default {
  id: 'side-lock-rewind',
  name: 'Side Lock Rewind',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'Pp1Yowe2M-g',
  youtubeStart: 0,
  description: 'I-lock ang yaw papuntang gilid habang nagpapatuloy ang paglipad, tapos i-reverse ang pitch para "i-rewind" pabalik sa orihinal na direksyon. Bahagi ng "rewind" family ng tricks — kailangan ng eksaktong yaw hold bago gawin ang reverse.',
  tips: [
    'I-hold ang yaw nang mahigpit sa side-lock position — huwag hayaang lumutang pabalik sa center',
    'Habang naka-side-lock, panatilihing steady ang pitch para hindi mawala ang linya',
    'Ang rewind pitch ay biglaan at kabaligtad — walang paghinto sa pagitan ng lock at rewind',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Yaw Lock' },
    { t: 1.3, label: 'Side Hold' },
    { t: 2.1, label: 'Rewind' },
    { t: 2.75, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level approach
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Yaw locks sideways relative to travel, pitch carries forward
    { t: 0.5,  throttle: 0.68, yaw:  0.85, pitch:  0.30, roll:  0.00 },
    { t: 0.9,  throttle: 0.72, yaw:  0.85, pitch:  0.35, roll:  0.00 },
    // Side lock hold — flying sideways, nose locked off travel line
    { t: 1.3,  throttle: 0.74, yaw:  0.85, pitch:  0.35, roll:  0.00 },
    { t: 1.75, throttle: 0.74, yaw:  0.85, pitch:  0.35, roll:  0.00 },
    // Begin rewind — yaw eases, pitch reverses
    { t: 2.1,  throttle: 0.70, yaw:  0.40, pitch: -0.20, roll:  0.00 },
    { t: 2.4,  throttle: 0.78, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 2.6,  throttle: 0.72, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Recovery
    { t: 2.85, throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
