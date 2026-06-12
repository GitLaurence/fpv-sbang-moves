export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 2.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na forward pitch flip na agad sinusundan ng full roll sa parehong direksyon ng momentum — parang spinning kick, kaya napangalanan sa martial arts icon. Mahalaga ang seamless transition mula flip papuntang roll.',
  tips: [
    'I-push ang pitch forward para sa flip, tapos agad isunod ang roll bago pa man matapos ang flip',
    'Panatilihing tuloy-tuloy ang throttle — huwag bibitawan, ito ang nag-iikot sa combo',
    'Mag-practice muna ng hiwalay na pitch flip at roll bago pagsamahin sa isang fluid motion',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Pitch Flip' },
    { t: 0.8, label: 'Roll In' },
    { t: 1.4, label: 'Roll Out' },
    { t: 2.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Forward pitch flip begins
    { t: 0.3,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Blend straight into a full roll — flip carries into spin
    { t: 0.8,  throttle: 0.40, yaw:  0.00, pitch:  0.50, roll:  1.00 },
    { t: 1.05, throttle: 0.45, yaw:  0.00, pitch:  0.20, roll:  1.00 },
    // Roll completes, easing pitch back to level
    { t: 1.4,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
