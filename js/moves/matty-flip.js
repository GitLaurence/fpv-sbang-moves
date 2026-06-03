export default {
  id: 'matty-flip',
  name: 'Matty Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  description: 'Backflip na sabay may full yaw spin — dalawang axis nang sabay-sabay. Ginawa ni Canadian pilot Matt Sherwood. Kailangan munang marunong ng malinis na backflip at yaw spin bago subukan.',
  tips: [
    'Ang pitch-back at yaw ay SABAY — hindi sunud-sunod, kundi iisang input na parehong full deflection',
    'I-time ang throttle punch sa exit para hindi bumaba pagkatapos ng flip',
    'Mag-practice ng magkahiwalay na backflip at yaw spin muna sa simulator',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Snap' },
    { t: 0.6, label: 'Rotating' },
    { t: 1.1, label: 'Returning' },
    { t: 1.5, label: 'Catch' },
    { t: 2.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap initiation — SIMULTANEOUS full pitch-back + full yaw, throttle cut
    { t: 0.3,  throttle: 0.38, yaw: -1.00, pitch: -1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.32, yaw: -1.00, pitch: -1.00, roll:  0.00 },
    // Through the rotation — hold both inputs
    { t: 0.75, throttle: 0.30, yaw: -1.00, pitch: -1.00, roll:  0.00 },
    // Past inverted, returning toward upright
    { t: 0.95, throttle: 0.30, yaw: -0.65, pitch: -0.70, roll:  0.00 },
    { t: 1.1,  throttle: 0.30, yaw: -0.20, pitch: -0.25, roll:  0.00 },
    // Upright — throttle punch to catch altitude loss
    { t: 1.2,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
