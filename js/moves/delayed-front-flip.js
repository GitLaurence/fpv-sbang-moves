export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may kasamang "delay" sa inverted position — sa halip na tumitigil sa 180°, nagpapatuloy ng karagdagang kalahating rotasyon (540° kabuuan). Ang "delayed" na paghinto sa inverted ay nagbibigay ng cinematic na hanging effect bago ang huling pagsalto.',
  tips: [
    'Ang sustained na pitch push ay kritikal — tuloy-tuloy ang input sa buong 540°, may brief pause sa inverted',
    'Throttle management: mataas sa entry para sa energy, bagsak sa inverted delay, taas ulit sa exit',
    'Mas mabilis ang approach = mas maraming energy para maayos na makumpleto ang buong rotasyon',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Pitch Fwd' },
    { t: 0.9, label: '180° Inv' },
    { t: 1.4, label: 'Delay Hold' },
    { t: 1.9, label: '360°' },
    { t: 2.5, label: '540° Exit' },
    { t: 3.2, label: 'Recovery' },
  ],
  keyframes: [
    // Approach
    { t: 0.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Front flip initiation — push pitch, solid throttle for sustained arc
    { t: 0.4,  throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // First inverted (180°) — "delay" hold: center pitch, chop throttle
    { t: 0.9,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.1,  throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.35, throttle: 0.25, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Continue pitch forward for remaining 360° (540° total)
    { t: 1.5,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 1.8,  throttle: 0.82, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Approaching 360° mark — nose pointing down toward ground
    { t: 2.05, throttle: 0.38, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    { t: 2.25, throttle: 0.32, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // 540° complete — nose back through level, ramp throttle to exit
    { t: 2.45, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.65, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.0,  throttle: 0.72, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.5,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
