export default {
  id: 'power-loop-vertical',
  name: 'Powerloop',
  level: 'beginner',
  difficulty: 2,
  durationSec: 4.0,
  youtubeId:    'Ip7JBqRNDzg',
  youtubeStart: 0,
  description: 'Buong vertical loop sa ibabaw ng isang obstacle — full pitch back papataas, chop ang throttle sa inverted top, tapos pull pababa hanggang level. Pundasyon ng power loop bago ang sideways variant.',
  tips: [
    'Magdala ng sapat na bilis bago pumasok — kulang na speed = hindi maabot ang tuktok',
    'CHOP ang throttle sa inverted na bahagi sa itaas — mabilis bumagal at tumama nang malinis sa likod ng obstacle',
    'I-ramp pabalik ang throttle habang bumababa para hindi masyadong mawala ang altitude sa exit',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Pull Up' },
    { t: 1.4, label: 'Vertical' },
    { t: 2.0, label: 'Top/Chop' },
    { t: 2.9, label: 'Pull Thru' },
    { t: 3.6, label: 'Exit' },
  ],
  keyframes: [
    // High-speed approach toward the obstacle
    { t: 0.0,  throttle: 0.80, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.3,  throttle: 0.90, yaw: 0.00, pitch:  0.00, roll: 0.00 },
    // PULL — full pitch back, full throttle into the loop
    { t: 0.4,  throttle: 1.00, yaw: 0.00, pitch: -0.95, roll: 0.00 },
    { t: 0.8,  throttle: 1.00, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    // Climbing vertically — hold full pull
    { t: 1.2,  throttle: 0.95, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    { t: 1.6,  throttle: 0.80, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    // Approaching inverted top — begin throttle chop
    { t: 1.85, throttle: 0.35, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    // INVERTED top — chop throttle near-zero
    { t: 2.0,  throttle: 0.05, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    { t: 2.25, throttle: 0.05, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    // Nose drops through — ramp throttle back, ease pitch
    { t: 2.55, throttle: 0.35, yaw: 0.00, pitch: -1.00, roll: 0.00 },
    { t: 2.9,  throttle: 0.78, yaw: 0.00, pitch: -0.85, roll: 0.00 },
    // Pulling through the bottom back to level
    { t: 3.25, throttle: 0.85, yaw: 0.00, pitch: -0.55, roll: 0.00 },
    { t: 3.6,  throttle: 0.72, yaw: 0.00, pitch: -0.15, roll: 0.00 },
    // Exit — level flight
    { t: 4.0,  throttle: 0.68, yaw: 0.00, pitch:  0.00, roll: 0.00 },
  ],
};
