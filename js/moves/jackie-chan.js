export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na sunod-sunod na snap rolls papunta sa magkabilang direksyon — parang "dodging" na galaw, kaya pinangalanan sa istilong pandodging ni Jackie Chan. Kailangan ng mabilis at eksaktong roll input nang walang oscillation.',
  tips: [
    'Bawat snap roll ay dapat full deflection at instant — hindi gradual, parang pag-ipit ng stick',
    'Maikling dead-center sa pagitan ng bawat direksyon — sandaling paghinto lang bago mag-switch',
    'Panatilihing pantay ang throttle sa buong combo para hindi bumagsak o umakyat ang altitude',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.3,  label: 'Roll R' },
    { t: 0.85, label: 'Center' },
    { t: 1.0,  label: 'Roll L' },
    { t: 1.55, label: 'Center' },
    { t: 1.7,  label: 'Roll R' },
    { t: 2.25, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll right
    { t: 0.3,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead-center between snaps
    { t: 0.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Snap roll left
    { t: 1.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 1.3,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    // Dead-center again
    { t: 1.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Final snap roll right — flourish finish
    { t: 1.7,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Recover to level
    { t: 2.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
