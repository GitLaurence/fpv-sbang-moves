export default {
  id: 'rapid-lookback-double-roll',
  name: 'Rapid Lookback + Double Roll',
  level: 'advanced',
  difficulty: 3,
  durationSec: 4.5,
  youtubeId:    'XtfDPieZJTI',
  youtubeStart: 0,
  description: 'Mabilis na yaw snap 180° papuntang likod (rapid lookback), tapos dalawang magkasunod na mabagal at kontroladong full roll (slow double roll) sa bagong direksyon. Pagsasama ng snappy yaw control at smooth, sustained roll input.',
  tips: [
    'Gawing mabilis at decisive ang lookback snap — hindi ito ang mabagal na parte',
    'Ang double roll ay dapat mabagal at steady — dalawang magkahiwalay na buong roll, hindi mabilis na spin',
    'Magdagdag ng maliit na throttle burst sa bawat inverted pass ng roll para hindi bumagsak ang altitude',
  ],
  phases: [
    { t: 0.0,  label: 'Entry' },
    { t: 0.4,  label: 'Lookback' },
    { t: 0.8,  label: 'Center' },
    { t: 1.1,  label: 'Roll 1' },
    { t: 2.3,  label: 'Roll 1 Done' },
    { t: 2.6,  label: 'Roll 2' },
    { t: 3.8,  label: 'Roll 2 Done' },
    { t: 4.2,  label: 'Recovery' },
  ],
  keyframes: [
    // Entry — forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Rapid lookback — full yaw snap
    { t: 0.4,  throttle: 0.65, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    { t: 0.62, throttle: 0.65, yaw: -1.00, pitch:  0.00, roll:  0.00 },
    // Center yaw — now facing new direction
    { t: 0.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.95, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Slow Roll #1 — sustained full roll input
    { t: 1.1,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Passing inverted #1 — throttle burst to hold altitude
    { t: 1.75, throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Complete roll #1 — brief center before roll #2
    { t: 2.3,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.05 },
    { t: 2.45, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Slow Roll #2 — repeat
    { t: 2.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Passing inverted #2 — throttle burst
    { t: 3.25, throttle: 0.80, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 3.5,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Roll out to level
    { t: 3.8,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.05 },
    { t: 3.95, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
