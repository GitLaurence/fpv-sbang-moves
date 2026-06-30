export default {
  id: 'somermatty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Kombinasyon ng Somersault (forward pitch loop) at Matty Flip (punch through inverted). Sa tuktok ng forward loop, i-punch ang throttle nang buo para lumipas ng baligtad sa ilalim ng obstacle — dalawang tricks sa iisang linya.',
  tips: [
    'Kailangan ng mataas na bilis sa entry — ang SomerMatty ay energy-hungry na trick',
    'Ang throttle punch sa inverted ay mas maaga kaysa regular Matty — bago pa maabot ang tuktok',
    'I-maintain ang forward pitch sa buong maneuver — huwag ibalik ang pitch stick bago makumpleto',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Fwd' },
    { t: 0.8, label: 'Over Top' },
    { t: 1.0, label: 'Punch' },
    { t: 1.5, label: 'Pull Out' },
    { t: 2.0, label: 'Recovery' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault initiation — push pitch forward
    { t: 0.3,  throttle: 0.75, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.55, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted / top of loop
    { t: 0.8,  throttle: 0.88, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // MATTY PUNCH — full throttle while inverted, continue pitching
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Past inverted — ease pitch and throttle
    { t: 1.42, throttle: 0.80, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    { t: 1.65, throttle: 0.68, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // Recovery
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
