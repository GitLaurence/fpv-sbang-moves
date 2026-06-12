export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Forward pitch flip na may roll habang inverted — parang acrobatic stunt, dito nanggaling ang pangalan. Pinagsasama ang pitch at roll input sa gitna ng flip para sa mas dramatic na rotation.',
  tips: [
    'Simulan ang flip gamit ang pitch forward, tapos idagdag ang roll habang inverted — hindi sabay sa start',
    'I-maintain ang throttle medyo mataas habang inverted para hindi bumagsak ang altitude',
    'I-time ang pag-center ng roll at pitch para tamang oryentasyon ang exit',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch Flip' },
    { t: 0.9, label: 'Inverted Roll' },
    { t: 1.5, label: 'Finish Roll' },
    { t: 2.0, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward to begin the flip
    { t: 0.3,  throttle: 0.55, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — add full roll input for the Jackie Chan rotation
    { t: 0.9,  throttle: 0.75, yaw:  0.00, pitch:  0.50, roll:  1.00 },
    { t: 1.2,  throttle: 0.78, yaw:  0.00, pitch:  0.20, roll:  1.00 },
    // Finish roll, ease pitch back toward level
    { t: 1.5,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 1.8,  throttle: 0.70, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 2.2,  throttle: 0.66, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
