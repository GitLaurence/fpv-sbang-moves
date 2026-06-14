export default {
  id: 'pendulum',
  name: 'Pendulum',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'l7F1a68G9r8',
  youtubeStart: 0,
  description: 'Mag-dive pababa, tapos mag-hard pull para mag-arc pataas at pabalik sa kabilang direksyon — parang pendulum na umiindayog. Kailangan ng tamang timing ng pull sa pinakailalim ng dive.',
  tips: [
    'I-build ang speed sa dive — pitch forward at slight throttle cut',
    'I-time ang hard pull sa pinakamabilis na bahagi ng dive para sa malaking arc',
    'Sustained ang pull sa buong swing — huwag i-release hangga\'t hindi tapos ang arc',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.8, label: 'Dive' },
    { t: 1.5, label: 'Pull' },
    { t: 2.5, label: 'Apex' },
    { t: 3.6, label: 'Exit' },
  ],
  keyframes: [
    // Approach — level, slight nose-down setup
    { t: 0.0,  throttle: 0.55, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 0.3,  throttle: 0.50, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // Dive — pitch forward, ease throttle to build speed downward
    { t: 0.8,  throttle: 0.42, yaw:  0.00, pitch:  0.80, roll:  0.00 },
    { t: 1.3,  throttle: 0.40, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Bottom of dive — begin hard pull
    { t: 1.5,  throttle: 0.78, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    // Swinging up and back, inverted near the top of the arc
    { t: 2.0,  throttle: 0.88, yaw:  0.00, pitch: -1.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.75, yaw:  0.00, pitch: -0.90, roll:  0.00 },
    // Coming over the top — exiting toward opposite heading
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch: -0.40, roll:  0.00 },
    { t: 3.6,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle — level, opposite direction
    { t: 4.1,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.58, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
