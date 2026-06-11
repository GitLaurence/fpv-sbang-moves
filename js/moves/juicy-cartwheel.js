export default {
  id: 'juicy-cartwheel',
  name: 'Juicy Cartwheel',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'uvIvAzPRXiU',
  youtubeStart: 0,
  description: 'Katulad ng Juicy Flick pero sa roll axis — throttle blip tapos isang mabilis na full roll snap papuntang inverted, maikling pause, tapos isa pang roll para bumalik sa upright. Parang nagcacartwheel ang drone sa hangin.',
  tips: [
    'Throttle blip muna bago ang roll snap para magkaroon ng energy ang cartwheel',
    'I-time ang dalawang roll snap nang magkapareho — dapat magmukhang isang tuloy-tuloy na pag-ikot',
    'Maikling pause lang sa inverted — huwag tumagal masyado o mawawala ang "juicy" na pakiramdam',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Blip' },
    { t: 0.55, label: 'Roll Snap' },
    { t: 1.0,  label: 'Inverted' },
    { t: 1.25, label: 'Roll Out' },
    { t: 1.8,  label: 'Upright' },
    { t: 2.3,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Throttle blip — brief punch for entry energy
    { t: 0.35, throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll snap — full roll input to flip to inverted, throttle cut
    { t: 0.55, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.75, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Fully inverted — sticks to center — brief pause
    { t: 1.0,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.15, throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Second roll snap — continue same direction back to upright
    { t: 1.25, throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.55, throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.75, throttle: 0.48, yaw:  0.00, pitch:  0.00, roll:  0.28 },
    // Upright — throttle punch for arc exit
    { t: 1.9,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — return to cruise
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
