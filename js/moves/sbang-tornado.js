export default {
  id: 'sbang-tornado',
  name: 'Sbang Tornado',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    'BQauW42gMfE',
  youtubeStart: 0,
  description: 'Sbang combo (Boost → Roll inverted → Split-S → Juicy Flick → Roll out) habang nagpapatuloy ang continuous yaw spin sa buong combo — parang umiikot na bagyo ang dating, kaya "Tornado".',
  tips: [
    'Panatilihing constant ang yaw input sa buong combo — ito ang gumagawa ng "tornado" visual',
    'Mag-master muna ng Sbang nang walang yaw bago idagdag ang continuous spin',
    'Bantayan ang heading — kahit umiikot, dapat alam mo kung saan ka papunta pagkatapos ng exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Roll Inv' },
    { t: 1.2, label: 'Inverted' },
    { t: 1.4, label: 'Pull' },
    { t: 2.2, label: 'Recover' },
    { t: 2.7, label: 'Flick' },
    { t: 3.2, label: 'Roll Out' },
    { t: 4.0, label: 'Spin Out' },
  ],
  keyframes: [
    // Entry — level forward flight, spin already winding up
    { t: 0.0,  throttle: 0.68, yaw:  0.40, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw:  0.70, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch, spin continues
    { t: 0.4,  throttle: 1.00, yaw:  1.00, pitch: -0.25, roll:  0.00 },
    { t: 0.65, throttle: 1.00, yaw:  1.00, pitch: -0.15, roll:  0.00 },
    // Roll to inverted — snap full roll, chop throttle, spin holds
    { t: 0.8,  throttle: 0.35, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 1.0,  throttle: 0.30, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    // Dead stop inverted — spin still carries through
    { t: 1.2,  throttle: 0.28, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // Split-S pull-through, spin continues
    { t: 1.4,  throttle: 0.35, yaw:  1.00, pitch: -1.00, roll:  0.00 },
    { t: 1.75, throttle: 0.52, yaw:  1.00, pitch: -0.95, roll:  0.00 },
    { t: 2.1,  throttle: 0.68, yaw:  1.00, pitch: -0.55, roll:  0.00 },
    // Recovery — level out, spin holds
    { t: 2.4,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // JUICY FLICK — throttle blip then pitch snap to inverted, spin holds
    { t: 2.7,  throttle: 0.85, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.85, throttle: 0.28, yaw:  1.00, pitch:  1.00, roll:  0.00 },
    { t: 3.05, throttle: 0.25, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // 180° roll exit back to upright, spin holds
    { t: 3.2,  throttle: 0.38, yaw:  1.00, pitch:  0.00, roll:  1.00 },
    { t: 3.45, throttle: 0.52, yaw:  1.00, pitch:  0.00, roll:  0.50 },
    { t: 3.6,  throttle: 0.65, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    // SPIN OUT — wind the yaw spin down to a stop
    { t: 4.0,  throttle: 0.65, yaw:  0.60, pitch:  0.00, roll:  0.00 },
    { t: 4.4,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 5.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
