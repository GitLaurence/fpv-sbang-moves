export default {
  id: 'backflip',
  name: 'Backflip',
  level: 'beginner',
  difficulty: 2,
  durationSec: 2.2,
  youtubeId:    'YPjSWXFgHEQ',
  youtubeStart: 0,
  description: 'Buong 360° na backward flip gamit ang pitch axis — i-cut ang throttle, i-pull ang pitch stick papuntang likod para umikot ang quad, tapos i-punch ang throttle para ma-catch.',
  tips: [
    'I-cut muna ang throttle bago ibigay ang full pitch input',
    'Panatilihing steady ang pitch stick hanggang makumpleto ang rotation',
    'Ang tamang timing ng throttle punch ang susi sa malinis na catch',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Cut' },
    { t: 0.4, label: 'Flip' },
    { t: 1.1, label: 'Catch' },
    { t: 1.6, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CUT throttle before the flip
    { t: 0.3,  throttle: 0.15, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP — full pitch back, rotation begins
    { t: 0.4,  throttle: 0.12, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.12, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.20, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // CATCH — center pitch, throttle punch to arrest the drop
    { t: 1.1,  throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 1.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
