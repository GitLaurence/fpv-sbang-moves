export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Combo flip at roll na sabay na ginagawa — pitch back at full roll input nang sama-sama para sa diagonal na corkscrew rotation. Mas mabilis at mas dynamic kaysa hiwalay na flip pagkatapos ng roll.',
  tips: [
    'Sabay na full deflection ng pitch back at roll — hindi sunod-sunod',
    'Panatilihing pareho ang dalawang input sa buong rotation para sa malinis na diagonal na linya',
    'I-release ang dalawang stick nang sabay para tumama ang exit sa tamang orientation',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Combo Snap' },
    { t: 0.7, label: 'Inverted' },
    { t: 1.6, label: 'Rotate' },
    { t: 2.0, label: 'Roll Out' },
    { t: 2.4, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Combo snap — pitch back and full roll deflected together
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch: -0.80, roll:  1.00 },
    // Through inverted — both inputs held at full deflection
    { t: 0.7,  throttle: 0.45, yaw:  0.00, pitch: -1.00, roll:  1.00 },
    { t: 1.1,  throttle: 0.45, yaw:  0.00, pitch: -1.00, roll:  1.00 },
    // Continue diagonal rotation
    { t: 1.6,  throttle: 0.48, yaw:  0.00, pitch: -0.60, roll:  1.00 },
    // Roll out — ease both inputs toward center as upright is reached
    { t: 2.0,  throttle: 0.58, yaw:  0.00, pitch: -0.20, roll:  0.50 },
    // Recover — level out
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
