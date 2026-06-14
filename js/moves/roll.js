export default {
  id: 'roll',
  name: 'Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.2,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° roll habang pinapanatili ang heading at altitude — ang pundasyon ng lahat ng axis-based na tricks. Constant at smooth ang roll input sa buong rotation.',
  tips: [
    'Full roll input lang — iwasan ang partial o jerky stick movement',
    'Magdagdag ng kaunting throttle habang inverted para hindi bumaba ang altitude',
    'Ipraktis sa magkabilang direksyon (kaliwa at kanan) para pantay ang dalawang roll',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Roll Start' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.6, label: 'Roll Out' },
    { t: 2.2, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin full roll — slight throttle dip going into the roll
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Through inverted — small throttle add to hold the line
    { t: 0.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.45, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — ease roll stick back to center
    { t: 1.65, throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 1.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — resume cruise
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
