export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Front flip na pinagsama agad sa snap roll sa gitna ng rotation — dalawang axis ng pag-ikot nang sabay para sa tumbling/corkscrew effect. Mabilis na throttle chop bago ang flip, recover pabalik sa upright bago lumandi pababa.',
  tips: [
    'Chop ang throttle bago ang flip — kung hindi, masyadong mataas ang flip',
    'I-time ang roll input habang halfway pa lang ang pitch flip para magka-combo effect',
    'Mag-recover agad sa center pagkatapos ng combo — huwag hintayin pang umikot pa',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.35, label: 'Flip' },
    { t: 0.75, label: 'Roll Combo' },
    { t: 1.35, label: 'Recover' },
    { t: 1.6,  label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP — chop throttle, snap pitch forward to start the front flip
    { t: 0.35, throttle: 0.32, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // ROLL COMBO — mid-flip, add a snap roll for the double-rotation tumble
    { t: 0.75, throttle: 0.30, yaw:  0.00, pitch:  0.80, roll:  1.00 },
    { t: 0.95, throttle: 0.32, yaw:  0.00, pitch:  0.40, roll:  1.00 },
    // RECOVER — ease both axes back to center, upright again
    { t: 1.15, throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 1.35, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — back to forward flight
    { t: 1.6,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
