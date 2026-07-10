export default {
  id: 'roll',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.2,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Isang buong 360° roll gamit lang ang roll stick — patuloy at pantay ang bilis mula umpisa hanggang dulo. Ang pundasyon ng lahat ng flips at rolls sa freestyle.',
  tips: [
    'Full deflection ang roll input pero PANTAY ang bilis sa buong 360° — iwasan ang "potato chip" wobble na dulot ng hindi pantay na roll rate',
    'Maliit na throttle boost habang patagilid/inverted para bawiin ang lift na nawawala sa mga anggulong iyon',
    'Panatilihin ang pitch at yaw sa center — ang roll lang dapat gumagalaw',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Roll Start' },
    { t: 0.55, label: '¼ Roll' },
    { t: 0.85, label: '½ Roll' },
    { t: 1.15, label: '¾ Roll' },
    { t: 1.4,  label: 'Complete' },
    { t: 1.7,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll start — full deflection, constant rate
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.55, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — small throttle boost to hold altitude through the top
    { t: 0.85, throttle: 0.74, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.15, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Complete — ease out of the roll
    { t: 1.4,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.20 },
    { t: 1.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — resume level flight
    { t: 1.7,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
