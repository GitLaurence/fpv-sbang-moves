export default {
  id: 'backward-flying',
  name: 'Backward Flying',
  level: 'beginner',
  difficulty: 2,
  durationSec: 5.0,
  youtubeId:    'esueDHARopM',
  youtubeStart: 0,
  description: 'Mag-yaw ng 180° para harapin ang drone palikod, tapos lumipad nang baligtad sa direksyon ng travel. Mahalagang basic skill para sa cinematic reveals at smooth transitions — ang drone ay lumilipad sa kabaligtarang direksyon ng tingin.',
  tips: [
    'Mag-yaw nang mabilis at decisively — huwag mag-drift habang nagtu-turn',
    'Panatilihin ang mababa at consistent na throttle habang naka-backward flight',
    'Gamitin ang mga istruktura o landmarks para ma-guide ang linya habang blind',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Yaw 180°' },
    { t: 1.2, label: 'Backward' },
    { t: 3.5, label: 'Yaw Back' },
    { t: 4.2, label: 'Recovery' },
  ],
  keyframes: [
    // Forward approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 0.35, throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // Snap yaw 180° to face backward
    { t: 0.5,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 0.85, throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Yaw center — now facing backward, ease pitch to slow forward momentum
    { t: 1.1,  throttle: 0.65, yaw:  0.00, pitch: -0.08, roll:  0.00 },
    // Sustain backward flight — slight pitch forward in body frame = backward movement
    { t: 1.4,  throttle: 0.65, yaw:  0.00, pitch:  0.08, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.08, roll:  0.00 },
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.08, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.08, roll:  0.00 },
    { t: 3.3,  throttle: 0.65, yaw:  0.00, pitch:  0.08, roll:  0.00 },
    // Snap yaw back 180° to face forward again
    { t: 3.5,  throttle: 0.65, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.85, throttle: 0.65, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    // Forward flight recovery
    { t: 4.1,  throttle: 0.65, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.08, roll:  0.00 },
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
  ],
};
