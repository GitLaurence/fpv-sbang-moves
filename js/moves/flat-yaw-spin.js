export default {
  id: 'flat-yaw-spin',
  name: 'Flat Yaw Spin',
  level: 'beginner',
  difficulty: 2,
  durationSec: 3.2,
  youtubeId:    'OyZ1iHYVsmQ',
  youtubeStart: 0,
  description: 'Ikumpara ang basic na yaw-only spin (na nagdu-drift papalayo sa gitna) laban sa coordinated na bersyon (na gumagamit ng kaunting counter-roll para manatili sa isang spot). Pundasyon bago ang 360° Yaw Spin at mas advanced na yaw tricks.',
  tips: [
    'Sa basic na version, purong yaw lang — mapapansin mong lumilihis ang drone palayo sa gitna',
    'Sa coordinated na version, magdagdag ng maliit na counter-roll papuntang direksyon ng drift para manatili sa lugar',
    'Panatilihing pantay ang throttle sa buong spin — ang layunin ay yaw control, hindi altitude change',
  ],
  phases: [
    { t: 0.0, label: 'Basic Spin' },
    { t: 1.2, label: 'Drift' },
    { t: 1.7, label: 'Reset' },
    { t: 2.0, label: 'Coordinated' },
    { t: 3.0, label: 'Centered' },
  ],
  keyframes: [
    // Basic yaw-only spin — no counter input, will drift
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.85, pitch:  0.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.65, yaw:  0.85, pitch:  0.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.65, yaw:  0.85, pitch:  0.00, roll:  0.00 },
    // Drift visible — center yaw, observe the offset position
    { t: 1.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Reset to start position
    { t: 1.7,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Coordinated version — yaw plus small counter-roll to hold the spot
    { t: 2.0,  throttle: 0.66, yaw:  0.85, pitch:  0.00, roll: -0.15 },
    { t: 2.4,  throttle: 0.66, yaw:  0.85, pitch:  0.00, roll: -0.15 },
    { t: 2.8,  throttle: 0.66, yaw:  0.85, pitch:  0.00, roll: -0.15 },
    // Centered exit
    { t: 3.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
