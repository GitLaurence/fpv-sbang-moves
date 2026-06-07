export default {
  id: 'roll',
  name: 'Aileron Roll',
  level: 'beginner',
  difficulty: 2,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll sa roll axis habang pinapanatili ang heading, altitude, at forward momentum. Pinakapangunahing acro move — lahat ng ibang combo ay nagsisimula dito.',
  tips: [
    'I-commit ang full roll input — huwag ihinto sa gitna, dapat tuluy-tuloy hanggang makabalik sa upright',
    'Magdagdag ng kaunting throttle habang papunta sa inverted portion para hindi bumagsak ang altitude',
    'Magsanay munang mabagal at smooth bago bilisan — priority ang clean na 360° kaysa bilis',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll In' },
    { t: 0.7, label: 'Knife Edge' },
    { t: 1.1, label: 'Inverted' },
    { t: 1.5, label: 'Knife Edge' },
    { t: 1.9, label: 'Roll Out' },
    { t: 2.5, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Commit to full roll input — held through the entire rotation
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Quarter roll — knife edge orientation, slight throttle build
    { t: 0.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Half roll — inverted, needs the most throttle to hold the line
    { t: 1.1,  throttle: 0.74, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.3,  throttle: 0.74, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Three-quarter roll — knife edge again, throttle easing back down
    { t: 1.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Completing 360° — back to upright, release roll input
    { t: 1.9,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle back to cruise
    { t: 2.2,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
