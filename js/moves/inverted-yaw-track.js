export default {
  id: 'inverted-yaw-track',
  name: 'Inverted Yaw Track',
  level: 'advanced',
  difficulty: 4,
  durationSec: 5.5,
  youtubeId:    'UpNEeSRyPbQ',
  youtubeStart: 0,
  description: 'Tulad ng Inverted Yaw Spin, pero may patuloy na forward pitch habang umiikot — naglalakbay ang drone sa isang straight line habang umiikot inverted. Mas mahirap kontrolin ang heading dahil pinagsasama ang forward travel at spin.',
  tips: [
    'Master muna ang stationary Inverted Yaw Spin bago idagdag ang forward pitch',
    'Maliit lang ang pitch input — sapat para sa subtle na forward travel, hindi dapat tumakas papalayo',
    'Bantayan ang altitude — ang sustained forward pitch habang inverted ay maaaring magpababa ng taas',
  ],
  phases: [
    { t: 0.0, label: 'Entry' },
    { t: 0.5, label: 'Flip Inv' },
    { t: 1.0, label: 'Inverted' },
    { t: 1.3, label: 'Yaw + Track' },
    { t: 3.8, label: 'Stop Yaw' },
    { t: 4.1, label: 'Flip Up' },
    { t: 4.6, label: 'Recovery' },
  ],
  keyframes: [
    // Level approach
    { t: 0.0,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 0.35, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip to inverted — pitch snap forward, throttle cut
    { t: 0.5,  throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 0.72, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Fully inverted — re-establish throttle, center pitch
    { t: 0.95, throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 1.15, throttle: 0.67, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Begin yaw spin with sustained forward pitch — "tracking" travel
    { t: 1.3,  throttle: 0.68, yaw:  1.00, pitch:  0.30, roll:  0.00 },
    { t: 1.8,  throttle: 0.70, yaw:  1.00, pitch:  0.32, roll:  0.00 },
    { t: 2.2,  throttle: 0.67, yaw:  1.00, pitch:  0.28, roll:  0.00 },
    { t: 2.7,  throttle: 0.70, yaw:  1.00, pitch:  0.32, roll:  0.00 },
    { t: 3.2,  throttle: 0.68, yaw:  1.00, pitch:  0.30, roll:  0.00 },
    { t: 3.6,  throttle: 0.70, yaw:  1.00, pitch:  0.28, roll:  0.00 },
    // Stop yaw and pitch — center sticks
    { t: 3.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.05, throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    // Flip back upright — pitch snap, throttle cut
    { t: 4.15, throttle: 0.28, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    { t: 4.38, throttle: 0.25, yaw:  0.00, pitch:  1.00, roll:  0.00 },
    // Upright — punch throttle to catch any altitude loss
    { t: 4.6,  throttle: 0.75, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 4.9,  throttle: 0.65, yaw:  0.00, pitch:  0.00, roll:  0.00 },
    { t: 5.5,  throttle: 0.62, yaw:  0.00, pitch:  0.00, roll:  0.00 },
  ],
};
