export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward flip na hindi tumitigil sa 360° — ipinagpapatuloy hanggang 540°, may "delay" o pause habang inverted bago tapusin ang extra 180°. Mahirap dahil dalawang magkaibang throttle profile ang kailangan sa isang flip.',
  tips: [
    'Sa unang 360°, normal flip lang — pitch forward at maintain throttle',
    'Sa inverted, mag-DELAY — i-hold ang pitch at throttle nang sandali bago ituloy',
    'Ituloy ang extra 180° (papuntang 540°) gamit ang parehong direksyon ng pitch — huwag babaliktad',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Flip 360' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.1, label: 'Delay' },
    { t: 1.7, label: 'Flip 180' },
    { t: 2.15, label: 'Punch' },
    { t: 2.7, label: 'Pull Out' },
    { t: 3.3, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP — first 360°, smooth forward pitch
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.55, throttle: 0.74, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching inverted, full rotation almost complete
    { t: 0.85, throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — hold inverted, ease pitch and throttle, pause the rotation
    { t: 1.1,  throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 1.45, throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    // FLIP 180 — continue the same direction for the extra half-loop
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 1.95, throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // PUNCH — full throttle through the last inverted pass
    { t: 2.15, throttle: 1.00, yaw:  0.00, pitch:  0.95, roll:  0.00 },
    { t: 2.4,  throttle: 1.00, yaw:  0.00, pitch:  0.55, roll:  0.00 },
    // Pull out to level
    { t: 2.7,  throttle: 0.78, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 2.95, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
