export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.5,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Front flip na may extra 180° — isang buong 540° pagpihit sa pitch axis, may dramatic na "delay" (pause) sa gitna ng flip bago tapusin. Ang paghinto sa gitna ang nagbibigay ng style points.',
  tips: [
    'Ang delay ay dapat literal na pause — itigil ang pitch input sa gitnang bahagi ng flip',
    'Mas mahaba ang rotation kaysa regular front flip — 540° hindi lang 360°, kaya i-time nang tama',
    'Panatilihing pantay ang throttle sa buong delay para hindi bumagsak nang malayo',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.35, label: 'Pitch Fwd' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.1, label: 'Delay' },
    { t: 1.9, label: 'Continue' },
    { t: 2.5, label: 'Complete 540' },
    { t: 3.0, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — moderate speed and altitude
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // PITCH FORWARD — begin the flip, first 180°
    { t: 0.35, throttle: 0.62, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.6,  throttle: 0.60, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — continuing rotation, second 180°
    { t: 0.85, throttle: 0.58, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — dramatic pause, sticks center, throttle holds altitude
    { t: 1.1,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.5,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.9,  throttle: 0.55, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // CONTINUE — resume pitch for the final 180° (making 540° total)
    { t: 2.1,  throttle: 0.60, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.35, throttle: 0.62, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    // Complete — nearly level again
    { t: 2.55, throttle: 0.66, yaw:  0.00, pitch:  0.30, roll:  0.00 },
    { t: 2.75, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery
    { t: 3.0,  throttle: 0.64, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.6,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
