export default {
  id: 'smooth-roll',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.5,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll na pinapanatili ang pare-parehong altitude sa buong rotation — ang pundasyon bago matuto ng mas advanced na flips at spins. Steady ang roll input, may bahagyang throttle compensation habang inverted.',
  tips: [
    'Hawak nang steady ang full roll input — huwag bitawan hanggang makumpleto ang buong 360°',
    'Magdagdag ng kaunting throttle sa kalagitnaan (kapag inverted) para hindi bumagsak ang altitude',
    'Mag-focus sa horizon sa goggles — gabay ito kung kailan dapat i-release ang roll stick',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll In' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.6, label: 'Roll Out' },
    { t: 2.1, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll in — smooth full input, slight throttle ease
    { t: 0.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.7,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — bump throttle to hold altitude through the top half
    { t: 1.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — ease throttle back down, hold roll to complete the circle
    { t: 1.6,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.85, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Exit — level, roll centered
    { t: 2.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
