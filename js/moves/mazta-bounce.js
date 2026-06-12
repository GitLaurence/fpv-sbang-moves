export default {
  id: 'mazta-bounce',
  name: 'Mazta Bounce',
  level: 'intermediate',
  difficulty: 2,
  durationSec: 2.6,
  youtubeId:    'ytsBfNJUZ7E',
  youtubeStart: 0,
  description: 'Mabilis na double throttle bounce — chop ang throttle, hayaang bahagyang bumagsak, i-catch, tapos uulitin agad para sa pangalawang bounce. Mas mabilis ang tempo kumpara sa regular Stall.',
  tips: [
    'Bahagyang bagsak lang sa bawat cut — hindi kasing tagal ng regular Stall',
    'Panatilihing pantay ang lakas ng dalawang bounce para consistent ang rhythm',
    'Mag-master muna ng regular Stall bago subukan ang double bounce',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Cut 1' },
    { t: 0.7, label: 'Catch 1' },
    { t: 1.2, label: 'Cut 2' },
    { t: 1.6, label: 'Catch 2' },
    { t: 2.2, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — steady hover/cruise
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CUT 1 — instant chop
    { t: 0.3,  throttle: 0.10, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.5,  throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CATCH 1 — quick ramp back up
    { t: 0.7,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.85, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Brief settle before second bounce
    { t: 1.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CUT 2 — instant chop again
    { t: 1.2,  throttle: 0.10, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.4,  throttle: 0.08, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CATCH 2 — quick ramp back up
    { t: 1.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.75, throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 2.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
