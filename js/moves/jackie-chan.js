export default {
  id: 'jackie-chan',
  name: 'Jackie Chan',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.0,
  youtubeId:    '-1CdCEsg3kU',
  youtubeStart: 0,
  description: 'Pro-level combo: throttle boost → sabay na pitch at roll snap papuntang inverted → dead stop → matalim na yaw kick habang nakabaligtad → roll out pabalik sa upright. Mataas ang difficulty dahil tatlong axes ang sabay-sabay na ginagalaw.',
  tips: [
    'Ang pitch at roll snap ay dapat eksaktong sabay — kahit konting delay, magmumukhang magulo',
    'Ang yaw kick habang inverted ay dapat mabilis at maikli lang — parang isang "hagod"',
    'Mag-commit sa boost bago ang combo — kailangan ng energy para sa magkakasunod na rotation',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Boost' },
    { t: 0.8, label: 'Flip+Roll' },
    { t: 1.3, label: 'Dead Stop' },
    { t: 1.6, label: 'Yaw Kick' },
    { t: 2.4, label: 'Roll Out' },
    { t: 2.8, label: 'Recover' },
  ],
  keyframes: [
    // Entry — level forward flight
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BOOST — full throttle punch
    { t: 0.4,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.6,  throttle: 1.00, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP+ROLL — combined pitch and roll snap to inverted, throttle chop
    { t: 0.8,  throttle: 0.30, yaw:  0.00, pitch:  0.80, roll:  0.80 },
    { t: 1.05, throttle: 0.28, yaw:  0.00, pitch:  0.50, roll:  0.50 },
    // DEAD STOP — fully inverted, sticks centered
    { t: 1.3,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.28, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // YAW KICK — sharp snap yaw while inverted
    { t: 1.6,  throttle: 0.40, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 1.85, throttle: 0.40, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Brief settle
    { t: 2.2,  throttle: 0.42, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // ROLL OUT — 180° roll back to upright
    { t: 2.4,  throttle: 0.45, yaw:  0.00, pitch:  0.00, roll:  1.00 },
    { t: 2.65, throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.50 },
    { t: 2.8,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recover — level flight
    { t: 3.3,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
