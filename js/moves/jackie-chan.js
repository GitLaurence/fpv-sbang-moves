export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.2,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Rapid-fire na chain ng tatlong magkakaibang snap inputs — roll, flip, roll — bawat isa may dead stop sa pagitan. Parang stunt combo, kaya ang pangalan — mabilis, malinis, walang wasted motion.',
  tips: [
    'Full deflection lang ang bawat snap — walang partial input sa buong chain',
    'Ang dead stop sa pagitan ng bawat trick ay kasinghalaga ng mismong trick — ipakita ang control',
    'Magsanay munang hiwalay ang bawat elemento (roll, flip, roll) bago pagsamahin sa buong chain',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Roll 1' },
    { t: 0.85, label: 'Dead Stop' },
    { t: 1.05, label: 'Flip' },
    { t: 1.55, label: 'Dead Stop' },
    { t: 1.75, label: 'Roll 2' },
    { t: 2.25, label: 'Chain End' },
    { t: 2.8, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — carry speed
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL 1 — full snap roll
    { t: 0.35, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop — sticks fully centered
    { t: 0.85, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.95, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP — full pitch snap forward
    { t: 1.05, throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.3,  throttle: 0.52, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Dead stop — reset before final roll
    { t: 1.55, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.65, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL 2 — opposite direction full snap
    { t: 1.75, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 2.0,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    // Chain end — everything centered, combo complete
    { t: 2.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.45, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.8,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
