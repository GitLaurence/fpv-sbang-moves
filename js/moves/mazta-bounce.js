export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Mabilis na pag-dive papunta sa ibaba, tapos biglaang throttle punch na "tumatalbog" papataas — parang bola na tumalbog sa lapag. Mahalaga ang timing ng punch para hindi masyadong tumagilid pataas.',
  tips: [
    'I-commit nang husto sa dive — kapag kulang ang speed, mahina ang bounce',
    'Punch ang throttle bago pa man umabot sa pinakababang punto — may delay ang pitch response',
    'Pitch slightly back habang nag-bounce para mai-redirect ang momentum pataas',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Dive' },
    { t: 1.0, label: 'Approach' },
    { t: 1.2, label: 'Bounce Punch' },
    { t: 1.6, label: 'Rebound' },
    { t: 2.2, label: 'Climb' },
    { t: 3.0, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Commit to the dive — cut throttle, pitch forward
    { t: 0.3,  throttle: 0.30, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    { t: 0.7,  throttle: 0.25, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    { t: 1.0,  throttle: 0.22, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    // BOUNCE PUNCH — full throttle, pitch back to redirect upward
    { t: 1.2,  throttle: 1.00, yaw:  0.00, pitch: -0.50, roll:  0.00 },
    { t: 1.4,  throttle: 1.00, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    // Rebound — climbing out of the bounce
    { t: 1.6,  throttle: 0.85, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    { t: 2.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle to cruise
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
