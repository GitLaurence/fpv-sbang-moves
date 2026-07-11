export default {
  id: 'boomerang',
  name: 'Boomerang',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'cEqJj62f8iY',
  youtubeStart: 0,
  description: 'Lumilipad sa curved na landas papalayo at pabalik, pero patuloy na nakaharap sa parehong direksyon sa buong maneuver — bank papunta sa isang gilid, tapos bank papunta sa kabila para bumalik, na parang shape ng boomerang.',
  tips: [
    'Panatilihin ang yaw halos neutral — ang heading ay hindi dapat magbago, ang roll/pitch lang ang gumagawa ng curve',
    'Malumanay na bank transition papunta sa kabilang direksyon sa gitna ng maneuver',
    'Pantay na bilis sa parehong arko para bumalik sa parehong altitude at posisyon',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.5, label: 'Bank Out' },
    { t: 1.7, label: 'Arc Out' },
    { t: 2.3, label: 'Reverse Bank' },
    { t: 3.5, label: 'Arc Back' },
    { t: 4.1, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Bank out — roll into the first arc, small counter-yaw holds heading
    { t: 0.5,  throttle: 0.68, yaw: -0.15, pitch:  0.10, roll:  0.70 },
    { t: 1.0,  throttle: 0.70, yaw: -0.15, pitch:  0.10, roll:  0.65 },
    { t: 1.5,  throttle: 0.70, yaw: -0.12, pitch:  0.08, roll:  0.60 },
    // Curving back through center
    { t: 1.9,  throttle: 0.68, yaw: -0.05, pitch:  0.05, roll:  0.30 },
    { t: 2.3,  throttle: 0.65, yaw:  0.05, pitch:  0.05, roll: -0.10 },
    // Reverse bank — arc back the other way
    { t: 2.7,  throttle: 0.68, yaw:  0.15, pitch:  0.10, roll: -0.65 },
    { t: 3.2,  throttle: 0.70, yaw:  0.15, pitch:  0.10, roll: -0.65 },
    { t: 3.6,  throttle: 0.68, yaw:  0.08, pitch:  0.05, roll: -0.30 },
    // Recovery — level out back at the start heading
    { t: 4.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
