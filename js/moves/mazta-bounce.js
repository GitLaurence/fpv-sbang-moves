export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 4.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Signature headmazta trick — mabilis na throttle chop + nose dive pababa, tapos explosive throttle punch + pitch pull para "mag-bounce" pabalik pataas. Ang dramatic na dip-and-recover ay lumilikha ng parang bouncing ball ang epekto sa footage.',
  tips: [
    'Ang throttle chop ay dapat instant at buo — gradual na chop ay hindi nagbibigay ng malinaw na bounce',
    'Mag-pitch slightly pababa sa chop phase para mas malalim ang dive',
    'Ang punch-and-pull ay sabay — full throttle at pitch back nang sabay para sa malakas na recovery arc',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Chop+Dive' },
    { t: 0.9, label: 'Free Fall' },
    { t: 1.4, label: 'BOUNCE' },
    { t: 1.9, label: 'Pull Arc' },
    { t: 2.6, label: 'Apex' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — forward flight at moderate speed
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CHOP — instant throttle cut + slight pitch forward (nose down dive)
    { t: 0.4,  throttle: 0.05, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 0.65, throttle: 0.04, yaw:  0.00, pitch:  0.28, roll:  0.00 },
    // FREE FALL — throttle near zero, drone descends and accelerates downward
    { t: 0.9,  throttle: 0.04, yaw:  0.00, pitch:  0.18, roll:  0.00 },
    { t: 1.2,  throttle: 0.04, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // THE BOUNCE — explosive throttle punch + hard pitch back simultaneously
    { t: 1.4,  throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.65, throttle: 1.00, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Pull arc — sustain pull as drone climbs
    { t: 1.9,  throttle: 0.95, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    { t: 2.2,  throttle: 0.80, yaw:  0.00, pitch: -0.70, roll:  0.00 },
    // Apex — ease inputs as drone reaches top of bounce
    { t: 2.55, throttle: 0.65, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    // Recovery — settle to level flight
    { t: 2.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.3,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
