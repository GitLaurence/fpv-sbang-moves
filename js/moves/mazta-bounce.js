export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.0,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Mabilis na pitch-down dive papunta sa malapit na ibabaw, tapos agad na pull-up na parang "bumabagsak" — gumagawa ng bounce na epekto. Mahusay na warm-up trick para sa throttle at pitch control.',
  tips: [
    'I-commit ang dive — full pitch forward na may bahagyang throttle cut para mabilis ang pagbaba',
    'I-time ang pull para "bounce" ang epekto — huwag mag-atubili kapag malapit na sa ibabaw',
    'PUNCH ang throttle kasabay ng pull para tumaas pabalik agad ang drone',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Dive' },
    { t: 1.1, label: 'Bottom' },
    { t: 1.3, label: 'Bounce Pull' },
    { t: 2.0, label: 'Climb' },
    { t: 2.5, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Dive — pitch forward, ease throttle to accelerate downward
    { t: 0.35, throttle: 0.45, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.7,  throttle: 0.40, yaw:  0.00, pitch:  0.90, roll:  0.00 },
    // Bottom of dive — brief hold, low throttle
    { t: 1.1,  throttle: 0.38, yaw:  0.00, pitch:  0.60, roll:  0.00 },
    // BOUNCE — sharp pitch-back pull combined with throttle punch
    { t: 1.3,  throttle: 0.95, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 1.55, throttle: 1.00, yaw:  0.00, pitch: -0.85, roll:  0.00 },
    // Climb out of the bounce
    { t: 2.0,  throttle: 0.85, yaw:  0.00, pitch: -0.30, roll:  0.00 },
    { t: 2.25, throttle: 0.72, yaw:  0.00, pitch: -0.05, roll:  0.00 },
    // Recover — level off
    { t: 2.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
