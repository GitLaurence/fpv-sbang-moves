export default {
  id: 'delayed-front-flip',
  name: '540° Delayed Front Flip',
  level: 'advanced',
  difficulty: 4,
  durationSec: 4.0,
  youtubeId:    'OGJq7kl8WVs',
  youtubeStart: 0,
  description: 'Forward flip na may "delay" — pagkatapos ng unang 180° (inverted), mag-pause muna bago ipagpatuloy ang rotation papunta sa kabuuang 540° (isa at kalahating loop). Ang delay ang nagpapakita ng tunay na control sa rotation speed.',
  tips: [
    'Ang delay ay nangangahulugan ng pansamantalang pag-center ng pitch habang inverted — hindi tuluy-tuloy ang rotation',
    'Panatilihin ang sapat na throttle habang naka-pause inverted para hindi masyadong bumagsak ang altitude',
    'Pagkatapos ng delay, kailangan ng buong commitment sa pitch input para makumpleto ang natitirang 360°',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.4, label: 'Pitch Fwd' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.6, label: 'Delay' },
    { t: 2.2, label: 'Continue' },
    { t: 3.0, label: 'Complete' },
    { t: 3.5, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level cruise
    { t: 0.0,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Pitch forward — begin the rotation
    { t: 0.4,  throttle: 0.55, yaw:  0.00, pitch:  0.85, roll:  0.00 },
    { t: 0.7,  throttle: 0.40, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Inverted — top of the first half rotation (180°)
    { t: 1.0,  throttle: 0.30, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // DELAY — pitch eased toward center, hold inverted, throttle sustains altitude
    { t: 1.3,  throttle: 0.32, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    { t: 1.6,  throttle: 0.32, yaw:  0.00, pitch:  0.10, roll:  0.00 },
    { t: 1.9,  throttle: 0.30, yaw:  0.00, pitch:  0.15, roll:  0.00 },
    // Continue — resume forward pitch to complete the remaining 360°
    { t: 2.2,  throttle: 0.45, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 2.6,  throttle: 0.70, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Complete — 540° finished, level out
    { t: 3.0,  throttle: 0.78, yaw:  0.00, pitch:  0.40, roll:  0.00 },
    { t: 3.25, throttle: 0.68, yaw:  0.00, pitch:  0.05, roll:  0.00 },
    // Recovery — settle to cruise
    { t: 3.5,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
