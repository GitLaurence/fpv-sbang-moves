export default {
  id: 'barani',
  name: 'Barani',
  level: 'advanced',
  difficulty: 3,
  durationSec: 2.5,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Diagonal flip — sabay na pitch at roll input para paikutin ang drone sa diagonal axis. Mabilis na directional change, parang half-flip patagilid.',
  tips: [
    'Sabayan ang pitch at roll input — parehong magnitude para sa malinis na 45° diagonal axis',
    'Chop throttle bago ang flip, tapos i-punch pabalik habang papasok sa recovery',
    'Manatiling relaxed ang grip — ang sudden combined input ay madaling mag-overcorrect',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Diagonal Flip' },
    { t: 0.7, label: 'Inverted' },
    { t: 1.1, label: 'Recover' },
    { t: 1.5, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal flip — combined pitch + roll, throttle chop
    { t: 0.3,  throttle: 0.30, yaw:  0.00, pitch: -0.70, roll:  0.70 },
    { t: 0.5,  throttle: 0.28, yaw:  0.00, pitch: -0.85, roll:  0.85 },
    // Inverted, mid-rotation
    { t: 0.7,  throttle: 0.30, yaw:  0.00, pitch: -0.85, roll:  0.85 },
    // Continue rotation toward upright
    { t: 0.9,  throttle: 0.40, yaw:  0.00, pitch: -0.50, roll:  0.50 },
    // Recover — ease out, throttle back up
    { t: 1.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level flight
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
