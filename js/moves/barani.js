export default {
  id: 'barani',
  name: 'Barani',
  level: 'intermediate',
  difficulty: 3,
  durationSec: 3.2,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Diagonal na flip — sabay na buong pitch at roll input para mag-rotate sa isang 45° na axis. Parang forward flip at aileron roll na pinagsama sa iisang smooth na rotation.',
  tips: [
    'Pantay na deflection ng pitch at roll — kung hindi pantay, magiging mas flip o mas roll ang labas',
    'Isang tuloy-tuloy na commit lang — huwag hatiin sa dalawang hakbang ang diagonal input',
    'Magdagdag ng throttle habang dumadaan sa gitna ng rotation para hindi bumagsak ang altitude',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.4, label: 'Diagonal In' },
    { t: 1.1, label: 'Midpoint' },
    { t: 1.7, label: 'Past Mid' },
    { t: 2.2, label: 'Roll Out' },
    { t: 2.6, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — carry speed
    { t: 0.0,  throttle: 0.65, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.68, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal snap — equal pitch + roll deflection, single 45° axis
    { t: 0.4,  throttle: 0.80, yaw: 0.00, pitch:  0.75, roll:  0.75 },
    { t: 0.75, throttle: 0.85, yaw: 0.00, pitch:  0.78, roll:  0.78 },
    // Midpoint — passing through inverted-diagonal, throttle burst to hold altitude
    { t: 1.1,  throttle: 0.60, yaw: 0.00, pitch:  0.78, roll:  0.78 },
    { t: 1.45, throttle: 0.52, yaw: 0.00, pitch:  0.72, roll:  0.72 },
    // Continuing rotation past midpoint
    { t: 1.7,  throttle: 0.55, yaw: 0.00, pitch:  0.60, roll:  0.60 },
    // Roll/pitch out — easing toward level as rotation completes
    { t: 2.0,  throttle: 0.62, yaw: 0.00, pitch:  0.30, roll:  0.30 },
    { t: 2.2,  throttle: 0.65, yaw: 0.00, pitch:  0.08, roll:  0.08 },
    // Recovery — level flight
    { t: 2.45, throttle: 0.65, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.9,  throttle: 0.63, yaw: 0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.62, yaw: 0.00, pitch:  0.00, roll:  0.00 },
  ],
};
