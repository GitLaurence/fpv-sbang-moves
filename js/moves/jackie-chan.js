export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Forward flip na sinusundan kaagad ng full roll patungo sa parehong direksyon — dalawang rotation axes na pinagsasama sa isang mabilis na sunod-sunod na input. Mahirap pero napaka-stylish kapag malinis ang transition.',
  tips: [
    'Tapusin muna ang flip bago simulan ang roll — huwag pagsabayin ang dalawang input',
    'Mabilis ang transition sa pagitan ng flip at roll — huwag mag-pause nang matagal sa gitna',
    'Panatilihing pareho ang throttle compensation sa parehong rotation para hindi mawalan ng altitude',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Flip' },
    { t: 1.3, label: 'Recover' },
    { t: 1.7, label: 'Roll' },
    { t: 2.7, label: 'Complete' },
    { t: 3.2, label: 'Exit' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Forward flip — full pitch forward, throttle eases through inverted
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.75, throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.05, throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Completing flip rotation back to upright
    { t: 1.3,  throttle: 0.65, yaw:  0.00, pitch:  0.45, roll:  0.00 },
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Brief recovery before roll
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Full roll — same direction as the flip's "spin" feel
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.1,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.45, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Completing roll back to upright
    { t: 2.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 2.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle out
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
