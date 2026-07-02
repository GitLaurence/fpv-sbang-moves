export default {
  id: 'barani',
  name: 'Barani',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.2,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Forward pitch flip na may kasamang twist — pinagsasama ang pitch at roll input sa gitna ng rotation, kaya lumalabas ang drone sa direksyon na medyo naiba mula sa pagpasok. Advanced combo na nagsasanay ng sabay-sabay na axis control.',
  tips: [
    'Simulan ang normal na forward flip (pitch) — mag-add ng roll input sa pinaka-kalagitnaan ng rotation',
    'Ang twist ay dapat mabilis at tumpak — huwag habaan ang roll input',
    'Kailangan ng malakas na throttle punch sa exit para ma-level ang drone',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Pitch Flip' },
    { t: 0.95, label: 'Twist' },
    { t: 1.4, label: 'Continue' },
    { t: 1.95, label: 'Recover' },
    { t: 2.4, label: 'Exit' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch flip begins
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.7,  throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // TWIST — add roll input mid-rotation, near the inverted point
    { t: 0.95, throttle: 0.35, yaw:  0.00, pitch:  0.85, roll:  0.90 },
    { t: 1.15, throttle: 0.35, yaw:  0.00, pitch:  0.55, roll:  0.90 },
    // Continue rotation, completing the pitch as the roll eases out
    { t: 1.4,  throttle: 0.45, yaw:  0.00, pitch:  0.25, roll:  0.30 },
    { t: 1.65, throttle: 0.60, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Recovery
    { t: 1.95, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
