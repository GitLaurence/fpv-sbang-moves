export default {
  id: 'somer-matty',
  name: 'SomerMatty',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'ctaD7f9kYmE',
  youtubeStart: 0,
  description: 'Kombinasyon ng somersault (pababang pull-through, tulad ng Split-S) at Matty Flip (pasulong na throttle punch habang inverted). Kailangan ng masusing throttle control para pagsamahin ang dalawang trick nang maayos.',
  tips: [
    'Ang somersault half ay parang Split-S — sustained pull, hindi jab',
    'Sa sandaling fully inverted mula sa somersault, dire-diretsong pasok agad sa Matty Flip punch',
    'Ang throttle management ang pinakamahirap dito — dalawang magkaibang timing ng punch sa isang move',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Roll Inv' },
    { t: 0.75, label: 'Somersault' },
    { t: 1.5, label: 'Inverted' },
    { t: 1.7, label: 'Matty Punch' },
    { t: 2.3, label: 'Pull Out' },
    { t: 2.9, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — carry speed and altitude
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Half-roll to inverted — cut throttle, full roll snap
    { t: 0.4,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.6,  throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Fully inverted — center roll stick
    { t: 0.75, throttle: 0.33, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SOMERSAULT — sustained pitch back, arc through the bottom (Split-S style)
    { t: 1.0,  throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.25, throttle: 0.48, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    // Approaching inverted again — ease pitch, hold throttle
    { t: 1.5,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // MATTY PUNCH — full throttle + pitch forward to shoot through inverted
    { t: 1.7,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.95, throttle: 1.00, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Past the punch, continuing forward pitch toward level
    { t: 2.15, throttle: 0.80, yaw:  0.00, pitch:  0.50, roll:  0.00 },
    // Pull out to level
    { t: 2.35, throttle: 0.68, yaw:  0.00, pitch:  0.12, roll:  0.00 },
    { t: 2.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.9,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
