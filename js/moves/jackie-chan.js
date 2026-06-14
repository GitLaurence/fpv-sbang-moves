export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'advanced',
  difficulty: 4,
  durationSec: 2.5,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Diagonal flip — sabay na pitch at roll input para gumawa ng full rotation sa isang diagonal axis, hindi sa purong pitch o roll axis. Kapag tama ang timing, mukhang acrobatic at "pasikat" — kaya ang pangalan.',
  tips: [
    'Pareho ang oras ng pitch at roll input — sabay silang umabot sa full deflection',
    'Panatilihing pareho ang ratio ng dalawang sticks habang umiikot para manatili sa diagonal axis',
    'Maagang i-anticipate ang recovery — ang dalawang axes ay dapat sabay bumalik sa center',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Diagonal In' },
    { t: 0.65, label: 'Full Deflect' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.5, label: 'Rotate Out' },
    { t: 1.9, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Diagonal in — pitch and roll move together toward full deflection
    { t: 0.3,  throttle: 0.70, yaw:  0.00, pitch:  0.65, roll:  0.65 },
    { t: 0.5,  throttle: 0.75, yaw:  0.00, pitch:  0.90, roll:  0.90 },
    // Full deflection — diagonal axis locked in
    { t: 0.65, throttle: 0.80, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Inverted — throttle punch through the top of the diagonal rotation
    { t: 1.0,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 1.2,  throttle: 0.85, yaw:  0.00, pitch:  0.85, roll:  0.85 },
    // Rotate out — both axes ease together back toward level
    { t: 1.5,  throttle: 0.72, yaw:  0.00, pitch:  0.45, roll:  0.45 },
    { t: 1.7,  throttle: 0.66, yaw:  0.00, pitch:  0.15, roll:  0.15 },
    // Recovery — settle to cruise
    { t: 1.9,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 2.5,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
