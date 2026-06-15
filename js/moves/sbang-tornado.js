export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang combo na may dagdag na continuous yaw spin habang inverted — sa halip na "dead stop", nag-i-ikot ang drone bilang "tornado" sa gitna ng combo bago mag-Split-S pull at Juicy Flick. Pinakamahirap na bersyon ng sbang combo.',
  tips: [
    'Panatilihin ang full yaw input habang inverted — kontrolin ang throttle para hindi bumagsak ang altitude habang umiikot',
    'Bilangin ang rotations — itigil ang yaw spin sa tamang oryentasyon bago ang Split-S pull',
    'Mag-master muna ng regular Sbang bago subukan ang Tornado variant',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Tornado' },
    { t: 2.4, label: 'Pull' },
    { t: 3.4, label: 'Recover' },
    { t: 3.75, label: 'Flick' },
    { t: 4.25, label: 'Roll Out' },
    { t: 5.0, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch with slight nose-up
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle
    { t: 0.8,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // TORNADO — sustained full yaw spin while inverted
    { t: 1.2,  throttle: 0.32, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.55, throttle: 0.32, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.32, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.2,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // SPLIT-S pull-through — pitch back arcs nose down through the half-loop
    { t: 2.4,  throttle: 0.38, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.75, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 3.1,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Recovery — level out, brief pause before the juicy flick
    { t: 3.4,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap to inverted
    { t: 3.75, throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.9,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.1,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 4.25, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 4.5,  throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 4.65, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
