export default {
  id: 'laser-flip',
  name: 'Laser Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 2.0,
  youtubeId:    'CyS0C_DJO9o',
  youtubeStart: 0,
  description: 'Sabay na full pitch at full roll input sa parehong sandali — parang Juicy Flick at Roll na pinagsama sa iisang mabilis, diagonal na galaw. Mas mabilis at mas "tight" kaysa gawin ang flip tapos roll nang magkahiwalay.',
  tips: [
    'Sabay na i-punch ang pitch at roll — hindi sunud-sunod, dapat parehong oras ang input',
    'Panatilihing naka-full deflection ang roll habang unti-unting bumabalik ang pitch — dito nagmumula ang "laser" na trajectory',
    'Mabilis na trick ito — huwag mag-atubili sa commit, kasing bilis ng isang snap roll dapat ang buong rotation',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Flip+Roll' },
    { t: 0.75, label: 'Diagonal' },
    { t: 1.3, label: 'Unwind' },
    { t: 1.8, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Simultaneous pitch + roll snap — throttle cut
    { t: 0.3,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.5,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Diagonal rotation continues — pitch begins easing while roll stays committed
    { t: 0.75, throttle: 0.35, yaw:  0.00, pitch:  0.60, roll:  1.00 },
    { t: 1.0,  throttle: 0.45, yaw:  0.00, pitch:  0.20, roll:  0.90 },
    // Unwind roll back to upright
    { t: 1.3,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 1.55, throttle: 0.68, yaw:  0.00, pitch:  0.05, roll:  0.05 },
    // Exit — recover to cruise
    { t: 1.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
