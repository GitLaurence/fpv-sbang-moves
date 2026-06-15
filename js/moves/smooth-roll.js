export default {
  id: 'smooth-roll',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll na pinapanatili ang heading at altitude — pundasyon ng lahat ng acro moves. Steady ang throttle, smooth at consistent ang roll rate sa buong rotation.',
  tips: [
    'Panatilihin ang throttle steady — walang biglaang pagbabago habang umiikot',
    'Magdagdag ng konting pitch back habang patiwarik para mapanatili ang altitude',
    'Smooth at consistent ang roll rate — hindi mabilis sa una tapos mabagal sa huli',
  ],
  phases: [
    { t: 0.0, label: 'Cruise' },
    { t: 0.3, label: 'Roll In' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.7, label: 'Roll Out' },
    { t: 2.0, label: 'Level' },
  ],
  keyframes: [
    // Cruise — steady level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll In — smooth full roll input begins
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Inverted — slight pitch back to hold altitude through the top half
    { t: 1.0,  throttle: 0.68, yaw:  0.00, pitch: -0.15, roll:  1.00 },
    // Roll Out — continuing rotation back to level
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.85, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Level — settled back to cruise
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
