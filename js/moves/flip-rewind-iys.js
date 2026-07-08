export default {
  id: 'flip-rewind-iys',
  name: 'Flip Rewind to IYS',
  level: 'pro',
  difficulty: 5,
  durationSec: 5.0,
  youtubeId:    'rsA_llKYtSE',
  youtubeStart: 0,
  description: 'Mag-flip papuntang inverted, tapos i-"rewind" — bahagyang i-reverse ang pitch pabalik sa unang direksyon habang inverted — bago tuluyang mag-Inverted Yaw Spin. Ang rewind pulse ay dagdag na hesitation na nagpapaganda sa combo bago ang spin.',
  tips: [
    'Ang rewind pulse ay hindi buong flip pabalik — maikli at kontrolado lang, parang "second thought"',
    'Panatilihing steady ang throttle sa buong rewind — ang pitch lang dapat gumagalaw',
    'Mag-simula agad ng IYS pagkatapos mag-center ang rewind — huwag mag-linger',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.3, label: 'Flip Inv' },
    { t: 0.85, label: 'Inverted' },
    { t: 1.0, label: 'Rewind' },
    { t: 1.45, label: 'Center' },
    { t: 1.65, label: 'IYS Start' },
    { t: 3.25, label: 'IYS Done' },
    { t: 3.4, label: 'Flip Up' },
    { t: 3.85, label: 'Recovery' },
  ],
  keyframes: [
    // Entry — level flight
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.2,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip to inverted — pitch snap
    { t: 0.3,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.55, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — settle throttle
    { t: 0.85, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // REWIND — brief reverse pitch pulse while inverted
    { t: 1.0,  throttle: 0.58, yaw:  0.00, pitch: -0.55, roll:  0.00 },
    { t: 1.25, throttle: 0.62, yaw:  0.00, pitch: -0.15, roll:  0.00 },
    // Center — settle back before spin
    { t: 1.45, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // IYS — full yaw spin while inverted
    { t: 1.65, throttle: 0.68, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.0,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.4,  throttle: 0.67, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 2.8,  throttle: 0.70, yaw:  1.00, pitch:  0.00, roll:  0.00 },
    { t: 3.1,  throttle: 0.68, yaw:  0.35, pitch:  0.00, roll:  0.00 },
    { t: 3.25, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright
    { t: 3.4,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 3.62, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — throttle punch
    { t: 3.85, throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.15, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.6,  throttle: 0.63, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
