export default {
  id: 'half-matty-flip',
  name: 'Half Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.5,
  youtubeId:    'yyvGYJBwvcA',
  youtubeStart: 0,
  description: 'Forward pitch flip na titigil sa inverted position — ang unang kalahati ng Matty Flip. I-push ang pitch para mag-flip pasulong, i-center ang sticks kapag nasa inverted, tapos i-roll palabas pabalik sa upright. Tinatawag ding "Reverse Split-S".',
  tips: [
    'PUSH pitch forward (hindi pull back) — forward flip ito, hindi backflip',
    'I-cut ang throttle habang nagpi-pitch para kontrolin ang bilis ng flip at maiwasan ang pag-climb',
    'I-center ang sticks agad kapag nasa inverted na — huwag hayaang mag-continue ang rotation',
    'Mag-roll out sa tamang oryentasyon para hindi mawala ang heading',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.8,  label: 'Inverted' },
    { t: 1.0,  label: 'Pause' },
    { t: 1.3,  label: 'Roll Out' },
    { t: 1.9,  label: 'Recovery' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Push pitch forward — begin forward flip, CUT throttle
    { t: 0.35, throttle: 0.55, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 0.55, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted — ease pitch to stop rotation at 180°
    { t: 0.75, throttle: 0.25, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Fully inverted — center all sticks, brief pause (the "look")
    { t: 0.9,  throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll out 180° to return upright
    { t: 1.3,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.55, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.65 },
    { t: 1.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.15 },
    // Recovery
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
