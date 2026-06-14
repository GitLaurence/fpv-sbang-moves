export default {
  id: 'delayed-front-flip-540',
  name: '540° Delayed Front Flip',
  level: 'pro',
  difficulty: 5,
  durationSec: 4.5,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may dramatic "delay" sa gitna — i-pause ang rotation halfway (inverted, dead stop) bago tapusin ang natitirang 360°+ para kumpleto sa 540° na pag-ikot. Ang pagka-istilo ay nasa "hang time" sa gitnang pause.',
  tips: [
    'Ang unang 180° ay full pitch forward, normal speed — parang regular front flip',
    'Sa halfway (inverted), CENTER ang lahat ng sticks at chop ang throttle — ito ang "delay" o pause',
    'Pagkatapos ng pause, ipagpatuloy ang pitch forward para kumpletuhin ang 540° (isang buong loop + kalahati)',
  ],
  phases: [
    { t: 0.0, label: 'Approach' },
    { t: 0.35, label: 'Flip Start' },
    { t: 0.9, label: 'Inverted' },
    { t: 1.3, label: 'Delay/Hang' },
    { t: 1.9, label: 'Resume Flip' },
    { t: 2.6, label: 'Complete 540°' },
    { t: 3.2, label: 'Pull Out' },
    { t: 3.8, label: 'Recovery' },
  ],
  keyframes: [
    // Approach — level cruise, carry some speed
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // FLIP START — full pitch forward, first 180°
    { t: 0.35, throttle: 0.75, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.78, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // INVERTED — approaching the halfway point, easing toward center
    { t: 0.9,  throttle: 0.45, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    // DELAY/HANG — dead stop, all sticks centered, throttle cut for the "hang"
    { t: 1.3,  throttle: 0.22, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.6,  throttle: 0.20, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.20, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // RESUME FLIP — continue pitch forward for the remaining 360°
    { t: 2.1,  throttle: 0.85, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.95, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // COMPLETE 540° — full rotation continues, throttle stays high
    { t: 2.6,  throttle: 1.00, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.85, throttle: 0.90, yaw:  0.00, pitch:  0.70, roll:  0.00 },
    // PULL OUT — ease pitch and throttle to level
    { t: 3.2,  throttle: 0.72, yaw:  0.00, pitch:  0.20, roll:  0.00 },
    { t: 3.45, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — settle back to cruise
    { t: 3.8,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
