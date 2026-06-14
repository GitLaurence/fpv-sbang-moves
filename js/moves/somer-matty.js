export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.6,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Back-to-back combo: somersault (backward pitch loop) sundan agad ng Matty Flip (forward pitch flip) sa kabilang direksyon. Kailangan ng malinaw na "dead stop" sa gitna bago lumipat ng direksyon ng pitch.',
  tips: [
    'Tapusin muna nang husto ang somersault loop bago bitawan ang stick',
    'Mag-pause ng saglit sa neutral bago ibaliktad ang pitch direction para sa Matty Flip',
    'Itong dalawang move ay dapat na-master nang hiwalay bago subukan bilang combo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.6, label: 'Somer Loop' },
    { t: 1.0, label: 'Somer Inv' },
    { t: 1.5, label: 'Dead Stop' },
    { t: 2.0, label: 'Matty Fwd' },
    { t: 2.4, label: 'Matty Inv' },
    { t: 3.0, label: 'Pull Out' },
    { t: 3.6, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Somersault — pitch backward into a backward loop
    { t: 0.45, throttle: 0.72, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    { t: 0.6,  throttle: 0.80, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Inverted from the somersault — throttle punch through
    { t: 1.0,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.25, throttle: 0.78, yaw:  0.00, pitch: -0.45, roll:  0.00 },
    // Dead stop — both sticks back to center, brief level moment
    { t: 1.5,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Matty Flip — pitch forward into forward flip
    { t: 1.85, throttle: 0.72, yaw:  0.00, pitch:  0.75, roll:  0.00 },
    { t: 2.0,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted from Matty Flip — throttle punch
    { t: 2.4,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.85, yaw:  0.00, pitch:  0.65, roll:  0.00 },
    // Pull out to level
    { t: 3.0,  throttle: 0.70, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    { t: 3.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.6,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
