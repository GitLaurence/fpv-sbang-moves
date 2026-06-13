export default {
  id: 'juicy-cartwheel',
  name: 'Juicy Cartwheel',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'uvIvAzPRXiU',
  youtubeStart: 0,
  description: 'Full roll combined with isang juicy flick sa gitna ng rotation — parang nag-cartwheel ang drone sa hangin. Yaw at pitch flick ang nagbibigay ng "snap" sa kalahatian ng roll bago ito mag-complete.',
  tips: [
    'Mag-start sa malinis at constant roll rate — huwag biglaan ang unang kalahati',
    'Ang flick (pitch + yaw snap) ay dapat eksakto sa gitna ng roll, kapag patagilid ang drone',
    'Bumalik kaagad sa center pagkatapos ng flick — kompletuhin ang roll gamit ang parehong rate',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Start' },
    { t: 1.2, label: 'Sideways' },
    { t: 1.5, label: 'Flick' },
    { t: 1.9, label: 'Roll Cont' },
    { t: 2.8, label: 'Complete' },
    { t: 4.0, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin steady roll
    { t: 0.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Sideways — drone is on its side, roll continues
    { t: 1.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Dead stop on roll for the flick
    { t: 1.4,  throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — sharp yaw + pitch snap while sideways
    { t: 1.5,  throttle: 0.55, yaw:  1.00, pitch:  0.80, roll:  0.00 },
    { t: 1.65, throttle: 0.50, yaw:  1.00, pitch:  0.80, roll:  0.00 },
    // Center the flick inputs
    { t: 1.8,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Resume roll to complete the cartwheel
    { t: 1.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    // Roll completes — back to upright
    { t: 3.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — level cruise
    { t: 3.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
