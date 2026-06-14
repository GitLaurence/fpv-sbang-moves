export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 6.5,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang combo na may idinagdag na buong Inverted Yaw Spin sa gitna — Boost → Roll Inverted → Dead Stop → Tornado (inverted yaw spin) → Split-S Pull → Juicy Flick → Roll Out. Pinakamatagal at pinaka-technical na bersyon ng Sbang.',
  tips: [
    'Ang tornado spin ay nangyayari habang inverted — kailangan ng elevated throttle (~68-70%) para manatiling level',
    'Bilangin ang spin — isang buong 360° bago ihinto ang yaw at magsimula ng Split-S pull',
    'Pareho ang "dead stop" principle bago at pagkatapos ng tornado segment — sticks sa center, decisive ang mga input',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Dead Stop' },
    { t: 1.5, label: 'Tornado' },
    { t: 3.5, label: 'Stop Spin' },
    { t: 3.9, label: 'Pull' },
    { t: 4.7, label: 'Recover' },
    { t: 5.0, label: 'Flick' },
    { t: 5.5, label: 'Roll Out' },
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
    // DEAD STOP — fully inverted, sticks centered, brief pause
    { t: 1.2,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // TORNADO — full yaw spin while inverted, elevated throttle to hold altitude
    { t: 1.5,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Stop spin — dead stop again, inverted
    { t: 3.5,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.7,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through — pitch back arcs nose down through the half-loop
    { t: 3.9,  throttle: 0.35, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 4.25, throttle: 0.52, yaw:  0.00, pitch: -0.95, roll:  0.00 },
    { t: 4.6,  throttle: 0.68, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    // Recovery — level out, brief pause before the juicy flick
    { t: 4.7,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.9,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap to inverted
    { t: 5.0,  throttle: 0.85, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.15, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 5.35, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright
    { t: 5.5,  throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 5.75, throttle: 0.52, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 5.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 6.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 6.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
