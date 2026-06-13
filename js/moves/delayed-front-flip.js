export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.2,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward pitch flip na 1.5 buong paikot (540°) na may "delay" sa gitna — dead stop habang inverted bago tapusin ang pangalawang kalahati ng rotation. Mahirap ang timing ng delay at ng pangalawang push.',
  tips: [
    'PUSH pitch forward — buong 360° plus extra 180° (540° total) ang target',
    'Sa delay, ibalik ang pitch malapit sa neutral habang inverted — talagang dead stop',
    'Mag-push ulit ng pitch forward para tapusin ang huling 180° pagkatapos ng delay',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.3, label: 'Delay' },
    { t: 1.9, label: 'Continue' },
    { t: 2.6, label: '2nd Pass' },
    { t: 3.2, label: 'Recover' },
    { t: 3.7, label: 'Settle' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward hard — begin flip
    { t: 0.35, throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted (first 360°)
    { t: 0.9,  throttle: 0.95, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — dead stop while inverted, ease pitch near neutral
    { t: 1.3,  throttle: 0.40, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    { t: 1.6,  throttle: 0.38, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // CONTINUE — push pitch forward again for the final 180°
    { t: 1.9,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Second pass — completing 540° toward upright
    { t: 2.6,  throttle: 0.90, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 2.9,  throttle: 0.85, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Pull out to level
    { t: 3.2,  throttle: 0.72, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 3.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 3.9,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
