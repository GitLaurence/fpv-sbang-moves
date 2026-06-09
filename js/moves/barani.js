export default {
  id: 'barani',
  name: 'Barani',
  level: 'pro',
  difficulty: 5,
  durationSec: 3.0,
  youtubeId:    'KiNsSFad3Rg',
  youtubeStart: 0,
  description: 'Front flip (pitch forward) kasabay ng 180° half-twist (roll) — isang galaw na nagbabago ng heading sa 180°. Hango sa gymnastics, ang Barani ay isa sa pinakamagandang "multi-axis" na trick sa FPV freestyle: dalawang axis nang sabay, isang maayos na exit.',
  tips: [
    'Pitch at roll ay SABAY — hindi sunod-sunod; ang timing ng dalawa ang susi sa malinis na Barani',
    'Mag-throttle chop sa flip phase — kapag magsasabay ang pitch at roll, kailangan ng crisp na inputs',
    'Ang exit ay may kaunting pitch pull (pitch back) para maiwasan ang nose-down recovery',
  ],
  phases: [
    { t: 0.0,  label: 'Approach' },
    { t: 0.35, label: 'Entry' },
    { t: 0.55, label: 'Flip+Twist' },
    { t: 1.0,  label: 'Mid-Flip' },
    { t: 1.4,  label: 'Recover' },
    { t: 1.8,  label: 'Exit' },
  ],
  keyframes: [
    { t: 0.0,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.68, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Entry throttle punch
    { t: 0.35, throttle: 0.92, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // BARANI — full pitch forward + full roll simultaneously, cut throttle
    { t: 0.55, throttle: 0.26, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    { t: 0.8,  throttle: 0.22, yaw:  0.00, pitch:  1.00, roll:  1.00 },
    // Mid rotation — maintain combined inputs
    { t: 1.0,  throttle: 0.22, yaw:  0.00, pitch:  0.90, roll:  0.75 },
    // Completing rotation — ease inputs toward center
    { t: 1.2,  throttle: 0.25, yaw:  0.00, pitch:  0.40, roll:  0.30 },
    // Near upright — catch
    { t: 1.4,  throttle: 0.40, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Recovery — slight pitch back to arrest nose-down tendency
    { t: 1.6,  throttle: 0.62, yaw:  0.00, pitch: -0.25, roll:  0.00 },
    { t: 1.85, throttle: 0.68, yaw:  0.00, pitch: -0.08, roll:  0.00 },
    // Exit
    { t: 2.1,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 3.0,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
