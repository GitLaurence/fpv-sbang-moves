export default {
  id: 'sideways-rewind',
  name: 'Sideways Rewind',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.4,
  youtubeId:    'JRv6e2CGwMA',
  youtubeStart: 0,
  description: 'I-lock ang drone sa knife-edge (90° roll) papunta sa isang direksyon, tapos mag-snap pabalik sa kabilang knife-edge na may yaw flick — nagmumukhang paatras ang footage kapag panoorin, kaya "rewind" ang tawag. Prerequisite para sa mas advanced na combo tricks.',
  tips: [
    'I-hold nang matagal ang unang knife-edge bago mag-snap — huwag magmadali',
    'Ang yaw flick sa gitna ng reversal ang gumagawa ng "rewind" na ilusyon',
    'Panatilihing mataas ang throttle habang naka-knife-edge para hindi bumaba ang altitude',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Roll to KE' },
    { t: 0.9,  label: 'Hold KE' },
    { t: 2.0,  label: 'Snap Reverse' },
    { t: 2.5,  label: 'Hold KE 2' },
    { t: 3.0,  label: 'Level Out' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Roll into first knife-edge
    { t: 0.4,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.80 },
    { t: 0.65, throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.55 },
    // Hold first knife-edge — yaw maintains heading
    { t: 0.9,  throttle: 0.82, yaw:  0.28, pitch:  0.04, roll:  0.00 },
    { t: 1.3,  throttle: 0.82, yaw:  0.30, pitch:  0.04, roll:  0.00 },
    { t: 1.7,  throttle: 0.82, yaw:  0.28, pitch:  0.03, roll:  0.00 },
    // Snap reverse — sharp yaw flick paired with roll reversal to the opposite knife-edge
    { t: 2.0,  throttle: 0.75, yaw: -0.90, pitch:  0.00, roll: -0.85 },
    { t: 2.15, throttle: 0.78, yaw: -0.30, pitch:  0.00, roll: -0.55 },
    // Hold second knife-edge (opposite side)
    { t: 2.35, throttle: 0.82, yaw: -0.28, pitch:  0.04, roll:  0.00 },
    { t: 2.6,  throttle: 0.82, yaw: -0.28, pitch:  0.03, roll:  0.00 },
    // Roll back to level
    { t: 2.85, throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.60 },
    { t: 3.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    // Level out
    { t: 3.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
