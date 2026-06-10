export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Paulit-ulit na throttle cut at catch — parang tumatalbog ang drone sa hangin. Bawat "bounce" ay mas mababa kaysa sa nauna, hanggang sa huling catch papuntang level flight.',
  tips: [
    'Bawat bounce ay mas maikli at mas mababa ang amplitude kaysa sa una — gradual na pag-settle',
    'Sabayan ng slight pitch input ang bawat catch para hindi tuluyang mawalan ng forward momentum',
    'Timing ang susi — masyadong mabilis na catch ay mawawala ang "bounce" feel, masyadong bagal naman ay malalaglag',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Cut 1' },
    { t: 1.0, label: 'Catch 1' },
    { t: 1.6, label: 'Cut 2' },
    { t: 2.2, label: 'Catch 2' },
    { t: 2.8, label: 'Cut 3' },
    { t: 3.3, label: 'Catch 3' },
    { t: 4.0, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — full throttle cut, then big catch
    { t: 0.4,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.05, yaw:  0.00, pitch:  0.02, roll:  0.00 },
    { t: 1.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 2 — slightly smaller cut and catch
    { t: 1.6,  throttle: 0.12, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.85, throttle: 0.12, yaw:  0.00, pitch:  0.02, roll:  0.00 },
    { t: 2.2,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 3 — smallest cut and catch, settling out
    { t: 2.8,  throttle: 0.22, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.22, yaw:  0.00, pitch:  0.02, roll:  0.00 },
    { t: 3.3,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle — back to level flight
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
