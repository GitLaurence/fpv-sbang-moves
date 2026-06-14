export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Dive papuntang pitch forward flip (360°), tapos diretsong sumunod na full roll bago mag-recover — dalawang full rotation sa magkaibang axis na parang acrobatic stunt. Kailangan ng matataas na altitude dahil sa drop habang nag-flip.',
  tips: [
    'Itago ang throttle mababa habang umiikot ang flip — huwag mag-punch hangga\'t hindi tapos ang rotation',
    'Sundan agad ng roll ang flip — walang malaking pause sa pagitan, dapat tuloy-tuloy',
    'I-time ang throttle catch sa dulo ng roll para hindi masyadong bumaba ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Dive' },
    { t: 0.7, label: 'Flip' },
    { t: 1.7, label: 'Snap Roll' },
    { t: 2.4, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // DIVE — chop throttle, pitch forward into the dive
    { t: 0.4,  throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.38, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // FRONT FLIP — full 360° pitch rotation, throttle stays low through the rotation
    { t: 0.7,  throttle: 0.32, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.32, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Flip complete — sticks center, brief beat
    { t: 1.65, throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SNAP ROLL — immediate full 360° roll, no pause before this
    { t: 1.7,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.05, throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.3,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll complete — center sticks
    { t: 2.4,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // RECOVER — throttle punch to regain altitude, settle to level flight
    { t: 2.65, throttle: 0.78, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
