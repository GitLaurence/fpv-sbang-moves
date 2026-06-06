export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Flashy pro-level combo na inspirado sa estilo ni Jackie Chan — explosive snap roll sa isang direksyon, agad na snap roll sa kabaligtaran, tapos split-S pull at juicy flick exit. Ang bilis at katumpakan ng mga counter-input ang nagbibigay ng signature na "acrobatic" na dating.',
  tips: [
    'Ang mga snap roll ay full deflection at instant release — hindi smooth, kundi explosive at immediate center',
    'Ang timing ng counter-roll ay kritikal — dapat halos simultaneous ang pagtatapos ng una at simula ng pangalawa',
    'Ang buong combo ay dapat mabilis — ang bagal ay pumapatay ng bisa ng trick',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Snap R' },
    { t: 0.7, label: 'Snap L' },
    { t: 1.05, label: 'Level' },
    { t: 1.4, label: 'Boost' },
    { t: 1.75, label: 'Roll Inv' },
    { t: 2.1, label: 'Dead Stop' },
    { t: 2.4, label: 'Split-S' },
    { t: 3.3, label: 'Recover' },
    { t: 3.8, label: 'Juicy' },
    { t: 4.3, label: 'Roll Out' },
  ],
  keyframes: [
    // Entry — forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SNAP ROLL RIGHT — instant full deflection
    { t: 0.35, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 0.55, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SNAP ROLL LEFT — immediate counter
    { t: 0.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: -1.00 },
    { t: 0.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Brief level — sticks center after double snap
    { t: 1.05, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, slight nose-up
    { t: 1.4,  throttle: 1.00, yaw:  0.00, pitch: -0.20, roll:  0.00 },
    { t: 1.6,  throttle: 1.00, yaw:  0.00, pitch: -0.10, roll:  0.00 },
    // Roll to inverted — snap roll, chop throttle
    { t: 1.75, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.95, throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // DEAD STOP inverted
    { t: 2.1,  throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.32, throttle: 0.27, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S pull — arc nose through bottom
    { t: 2.5,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.82, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 3.1,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Recovery pause
    { t: 3.38, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.62, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK exit — throttle blip + pitch snap inverted
    { t: 3.78, throttle: 0.88, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.92, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.1,  throttle: 0.26, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll to upright
    { t: 4.25, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 4.5,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.45 },
    { t: 4.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
