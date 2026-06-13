export default {
  id: 'pendulum',
  name: 'Pendulum',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    'l7F1a68G9r8',
  youtubeStart: 0,
  description: 'Alternating pitch swings na parang oras-orasan — pumapunta ang quad pabalik-balik habang dumadagdag ang amplitude, may throttle chop sa tuktok ng bawat swing para sa "weightless" na pakiramdam.',
  tips: [
    'Mag-chop ng throttle sa bandang tuktok ng bawat swing para makuha ang floaty na sensation',
    'Patuloy na dagdagan ang pitch input sa bawat swing — incremental ang build-up ng amplitude',
    'Bantayan ang exit timing — kailangang i-dampen ang oscillation bago ang landing o sumunod na trick',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Swing 1' },
    { t: 1.5, label: 'Peak 1' },
    { t: 2.2, label: 'Swing 2' },
    { t: 3.2, label: 'Peak 2' },
    { t: 4.0, label: 'Settle' },
    { t: 4.6, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Swing 1 — pitch back hard with throttle chop to start the arc
    { t: 0.5,  throttle: 0.30, yaw:  0.00, pitch: -0.80, roll:  0.00 },
    { t: 0.9,  throttle: 0.25, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    // Peak 1 — momentary weightlessness at the top
    { t: 1.5,  throttle: 0.20, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 1.8,  throttle: 0.45, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    // Swing 2 — opposite direction with throttle punch through the bottom
    { t: 2.2,  throttle: 0.85, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 2.7,  throttle: 0.70, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Peak 2 — top of second swing, chop again
    { t: 3.2,  throttle: 0.25, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 3.5,  throttle: 0.30, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    // Settle — dampen oscillation
    { t: 4.0,  throttle: 0.60, yaw:  0.00, pitch: -0.05, roll:  0.00 },
    { t: 4.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level
    { t: 4.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
