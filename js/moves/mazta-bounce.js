export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Sunod-sunod na stall-catch "bounce" — i-cut ang throttle para mahulog, i-catch ng punch, tapos agad i-flick papunta sa inverted bago ang next bounce. Tatlong bounce na may dagdag na flick sa pagitan, signature freestyle finisher.',
  tips: [
    'Bawat bounce ay maikli — chop, drop, catch, ulit. Huwag hayaang masyadong mahaba ang free-fall',
    'Ang flick sa pagitan ng bounces ay dapat snappy at full — hindi gradual',
    'I-decrease ng kaunti ang catch throttle sa bawat bounce para "mag-descend" papunta sa exit',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Bounce 1' },
    { t: 0.9, label: 'Flick 1' },
    { t: 1.5, label: 'Bounce 2' },
    { t: 2.1, label: 'Flick 2' },
    { t: 2.7, label: 'Bounce 3' },
    { t: 3.4, label: 'Recover' },
    { t: 4.0, label: 'Exit' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 1 — chop throttle, free-fall, catch
    { t: 0.3,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.5,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.65, throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLICK 1 — snap pitch to inverted, throttle cut
    { t: 0.9,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.05, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Roll back upright
    { t: 1.2,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.35, throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 1.45, throttle: 0.60, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 2 — chop throttle, free-fall, catch (slightly lower)
    { t: 1.5,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.7,  throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.85, throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLICK 2 — snap pitch to inverted, throttle cut
    { t: 2.1,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.25, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Roll back upright
    { t: 2.4,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.55, throttle: 0.56, yaw:  0.00, pitch:  0.00, roll:  0.40 },
    { t: 2.65, throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOUNCE 3 — final, shorter chop and catch
    { t: 2.7,  throttle: 0.05, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.85, throttle: 0.04, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.6,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
