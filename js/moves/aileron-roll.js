export default {
  id: 'aileron-roll',
  name: 'Aileron Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Isang malinis na 360° roll gamit ang roll stick habang pantay ang throttle. Pundasyon ng lahat ng roll-based tricks — kapag smooth at center ang exit, ready ka na para sa mas mahirap na combos.',
  tips: [
    'Steady at full deflection ang roll stick — huwag mag-pause sa gitna ng roll',
    'Bahagyang i-punch ang throttle sa simula ng roll para mabawi ang lift na nawawala habang naka-inverted',
    'Bumalik agad sa center ang roll stick pagkatapos ng buong 360° — wag lumagpas',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Start' },
    { t: 0.7, label: 'Inverted' },
    { t: 1.3, label: 'Roll Out' },
    { t: 1.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll start — full deflection with a small throttle punch to hold altitude
    { t: 0.4,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — halfway through the roll, hold roll stick
    { t: 0.7,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — completing the 360°, ease throttle back down
    { t: 1.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
