export default {
  id: 'delayed-540',
  name: '540° Delayed Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.2,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward flip na may kabuuang 540° ng rotation — ang drone ay pumipihit ng isang buong loop (360°) tapos nagpapatuloy ng isa pang half-flip (180°). Ang "delay" ay ang dramatikong pause sa inverted na posisyon sa kalagitnaan ng trick.',
  tips: [
    'Kailangan ng bilis at altitude sa entry — 540° ay mas matagal kaysa regular na flip',
    'Ang delay sa inverted ay ang pinaka-visual na bahagi — hold mo ang inverted sandali bago magpatuloy',
    'Sa pangalawang inverted (540° mark), mabilis na half-roll para bumalik sa upright position',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Pitch Fwd' },
    { t: 1.0,  label: '180° Inv' },
    { t: 1.35, label: 'DELAY' },
    { t: 1.65, label: 'Continue' },
    { t: 2.2,  label: '360° Up' },
    { t: 2.6,  label: '540° Inv' },
    { t: 3.0,  label: 'Roll Out' },
    { t: 3.5,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — carry good altitude and moderate speed
    { t: 0.0,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PUSH pitch forward aggressively to begin the flip
    { t: 0.4,  throttle: 0.78, yaw:  0.00, pitch:  0.88, roll:  0.00 },
    { t: 0.65, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching 180° (inverted) — still pitching forward
    { t: 0.9,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // *** DELAY at 180° (fully inverted) — sticks center, dramatic pause ***
    { t: 1.1,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.35, throttle: 0.26, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Resume forward pitch to continue toward 360°
    { t: 1.65, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.95, throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Past 360° (upright again) — continue pitch for the extra 180°
    { t: 2.2,  throttle: 0.80, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    { t: 2.45, throttle: 0.72, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    // At 540° (inverted again) — half-roll out to upright
    { t: 2.65, throttle: 0.38, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.88, throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Upright — throttle punch to catch altitude loss
    { t: 3.05, throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.12 },
    { t: 3.3,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
