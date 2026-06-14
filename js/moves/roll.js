export default {
  id: 'roll',
  name: 'Smooth Roll',
  level: 'beginner',
  difficulty: 1,
  durationSec: 2.0,
  youtubeId:    'yOspDGetzjc',
  youtubeStart: 0,
  description: 'Buong 360° aileron roll gamit ang roll stick lang — pundasyon ng lahat ng inverted moves. Ang layunin ay isang malinis, constant-rate na pag-ikot na walang biglaang pitch o yaw drift.',
  tips: [
    'Full roll input, pero steady ang rate — huwag bibilisan o babagalan sa gitna',
    'Maliit na forward pitch habang inverted para mabawi ang lost lift at mapanatili ang altitude',
    'I-release ang roll stick eksaktong sa 360° — overshoot ay magdudulot ng wobble sa exit',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Roll In' },
    { t: 0.8, label: 'Inverted' },
    { t: 1.3, label: 'Roll Out' },
    { t: 1.8, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll in — full deflection, slight throttle add to hold altitude
    { t: 0.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.55, throttle: 0.70, yaw:  0.00, pitch:  0.05, roll:  1.00 },
    // Inverted midpoint — small forward pitch to counter inverted lift loss
    { t: 0.8,  throttle: 0.70, yaw:  0.00, pitch:  0.05, roll:  1.00 },
    { t: 1.05, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out — back to upright at 360°
    { t: 1.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle into level flight
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
