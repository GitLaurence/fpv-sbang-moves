export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Pinagsama ang somersault at Matty Flip — forward pitch na mas matarik at mas mabilis kaysa regular Matty Flip, na may throttle punch inverted at pababa para makamit ang mas dramatikong bilis sa paglabas. Mas malawak ang arc at mas explosive ang throttle.',
  tips: [
    'Mas mabilis at mas matarik ang pitch kaysa Matty Flip — full forward at maintained sa buong rotation',
    'Ang throttle punch inverted ay mas maaga kaysa Matty Flip — hindi ka maghihintay ng fully inverted',
    'Mas mabilis ang buong kumpas kaysa Matty Flip — dapat maramdaman ang explosive acceleration',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.25, label: 'Pitch Fwd' },
    { t: 0.7,  label: 'Inverted' },
    { t: 0.85, label: 'Punch' },
    { t: 1.5,  label: 'Pull Out' },
    { t: 2.0,  label: 'Recovery' },
  ],
  keyframes: [
    // Approach — moderate speed
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Aggressive forward pitch snap — faster than Matty Flip
    { t: 0.25, throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.50, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted — throttle ramp to punch early
    { t: 0.72, throttle: 0.90, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — full throttle punch slightly earlier than Matty Flip
    { t: 0.85, throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.05, throttle: 1.00, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    // Past inverted, continuing forward rotation
    { t: 1.25, throttle: 0.85, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // Pull out to level
    { t: 1.5,  throttle: 0.72, yaw:  0.00, pitch:  0.22, roll:  0.00 },
    { t: 1.72, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 2.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
