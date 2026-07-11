export default {
  id: 'barrel-roll',
  name: 'Barrel Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Isang malinis at maayos na 360° roll — full roll input habang pinapanatili ang throttle at pitch na steady sa buong pag-ikot. Pundasyon ng lahat ng flip/roll tricks — dito nagsisimula ang roll axis control.',
  tips: [
    'Full roll deflection sa buong roll — huwag mag-atubili sa gitna, dapat isang tuloy-tuloy na galaw',
    'Panatilihing steady ang throttle sa buong roll — walang kailangang chop o punch',
    'Magsanay munang mabagal (0.5x speed) bago subukan sa full speed para makuha ang timing',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Roll Start' },
    { t: 0.9,  label: 'Inverted' },
    { t: 1.45, label: '¾ Roll' },
    { t: 1.85, label: 'Roll Out' },
    { t: 2.5,  label: 'Complete' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap to full roll — held constant throughout the whole rotation
    { t: 0.35, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted midpoint — slight throttle bump to hold altitude
    { t: 0.9,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Completing the rotation
    { t: 1.45, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Center the stick as the 360° completes
    { t: 1.85, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle back to cruise
    { t: 2.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
