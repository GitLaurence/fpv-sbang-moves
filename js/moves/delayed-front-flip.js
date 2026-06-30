export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Throttle blip → maikling hesitation (ang "delay") → full 540° forward pitch flip (1.5 rotations). Ang deliberate na pause bago ang flip ang nagdudulot ng dramatic, snappy na feel ng move.',
  tips: [
    'Ang delay ay dapat brief at decisive — huwag masyadong matagal, isa o dalawang frame lang',
    'Full pitch input para sa buong 540° — huwag bawasan hangga\'t hindi pa kumpleto ang 1.5 rotations',
    'Mag-add ng throttle habang papunta sa inverted position — kritikal para hindi bumaba ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Blip' },
    { t: 0.7, label: 'Delay' },
    { t: 0.9, label: 'Flip' },
    { t: 1.5, label: 'Inverted' },
    { t: 2.2, label: '+½ Flip' },
    { t: 2.8, label: 'Exit' },
  ],
  keyframes: [
    // Entry — forward flight with good speed
    { t: 0.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.3,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // Throttle blip — brief energy punch
    { t: 0.4,  throttle: 0.88, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // The "delay" — sticks snap back to center, brief pause before flip
    { t: 0.55, throttle: 0.68, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.72, throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // 540° forward pitch — maintain full pitch through 1.5 rotations
    { t: 0.9,  throttle: 0.80, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 1.2,  throttle: 0.88, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    // Past first inversion — keep pitching for extra half rotation
    { t: 1.55, throttle: 0.92, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    { t: 1.9,  throttle: 0.85, yaw: 0.00, pitch:  1.00, roll: 0.00 },
    // Approaching exit at bottom of second loop arc
    { t: 2.2,  throttle: 0.78, yaw: 0.00, pitch:  0.70, roll: 0.00 },
    { t: 2.45, throttle: 0.70, yaw: 0.00, pitch:  0.22, roll: 0.00 },
    // Recovery — level flight
    { t: 2.7,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 3.0,  throttle: 0.63, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 3.5,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
