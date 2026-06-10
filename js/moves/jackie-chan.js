export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na flip pasunod ng roll sa magkaibang axis, walang pagitan — parang martial arts combo. Ang dalawang rotation ay dapat magkasunod nang walang dead time, kaya mukhang isang tuloy-tuloy na galaw.',
  tips: [
    'Chop throttle bago ang flip para mabilis ang rotation, tapos agad i-roll bago pa makabalik sa level',
    'Walang dead stop sa pagitan ng flip at roll — overlap ang dalawang input nang bahagya',
    'Mag-recover ng throttle pagkatapos ng roll para hindi mawalan ng altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Flip' },
    { t: 1.0, label: 'Flip Out' },
    { t: 1.3, label: 'Roll' },
    { t: 1.9, label: 'Roll Out' },
    { t: 2.4, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP — chop throttle, full forward pitch flip
    { t: 0.4,  throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Coming out of flip — sticks toward center, blend straight into roll
    { t: 1.0,  throttle: 0.40, yaw:  0.00, pitch:  0.30, roll:  0.20 },
    // ROLL — immediate full roll, no dead stop
    { t: 1.3,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.65, throttle: 0.48, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — back to upright
    { t: 1.9,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 2.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — throttle punch to regain altitude, settle level
    { t: 2.4,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.9,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
