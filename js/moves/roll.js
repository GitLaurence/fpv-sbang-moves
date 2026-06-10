export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 2,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Isang buong 360° aileron roll — full roll input hanggang bumalik sa upright. Habang inverted, kailangan ng kaunting dagdag sa throttle para hindi bumagsak ang altitude. Pundasyon ng lahat ng roll-based na tricks.',
  tips: [
    'Full deflection ang roll stick — huwag half-hearted, dapat isang tuloy-tuloy na input',
    'Magdagdag ng kaunting throttle sa gitna ng roll (inverted point) para manatiling flat ang line',
    'I-center agad ang roll stick pagkatapos ng 360° — huwag overshoot',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Roll In' },
    { t: 0.55, label: 'Inverted' },
    { t: 0.95, label: 'Roll Out' },
    { t: 1.3,  label: 'Recovery' },
  ],
  keyframes: [
    // Level entry
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll in — full roll input snap
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted point — small throttle bump to hold the line
    { t: 0.55, throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Continue rotation back toward upright
    { t: 0.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll complete — center stick
    { t: 0.95, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to level flight
    { t: 1.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
