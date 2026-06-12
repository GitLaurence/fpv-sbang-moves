export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.5,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward pitch flip papuntang inverted, tapos i-CUT ang throttle para "mag-hang" habang baligtad — hayaan itong mag-float sandali bago tapusin ang isa\'t kalahating ikot (540°) pabalik sa upright. Test ng patience at throttle control.',
  tips: [
    'Itigil ang pitch input sa sandaling inverted — wag agad ipagpatuloy ang flip',
    'I-cut ang throttle nang malinis habang naka-hang para makaramdam ng "floaty" feel',
    'Pagkatapos ng delay, ituloy lang ang parehong pitch direction para makumpleto ang 540°',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Pitch Fwd' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.0, label: 'Hang' },
    { t: 2.0, label: 'Continue' },
    { t: 2.7, label: 'Recover' },
  ],
  keyframes: [
    // Approach — cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Push pitch forward — first half of the flip
    { t: 0.4,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — cut throttle, sticks center, "hang" in place
    { t: 1.0,  throttle: 0.10, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Continue the rotation — second half toward 540°
    { t: 2.0,  throttle: 0.15, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 2.4,  throttle: 0.85, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // Pull out to level
    { t: 2.7,  throttle: 0.70, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
