export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Headmazta\'s signature trick — mabilis na dive papababa ng drone na halos dumidikit sa lupa, i-cut ang throttle sa pinakamababang punto para sa "bounce" effect, tapos explosive throttle punch pabalik pataas. Ang "bounce" ay halos grazed ang ground at kaagad na umangat.',
  tips: [
    'Ang dive ay kailangang mabilis at tuwid — mas mabilis ang approach, mas dramatiko ang bounce',
    'I-cut ang throttle sa huling sandali — mag-time ng throttle chop bago mo isiping mag-crash',
    'Ang throttle punch pagkatapos ng bounce ay dapat malakas at agarang agarang — walang hesitation',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Dive' },
    { t: 1.5, label: 'Drop' },
    { t: 2.2, label: 'Chop' },
    { t: 2.5, label: 'Bounce' },
    { t: 3.0, label: 'Pull Up' },
    { t: 3.8, label: 'Recovery' },
  ],
  keyframes: [
    // Moderate forward approach
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive — aggressive nose-down pitch, full throttle for speed
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 0.7,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Screaming toward ground — sustained nose-down
    { t: 1.0,  throttle: 0.95, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 1.4,  throttle: 0.90, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.9,  throttle: 0.85, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    // CHOP — instant throttle cut at last moment near ground
    { t: 2.2,  throttle: 0.05, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 2.38, throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE — immediate full throttle punch + pull up
    { t: 2.52, throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.75, throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Climbing — maintain pull, ease throttle
    { t: 3.05, throttle: 0.90, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    { t: 3.35, throttle: 0.78, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Recovery — level out
    { t: 3.65, throttle: 0.68, yaw:  0.00, pitch: -0.18, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
