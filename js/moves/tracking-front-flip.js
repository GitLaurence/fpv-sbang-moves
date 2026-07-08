export default {
  id: 'tracking-front-flip',
  name: 'Tracking Front Flip',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.4,
  youtubeId:    'th4Y8HVnG4Q',
  youtubeStart: 0,
  description: 'Forward flip na may kasabay na yaw input, para patuloy na naka-track ang camera sa isang subject o landmark sa buong flip sa halip na dumeretso lang pasulong. Pitch at yaw ay sabay na gumagalaw sa buong rotation.',
  tips: [
    'Pumili ng malinaw na subject bago mag-flip — dito nakatutok ang buong tracking motion',
    'Ang yaw input ay dapat maliit lang at steady — sapat para sundan ang subject, hindi para mag-spin',
    'Mag-add ng throttle sa tuktok ng flip dahil dalawang axis ang gumagalaw sabay, mas mabilis bumagsak ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.3, label: 'Pitch + Track' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.5, label: 'Past Top' },
    { t: 2.0, label: 'Pull Out' },
    { t: 2.5, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — carry speed, subject in frame
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 0.2,  throttle: 0.70, yaw:  0.05, pitch:  0.00, roll: 0.00 },
    // Push pitch forward while yaw tracks the subject
    { t: 0.3,  throttle: 0.78, yaw:  0.35, pitch:  1.00, roll: 0.00 },
    { t: 0.6,  throttle: 0.82, yaw:  0.38, pitch:  1.00, roll: 0.00 },
    // Climbing / approaching inverted — throttle to carry through, yaw still tracking
    { t: 1.0,  throttle: 0.90, yaw:  0.35, pitch:  1.00, roll: 0.00 },
    { t: 1.3,  throttle: 0.82, yaw:  0.30, pitch:  1.00, roll: 0.00 },
    { t: 1.6,  throttle: 0.72, yaw:  0.20, pitch:  0.70, roll: 0.00 },
    // Nose pointing down — ease pitch and yaw, prep exit
    { t: 1.9,  throttle: 0.65, yaw:  0.08, pitch:  0.20, roll: 0.00 },
    // Recovery — back to level flight, subject still centered
    { t: 2.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 2.7,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll: 0.00 },
    { t: 3.4,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll: 0.00 },
  ],
};
