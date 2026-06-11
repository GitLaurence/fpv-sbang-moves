export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll habang nagpapanatili ng level na flight path. Ang pundasyon ng lahat ng flip at inversion trick — dito natututo ang throttle compensation sa knife-edge phase.',
  tips: [
    'Itaas ng kaunti ang throttle kapag knife-edge (90°) — kailangan ng extra lift dahil walang vertical thrust ang props',
    'Full roll input mula start hanggang finish — huwag i-pause sa gitna',
    'Bumalik agad sa center pagkatapos ng 360° — huwag overshoot',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.2, label: 'Roll' },
    { t: 0.7, label: 'Inverted' },
    { t: 1.2, label: 'Knife Edge' },
    { t: 1.7, label: 'Complete' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin full roll
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — slight throttle ease (inverted thrust pulls down)
    { t: 0.7,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Knife-edge — boost throttle to compensate for zero vertical thrust
    { t: 1.2,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Completing the 360° back to upright
    { t: 1.65, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
