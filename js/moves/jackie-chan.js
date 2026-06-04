export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Headmazta signature combo: Boost → Pitch flip sa inverted → Dead stop → Buong 360° inverted yaw spin → Juicy Flick exit pabalik sa upright. Ang "showoff" na trick — ang dramatic pause habang inverted at umiikot ay trademark ng galaw.',
  tips: [
    'Ang dead stop bago ang yaw spin ay literal na pinaka-important na bahagi — huwag laktawan',
    'Elevated throttle (~68-70%) ang kailangan habang nag-iinverted yaw spin para manatiling level',
    'Ang juicy flick exit ay dapat mabilis at snappy — siya ang magiging grand finale ng trick',
    'Mag-master ng bawat individual na component (inverted yaw spin, juicy flick) bago pagsamahin',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Flip Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.5, label: 'Yaw Spin' },
    { t: 3.5, label: 'Stop Yaw' },
    { t: 3.8, label: 'Juicy' },
    { t: 4.4, label: 'Roll Out' },
    { t: 4.9, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 0.62, throttle: 1.00, yaw:  0.00, pitch: -0.12, roll:  0.00 },
    // Pitch flip to inverted — pitch snap, throttle cut
    { t: 0.8,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DEAD STOP — fully inverted, all sticks center
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.42, throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 360° YAW SPIN inverted — elevated throttle holds altitude
    { t: 1.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop yaw — center left stick
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK exit — throttle blip then pitch snap
    { t: 3.8,  throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.95, throttle: 0.27, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.12, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 4.28, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 4.52, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    { t: 4.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
