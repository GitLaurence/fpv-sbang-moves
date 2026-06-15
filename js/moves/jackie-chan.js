export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Mabilis na combo ng dalawang flick — pitch flip pasulong, dead stop, tapos roll flick papuntang kabilang direksyon — parang "sipa" ang visual na epekto, kaya pinangalanan sa martial-arts snap-kick.',
  tips: [
    'Bawat flick ay full deflection tapos dead stop sa center bago ang susunod na input',
    'Timing ang susi — masyadong mabagal at mawawala ang "snap" na epekto',
    'Magsanay muna sa hiwalay na Pitch Flip at Roll Flick bago pagsamahin sa combo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pitch Flick' },
    { t: 0.9, label: 'Dead Stop' },
    { t: 1.1, label: 'Roll Flick' },
    { t: 1.6, label: 'Recover' },
    { t: 2.3, label: 'Settle' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH FLICK — full forward pitch snap, throttle cut
    { t: 0.4,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.65, throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Dead stop — sticks back to center, brief pause
    { t: 0.9,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.0,  throttle: 0.35, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL FLICK — full roll snap, throttle still cut
    { t: 1.1,  throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 1.35, throttle: 0.32, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    // Recover — roll out, throttle punch to regain altitude
    { t: 1.6,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.30 },
    { t: 1.8,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Settle
    { t: 2.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
