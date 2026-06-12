export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na snap roll na sinusundan agad ng forward pitch flip — dalawang magkaibang axis ng rotation sa loob lang ng ilang segundo, parang nagtutumba-tumba kaya tinawag itong Jackie Chan.',
  tips: [
    'Tapusin muna nang buo ang snap roll bago simulan ang pitch flip — huwag pagsabayin',
    'Maikli lang ang pause sa pagitan ng dalawang rotations para mapanatili ang flow',
    'Throttle punch habang papunta sa inverted ng flip para hindi mabawasan ng altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Snap' },
    { t: 0.7, label: 'Roll Out' },
    { t: 0.9, label: 'Pitch Flip' },
    { t: 1.5, label: 'Inverted' },
    { t: 1.6, label: 'Punch' },
    { t: 2.1, label: 'Pull Out' },
    { t: 2.6, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll — full 360° roll, quick and decisive
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.55, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch flip — forward pitch into a full forward loop
    { t: 0.9,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Throttle punch through inverted to finish the loop
    { t: 1.6,  throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 1.85, throttle: 0.85, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Pull out to level
    { t: 2.1,  throttle: 0.70, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 2.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
