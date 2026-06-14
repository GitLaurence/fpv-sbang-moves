export default {
  id: 'barani',
  name: 'Barani',
  level: 'advanced',
  difficulty: 4,
  durationSec: 2.8,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Backflip na may kasamang half-yaw twist sa gitna ng rotation — habang umiikot pabalik ang drone, may dagdag na yaw input na nagpapa-twist sa exit direction. Mas mahirap kaysa plain backflip dahil dalawang axes ang sabay na ginagalaw.',
  tips: [
    'I-establish muna ang pitch-back rotation bago idagdag ang yaw twist',
    'Ang yaw twist ay nasa pinaka-inverted point ng flip — hindi sa start o sa end',
    'I-ease pabalik ang yaw bago kumpletuhin ang rotation para malinis ang exit',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Back' },
    { t: 0.8, label: 'Twist' },
    { t: 1.3, label: 'Rotate' },
    { t: 1.9, label: 'Recover' },
    { t: 2.4, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch back full — begin the backflip rotation, ease throttle slightly
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.45, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // TWIST — add full yaw near the inverted point of the flip
    { t: 0.8,  throttle: 0.40, yaw:  0.85, pitch: -1.00, roll:  0.00 },
    { t: 1.05, throttle: 0.45, yaw:  0.85, pitch: -1.00, roll:  0.00 },
    // Continue rotation — ease yaw, keep pitching through
    { t: 1.3,  throttle: 0.55, yaw:  0.30, pitch: -0.80, roll:  0.00 },
    { t: 1.6,  throttle: 0.65, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    // Recover to level
    { t: 1.9,  throttle: 0.68, yaw:  0.00, pitch: -0.05, roll:  0.00 },
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Exit — settle to cruise
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
